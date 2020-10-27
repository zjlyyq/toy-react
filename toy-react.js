const RENDER_TO_DOM = Symbol('render_to_dom');

export class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    appendChild(child) {
        // this.root.appendChild(child.root);
        let range = document.createRange();
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length); 
        child[RENDER_TO_DOM](range);
    }

    // 必须实现dom方法
    setAttribute(attr, value) {
        if (attr === 'className') {
            debugger
            this.root.setAttribute('class', value);
            return;
        }
        if ( attr.match(/^on([\s\S]+)/) ) {
            let name = RegExp.$1;
            this.root.addEventListener(name.replace(name[0], name[0].toLowerCase()), value);
            return;
        }
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
        this.children = [];
        this._range = null;
    }

    setAttribute(attr, value) {
        this.props[attr] = value;
    }
    
    appendChild(child) {
        // this.root.appendChild(child.root);
        this.children.push(child);
    }

    [RENDER_TO_DOM](range) {
        this._range = range;
        this.render()[RENDER_TO_DOM](range);
    }

    get root() {
        if (this._root === null) {
            this._root = this.render().root;   // 可能会发生递归
        }
        return this._root;
    }
    // 重新渲染
    rerender() {
        this._range.deleteContents();
        this[RENDER_TO_DOM](this._range);
    }

    setState(newState) {
        if (this.state === null || typeof this.state != 'object') {
            this.state = newState;
            this.rerender();
            return;
        }
        let merge = (oldState, newState) => {
            for (let p in newState) {
                // 注意： typeof null === 'object'
                if (oldState[p] === null || typeof oldState[p] != 'object') {
                    oldState[p] = newState[p];
                }else {
                    merge(oldState[p], newState[p]);
                }
            }
        }
        merge(this.state, newState);
        this.rerender();
    }
}

export function createElement (tagName, attributes, ...children) {
    let dom;
    if (typeof tagName === 'string') {
        dom = new ElementWrapper(tagName);
    }else if (typeof tagName === 'function' || typeof tagName === 'object'){
        dom = new tagName;
    }
    for (let attr in attributes) {
        dom.setAttribute(attr, attributes[attr]);
    }

    function handleChildren(children) {
        for (let child of children) {
            if (child === null) continue;
            if (typeof child === 'object') {
                if (child instanceof Array)
                    handleChildren(child);
                else 
                    dom.appendChild(child);
            }else {
                child = new TextWrapper(child)
                dom.appendChild(child);
            }
        }
    }

    handleChildren(children);
    
    return dom;
}

export function render(component, parentDom) {
    let range = document.createRange();
    range.setStart(parentDom, 0);
    range.setEnd(parentDom, parentDom.childNodes.length);
    range.deleteContents();
    component[RENDER_TO_DOM](range);
}