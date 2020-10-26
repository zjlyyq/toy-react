export class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    // 必须实现dom方法
    setAttribute(attr, value) {
        this.root.setAttribute(attr, value);
    }
}

export class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    
    mountTo(parent) {
        parent.appendChild(this.root);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    // 必须实现dom方法
    setAttribute(attr, value) {
        this.root.setAttribute(attr, value);
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
    parentDom.appendChild(component.root);
}