/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ "./toy-react.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MyConponent = /*#__PURE__*/function (_Component) {
  _inherits(MyConponent, _Component);

  var _super = _createSuper(MyConponent);

  function MyConponent() {
    var _this;

    _classCallCheck(this, MyConponent);

    _this = _super.call(this);
    _this.state = {
      a: 1,
      b: 2
    };
    return _this;
  }

  _createClass(MyConponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      debugger;
      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: "color: pink;font-size:24px;"
      }, this.state.a), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        id: "bt",
        onclick: function onclick() {
          _this2.setState({
            a: _this2.state.a + 1
          });
        }
      }, "add"));
    }
  }]);

  return MyConponent;
}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component);

var domDiv = (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyConponent, {
  "class": "app",
  style: "color: red;text-align:center;"
});
(0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.render)(domDiv, document.body);

var Square = /*#__PURE__*/function (_Component2) {
  _inherits(Square, _Component2);

  var _super2 = _createSuper(Square);

  function Square() {
    _classCallCheck(this, Square);

    return _super2.call(this);
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "square",
        onClick: this.props.onClick
      }, this.props.value);
    }
  }]);

  return Square;
}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component);

var Board = /*#__PURE__*/function (_Component3) {
  _inherits(Board, _Component3);

  var _super3 = _createSuper(Board);

  function Board() {
    _classCallCheck(this, Board);

    return _super3.apply(this, arguments);
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this3 = this;

      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this3.props.onClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component);

var Game = /*#__PURE__*/function (_Component4) {
  _inherits(Game, _Component4);

  var _super4 = _createSuper(Game);

  function Game() {
    var _this4;

    _classCallCheck(this, Game);

    _this4 = _super4.call(this);
    _this4.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this4;
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares);
      var moves = history.map(function (step, move) {
        var desc = move ? 'Go to move #' + move : 'Go to game start';
        return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
          key: move
        }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          onClick: function onClick() {
            return _this5.jumpTo(move);
          }
        }, desc));
      });
      var status;

      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "game"
      }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "game-board"
      }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this5.handleClick(i);
        }
      })), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "game-info"
      }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, status), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, moves)));
    }
  }]);

  return Game;
}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component); // ========================================


var game = (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Game, null); // console.log(game.vdom);
// render(game, document.getElementById("root"));

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! namespace exports */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ElementWrapper [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TextWrapper [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => /* binding */ Component,
/* harmony export */   "ElementWrapper": () => /* binding */ ElementWrapper,
/* harmony export */   "TextWrapper": () => /* binding */ TextWrapper,
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RENDER_TO_DOM = Symbol('render_to_dom');
var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.props = Object.create(null);
    this._root = null;
    this._vdom = null;
    this.children = [];
    this.vchildren = [];
    this._range = null;
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(attr, value) {
      this.props[attr] = value;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.children.push(child);
      this.vchildren.push(child.vdom);
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range; // this.render()[RENDER_TO_DOM](range);
      // 保存旧 vdom

      this._vdom = this.vdom;

      this._vdom[RENDER_TO_DOM](range);
    }
  }, {
    key: "update",
    value: function update() {
      var isSameNode = function isSameNode(oldNode, newNode) {
        if (oldNode.type !== newNode.type) return false;

        for (var attr in newNode.props) {
          if (oldNode.props[attr] !== newNode.props[attr]) return false;
        }

        if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) return false;

        if (newNode.type === '#text') {
          if (newNode.content !== oldNode.content) return false;
        }

        return true;
      };

      var update = function update(oldNode, newNode) {
        // type props children
        if (!isSameNode(oldNode, newNode)) {
          newNode[RENDER_TO_DOM](oldNode._range);
          return;
        }

        newNode._range = oldNode._range;
        var newChildren = newNode.vchildren;
        var oldChildren = oldNode.vchildren;

        for (var i = 0; i < newChildren.length; i++) {
          var newChild = newChildren[i];
          var oldChild = oldChildren[i];

          if (i < oldChildren.length) {
            update(oldChild, newChild);
          } else {// TODO
          }
        }
      };

      var vdom = this.vdom; // 重新生成的vdom树，没有range信息

      update(this._vdom, vdom); // this._vdom = this.vdom;   // 又是一个致命失误

      this._vdom = vdom;
    } // 重新渲染

  }, {
    key: "rerender",
    value: function rerender() {
      this._range.deleteContents();

      this[RENDER_TO_DOM](this._range);
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      if (this.state === null || _typeof(this.state) != 'object') {
        this.state = newState; // this.rerender();

        this.update();
        return;
      }

      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          // 注意： typeof null === 'object'
          if (oldState[p] === null || _typeof(oldState[p]) != 'object') {
            oldState[p] = newState[p];
          } else {
            merge(oldState[p], newState[p]);
          }
        }
      };

      merge(this.state, newState); // this.rerender();

      this.update();
    }
  }, {
    key: "vdom",
    get: function get() {
      // console.log('render')
      // console.log(this);
      return this.render().vdom;
    }
  }]);

  return Component;
}();
var ElementWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ElementWrapper, _Component);

  var _super = _createSuper(ElementWrapper);

  function ElementWrapper(type) {
    var _this;

    _classCallCheck(this, ElementWrapper);

    _this = _super.call(this);
    _this.type = type;
    return _this;
  }

  _createClass(ElementWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range; // vdom => dom
      // let root = document.createElement(this.vdom.type);   //致命失误，千万不能有冗余的vdom访问

      var root = document.createElement(this.type);

      for (var attr in this.props) {
        var value = this.props[attr];

        if (attr === 'className') {
          root.setAttribute('class', value);
          continue;
        }

        if (attr.match(/^on([\s\S]+)/)) {
          var name = RegExp.$1;
          root.addEventListener(name.replace(name[0], name[0].toLowerCase()), value);
          continue;
        }

        root.setAttribute(attr, value);
      }

      var _iterator = _createForOfIteratorHelper(this.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          var _range = document.createRange();

          _range.setStart(root, root.childNodes.length);

          _range.setEnd(root, root.childNodes.length);

          child[RENDER_TO_DOM](_range);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      range.deleteContents();
      range.insertNode(root);
    }
  }, {
    key: "vdom",
    get: function get() {
      // console.log(this);
      return this;
    }
  }]);

  return ElementWrapper;
}(Component);
var TextWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(TextWrapper, _Component2);

  var _super2 = _createSuper(TextWrapper);

  function TextWrapper(content) {
    var _this2;

    _classCallCheck(this, TextWrapper);

    _this2 = _super2.call(this); // this.root = document.createTextNode(content);

    _this2.type = "#text";
    _this2.content = content;
    return _this2;
  }

  _createClass(TextWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range;
      var root = document.createTextNode(this.content);
      range.deleteContents();
      range.insertNode(root);
    }
  }, {
    key: "vdom",
    get: function get() {
      // console.log(this);
      return this;
    }
  }]);

  return TextWrapper;
}(Component);
function createElement(tagName, attributes) {
  var dom;

  if (typeof tagName === 'string') {
    dom = new ElementWrapper(tagName);
  } else if (typeof tagName === 'function' || _typeof(tagName) === 'object') {
    dom = new tagName();
  }

  for (var attr in attributes) {
    dom.setAttribute(attr, attributes[attr]);
  }

  function handleChildren(children) {
    var _iterator2 = _createForOfIteratorHelper(children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;
        if (child === null) continue;

        if (_typeof(child) === 'object') {
          if (child instanceof Array) handleChildren(child);else dom.appendChild(child);
        } else {
          child = new TextWrapper(child);
          dom.appendChild(child);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  handleChildren(children);
  return dom;
}
function render(component, parentDom) {
  var range = document.createRange();
  range.setStart(parentDom, 0);
  range.setEnd(parentDom, parentDom.childNodes.length);
  range.deleteContents();
  component[RENDER_TO_DOM](range);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map