import { createElement, ElementWrapper, TextWrapper, render, Component } from './toy-react';


class MyConponent extends Component{
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        return (
        <div>
            <h1>title</h1>
            <h2>title2</h2>
            <p style="color: pink;font-size:24px;">
                { this.state.a }
            </p>
            <button id = "bt" onclick={() => { this.state.a++;this.rerender();}}>add</button>
            { this.children }
        </div>
        );
    }
    
}

let domDiv = <MyConponent class="app" style="color: red;text-align:center;">
    <p style="font-size:36px;">content</p>
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"></img>
    </MyConponent>

render(domDiv, document.body);