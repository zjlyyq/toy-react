const RENDER_TO_DOM = Symbol('render_to_dom');

export class Component {
    constructor() {
        this.props = Object.create(null);
        this._root = null;
        this._vdom = null;
        this.children = [];
        this.vchildren = [];
        this._range = null;
    }

    setAttribute(attr, value) {
        this.props[attr] = value;
    }
    
    appendChild(child) {
        this.children.push(child);
        this.vchildren.push(child.vdom);
    }

    [RENDER_TO_DOM](range) {
        this._range = range;
        this.render()[RENDER_TO_DOM](range);
    }

    get vdom() {
        if (this._vdom === null) {
            this._vdom = this.render().vdom;
        }
        return this._vdom;
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

export class ElementWrapper extends Component {
    constructor(type) {
        super();
        this.type = type;
    }

    [RENDER_TO_DOM](range) {
        // vdom => dom
        let root = document.createElement(this.vdom.type);
        for (let attr in this.props) {
            let value = this.props[attr];
            if (attr === 'className') {
                root.setAttribute('class', value);
                continue;
            }
            if ( attr.match(/^on([\s\S]+)/) ) {
                let name = RegExp.$1;
                root.addEventListener(name.replace(name[0], name[0].toLowerCase()), value);
                continue;
            }
            root.setAttribute(attr, value);
        }
        for (let child of this.children) {
            let range = document.createRange();
            range.setStart(root, root.childNodes.length);
            range.setEnd(root, root.childNodes.length);
            child[RENDER_TO_DOM](range);
        }
        range.deleteContents();
        range.insertNode(root);
    }

    get vdom() {
        return {
            type: this.type,
            props: this.props,
            children: this.children,
            vchildren: this.vchildren
        }
    }
}

export class TextWrapper extends Component{
    constructor(content) {
        super();
        this.root = document.createTextNode(content);
        this.type = "#text";
        this.content = content;
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }

    get vdom() {
        return {
            type: this.type,
            content: this.content
        }
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