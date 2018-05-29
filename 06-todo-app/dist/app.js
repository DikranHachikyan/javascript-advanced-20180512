/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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

exports.__esModule = true;
var todos_list_1 = __webpack_require__(1);
var app;
(function (app) {
    app.init = function () {
        var $todos = document.getElementById('todos');
        var $input = document.getElementById('todo-input');
        var $addBtn = document.getElementById('add-todo');
        var todoListView = todos_list_1["default"]($todos, 'write 500 words', 'read docs');
        todoListView.render();
        var validateInput = function (value) {
            return typeof value == 'string' && value.trim().length > 0;
        };
        $addBtn.addEventListener('click', function () {
            if (validateInput($input['value'])) {
                todoListView.action('add', $input['value']);
                $input['value'] = '';
            }
        });
        $input.addEventListener('keypress', function (event) {
            //console.log('Event Object:', event);
            if (event['keyCode'] === 13 && validateInput($input['value'])) {
                todoListView.action('add', $input['value']);
                $input['value'] = '';
            }
        });
        console.log('init app');
    };
})(app || (app = {}));
app.init();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var todo_collection_1 = __webpack_require__(2);
var todo_view_1 = __webpack_require__(4);
var todosListView = function ($el) {
    var titleArr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titleArr[_i - 1] = arguments[_i];
    }
    var todoCollection = todo_collection_1["default"].apply(void 0, titleArr);
    var render = function () {
        var $list = todoCollection.get().map(function (todo) {
            return todo_view_1["default"](todo).render();
        }).join('');
        $el.innerHTML = "<ul>" + $list + "</ul>";
        attachEvents();
    };
    var attachEvents = function () {
        var $todos = $el.querySelectorAll('.list-group-item');
        $todos.forEach(function ($todo) {
            var id = parseInt($todo.getAttribute('data-id'));
            var $checkbox = $todo.querySelector('.toggleCompleted');
            var $removeBtn = $todo.querySelector('.remove');
            $checkbox.addEventListener('click', function () {
                console.log('toggle:' + id);
                action('toggleCompleted', id);
            });
            $removeBtn.addEventListener('click', function () {
                console.log('remove:' + id);
                action('remove', id);
            });
        });
    };
    var action = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        todoCollection[type].apply(todoCollection, params);
        render();
    };
    return {
        render: render,
        action: action
    };
};
exports["default"] = todosListView;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var todo_model_1 = __webpack_require__(3);
var todoCollection = function () {
    var titleArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        titleArr[_i] = arguments[_i];
    }
    var collection = titleArr.map(function (title, index) {
        return todo_model_1["default"](index + 1, title);
    });
    var get = function () {
        return collection;
    };
    var add = function (title) {
        var id = collection.length + 1;
        collection = collection.concat([todo_model_1["default"](id, title)]);
    };
    var remove = function (id) {
        collection = collection.filter(function (todo) {
            return todo['id'] !== id;
        });
    };
    var getItemById = function (id) {
        var item;
        collection.forEach(function (todo) {
            if (todo['id'] === id) {
                item = todo;
            }
        });
        return item;
    };
    var toggleCompleted = function (id) {
        collection = collection.map(function (todo) {
            if (todo['id'] == id) {
                return __assign({}, todo, { completed: !todo['completed'] });
            }
            return todo;
        });
    };
    return {
        get: get,
        add: add,
        remove: remove,
        getItemById: getItemById,
        toggleCompleted: toggleCompleted
    };
};
exports["default"] = todoCollection;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var todoModel = function (id, title, completed) {
    if (completed === void 0) { completed = false; }
    return {
        id: id,
        title: title,
        completed: completed
    };
};
exports["default"] = todoModel;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var todoView = function (todo) {
    var render = function () {
        var id = todo.id, title = todo.title, completed = todo.completed;
        var $title = (completed) ? "<del class=\"w-75 text-truncate\" >" + title + "</del>"
            : "<span class=\"w-75 text-truncate\">" + title + "</span>";
        return "<li class=\"list-group-item\" data-id=\"" + id + "\">\n                  <input type=\"checkbox\" class=\"toggleCompleted mr-2\" " + (completed ? "checked" : "") + " />\n                  <button class=\"remove close mr-2 text-danger\">\n                  <span>&times;</span>\n                  </button>\n                  <span>" + $title + "</span>\n                </li>";
    };
    return {
        render: render
    };
};
exports["default"] = todoView;


/***/ })
/******/ ]);