/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Square(props) {
  return React.createElement(
    "button",
    { className: "square", onClick: function onClick() {
        return props.onClick();
      } },
    props.value
  );
}

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i, j) {
      var _this2 = this;

      return React.createElement(Square, { value: this.props.squares[i].squares[j], onClick: function onClick() {
          return _this2.props.onClick(i, j);
        } });
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(0, 0),
          this.renderSquare(0, 1),
          this.renderSquare(0, 2),
          this.renderSquare(1, 0),
          this.renderSquare(1, 1),
          this.renderSquare(1, 2),
          this.renderSquare(2, 0),
          this.renderSquare(2, 1),
          this.renderSquare(2, 2)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(0, 3),
          this.renderSquare(0, 4),
          this.renderSquare(0, 5),
          this.renderSquare(1, 3),
          this.renderSquare(1, 4),
          this.renderSquare(1, 5),
          this.renderSquare(2, 3),
          this.renderSquare(2, 4),
          this.renderSquare(2, 5)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(0, 6),
          this.renderSquare(0, 7),
          this.renderSquare(0, 8),
          this.renderSquare(1, 6),
          this.renderSquare(1, 7),
          this.renderSquare(1, 8),
          this.renderSquare(2, 6),
          this.renderSquare(2, 7),
          this.renderSquare(2, 8)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(3, 0),
          this.renderSquare(3, 1),
          this.renderSquare(3, 2),
          this.renderSquare(4, 0),
          this.renderSquare(4, 1),
          this.renderSquare(4, 2),
          this.renderSquare(5, 0),
          this.renderSquare(5, 1),
          this.renderSquare(5, 2)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(3, 3),
          this.renderSquare(3, 4),
          this.renderSquare(3, 5),
          this.renderSquare(4, 3),
          this.renderSquare(4, 4),
          this.renderSquare(4, 5),
          this.renderSquare(5, 3),
          this.renderSquare(5, 4),
          this.renderSquare(5, 5)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(3, 6),
          this.renderSquare(3, 7),
          this.renderSquare(3, 8),
          this.renderSquare(4, 6),
          this.renderSquare(4, 7),
          this.renderSquare(4, 8),
          this.renderSquare(5, 6),
          this.renderSquare(5, 7),
          this.renderSquare(5, 8)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(6, 0),
          this.renderSquare(6, 1),
          this.renderSquare(6, 2),
          this.renderSquare(7, 0),
          this.renderSquare(7, 1),
          this.renderSquare(7, 2),
          this.renderSquare(8, 0),
          this.renderSquare(8, 1),
          this.renderSquare(8, 2)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(6, 3),
          this.renderSquare(6, 4),
          this.renderSquare(6, 5),
          this.renderSquare(7, 3),
          this.renderSquare(7, 4),
          this.renderSquare(7, 5),
          this.renderSquare(8, 3),
          this.renderSquare(8, 4),
          this.renderSquare(8, 5)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(6, 6),
          this.renderSquare(6, 7),
          this.renderSquare(6, 8),
          this.renderSquare(7, 6),
          this.renderSquare(7, 7),
          this.renderSquare(7, 8),
          this.renderSquare(8, 6),
          this.renderSquare(8, 7),
          this.renderSquare(8, 8)
        )
      );
    }
  }]);

  return Board;
}(React.Component);
//


var Game = React.createClass({
  displayName: "Game",
  getInitialState: function getInitialState() {
    return {
      history: [{
        bigSquare: [{ squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }],
        overallWins: Array(9).fill(null),
        xIsNext: true
      }]
    };
  },
  handleClick: function handleClick(i, j) {
    var history = this.state.history;
    var current = history[history.length - 1];
    var bigSquare = JSON.parse(JSON.stringify(current.bigSquare));
    var squares = bigSquare[i].squares;
    var winner = calculateWinner(squares);
    var overallWins = current.overallWins.slice();
    var overallWinner = calculateWinner(overallWins);
    if (overallWinner || winner || squares[j]) {
      return;
    }

    if (current.xIsNext) {
      squares[j] = 'X';
    } else {
      squares[j] = 'O';
    }

    var winnerAfterChange = calculateWinner(squares);
    if (winnerAfterChange) {
      overallWins[i] = winnerAfterChange;
    }
    this.setState({ history: history.concat([{ bigSquare: bigSquare, xIsNext: !current.xIsNext, overallWins: overallWins }]) });
  },
  handleRetryClick: function handleRetryClick() {
    this.setState(this.getInitialState());
  },
  handleUndoClick: function handleUndoClick() {
    var temphistory = this.state.history;
    var prevState = temphistory.pop();
    this.setState(prevState);
  },
  //


  render: function render() {
    var _this3 = this;

    var history = this.state.history;

    var current = history[history.length - 1];

    var overallWinner = calculateWinner(current.overallWins);

    status = "";
    if (overallWinner) {
      status = 'Winner: ' + overallWinner;
    } else {
      status = 'Next player: ' + (current.xIsNext ? 'X' : 'O');
    }

    return React.createElement(
      "div",
      { className: "game" },
      React.createElement(
        "div",
        { className: "game-board" },
        React.createElement(
          "div",
          null,
          status
        ),
        React.createElement(Board, { squares: current.bigSquare, onClick: function onClick(i, j) {
            return _this3.handleClick(i, j);
          } })
      ),
      React.createElement(
        "div",
        { className: "game-info" },
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.handleRetryClick();
            } },
          "retry"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.handleUndoClick();
            } },
          "undo"
        )
      )
    );
  }
});

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('container'));

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

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map