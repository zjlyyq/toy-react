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
        // this.vchildren.push(child.vdom);
    }

    [RENDER_TO_DOM](range) {
        this._range = range;
        // this.render()[RENDER_TO_DOM](range);
        // 保存旧 vdom
        this._vdom = this.vdom;
        this._vdom[RENDER_TO_DOM](range);
    }

    get vdom() {
        // console.log('render')
        // console.log(this);
        return this.render().vdom;
    }

    update() {
        let isSameNode = (oldNode, newNode) => {
            if (oldNode.type !== newNode.type)
                return false;
            for (let attr in newNode.props) {
                if (oldNode.props[attr] !== newNode.props[attr])
                    return false;
            }
            if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length)
                return false;
            if (newNode.type === '#text') {
                if (newNode.content !== oldNode.content)
                    return false;
            }

            return true;
        }
        let update = (oldNode, newNode) => {
            // type props children
            if (!isSameNode(oldNode, newNode)) {
                newNode[RENDER_TO_DOM](oldNode._range);
                return;
            }
            newNode._range = oldNode._range;

            let newChildren = newNode.vchildren;
            let oldChildren = oldNode.vchildren;

            for(let i = 0;i < newChildren.length;i ++) {
                let newChild = newChildren[i];
                let oldChild = oldChildren[i];
                if (i < oldChildren.length) {
                    update(oldChild, newChild);
                }else {
                    // TODO
                    newNode[RENDER_TO_DOM](oldNode._range);
                }
            }
        }
        let vdom = this.vdom;  // 重新生成的vdom树，没有range信息
        update(this._vdom, vdom);
        // this._vdom = this.vdom;   // 又是一个致命失误
        this._vdom = vdom;
    }

    // 重新渲染
    rerender() {
        this._range.deleteContents();
        this[RENDER_TO_DOM](this._range);
    }

    setState(newState) {
        if (this.state === null || typeof this.state != 'object') {
            this.state = newState;
            // this.rerender();
            this.update();
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
        // this.rerender();
        this.update();
    }
}

export class ElementWrapper extends Component {
    constructor(type) {
        super();
        this.type = type;
    }

    [RENDER_TO_DOM](range) {
        this._range = range;
        // vdom => dom
        // let root = document.createElement(this.vdom.type);   //致命失误，千万不能有冗余的vdom访问
        let root = document.createElement(this.type);
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
        // if (!this.vchildren) {
        //     this.vchildren = this.children.map(child => child.vdom);
        // }
        // 为什么这里用成this.children 就不行 🚫, range 会是空。（this.children可能是Component实例，
        // 调用Component.[RENDER_TO_DOM]会造成冗余的vmod读取(this.render().vdom)，render会造成递归的子节点_range信息置为null）
        for (let child of this.vchildren) {
            let range = document.createRange();
            range.setStart(root, root.childNodes.length);
            range.setEnd(root, root.childNodes.length);
            child[RENDER_TO_DOM](range);
        }
        // range.deleteContents();
        // range.insertNode(root);
        replaceRange(range, root);
    }

    get vdom() {
        // 由于调用了child.vdom，有个实时跟新的效果
        this.vchildren = this.children.map(child => child.vdom);
        // console.log(this);
        return this;
    }
}
function replaceRange (range, node) {
    range.insertNode(node);
    range.setStartAfter(node);
    range.deleteContents();
    range.setStartBefore(node);
    range.setEndAfter(node);
}
export class TextWrapper extends Component{
    constructor(content) {
        super();
        // this.root = document.createTextNode(content);
        this.type = "#text";
        this.content = content;
    }

    [RENDER_TO_DOM](range) {
        this._range = range;
        let root = document.createTextNode(this.content);
        // range.deleteContents();
        // range.insertNode(root);
        replaceRange(range, root);
    }

    get vdom() {
        // console.log(this);
        return this;
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