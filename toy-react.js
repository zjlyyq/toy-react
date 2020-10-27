const RENDER_TO_DOM = Symbol('render_to_dom');

export class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    appendChild(child) {
        this.root.appendChild(child.root);
    }

    // 必须实现dom方法
    setAttribute(attr, value) {
        this.root.setAttribute(attr, value);
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

export class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }


    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}
export class Component {
    constructor() {
        this.props = Object.create(null);
        this._root = null;
    }

    setAttribute(attr, value) {
        this.props[attr] = value;
    }
    
    appendChild(child) {
        let range = document.createRange();
        range.setStart(this.root, 0);
        range.setEnd(this.root, this.root.childNodes.length);
        child[RENDER_TO_DOM](range);
    }

    [RENDER_TO_DOM](range) {
        this.render()[RENDER_TO_DOM](range);
    }

    get root() {
        if (this._root === null) {
            this._root = this.render().root;   // 可能会发生递归
        }
        return this._root;
    }
}
export function createElement (tagName, attributes, ...children) {
    let dom;
    if (typeof tagName === 'string') {
        dom = new ElementWrapper(tagName);
    }else if (typeof tagName === 'function' || typeof tagName === 'object'){
        dom = new tagName
    }
    for (let attr in attributes) {
        dom.setAttribute(attr, attributes[attr]);
    }
    if (children) {
        for (let child of children) {
            if (typeof child === 'string')
                child = new TextWrapper(child)
            dom.appendChild(child);
        }
    }
    return dom;
}

export function render(component, parentDom) {
    // parentDom.appendChild(component.root);
    let range = document.createRange();
    range.setStart(parentDom, 0);
    range.setEnd(parentDom, parentDom.childNodes.length);
    range.deleteContents();
    component[RENDER_TO_DOM](range)
}