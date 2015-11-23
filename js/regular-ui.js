(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * RGUI      Regular UI库
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	exports.Regular = __webpack_require__(1);
	exports.Component = __webpack_require__(2);
	exports.SourceComponent = __webpack_require__(7);
	exports._ = __webpack_require__(4);
	exports.ajax = __webpack_require__(8);
	exports.Dropdown = __webpack_require__(11);
	exports.Menu = __webpack_require__(13);
	exports.Input2 = __webpack_require__(16);
	exports.TextArea2 = __webpack_require__(20);
	exports.NumberInput = __webpack_require__(22);
	exports.Check2 = __webpack_require__(24);
	exports.CheckGroup = __webpack_require__(26);
	exports.Check2Group = __webpack_require__(28);
	exports.RadioGroup = __webpack_require__(30);
	exports.Radio2Group = __webpack_require__(32);
	exports.Select2 = __webpack_require__(34);
	exports.Select2Group = __webpack_require__(36);
	exports.TreeSelect = __webpack_require__(38);
	exports.Suggest = __webpack_require__(43);
	exports.Uploader = __webpack_require__(45);
	exports.DatePicker = __webpack_require__(47);
	exports.TimePicker = __webpack_require__(52);
	exports.DateTimePicker = __webpack_require__(54);
	exports.Progress = __webpack_require__(56);
	exports.Loading = __webpack_require__(58);
	exports.Gotop = __webpack_require__(60);
	exports.Tabs = __webpack_require__(62);
	exports.Collapse = __webpack_require__(64);
	exports.Pager = __webpack_require__(67);
	exports.Notify = __webpack_require__(69);
	exports.Modal = __webpack_require__(71);
	exports.ListView = __webpack_require__(77);
	exports.TreeView = __webpack_require__(40);
	exports.Calendar = __webpack_require__(50);
	exports.Editor = __webpack_require__(79);
	exports.HTMLEditor = __webpack_require__(81);
	exports.MarkEditor = __webpack_require__(83);
	exports.Validation = __webpack_require__(18);
	exports.Draggable = __webpack_require__(74);
	exports.Droppable = __webpack_require__(76);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Component 组件基类
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Regular = __webpack_require__(1);
	var compatibility = __webpack_require__(3);
	var _ = __webpack_require__(4);
	var filter = __webpack_require__(5);
	var directive = __webpack_require__(6);

	/**
	 * @class Component
	 * @extend Regular
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Component = Regular.extend({
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            readonly: false,
	            disabled: false,
	            visible: true,
	            'class': '',
	            console: console
	        });
	        this.supr();
	    },
	    /**
	     * @protected
	     */
	    reset: function() {
	        this.data = {};
	        this.config();
	    }
	})
	.filter(filter)
	.directive(directive);

	module.exports = Component;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var compatibility = {};

	compatibility.isIE8 = navigator.appName === 'Microsoft Internet Explorer' && navigator.appVersion.indexOf('MSIE 8.0') >= 0;

	if (!Object.keys) {
	    Object.keys = (function() {
	        var hasOwnProperty = Object.prototype.hasOwnProperty,
	                hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
	                dontEnums = [
	                    'toString',
	                    'toLocaleString',
	                    'valueOf',
	                    'hasOwnProperty',
	                    'isPrototypeOf',
	                    'propertyIsEnumerable',
	                    'constructor'
	                ],
	                dontEnumsLength = dontEnums.length;

	        return function(obj) {
	            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
	                throw new TypeError('Object.keys called on non-object');
	            }

	            var result = [], prop, i;

	            for (prop in obj) {
	                if (hasOwnProperty.call(obj, prop)) {
	                    result.push(prop);
	                }
	            }

	            if (hasDontEnumBug) {
	                for (i = 0; i < dontEnumsLength; i++) {
	                    if (hasOwnProperty.call(obj, dontEnums[i])) {
	                        result.push(dontEnums[i]);
	                    }
	                }
	            }
	            return result;
	        };
	    }());
	}

	if (!Array.prototype.find) {
	    Array.prototype.find = function(predicate) {
	        if (this === null)
	            throw new TypeError('Array.prototype.find called on null or undefined');

	        if (typeof predicate !== 'function')
	            throw new TypeError('predicate must be a function');

	        var list = Object(this);
	        var length = list.length >>> 0;
	        var thisArg = arguments[1];
	        var value;

	        for (var i = 0; i < length; i++) {
	            value = list[i];
	            if (predicate.call(thisArg, value, i, list))
	                return value;
	        }
	    }
	}


	if(compatibility.isIE8) {
	    compatibility.splitSolved = compatibility.splitSolved || (function(undef) {
	        var nativeSplit = String.prototype.split,
	            compliantExecNpcg = /()??/.exec("")[1] === undef, // NPCG: nonparticipating capturing group
	            self;

	        self = function (str, separator, limit) {
	            // If `separator` is not a regex, use `nativeSplit`
	            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	                return nativeSplit.call(str, separator, limit);
	            }
	            var output = [],
	                flags = (separator.ignoreCase ? "i" : "") +
	                        (separator.multiline  ? "m" : "") +
	                        (separator.extended   ? "x" : "") + // Proposed for ES6
	                        (separator.sticky     ? "y" : ""), // Firefox 3+
	                lastLastIndex = 0,
	                // Make `global` and avoid `lastIndex` issues by working with a copy
	                separator = new RegExp(separator.source, flags + "g"),
	                separator2, match, lastIndex, lastLength;
	            str += ""; // Type-convert
	            if (!compliantExecNpcg) {
	                // Doesn't need flags gy, but they don't hurt
	                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	            }
	            /* Values for `limit`, per the spec:
	             * If undefined: 4294967295 // Math.pow(2, 32) - 1
	             * If 0, Infinity, or NaN: 0
	             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	             * If other: Type-convert, then use the above rules
	             */
	            limit = limit === undef ?
	                -1 >>> 0 : // Math.pow(2, 32) - 1
	                limit >>> 0; // ToUint32(limit)
	            while (match = separator.exec(str)) {
	                // `separator.lastIndex` is not reliable cross-browser
	                lastIndex = match.index + match[0].length;
	                if (lastIndex > lastLastIndex) {
	                    output.push(str.slice(lastLastIndex, match.index));
	                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                    // nonparticipating capturing groups
	                    if (!compliantExecNpcg && match.length > 1) {
	                        match[0].replace(separator2, function () {
	                            for (var i = 1; i < arguments.length - 2; i++) {
	                                if (arguments[i] === undef) {
	                                    match[i] = undef;
	                                }
	                            }
	                        });
	                    }
	                    if (match.length > 1 && match.index < str.length) {
	                        Array.prototype.push.apply(output, match.slice(1));
	                    }
	                    lastLength = match[0].length;
	                    lastLastIndex = lastIndex;
	                    if (output.length >= limit) {
	                        break;
	                    }
	                }
	                if (separator.lastIndex === match.index) {
	                    separator.lastIndex++; // Avoid an infinite loop
	                }
	            }
	            if (lastLastIndex === str.length) {
	                if (lastLength || !separator.test("")) {
	                    output.push("");
	                }
	            } else {
	                output.push(str.slice(lastLastIndex));
	            }
	            return output.length > limit ? output.slice(0, limit) : output;
	        };

	        // For convenience
	        String.prototype.split = function (separator, limit) {
	            return self(this, separator, limit);
	        };

	        return self;
	    }());
	}

	compatibility.StringDate = function(value) {
	    value = value.split(' ');
	    var date = value[0].split('-');
	    var time = value[1] ? value[1].split(':') : [];

	    return new Date(date[0], date[1] - 1, date[2], time[0] || 0, time[1] || 0, time[2] || 0);
	}

	module.exports = compatibility;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Regular = __webpack_require__(1);

	var _ = {
	    noop: Regular.util.noop,
	    dom: Regular.dom,
	    multiline: function(func) {
	        var reg = /^function\s*\(\)\s*\{\s*\/\*+\s*([\s\S]*)\s*\*+\/\s*\}$/;
	        return reg.exec(func)[1];
	    },
	}

	_.extend = function(o1, o2, override, hasOwnProperty) {
	    for(var i in o2)
	        if((!hasOwnProperty || o2.hasOwnProperty(i)) && (override || o1[i] === undefined))
	            o1[i] = o2[i]
	    return o1;
	}


	_.dom.emit = function(elem, eventName, data) {
	    if(elem.dispatchEvent) {
	        var event = new CustomEvent(eventName, {detail: data});
	        elem.dispatchEvent(event);
	    } else {
	        var event = document.createEventObject();
	        event.detail = data;
	        elem.fireEvent('on' + eventName, event);
	    }
	}

	_.dom.getPosition = function(elem) {
	    var doc = elem && elem.ownerDocument,
	        docElem = doc.documentElement,
	        body = doc.body;

	    var box = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { top: 0, left: 0 };

	    var clientTop = docElem.clientTop || body.clientTop || 0,
	        clientLeft = docElem.clientLeft || body.clientLeft || 0;

	    return {top: box.top - clientTop, left: box.left - clientLeft};

	    // var scrollTop = window.pageYOffset || docElem.scrollTop,
	    //     scrollLeft = window.pageXOffset || docElem.scrollLeft;

	    // return {top: box.top + scrollTop - clientTop, left: box.left + scrollLeft - clientLeft}
	}

	_.dom.getOffset = function(elem) {
	    return {width: elem.clientWidth, height: elem.clientHeight}
	}

	_.dom.getDimension = function(elem, fixed) {
	    return _.extend(_.dom.getOffset(elem), _.dom.getPosition(elem, fixed));
	}

	_.dom.isInRect = function(position, dimension) {
	    if(!position || !dimension) return false;

	    return position.left > dimension.left
	        && (position.left < dimension.left + dimension.width)
	        && position.top > dimension.top
	        && (position.top < dimension.top + dimension.height);
	}

	_.dom.once = function(elem, ev, handle) {
	    function real() {
	        handle.apply(this, arguments);
	        _.dom.off(elem, ev, real);
	    }
	    _.dom.on(elem, ev, real);
	}

	module.exports = _;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.format = (function() {
	    function fix(str) {
	        str = '' + (String(str) || '');
	        return str.length <= 1? '0' + str : str;
	    }
	    var maps = {
	        'yyyy': function(date){return date.getFullYear()},
	        'MM': function(date){return fix(date.getMonth() + 1); },
	        'dd': function(date){ return fix(date.getDate()) },
	        'HH': function(date){return fix(date.getHours()) },
	        'mm': function(date){ return fix(date.getMinutes())},
	        'ss': function(date){ return fix(date.getSeconds())}
	    }

	    var trunk = new RegExp(Object.keys(maps).join('|'),'g');
	    return function(value, format){
	        if(!value){return '';}
	        format = format || 'yyyy-MM-dd HH:mm';
	        value = new Date(value);

	        return format.replace(trunk, function(capture){
	            return maps[capture]? maps[capture](value): '';
	        });
	    }
	}());

	exports.average = function(array, key) {
	    array = array || [];
	    return array.length? exports.total(array, key) / array.length : 0;
	}
	exports.total = function(array, key) {
	    var total = 0;
	    if(!array) return;
	    array.forEach(function( item ){
	        total += key? item[key] : item;
	    })
	    return total;
	}

	exports.filter = function(array, filterFn) {
	    if(!array || !array.length) return;
	    return array.filter(function(item, index){
	        return filterFn(item, index);
	    })
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(4);

	exports['z-crt'] = function(elem, value) {
	    if(typeof value === 'object' && value.type == 'expression')
	        this.$watch(value, function(newValue, oldValue) {
	            _.dom[newValue ? 'addClass' : 'delClass'](elem, 'z-crt');
	        });
	    else if(!!value || value === '')
	        _.dom.addClass(elem, 'z-crt');
	}

	exports['z-sel'] = function(elem, value) {
	    if(typeof value === 'object' && value.type == 'expression')
	        this.$watch(value, function(newValue, oldValue) {
	            _.dom[newValue ? 'addClass' : 'delClass'](elem, 'z-sel');
	        });
	    else if(!!value || value === '')
	        _.dom.addClass(elem, 'z-sel');
	}

	exports['z-dis'] = function(elem, value) {
	    if(typeof value === 'object' && value.type == 'expression')
	        this.$watch(value, function(newValue, oldValue) {
	            _.dom[newValue ? 'addClass' : 'delClass'](elem, 'z-dis');
	        });
	    else if(!!value || value === '')
	        _.dom.addClass(elem, 'z-dis');
	}

	exports['r-show'] = function(elem, value) {
	    if(typeof value === 'object' && value.type == 'expression')
	        this.$watch(value, function(newValue, oldValue) {
	            if(!newValue == !oldValue)
	                return;

	            if(typeof newValue === 'string')
	                elem.style.display = newValue;
	            else
	                elem.style.display = newValue ? 'block' : '';
	        });
	    else if(!!value || value === '') {
	        if(typeof value === 'string' && value !== '')
	            elem.style.display = value;
	        else
	            elem.style.display = value ? 'block' : '';
	    }
	}

	exports['r-autofocus'] = function(elem, value) {
	    setTimeout(function() {
	        elem.focus();
	    }, 0);
	}

	exports['r-attr'] = function(elem, value) {
	    var attrs = {
	        'INPUT': ['autocomplete', 'autofocus', 'checked', 'disabled', 'max', 'maxlength', 'min', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type'],
	        'TEXTAREA': ['autofocus', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'wrap'],
	        'SELECT': ['autofocus', 'disabled', 'multiple', 'name', 'required']
	    }

	    this.$watch(value, function(newValue, oldValue) {
	        attrs[elem.tagName].forEach(function(attr) {
	            if(newValue[attr])
	                _.dom.attr(elem, attr, newValue[attr]);
	        });
	    }, true);
	}

	// var dragDropMgr = {
	//     dragData: null,
	//     isDragging: function() {return !!this.dragData}
	// }

	// exports['r-draggable'] = function(elem, value) {
	//     var onMouseDown = function($event) {
	//         $event.preventDefault();

	//         _.dom.on(document.body, 'mousemove', onMouseMove);
	//         _.dom.on(document.body, 'mouseup', onMouseUp);

	//         dragDropMgr.dragData = {
	//             dragging: false,
	//             pageX: $event.pageX,
	//             pageY: $event.pageY,
	//             source: elem,
	//             data: typeof value === 'object' ? this.$get(value) : value,
	//             cancel: cancel
	//         }
	//     }.bind(this);

	//     var onMouseMove = function($event) {
	//         if(!dragDropMgr.dragData)
	//             return;

	//         $event.preventDefault();
	//         if(dragDropMgr.dragData.dragging === false) {
	//             dragDropMgr.dragData.dragging = true;

	//             _.dom.emit(elem, 'dragstart', dragDropMgr.dragData);
	//         } else {
	//             dragDropMgr.dragData.deltaX = $event.pageX - dragDropMgr.dragData.pageX;
	//             dragDropMgr.dragData.deltaY = $event.pageY - dragDropMgr.dragData.pageY;
	//             dragDropMgr.dragData.pageX = $event.pageX;
	//             dragDropMgr.dragData.pageY = $event.pageY;

	//             _.dom.emit(elem, 'drag', dragDropMgr.dragData);
	//         }
	//     }.bind(this);

	//     var onMouseUp = function($event) {
	//         if(!dragDropMgr.dragData)
	//             return;

	//         $event.preventDefault();
	//         _.dom.emit(elem, 'dragend', dragDropMgr.dragData);
	//         cancel();
	//     }.bind(this);

	//     var cancel = function() {
	//         _.dom.on(document.body, 'mousemove', onMouseMove);
	//         _.dom.on(document.body, 'mouseup', onMouseUp);
	//         dragDropMgr.dragData = null;
	//     }

	//     _.dom.on(elem, 'mousedown', onMouseDown);
	// }

	// exports['r-droppable'] = function(elem, value) {
	//     var onMouseEnter = function($event) {
	//         if(!dragDropMgr.dragData || !dragDropMgr.dragData.dragging)
	//             return;

	//         $event.preventDefault();

	//         console.log($event.target);
	//         _.dom.emit(elem, 'dragenter', {
	//             pageX: $event.pageX,
	//             pageY: $event.pageY,
	//             source: elem
	//         });
	//     }.bind(this);

	//     var onMouseOver = function($event) {
	//         if(!dragDropMgr.dragData || !dragDropMgr.dragData.dragging)
	//             return;

	//         $event.preventDefault();
	//         _.dom.emit(elem, 'dragover', {
	//             pageX: $event.pageX,
	//             pageY: $event.pageY,
	//             source: elem
	//         });
	//     }.bind(this);

	//     var onMouseLeave = function($event) {
	//         if(!dragDropMgr.dragData || !dragDropMgr.dragData.dragging)
	//             return;

	//         $event.preventDefault();
	//         _.dom.emit(elem, 'dragleave', {
	//             pageX: $event.pageX,
	//             pageY: $event.pageY,
	//             source: elem
	//         });
	//     }.bind(this);

	//     var onMouseUp = function($event) {
	//         if(!dragDropMgr.dragData || !dragDropMgr.dragData.dragging)
	//             return;

	//         $event.preventDefault();
	//         _.dom.emit(elem, 'drop', dragDropMgr.dragData);
	//     }.bind(this);

	//     _.dom.on(elem, 'mouseenter', onMouseEnter);
	//     _.dom.on(elem, 'mouseover', onMouseOver);
	//     _.dom.on(elem, 'mouseleave', onMouseLeave);
	//     _.dom.on(elem, 'mouseup', onMouseUp);
	// }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * SourceComponent 数据组件基类
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var _ = __webpack_require__(4);

	/**
	 * @class SourceComponent
	 * @extend Component
	 * @param {object[]=[]}             options.data.source              =  数据源
	 * @param {boolean=true}            options.data.updateAuto          => 当有service时，是否自动加载
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var SourceComponent = Component.extend({
	    service: null,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            source: [],
	            updateAuto: true
	        });

	        if(this.data.service)
	            this.service = this.data.service;

	        if(this.service && this.data.updateAuto)
	            this.$updateSource();

	        this.supr();
	    },
	    /**
	     * @method getParams 返回请求时需要的参数
	     * @protected
	     * @deprecated
	     * @return {object} object
	     */
	    getParams: function() {
	        return {};
	    },
	    /**
	     * @method $updateSource() 从service中更新数据源
	     * @public
	     * @deprecated
	     * @return {SourceComponent} this
	     */
	    $updateSource: function() {
	        this.service.getList(this.getParams(), function(result) {
	            this.$update('source', result);
	        }.bind(this));
	        return this;
	    }
	});

	module.exports = SourceComponent;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var reqwest = __webpack_require__(9);
	var ajax = {};
	// var eventEmitter = new require('events').EventEmitter();
	// var ajax = {
	//     $on: eventEmitter.on,
	//     $off: eventEmitter.removeListener,
	//     $emit: eventEmitter.emit
	// };

	// var Notify = require('../module/notify.js');

	ajax.request = function(opt) {
	    var oldError = opt.error,
	        oldSuccess = opt.success,
	        oldComplete = opt.complete;

	    opt.data = opt.data || {};

	    if(!opt.contentType && opt.method && opt.method.toLowerCase() !== 'get')
	        opt.contentType = 'application/json';

	    if(opt.contentType === 'application/json') {
	        opt.data = JSON.stringify(opt.data);
	    }

	    //ajax.$emit('start', opt);
	    opt.success = function(data) {
	        //ajax.$emit('success', data);
	        if(data.code || data.success) {
	            if(data.code != 200 && !data.success) {
	                if(oldError)
	                    oldError(data.error, data.message, data.code);
	                else
	                    ;// Notify.error(data.message);
	            } else
	                oldSuccess && oldSuccess(data.result, data.message, data.code);
	        } else
	            oldSuccess && oldSuccess(data);
	    }

	    opt.error = function(data) {
	        //ajax.$emit('error', data);
	        oldError && oldError(data.result, data);
	    }

	    opt.complete = function(data) {
	        //ajax.$emit('complete', data);
	        oldComplete && oldComplete(data.result, data);
	    }

	    reqwest(opt);
	}

	ajax.get = function(url, success, error) {
	    ajax.request({
	        url: url,
	        method: 'get',
	        success: success,
	        error: error
	    });
	}

	ajax.post = function(url, data, success, error) {
	    ajax.request({
	        url: url,
	        method: 'post',
	        type: 'json',
	        success: success,
	        error: error
	    })
	}

	module.exports = ajax;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Reqwest! A general purpose XHR connection manager
	  * license MIT (c) Dustin Diaz 2015
	  * https://github.com/ded/reqwest
	  */

	!function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	}('reqwest', this, function () {

	  var context = this

	  if ('window' in context) {
	    var doc = document
	      , byTag = 'getElementsByTagName'
	      , head = doc[byTag]('head')[0]
	  } else {
	    var XHR2
	    try {
	      XHR2 = __webpack_require__(10)
	    } catch (ex) {
	      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
	    }
	  }


	  var httpsRe = /^http/
	    , protocolRe = /(^\w+):\/\//
	    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	    , readyState = 'readyState'
	    , contentType = 'Content-Type'
	    , requestedWith = 'X-Requested-With'
	    , uniqid = 0
	    , callbackPrefix = 'reqwest_' + (+new Date())
	    , lastValue // data stored by the most recent JSONP callback
	    , xmlHttpRequest = 'XMLHttpRequest'
	    , xDomainRequest = 'XDomainRequest'
	    , noop = function () {}

	    , isArray = typeof Array.isArray == 'function'
	        ? Array.isArray
	        : function (a) {
	            return a instanceof Array
	          }

	    , defaultHeaders = {
	          'contentType': 'application/x-www-form-urlencoded'
	        , 'requestedWith': xmlHttpRequest
	        , 'accept': {
	              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
	            , 'xml':  'application/xml, text/xml'
	            , 'html': 'text/html'
	            , 'text': 'text/plain'
	            , 'json': 'application/json, text/javascript'
	            , 'js':   'application/javascript, text/javascript'
	          }
	      }

	    , xhr = function(o) {
	        // is it x-domain
	        if (o['crossOrigin'] === true) {
	          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
	          if (xhr && 'withCredentials' in xhr) {
	            return xhr
	          } else if (context[xDomainRequest]) {
	            return new XDomainRequest()
	          } else {
	            throw new Error('Browser does not support cross-origin requests')
	          }
	        } else if (context[xmlHttpRequest]) {
	          return new XMLHttpRequest()
	        } else if (XHR2) {
	          return new XHR2()
	        } else {
	          return new ActiveXObject('Microsoft.XMLHTTP')
	        }
	      }
	    , globalSetupOptions = {
	        dataFilter: function (data) {
	          return data
	        }
	      }

	  function succeed(r) {
	    var protocol = protocolRe.exec(r.url)
	    protocol = (protocol && protocol[1]) || context.location.protocol
	    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
	  }

	  function handleReadyState(r, success, error) {
	    return function () {
	      // use _aborted to mitigate against IE err c00c023f
	      // (can't read props on aborted request objects)
	      if (r._aborted) return error(r.request)
	      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
	      if (r.request && r.request[readyState] == 4) {
	        r.request.onreadystatechange = noop
	        if (succeed(r)) success(r.request)
	        else
	          error(r.request)
	      }
	    }
	  }

	  function setHeaders(http, o) {
	    var headers = o['headers'] || {}
	      , h

	    headers['Accept'] = headers['Accept']
	      || defaultHeaders['accept'][o['type']]
	      || defaultHeaders['accept']['*']

	    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
	    // breaks cross-origin requests with legacy browsers
	    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
	    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
	    for (h in headers)
	      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
	  }

	  function setCredentials(http, o) {
	    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
	      http.withCredentials = !!o['withCredentials']
	    }
	  }

	  function generalCallback(data) {
	    lastValue = data
	  }

	  function urlappend (url, s) {
	    return url + (/\?/.test(url) ? '&' : '?') + s
	  }

	  function handleJsonp(o, fn, err, url) {
	    var reqId = uniqid++
	      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
	      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
	      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
	      , match = url.match(cbreg)
	      , script = doc.createElement('script')
	      , loaded = 0
	      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

	    if (match) {
	      if (match[3] === '?') {
	        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
	      } else {
	        cbval = match[3] // provided callback func name
	      }
	    } else {
	      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
	    }

	    context[cbval] = generalCallback

	    script.type = 'text/javascript'
	    script.src = url
	    script.async = true
	    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
	      // need this for IE due to out-of-order onreadystatechange(), binding script
	      // execution to an event listener gives us control over when the script
	      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	      script.htmlFor = script.id = '_reqwest_' + reqId
	    }

	    script.onload = script.onreadystatechange = function () {
	      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
	        return false
	      }
	      script.onload = script.onreadystatechange = null
	      script.onclick && script.onclick()
	      // Call the user callback with the last value stored and clean up values and scripts.
	      fn(lastValue)
	      lastValue = undefined
	      head.removeChild(script)
	      loaded = 1
	    }

	    // Add the script to the DOM head
	    head.appendChild(script)

	    // Enable JSONP timeout
	    return {
	      abort: function () {
	        script.onload = script.onreadystatechange = null
	        err({}, 'Request is aborted: timeout', {})
	        lastValue = undefined
	        head.removeChild(script)
	        loaded = 1
	      }
	    }
	  }

	  function getRequest(fn, err) {
	    var o = this.o
	      , method = (o['method'] || 'GET').toUpperCase()
	      , url = typeof o === 'string' ? o : o['url']
	      // convert non-string objects to query-string form unless o['processData'] is false
	      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
	        ? reqwest.toQueryString(o['data'])
	        : (o['data'] || null)
	      , http
	      , sendWait = false

	    // if we're working on a GET request and we have data then we should append
	    // query string to end of URL and not post data
	    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
	      url = urlappend(url, data)
	      data = null
	    }

	    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

	    // get the xhr from the factory if passed
	    // if the factory returns null, fall-back to ours
	    http = (o.xhr && o.xhr(o)) || xhr(o)

	    http.open(method, url, o['async'] === false ? false : true)
	    setHeaders(http, o)
	    setCredentials(http, o)
	    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
	        http.onload = fn
	        http.onerror = err
	        // NOTE: see
	        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
	        http.onprogress = function() {}
	        sendWait = true
	    } else {
	      http.onreadystatechange = handleReadyState(this, fn, err)
	    }
	    o['before'] && o['before'](http)
	    if (sendWait) {
	      setTimeout(function () {
	        http.send(data)
	      }, 200)
	    } else {
	      http.send(data)
	    }
	    return http
	  }

	  function Reqwest(o, fn) {
	    this.o = o
	    this.fn = fn

	    init.apply(this, arguments)
	  }

	  function setType(header) {
	    // json, javascript, text/plain, text/html, xml
	    if (header === null) return undefined; //In case of no content-type.
	    if (header.match('json')) return 'json'
	    if (header.match('javascript')) return 'js'
	    if (header.match('text')) return 'html'
	    if (header.match('xml')) return 'xml'
	  }

	  function init(o, fn) {

	    this.url = typeof o == 'string' ? o : o['url']
	    this.timeout = null

	    // whether request has been fulfilled for purpose
	    // of tracking the Promises
	    this._fulfilled = false
	    // success handlers
	    this._successHandler = function(){}
	    this._fulfillmentHandlers = []
	    // error handlers
	    this._errorHandlers = []
	    // complete (both success and fail) handlers
	    this._completeHandlers = []
	    this._erred = false
	    this._responseArgs = {}

	    var self = this

	    fn = fn || function () {}

	    if (o['timeout']) {
	      this.timeout = setTimeout(function () {
	        timedOut()
	      }, o['timeout'])
	    }

	    if (o['success']) {
	      this._successHandler = function () {
	        o['success'].apply(o, arguments)
	      }
	    }

	    if (o['error']) {
	      this._errorHandlers.push(function () {
	        o['error'].apply(o, arguments)
	      })
	    }

	    if (o['complete']) {
	      this._completeHandlers.push(function () {
	        o['complete'].apply(o, arguments)
	      })
	    }

	    function complete (resp) {
	      o['timeout'] && clearTimeout(self.timeout)
	      self.timeout = null
	      while (self._completeHandlers.length > 0) {
	        self._completeHandlers.shift()(resp)
	      }
	    }

	    function success (resp) {
	      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
	      resp = (type !== 'jsonp') ? self.request : resp
	      // use global data filter on response text
	      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
	        , r = filteredResponse
	      try {
	        resp.responseText = r
	      } catch (e) {
	        // can't assign this in IE<=8, just ignore
	      }
	      if (r) {
	        switch (type) {
	        case 'json':
	          try {
	            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
	          } catch (err) {
	            return error(resp, 'Could not parse JSON in response', err)
	          }
	          break
	        case 'js':
	          resp = eval(r)
	          break
	        case 'html':
	          resp = r
	          break
	        case 'xml':
	          resp = resp.responseXML
	              && resp.responseXML.parseError // IE trololo
	              && resp.responseXML.parseError.errorCode
	              && resp.responseXML.parseError.reason
	            ? null
	            : resp.responseXML
	          break
	        }
	      }

	      self._responseArgs.resp = resp
	      self._fulfilled = true
	      fn(resp)
	      self._successHandler(resp)
	      while (self._fulfillmentHandlers.length > 0) {
	        resp = self._fulfillmentHandlers.shift()(resp)
	      }

	      complete(resp)
	    }

	    function timedOut() {
	      self._timedOut = true
	      self.request.abort()
	    }

	    function error(resp, msg, t) {
	      resp = self.request
	      self._responseArgs.resp = resp
	      self._responseArgs.msg = msg
	      self._responseArgs.t = t
	      self._erred = true
	      while (self._errorHandlers.length > 0) {
	        self._errorHandlers.shift()(resp, msg, t)
	      }
	      complete(resp)
	    }

	    this.request = getRequest.call(this, success, error)
	  }

	  Reqwest.prototype = {
	    abort: function () {
	      this._aborted = true
	      this.request.abort()
	    }

	  , retry: function () {
	      init.call(this, this.o, this.fn)
	    }

	    /**
	     * Small deviation from the Promises A CommonJs specification
	     * http://wiki.commonjs.org/wiki/Promises/A
	     */

	    /**
	     * `then` will execute upon successful requests
	     */
	  , then: function (success, fail) {
	      success = success || function () {}
	      fail = fail || function () {}
	      if (this._fulfilled) {
	        this._responseArgs.resp = success(this._responseArgs.resp)
	      } else if (this._erred) {
	        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._fulfillmentHandlers.push(success)
	        this._errorHandlers.push(fail)
	      }
	      return this
	    }

	    /**
	     * `always` will execute whether the request succeeds or fails
	     */
	  , always: function (fn) {
	      if (this._fulfilled || this._erred) {
	        fn(this._responseArgs.resp)
	      } else {
	        this._completeHandlers.push(fn)
	      }
	      return this
	    }

	    /**
	     * `fail` will execute when the request fails
	     */
	  , fail: function (fn) {
	      if (this._erred) {
	        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._errorHandlers.push(fn)
	      }
	      return this
	    }
	  , 'catch': function (fn) {
	      return this.fail(fn)
	    }
	  }

	  function reqwest(o, fn) {
	    return new Reqwest(o, fn)
	  }

	  // normalize newline variants according to spec -> CRLF
	  function normalize(s) {
	    return s ? s.replace(/\r?\n/g, '\r\n') : ''
	  }

	  function serial(el, cb) {
	    var n = el.name
	      , t = el.tagName.toLowerCase()
	      , optCb = function (o) {
	          // IE gives value="" even where there is no value attribute
	          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
	          if (o && !o['disabled'])
	            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
	        }
	      , ch, ra, val, i

	    // don't serialize elements that are disabled or without a name
	    if (el.disabled || !n) return

	    switch (t) {
	    case 'input':
	      if (!/reset|button|image|file/i.test(el.type)) {
	        ch = /checkbox/i.test(el.type)
	        ra = /radio/i.test(el.type)
	        val = el.value
	        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
	        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
	      }
	      break
	    case 'textarea':
	      cb(n, normalize(el.value))
	      break
	    case 'select':
	      if (el.type.toLowerCase() === 'select-one') {
	        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
	      } else {
	        for (i = 0; el.length && i < el.length; i++) {
	          el.options[i].selected && optCb(el.options[i])
	        }
	      }
	      break
	    }
	  }

	  // collect up all form elements found from the passed argument elements all
	  // the way down to child elements; pass a '<form>' or form fields.
	  // called with 'this'=callback to use for serial() on each element
	  function eachFormElement() {
	    var cb = this
	      , e, i
	      , serializeSubtags = function (e, tags) {
	          var i, j, fa
	          for (i = 0; i < tags.length; i++) {
	            fa = e[byTag](tags[i])
	            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
	          }
	        }

	    for (i = 0; i < arguments.length; i++) {
	      e = arguments[i]
	      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
	      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
	    }
	  }

	  // standard query string style serialization
	  function serializeQueryString() {
	    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
	  }

	  // { 'name': 'value', ... } style serialization
	  function serializeHash() {
	    var hash = {}
	    eachFormElement.apply(function (name, value) {
	      if (name in hash) {
	        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
	        hash[name].push(value)
	      } else hash[name] = value
	    }, arguments)
	    return hash
	  }

	  // [ { name: 'name', value: 'value' }, ... ] style serialization
	  reqwest.serializeArray = function () {
	    var arr = []
	    eachFormElement.apply(function (name, value) {
	      arr.push({name: name, value: value})
	    }, arguments)
	    return arr
	  }

	  reqwest.serialize = function () {
	    if (arguments.length === 0) return ''
	    var opt, fn
	      , args = Array.prototype.slice.call(arguments, 0)

	    opt = args.pop()
	    opt && opt.nodeType && args.push(opt) && (opt = null)
	    opt && (opt = opt.type)

	    if (opt == 'map') fn = serializeHash
	    else if (opt == 'array') fn = reqwest.serializeArray
	    else fn = serializeQueryString

	    return fn.apply(null, args)
	  }

	  reqwest.toQueryString = function (o, trad) {
	    var prefix, i
	      , traditional = trad || false
	      , s = []
	      , enc = encodeURIComponent
	      , add = function (key, value) {
	          // If value is a function, invoke it and return its value
	          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
	          s[s.length] = enc(key) + '=' + enc(value)
	        }
	    // If an array was passed in, assume that it is an array of form elements.
	    if (isArray(o)) {
	      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
	    } else {
	      // If traditional, encode the "old" way (the way 1.3.2 or older
	      // did it), otherwise encode params recursively.
	      for (prefix in o) {
	        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
	      }
	    }

	    // spaces should be + according to spec
	    return s.join('&').replace(/%20/g, '+')
	  }

	  function buildParams(prefix, obj, traditional, add) {
	    var name, i, v
	      , rbracket = /\[\]$/

	    if (isArray(obj)) {
	      // Serialize array item.
	      for (i = 0; obj && i < obj.length; i++) {
	        v = obj[i]
	        if (traditional || rbracket.test(prefix)) {
	          // Treat each array item as a scalar.
	          add(prefix, v)
	        } else {
	          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
	        }
	      }
	    } else if (obj && obj.toString() === '[object Object]') {
	      // Serialize object item.
	      for (name in obj) {
	        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
	      }

	    } else {
	      // Serialize scalar item.
	      add(prefix, obj)
	    }
	  }

	  reqwest.getcallbackPrefix = function () {
	    return callbackPrefix
	  }

	  // jQuery and Zepto compatibility, differences can be remapped here so you can call
	  // .ajax.compat(options, callback)
	  reqwest.compat = function (o, fn) {
	    if (o) {
	      o['type'] && (o['method'] = o['type']) && delete o['type']
	      o['dataType'] && (o['type'] = o['dataType'])
	      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
	      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
	    }
	    return new Reqwest(o, fn)
	  }

	  reqwest.ajaxSetup = function (options) {
	    options = options || {}
	    for (var k in options) {
	      globalSetupOptions[k] = options[k]
	    }
	  }

	  return reqwest
	});


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Dropdown  下拉菜单
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var SourceComponent = __webpack_require__(7);
	var template = __webpack_require__(12);
	var _ = __webpack_require__(4);

	/**
	 * @class Dropdown
	 * @extend SourceComponent
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.title               => 按钮文字
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {boolean=false}           options.data.source[].disabled   => 禁用此项
	 * @param {boolean=false}           options.data.source[].divider    => 设置此项分隔线
	 * @param {string=null}             options.data.itemTemplate       @=> 单项模板
	 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Dropdown = SourceComponent.extend({
	    name: 'dropdown',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            itemTemplate: null,
	            open: false
	        });
	        this.supr();
	    },
	    /**
	     * @method toggle(open) 在展开/收起状态之间切换
	     * @public
	     * @param  {boolean} open 展开/收起
	     * @return {void}
	     */
	    toggle: function(open) {
	        if(this.data.disabled)
	            return;
	        
	        this.data.open = open;

	        // 根据状态在Dropdown.opens列表中添加/删除管理项
	        var index = Dropdown.opens.indexOf(this);
	        if(open && index < 0)
	            Dropdown.opens.push(this);
	        else if(!open && index >= 0)
	            Dropdown.opens.splice(index, 1);

	        /**
	         * @event toggle  展开/收起时触发
	         * @property {object} open 展开/收起状态
	         */
	        this.$emit('toggle', {
	            open: open
	        });
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.disabled || (item && (item.disabled || item.divider)))
	            return;

	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });

	        this.toggle(false);
	    }
	});

	// 处理点击dropdown之外的地方后的收起事件。
	Dropdown.opens = [];

	_.dom.on(document.body, 'click', function(e) {
	    Dropdown.opens.forEach(function(dropdown, index) {
	        // for IE8
	        if(!dropdown)
	            return;

	        // 如果已经被销毁，刚从列表中移除
	        if(!dropdown.$refs)
	            return Dropdown.opens.splice(index, 1);

	        // 这个地方不能用stopPropagation来处理，因为展开一个dropdown的同时要收起其他dropdown
	        var element = dropdown.$refs.element;
	        var element2 = e.target;
	        while(element2) {
	            if(element == element2)
	                return;
	            element2 = element2.parentElement;
	        }
	        dropdown.toggle(false);
	        dropdown.$update();
	    });
	});

	module.exports = Dropdown;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" on-click={this.toggle(!open)}>\n        {#if this.$body}\n            {#inc this.$body}\n        {#else}\n            <a class=\"u-btn\" title={title || '下拉菜单'}>{title || '下拉菜单'} <i class=\"u-icon u-icon-caret-down\"></i></a>\n        {/if}\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <ul class=\"m-listview\">\n            {#list source as item}\n            <li title={item.name} r-class={ {'dropdown_divider': item.divider} } z-dis={item.disabled} on-click={this.select(item)}>{#if @(itemTemplate)}{#inc @(itemTemplate)}{#else}{item.name}{/if}</li>\n            {/list}\n        </ul>\n    </div>\n</div>"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Menu      多级菜单
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Dropdown = __webpack_require__(11);
	var SourceComponent = __webpack_require__(7);
	var template = __webpack_require__(14);
	var hierarchicalTemplate = __webpack_require__(15);
	var _ = __webpack_require__(4);

	/**
	 * @class  Menu
	 * @extend Dropdown
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.title               => 按钮文字
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {boolean=false}           options.data.source[].disabled   => 禁用此项
	 * @param {boolean=false}           options.data.source[].divider    => 设置此项分隔线
	 * @param {string=null}             options.data.itemTemplate       @=> 单项模板
	 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Menu = Dropdown.extend({
	    name: 'menu',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            open: false
	        });
	        this.supr();

	        this.$ancestor = this;
	    }
	});

	var MenuList = SourceComponent.extend({
	    name: 'menuList',
	    template: hierarchicalTemplate,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            itemTemplate: null,
	            // visible: false
	        });
	        this.supr();

	        this.$ancestor = this.$parent.$ancestor;
	        this.service = this.$ancestor.service;
	        this.data.itemTemplate = this.$ancestor.data.itemTemplate;
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @private
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.$ancestor.data.disabled || item.disabled || item.divider)
	            return;

	        this.$ancestor.select(item);
	    },
	    /**
	     * @method toggle(item) 展开或收起某一项
	     * @private
	     * @param  {object} item 展开收起项
	     * @return {void}
	     */
	    toggle: function(item) {
	        if(this.$ancestor.data.disabled)
	            return;

	        item.open = !item.open;

	        /**
	         * @event toggle 展开或收起某一项时触发
	         * @private
	         * @property {object} item 展开收起项
	         * @property {boolean} open 展开还是收起
	         */
	        this.$ancestor.$emit('toggle', {
	            item: item,
	            open: item.open
	        });
	    }
	})

	module.exports = Menu;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-menu {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" on-click={this.toggle(!open)}>\n        {#if this.$body}\n            {#inc this.$body}\n        {#else}\n            <a class=\"u-btn\" title={title || '下拉菜单'}>{title || '多级菜单'} <i class=\"u-icon u-icon-caret-down\"></i></a>\n        {/if}\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <menuList source={source} visible />\n    </div>\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"m-listview menu_list\" r-hide={!visible}>\n    {#list source as item}\n    <li z-dis={item.disabled} r-class={ {'dropdown_divider': item.divider} }>\n        <div class=\"menu_item\">\n            {#if item.childrenCount || (item.children && item.children.length)}\n            <i class=\"u-icon u-icon-caret-right\"></i>\n            {/if}\n            <div class=\"menu_itemname\" title={item.name} on-click={this.select(item)}>{#if @(itemTemplate)}{#inc @(itemTemplate)}{#else}{item.name}{/if}</div>\n        </div>\n        {#if item.childrenCount || (item.children && item.children.length)}<menuList source={item.children} visible={item.open} parent={item} />{/if}\n    </li>\n    {/list}\n</ul>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Input2   输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Component = __webpack_require__(2);
	var template = __webpack_require__(17);
	var _ = __webpack_require__(4);
	var Validation = __webpack_require__(18);

	/**
	 * @class Input2
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.value              <=> 文本框的值
	 * @param {string=''}               options.data.type                => 文本框的类型
	 * @param {string=''}               options.data.placeholder         => 占位符
	 * @param {string=''}               options.data.state              <=> 文本框的状态
	 * @param {number}                  options.data.maxlength           => 文本框的最大长度
	 * @param {string=''}               options.data.unit                => 单位
	 * @param {object[]=[]}             options.data.rules               => 验证规则
	 * @param {boolean=false}           options.data.validating          => 是否实时验证
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Input2 = Component.extend({
	    name: 'input2',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            value: '',
	            type: '',
	            placeholder: '',
	            state: '',
	            maxlength: undefined,
	            unit: '',
	            rules: [],
	            validating: false,
	            autofocus: false
	        });
	        this.supr();

	        var $outer = this.$outer;
	        if($outer && $outer instanceof Validation) {
	            $outer.controls.push(this);

	            this.$on('destroy', function() {
	                var index = $outer.controls.indexOf(this);
	                $outer.controls.splice(index, 1);
	            });
	        }
	    },
	    /**
	     * @method validate() 根据`rules`验证组件的值是否正确
	     * @public
	     * @return {object} result 结果
	     */
	    validate: function() {
	        var value = this.data.value;
	        var rules = this.data.rules;
	        var result = Validation.validate(value, rules);
	        
	        this.data.state = result.success ? 'success' : 'error';
	        this.data.tip = result.message;

	        return result;
	    }
	});

	module.exports = Input2;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-input2 {class}\" r-hide={!visible}>\n    <input class=\"u-input u-input-{state} u-input-{size} u-input-{width}\"\n        type={type} placeholder={placeholder} maxlength={maxlength} autofocus={autofocus} readonly={readonly} disabled={disabled}\n        r-model={value} on-change=\"change\" {#if validating}on-keyup={this.validate(value, rules)}{/if}>\n    {#if unit}<span class=\"input2_unit\">{unit}</span>{/if}\n</label>\n{#if tip}<span class=\"u-tip u-tip-{state}\">{tip}</span>{/if}"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Validation  表单验证
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var validator = __webpack_require__(19);

	/**
	 * @class Validation
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.disabled            => 是否禁用。当禁用时验证始终通过。
	 */
	var Validation = Component.extend({
	    name: 'validation',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     */
	    config: function() {
	        this.controls = [];

	        _.extend(this.data, {});
	        this.supr();
	    },
	    /**
	     * @method validate() 验证所有表单组件
	     * @public
	     * @return {object} conclusion 结论
	     */
	    validate: function() {
	        if(this.data.disabled)
	            return {
	                success: true,
	                message: 'Validation is disabled.'
	            }

	        var conclusion = {
	            results: [],
	            success: true,
	            message: ''
	        };

	        this.controls.forEach(function(control) {
	            var result = control.validate();
	            conclusion.results.push(result);
	            if(!result.success) {
	                conclusion.success = false;
	                conclusion.message = conclusion.message || result.message;
	            }
	        });

	        return conclusion;
	    }
	});

	Validation.validate = function(value, rules) {
	    var result = {
	        success: true,
	        message: ''
	    }

	    rules.forEach(function(rule) {
	        rule.success = true;

	        if(rule.type === 'is')
	            rule.success = rule.reg.test(value);
	        else if(rule.type === 'isRequired')
	            rule.success = !!validator.toString(value);
	        else if(rule.type === 'isFilled')
	            rule.success = !!validator.toString(value).trim();
	        else if(rule.type === 'isEmail')
	            rule.success = validator.isEmail(value);
	        else if(rule.type === 'isMobilePhone')
	            rule.success = validator.isMobilePhone(value, 'zh-CN');
	        else if(rule.type === 'isURL')
	            rule.success = validator.isURL(value);
	        else if(rule.type === 'isNumber')
	            rule.success = validator.isInt(value);
	        else if(rule.type === 'isInt')
	            rule.success = validator.isInt(value);
	        else if(rule.type === 'isFloat')
	            rule.success = validator.isFloat(value);
	        else if(rule.type === 'isLength')
	            rule.success = validator.isLength(value, rule.min, rule.max);
	        else
	            rule.success = rule.method(value);

	        if(!rule.success && result.success) {
	            result.success = false;
	            result.message = rule.message;
	        }
	    });

	    return result;
	}

	module.exports = Validation;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright (c) 2015 Chris O'Hara <cohara87@gmail.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */

	(function (name, definition) {
	    if (true) {
	        module.exports = definition();
	    } else if (typeof define === 'function' && typeof define.amd === 'object') {
	        define(definition);
	    } else if (typeof define === 'function' && typeof define.petal === 'object') {
	        define(name, [], definition);
	    } else {
	        this[name] = definition();
	    }
	})('validator', function (validator) {

	    'use strict';

	    validator = { version: '4.3.0' };

	    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
	    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;

	    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
	    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;

	    var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;

	    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

	    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

	    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/
	      , isbn13Maybe = /^(?:[0-9]{13})$/;

	    var ipv4Maybe = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
	      , ipv6Block = /^[0-9A-F]{1,4}$/i;

	    var uuid = {
	        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i
	      , '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
	      , '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
	      , all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
	    };

	    var alpha = /^[A-Z]+$/i
	      , alphanumeric = /^[0-9A-Z]+$/i
	      , numeric = /^[-+]?[0-9]+$/
	      , int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/
	      , float = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
	      , hexadecimal = /^[0-9A-F]+$/i
	      , decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/
	      , hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

	    var ascii = /^[\x00-\x7F]+$/
	      , multibyte = /[^\x00-\x7F]/
	      , fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/
	      , halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

	    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

	    var base64 = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i;

	    var phones = {
	      'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
	      'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
	      'en-ZA': /^(\+?27|0)\d{9}$/,
	      'en-AU': /^(\+?61|0)4\d{8}$/,
	      'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
	      'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	      'pt-PT': /^(\+351)?9[1236]\d{7}$/,
	      'el-GR': /^(\+30)?((2\d{9})|(69\d{8}))$/,
	      'en-GB': /^(\+?44|0)7\d{9}$/,
	      'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
	      'en-ZM': /^(\+26)?09[567]\d{7}$/,
	      'ru-RU': /^(\+?7|8)?9\d{9}$/,
	      'nb-NO': /^(\+?47)?[49]\d{7}$/,
	      'nn-NO': /^(\+?47)?[49]\d{7}$/,
	      'vi-VN': /^(0|\+?84)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/
	    };

	    // from http://goo.gl/0ejHHW
	    var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

	    validator.extend = function (name, fn) {
	        validator[name] = function () {
	            var args = Array.prototype.slice.call(arguments);
	            args[0] = validator.toString(args[0]);
	            return fn.apply(validator, args);
	        };
	    };

	    //Right before exporting the validator object, pass each of the builtins
	    //through extend() so that their first argument is coerced to a string
	    validator.init = function () {
	        for (var name in validator) {
	            if (typeof validator[name] !== 'function' || name === 'toString' ||
	                    name === 'toDate' || name === 'extend' || name === 'init') {
	                continue;
	            }
	            validator.extend(name, validator[name]);
	        }
	    };

	    validator.toString = function (input) {
	        if (typeof input === 'object' && input !== null && input.toString) {
	            input = input.toString();
	        } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
	            input = '';
	        }
	        return '' + input;
	    };

	    validator.toDate = function (date) {
	        if (Object.prototype.toString.call(date) === '[object Date]') {
	            return date;
	        }
	        date = Date.parse(date);
	        return !isNaN(date) ? new Date(date) : null;
	    };

	    validator.toFloat = function (str) {
	        return parseFloat(str);
	    };

	    validator.toInt = function (str, radix) {
	        return parseInt(str, radix || 10);
	    };

	    validator.toBoolean = function (str, strict) {
	        if (strict) {
	            return str === '1' || str === 'true';
	        }
	        return str !== '0' && str !== 'false' && str !== '';
	    };

	    validator.equals = function (str, comparison) {
	        return str === validator.toString(comparison);
	    };

	    validator.contains = function (str, elem) {
	        return str.indexOf(validator.toString(elem)) >= 0;
	    };

	    validator.matches = function (str, pattern, modifiers) {
	        if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
	            pattern = new RegExp(pattern, modifiers);
	        }
	        return pattern.test(str);
	    };

	    var default_email_options = {
	        allow_display_name: false,
	        allow_utf8_local_part: true,
	        require_tld: true
	    };

	    validator.isEmail = function (str, options) {
	        options = merge(options, default_email_options);

	        if (options.allow_display_name) {
	            var display_email = str.match(displayName);
	            if (display_email) {
	                str = display_email[1];
	            }
	        }

	        var parts = str.split('@')
	          , domain = parts.pop()
	          , user = parts.join('@');

	        var lower_domain = domain.toLowerCase();
	        if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
	            user = user.replace(/\./g, '').toLowerCase();
	        }

	        if (!validator.isByteLength(user, 0, 64) ||
	                !validator.isByteLength(domain, 0, 256)) {
	            return false;
	        }

	        if (!validator.isFQDN(domain, {require_tld: options.require_tld})) {
	            return false;
	        }

	        if (user[0] === '"') {
	            user = user.slice(1, user.length - 1);
	            return options.allow_utf8_local_part ?
	                quotedEmailUserUtf8.test(user) :
	                quotedEmailUser.test(user);
	        }

	        var pattern = options.allow_utf8_local_part ?
	            emailUserUtf8Part : emailUserPart;

	        var user_parts = user.split('.');
	        for (var i = 0; i < user_parts.length; i++) {
	            if (!pattern.test(user_parts[i])) {
	                return false;
	            }
	        }

	        return true;
	    };

	    var default_url_options = {
	        protocols: [ 'http', 'https', 'ftp' ]
	      , require_tld: true
	      , require_protocol: false
	      , require_valid_protocol: true
	      , allow_underscores: false
	      , allow_trailing_dot: false
	      , allow_protocol_relative_urls: false
	    };

	    validator.isURL = function (url, options) {
	        if (!url || url.length >= 2083 || /\s/.test(url)) {
	            return false;
	        }
	        if (url.indexOf('mailto:') === 0) {
	            return false;
	        }
	        options = merge(options, default_url_options);
	        var protocol, auth, host, hostname, port,
	            port_str, split;
	        split = url.split('://');
	        if (split.length > 1) {
	            protocol = split.shift();
	            if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
	                return false;
	            }
	        } else if (options.require_protocol) {
	            return false;
	        }  else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
	            split[0] = url.substr(2);
	        }
	        url = split.join('://');
	        split = url.split('#');
	        url = split.shift();

	        split = url.split('?');
	        url = split.shift();

	        split = url.split('/');
	        url = split.shift();
	        split = url.split('@');
	        if (split.length > 1) {
	            auth = split.shift();
	            if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
	                return false;
	            }
	        }
	        hostname = split.join('@');
	        split = hostname.split(':');
	        host = split.shift();
	        if (split.length) {
	            port_str = split.join(':');
	            port = parseInt(port_str, 10);
	            if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
	                return false;
	            }
	        }
	        if (!validator.isIP(host) && !validator.isFQDN(host, options) &&
	                host !== 'localhost') {
	            return false;
	        }
	        if (options.host_whitelist &&
	                options.host_whitelist.indexOf(host) === -1) {
	            return false;
	        }
	        if (options.host_blacklist &&
	                options.host_blacklist.indexOf(host) !== -1) {
	            return false;
	        }
	        return true;
	    };

	    validator.isIP = function (str, version) {
	        version = validator.toString(version);
	        if (!version) {
	            return validator.isIP(str, 4) || validator.isIP(str, 6);
	        } else if (version === '4') {
	            if (!ipv4Maybe.test(str)) {
	                return false;
	            }
	            var parts = str.split('.').sort(function (a, b) {
	                return a - b;
	            });
	            return parts[3] <= 255;
	        } else if (version === '6') {
	            var blocks = str.split(':');
	            var foundOmissionBlock = false; // marker to indicate ::

	            // At least some OS accept the last 32 bits of an IPv6 address
	            // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
	            // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
	            // and '::a.b.c.d' is deprecated, but also valid.
	            var foundIPv4TransitionBlock = validator.isIP(blocks[blocks.length - 1], 4);
	            var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

	            if (blocks.length > expectedNumberOfBlocks)
	                return false;

	            // initial or final ::
	            if (str === '::') {
	                return true;
	            } else if (str.substr(0, 2) === '::') {
	                blocks.shift();
	                blocks.shift();
	                foundOmissionBlock = true;
	            } else if (str.substr(str.length - 2) === '::') {
	                blocks.pop();
	                blocks.pop();
	                foundOmissionBlock = true;
	            }

	            for (var i = 0; i < blocks.length; ++i) {
	                // test for a :: which can not be at the string start/end
	                // since those cases have been handled above
	                if (blocks[i] === '' && i > 0 && i < blocks.length -1) {
	                    if (foundOmissionBlock)
	                        return false; // multiple :: in address
	                    foundOmissionBlock = true;
	                } else if (foundIPv4TransitionBlock && i == blocks.length - 1) {
	                    // it has been checked before that the last
	                    // block is a valid IPv4 address
	                } else if (!ipv6Block.test(blocks[i])) {
	                    return false;
	                }
	            }

	            if (foundOmissionBlock) {
	                return blocks.length >= 1;
	            } else {
	                return blocks.length === expectedNumberOfBlocks;
	            }
	        }
	        return false;
	    };

	    var default_fqdn_options = {
	        require_tld: true
	      , allow_underscores: false
	      , allow_trailing_dot: false
	    };

	    validator.isFQDN = function (str, options) {
	        options = merge(options, default_fqdn_options);

	        /* Remove the optional trailing dot before checking validity */
	        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
	            str = str.substring(0, str.length - 1);
	        }
	        var parts = str.split('.');
	        if (options.require_tld) {
	            var tld = parts.pop();
	            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
	                return false;
	            }
	        }
	        for (var part, i = 0; i < parts.length; i++) {
	            part = parts[i];
	            if (options.allow_underscores) {
	                if (part.indexOf('__') >= 0) {
	                    return false;
	                }
	                part = part.replace(/_/g, '');
	            }
	            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
	                return false;
	            }
	            if (/[\uff01-\uff5e]/.test(part)) {
	                // disallow full-width chars
	                return false;
	            }
	            if (part[0] === '-' || part[part.length - 1] === '-' ||
	                    part.indexOf('---') >= 0) {
	                return false;
	            }
	        }
	        return true;
	    };

	    validator.isBoolean = function(str) {
	        return (['true', 'false', '1', '0'].indexOf(str) >= 0);
	    };

	    validator.isAlpha = function (str) {
	        return alpha.test(str);
	    };

	    validator.isAlphanumeric = function (str) {
	        return alphanumeric.test(str);
	    };

	    validator.isNumeric = function (str) {
	        return numeric.test(str);
	    };

	    validator.isDecimal = function (str) {
	        return str !== '' && decimal.test(str);
	    };

	    validator.isHexadecimal = function (str) {
	        return hexadecimal.test(str);
	    };

	    validator.isHexColor = function (str) {
	        return hexcolor.test(str);
	    };

	    validator.isLowercase = function (str) {
	        return str === str.toLowerCase();
	    };

	    validator.isUppercase = function (str) {
	        return str === str.toUpperCase();
	    };

	    validator.isInt = function (str, options) {
	        options = options || {};
	        return int.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
	    };

	    validator.isFloat = function (str, options) {
	        options = options || {};
	        if (str === '' || str === '.') {
	            return false;
	        }
	        return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
	    };

	    validator.isDivisibleBy = function (str, num) {
	        return validator.toFloat(str) % validator.toInt(num) === 0;
	    };

	    validator.isNull = function (str) {
	        return str.length === 0;
	    };

	    validator.isLength = function (str, min, max) {
	        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
	        var len = str.length - surrogatePairs.length;
	        return len >= min && (typeof max === 'undefined' || len <= max);
	    };

	    validator.isByteLength = function (str, min, max) {
	        var len = encodeURI(str).split(/%..|./).length - 1;
	        return len >= min && (typeof max === 'undefined' || len <= max);
	    };

	    validator.isUUID = function (str, version) {
	        var pattern = uuid[version ? version : 'all'];
	        return pattern && pattern.test(str);
	    };

	    function getTimezoneOffset(str) {
	        var iso8601Parts = str.match(iso8601)
	          , timezone, sign, hours, minutes;
	        if (!iso8601Parts) {
	            str = str.toLowerCase();
	            timezone = str.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/);
	            if (!timezone) {
	                return str.indexOf('gmt') !== -1 ? 0 : null;
	            }
	            sign = timezone[1];
	            var offset = timezone[2];
	            if (offset.length === 3) {
	                offset = '0' + offset;
	            }
	            if (offset.length <= 2) {
	                hours = 0;
	                minutes = parseInt(offset);
	            } else {
	                hours = parseInt(offset.slice(0, 2));
	                minutes = parseInt(offset.slice(2, 4));
	            }
	        } else {
	            timezone = iso8601Parts[21];
	            if (!timezone || timezone === 'z' || timezone === 'Z') {
	                return 0;
	            }
	            sign = iso8601Parts[22];
	            if (timezone.indexOf(':') !== -1) {
	                hours = parseInt(iso8601Parts[23]);
	                minutes = parseInt(iso8601Parts[24]);
	            } else {
	                hours = 0;
	                minutes = parseInt(iso8601Parts[23]);
	            }
	        }
	        return (hours * 60 + minutes) * (sign === '-' ? 1 : -1);
	    }

	    validator.isDate = function (str) {
	        var normalizedDate = new Date(Date.parse(str));
	        if (isNaN(normalizedDate)) {
	            return false;
	        }
	        // normalizedDate is in the user's timezone. Apply the input
	        // timezone offset to the date so that the year and day match
	        // the input
	        var timezoneOffset = getTimezoneOffset(str);
	        if (timezoneOffset !== null) {
	            var timezoneDifference = normalizedDate.getTimezoneOffset() -
	                timezoneOffset;
	            normalizedDate = new Date(normalizedDate.getTime() +
	                60000 * timezoneDifference);
	        }
	        var day = String(normalizedDate.getDate());
	        var dayOrYear, dayOrYearMatches, year;
	        //check for valid double digits that could be late days
	        //check for all matches since a string like '12/23' is a valid date
	        //ignore everything with nearby colons
	        dayOrYearMatches = str.match(/(^|[^:\d])[23]\d([^:\d]|$)/g);
	        if (!dayOrYearMatches) {
	            return true;
	        }
	        dayOrYear = dayOrYearMatches.map(function(digitString) {
	            return digitString.match(/\d+/g)[0];
	        }).join('/');
	        year = String(normalizedDate.getFullYear()).slice(-2);
	        if (dayOrYear === day || dayOrYear === year) {
	            return true;
	        } else if ((dayOrYear === (day + '/' + year)) || (dayOrYear === (year + '/' + day))) {
	            return true;
	        }
	        return false;
	    };

	    validator.isAfter = function (str, date) {
	        var comparison = validator.toDate(date || new Date())
	          , original = validator.toDate(str);
	        return !!(original && comparison && original > comparison);
	    };

	    validator.isBefore = function (str, date) {
	        var comparison = validator.toDate(date || new Date())
	          , original = validator.toDate(str);
	        return !!(original && comparison && original < comparison);
	    };

	    validator.isIn = function (str, options) {
	        var i;
	        if (Object.prototype.toString.call(options) === '[object Array]') {
	            var array = [];
	            for (i in options) {
	                array[i] = validator.toString(options[i]);
	            }
	            return array.indexOf(str) >= 0;
	        } else if (typeof options === 'object') {
	            return options.hasOwnProperty(str);
	        } else if (options && typeof options.indexOf === 'function') {
	            return options.indexOf(str) >= 0;
	        }
	        return false;
	    };

	    validator.isCreditCard = function (str) {
	        var sanitized = str.replace(/[^0-9]+/g, '');
	        if (!creditCard.test(sanitized)) {
	            return false;
	        }
	        var sum = 0, digit, tmpNum, shouldDouble;
	        for (var i = sanitized.length - 1; i >= 0; i--) {
	            digit = sanitized.substring(i, (i + 1));
	            tmpNum = parseInt(digit, 10);
	            if (shouldDouble) {
	                tmpNum *= 2;
	                if (tmpNum >= 10) {
	                    sum += ((tmpNum % 10) + 1);
	                } else {
	                    sum += tmpNum;
	                }
	            } else {
	                sum += tmpNum;
	            }
	            shouldDouble = !shouldDouble;
	        }
	        return !!((sum % 10) === 0 ? sanitized : false);
	    };

	    validator.isISIN = function (str) {
	        if (!isin.test(str)) {
	            return false;
	        }

	        var checksumStr = str.replace(/[A-Z]/g, function(character) {
	            return parseInt(character, 36);
	        });

	        var sum = 0, digit, tmpNum, shouldDouble = true;
	        for (var i = checksumStr.length - 2; i >= 0; i--) {
	            digit = checksumStr.substring(i, (i + 1));
	            tmpNum = parseInt(digit, 10);
	            if (shouldDouble) {
	                tmpNum *= 2;
	                if (tmpNum >= 10) {
	                    sum += tmpNum + 1;
	                } else {
	                    sum += tmpNum;
	                }
	            } else {
	                sum += tmpNum;
	            }
	            shouldDouble = !shouldDouble;
	        }

	        return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
	    };

	    validator.isISBN = function (str, version) {
	        version = validator.toString(version);
	        if (!version) {
	            return validator.isISBN(str, 10) || validator.isISBN(str, 13);
	        }
	        var sanitized = str.replace(/[\s-]+/g, '')
	          , checksum = 0, i;
	        if (version === '10') {
	            if (!isbn10Maybe.test(sanitized)) {
	                return false;
	            }
	            for (i = 0; i < 9; i++) {
	                checksum += (i + 1) * sanitized.charAt(i);
	            }
	            if (sanitized.charAt(9) === 'X') {
	                checksum += 10 * 10;
	            } else {
	                checksum += 10 * sanitized.charAt(9);
	            }
	            if ((checksum % 11) === 0) {
	                return !!sanitized;
	            }
	        } else  if (version === '13') {
	            if (!isbn13Maybe.test(sanitized)) {
	                return false;
	            }
	            var factor = [ 1, 3 ];
	            for (i = 0; i < 12; i++) {
	                checksum += factor[i % 2] * sanitized.charAt(i);
	            }
	            if (sanitized.charAt(12) - ((10 - (checksum % 10)) % 10) === 0) {
	                return !!sanitized;
	            }
	        }
	        return false;
	    };

	    validator.isMobilePhone = function(str, locale) {
	        if (locale in phones) {
	            return phones[locale].test(str);
	        }
	        return false;
	    };

	    var default_currency_options = {
	        symbol: '$'
	      , require_symbol: false
	      , allow_space_after_symbol: false
	      , symbol_after_digits: false
	      , allow_negatives: true
	      , parens_for_negatives: false
	      , negative_sign_before_digits: false
	      , negative_sign_after_digits: false
	      , allow_negative_sign_placeholder: false
	      , thousands_separator: ','
	      , decimal_separator: '.'
	      , allow_space_after_digits: false
	    };

	    validator.isCurrency = function (str, options) {
	        options = merge(options, default_currency_options);

	        return currencyRegex(options).test(str);
	    };

	    validator.isJSON = function (str) {
	        try {
	            var obj = JSON.parse(str);
	            return !!obj && typeof obj === 'object';
	        } catch (e) {}
	        return false;
	    };

	    validator.isMultibyte = function (str) {
	        return multibyte.test(str);
	    };

	    validator.isAscii = function (str) {
	        return ascii.test(str);
	    };

	    validator.isFullWidth = function (str) {
	        return fullWidth.test(str);
	    };

	    validator.isHalfWidth = function (str) {
	        return halfWidth.test(str);
	    };

	    validator.isVariableWidth = function (str) {
	        return fullWidth.test(str) && halfWidth.test(str);
	    };

	    validator.isSurrogatePair = function (str) {
	        return surrogatePair.test(str);
	    };

	    validator.isBase64 = function (str) {
	        return base64.test(str);
	    };

	    validator.isMongoId = function (str) {
	        return validator.isHexadecimal(str) && str.length === 24;
	    };

	    validator.isISO8601 = function (str) {
	        return iso8601.test(str);
	    };

	    validator.ltrim = function (str, chars) {
	        var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
	        return str.replace(pattern, '');
	    };

	    validator.rtrim = function (str, chars) {
	        var pattern = chars ? new RegExp('[' + chars + ']+$', 'g') : /\s+$/g;
	        return str.replace(pattern, '');
	    };

	    validator.trim = function (str, chars) {
	        var pattern = chars ? new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'g') : /^\s+|\s+$/g;
	        return str.replace(pattern, '');
	    };

	    validator.escape = function (str) {
	        return (str.replace(/&/g, '&amp;')
	            .replace(/"/g, '&quot;')
	            .replace(/'/g, '&#x27;')
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;')
	            .replace(/\//g, '&#x2F;')
	            .replace(/\`/g, '&#96;'));
	    };

	    validator.stripLow = function (str, keep_new_lines) {
	        var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
	        return validator.blacklist(str, chars);
	    };

	    validator.whitelist = function (str, chars) {
	        return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
	    };

	    validator.blacklist = function (str, chars) {
	        return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
	    };

	    var default_normalize_email_options = {
	        lowercase: true
	    };

	    validator.normalizeEmail = function (email, options) {
	        options = merge(options, default_normalize_email_options);
	        if (!validator.isEmail(email)) {
	            return false;
	        }
	        var parts = email.split('@', 2);
	        parts[1] = parts[1].toLowerCase();
	        if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
	            parts[0] = parts[0].toLowerCase().replace(/\./g, '');
	            if (parts[0][0] === '+') {
	                return false;
	            }
	            parts[0] = parts[0].split('+')[0];
	            parts[1] = 'gmail.com';
	        } else if (options.lowercase) {
	            parts[0] = parts[0].toLowerCase();
	        }
	        return parts.join('@');
	    };

	    function merge(obj, defaults) {
	        obj = obj || {};
	        for (var key in defaults) {
	            if (typeof obj[key] === 'undefined') {
	                obj[key] = defaults[key];
	            }
	        }
	        return obj;
	    }

	    function currencyRegex(options) {
	        var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?')
	            , negative = '-?'
	            , whole_dollar_amount_without_sep = '[1-9]\\d*'
	            , whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*'
	            , valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep]
	            , whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?'
	            , decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
	        var pattern = whole_dollar_amount + decimal_amount;
	        // default is negative sign before symbol, but there are two other options (besides parens)
	        if (options.allow_negatives && !options.parens_for_negatives) {
	            if (options.negative_sign_after_digits) {
	                pattern += negative;
	            }
	            else if (options.negative_sign_before_digits) {
	                pattern = negative + pattern;
	            }
	        }
	        // South African Rand, for example, uses R 123 (space) and R-123 (no space)
	        if (options.allow_negative_sign_placeholder) {
	            pattern = '( (?!\\-))?' + pattern;
	        }
	        else if (options.allow_space_after_symbol) {
	            pattern = ' ?' + pattern;
	        }
	        else if (options.allow_space_after_digits) {
	            pattern += '( (?!$))?';
	        }
	        if (options.symbol_after_digits) {
	            pattern += symbol;
	        } else {
	            pattern = symbol + pattern;
	        }
	        if (options.allow_negatives) {
	            if (options.parens_for_negatives) {
	                pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
	            }
	            else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
	                pattern = negative + pattern;
	            }
	        }
	        return new RegExp(
	            '^' +
	            // ensure there's a dollar and/or decimal amount, and that it doesn't start with a space or a negative sign followed by a space
	            '(?!-? )(?=.*\\d)' +
	            pattern +
	            '$'
	        );
	    }

	    validator.init();

	    return validator;

	});


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TextArea2   输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Component = __webpack_require__(2);
	var template = __webpack_require__(21);
	var _ = __webpack_require__(4);
	var Validation = __webpack_require__(18);

	/**
	 * @class TextArea2
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.value              <=> 文本框的值
	 * @param {string=''}               options.data.placeholder         => 占位符
	 * @param {string=''}               options.data.state              <=> 文本框的状态
	 * @param {number}                  options.data.maxlength           => 文本框的最大长度
	 * @param {object[]=[]}             options.data.rules               => 验证规则
	 * @param {boolean=false}           options.data.validating          => 是否实时验证
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var TextArea2 = Component.extend({
	    name: 'textarea2',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            value: '',
	            placeholder: '',
	            state: '',
	            maxlength: undefined,
	            rules: [],
	            validating: false,
	            autofocus: false
	        });
	        this.supr();

	        var $outer = this.$outer;
	        if($outer && $outer instanceof Validation) {
	            $outer.controls.push(this);

	            this.$on('destroy', function() {
	                var index = $outer.controls.indexOf(this);
	                $outer.controls.splice(index, 1);
	            });
	        }
	    },
	    /**
	     * @method validate() 根据`rules`验证组件的值是否正确
	     * @public
	     * @return {object} result 结果
	     */
	    validate: function() {
	        var value = this.data.value;
	        var rules = this.data.rules;
	        var result = Validation.validate(value, rules);
	        
	        this.data.state = result.success ? 'success' : 'error';
	        this.data.tip = result.message;

	        return result;
	    }
	});

	module.exports = TextArea2;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-textarea2 {class}\" r-hide={!visible}>\n    <textarea class=\"u-textarea u-textarea-{state} u-textarea-{size} u-textarea-{width}\"\n        type={type} placeholder={placeholder} maxlength={maxlength} autofocus={autofocus} readonly={readonly} disabled={disabled}\n        r-model={value} {#if validating}on-keyup={this.validate(value, rules)}{/if}></textarea>\n</label>\n{#if tip}<span class=\"u-tip u-tip-{state}\">{tip}</span>{/if}"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * NumberInput 输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Input2 = __webpack_require__(16);
	var template = __webpack_require__(23);
	var _ = __webpack_require__(4);

	/**
	 * @class NumberInput
	 * @extend Input2
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=0}                options.data.value              <=> 文本框的值
	 * @param {string=''}               options.data.state              <=> 文本框的状态
	 * @param {number}                  options.data.min                 => 最小值
	 * @param {number}                  options.data.max                 => 最大值
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var NumberInput = Input2.extend({
	    name: 'numberInput',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            value: 0,
	            // @inherited state: '',
	            // @inherited placeholder: '',
	            min: undefined,
	            max: undefined,
	            autofocus: false
	        });
	        this.supr();

	        this.$watch('value', function(newValue, oldValue) {
	            // 字符类型自动转为数字类型
	            if(typeof newValue === 'string')
	                return this.data.value = +newValue;

	            // 如果超出数值范围，则设置为范围边界的数值
	            var isOutOfRange = this.isOutOfRange(newValue);
	            if(isOutOfRange !== false)
	                return this.data.value = isOutOfRange;

	            /**
	             * @event change 数值改变时触发
	             * @property {number} value 改变后的数值
	             */
	            this.$emit('change', {
	                value: newValue
	            });
	        });

	        this.$watch(['min', 'max'], function(min, max) {
	            if(!isNaN(min) && !isNaN(max) && min - max > 0)
	                throw new NumberInput.NumberRangeException(min, max);

	            // 如果超出数值范围，则设置为范围边界的数值
	            var isOutOfRange = this.isOutOfRange(this.data.value);
	            if(isOutOfRange !== false)
	                return this.data.value = isOutOfRange;
	        });
	    },
	    /**
	     * @method add(value) 调整数值
	     * @public
	     * @param  {number=0} value 加/减的值
	     * @return {number} value 计算后的值
	     */
	    add: function(value) {
	        if(this.data.readonly || this.data.disabled || !value)
	            return;

	        return this.data.value += value;
	    },
	    /**
	     * @method isOutOfRange(value) 是否超出规定的数值范围
	     * @public
	     * @param {number} value 待测的值
	     * @return {boolean|number} number 如果没有超出数值范围，则返回false；如果超出数值范围，则返回范围边界的数值
	     */
	    isOutOfRange: function(value) {
	        var min = +this.data.min;
	        var max = +this.data.max;

	        // min && value < min && min，先判断是否为空，再判断是否超出数值范围，如果超出则返回范围边界的数值
	        if(!isNaN(min) && value < min)
	            return min;
	        else if(!isNaN(max) && value > max)
	            return max;
	        else
	            return false;
	    }
	}).filter({
	    number: {
	        get: function(value) {
	            value = '' + (value || 0);
	            if(this.data.format)
	                return this.data.format.replace(new RegExp('\\d{0,' + value.length + '}$'), value);
	            return value;
	        },
	        set: function(value) {
	            // return (value.replace(/[^0-9\-\.]/g, ''));
	            return +value;
	            // return +(value.replace(/[^\d\.\-]/g, '')) || 0;
	        }
	    }
	});

	NumberInput.NumberRangeException = function(min, max) {
	    this.type = 'NumberRangeException';
	    this.message = 'Wrong Number Range where `min` is ' + min + ' and `max` is ' + max + '!';
	}

	NumberInput.NumberRangeException.prototype.toString = function() {
	    return this.message;
	}

	module.exports = NumberInput;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-input2 u-numberinput {class}\" r-hide={!visible}>\n    <input class=\"u-input u-input-{state}\" r-model={value | number} placeholder={placeholder} autofocus={autofocus} readonly={readonly} disabled={disabled}>\n    <a class=\"u-btn\" z-dis={disabled} on-click={this.add(1)}><i class=\"u-icon u-icon-caret-up\"></i></a>\n    <a class=\"u-btn\" z-dis={disabled} on-click={this.add(-1)}><i class=\"u-icon u-icon-caret-down\"></i></a>\n</label>\n{#if tip}<span class=\"u-tip u-tip-{type}\">{tip}</span>{/if}"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Check2   多选按钮
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(25);
	var _ = __webpack_require__(4);

	/**
	 * @class Check2
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.name                => 多选按钮的文字
	 * @param {object=null}             options.data.checked            <=> 多选按钮的选择状态
	 * @param {boolean=false}           options.data.block               => 是否以block方式显示
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Check2 = Component.extend({
	    name: 'check2',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            name: '',
	            checked: false,
	            block: false
	        });
	        this.supr();
	    },
	    /**
	     * @method check(checked) 改变选中状态
	     * @public
	     * @param  {boolean} checked 选中状态
	     * @return {void}
	     */
	    check: function(checked) {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.data.checked = checked;
	        /**
	         * @event check 改变选中状态时触发
	         * @property {boolean} checked 选中状态
	         */
	        this.$emit('check', {
	            checked: checked
	        });
	    }
	});

	module.exports = Check2;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-check2 {class}\" z-dis={disabled} r-class={ {'z-chk': checked, 'z-part': checked === null, 'u-check2-block': block} } r-hide={!visible} title={name} on-click={this.check(!checked)}><div class=\"check2_box\"><i class=\"u-icon u-icon-check\"></i></div> {name}</label>"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * CheckGroup 多选组
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(7);
	var template = __webpack_require__(27);
	var _ = __webpack_require__(4);

	/**
	 * @class CheckGroup
	 * @extend SourceComponent
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {boolean=false}           options.data.block               => 多行显示
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var CheckGroup = SourceComponent.extend({
	    name: 'checkGroup',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            block: false
	        });
	        this.supr();
	    }
	});

	module.exports = CheckGroup;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {class}\" r-hide={!visible}>\n    {#list source as item}\n    <label class=\"u-check2\" title={item.name} z-dis={disabled} r-class={ {'u-check2-block': block} }><input type=\"checkbox\" class=\"u-check\" r-model={item.checked} disabled={disabled}> {item.name}</label>\n    {/list}\n</div>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Check2Group 输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var CheckGroup = __webpack_require__(26);
	var template = __webpack_require__(29);
	var _ = __webpack_require__(4);
	var Check2 = __webpack_require__(24);

	/**
	 * @class Check2Group
	 * @extend CheckGroup
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {boolean=false}           options.data.block               => 多行显示
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Check2Group = CheckGroup.extend({
	    name: 'check2Group',
	    template: template
	});

	module.exports = Check2Group;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {class}\" r-hide={!visible}>\n    {#list source as item}\n    <check2 name={item.name} checked={item.checked} disabled={disabled} block={block} />\n    {/list}\n</div>"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * RadioGroup 单选组
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(7);
	var template = __webpack_require__(31);
	var _ = __webpack_require__(4);

	/**
	 * @class RadioGroup
	 * @extend SourceComponent
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.seleced            <=> 当前选择项
	 * @param {boolean=false}           options.data.block               => 多行显示
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var RadioGroup = SourceComponent.extend({
	    name: 'radioGroup',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            selected: null,
	            _radioGroupId: new Date()
	        });
	        this.supr();
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.data.selected = item;
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });
	    }
	});

	module.exports = RadioGroup;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {class}\" r-hide={!visible}>\n    {#list source as item}\n    <label class=\"u-radio2\" title={item.name} z-dis={disabled} r-class={ {'u-radio2-block': block} } on-click={this.select(item)}><input type=\"radio\" class=\"u-radio\" name={_radioGroupId} disabled={disabled}> {item.name}</label>\n    {/list}\n</div>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Radio2Group 输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var RadioGroup = __webpack_require__(30);
	var template = __webpack_require__(33);
	var _ = __webpack_require__(4);

	/**
	 * @class Radio2Group
	 * @extend RadioGroup
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.seleced            <=> 当前选择项
	 * @param {boolean=false}           options.data.block               => 多行显示
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Radio2Group = RadioGroup.extend({
	    name: 'radio2Group',
	    template: template
	});

	module.exports = Radio2Group;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {class}\" r-hide={!visible}>\n    {#list source as item}\n    <label class=\"u-radio2\" title={item.name} z-sel={item === selected} z-dis={disabled} r-class={ {'u-radio2-block': block} } on-click={this.select(item)}><div class=\"radio2_box\"><i class=\"u-icon u-icon-radio\"></i></div> {item.name}</label>\n    {/list}\n</div>"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Select2  选择扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Dropdown = __webpack_require__(11);
	var template = __webpack_require__(35);
	var _ = __webpack_require__(4);

	/**
	 * @class Select2
	 * @extend Dropdown
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object}                  options.data.selected           <=> 当前选择项
	 * @param {object}                  options.data.value              <=> 当前选择值
	 * @param {object='id'}             options.data.key                 => 数据项的键
	 * @param {string='请选择'}         options.data.placeholder         => 默认项的文字，如果`placeholder`为空并且没有选择项时，将会自动选中第一项。
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Select2 = Dropdown.extend({
	    name: 'select2',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            // @inherited open: false
	            selected: undefined,
	            key: 'id',
	            value: undefined,
	            placeholder: '请选择'
	        });
	        this.supr();

	        this.$watch('selected', function(newValue, oldValue) {
	            // console.log('selected', newValue);
	            this.data.value = newValue ? newValue[this.data.key] : newValue;

	            /**
	             * @event change 选择项改变时触发
	             * @property {object} selected 改变后的选择项
	             */
	            this.$emit('change', {
	                selected: newValue,
	                key: this.data.key,
	                value: this.data.value
	            });
	        });

	        this.$watch('value', function(newValue, oldValue) {
	            // console.log('value', newValue);
	            if(newValue === undefined || newValue === null)
	                return this.data.selected = newValue;
	            else if(this.data.source) {
	                if(!this.data.selected || this.data.selected[this.data.key] !== newValue)
	                    this.data.selected = this.data.source.find(function(item) {
	                        return item[this.data.key] == newValue;
	                    }, this);
	            }
	        });

	        this.$watch('source', function(newValue, oldValue) {
	            // console.log('source', newValue);
	            if(!newValue)
	                return this.data.selected = newValue;

	            if(newValue.length && (typeof newValue[0] === 'string' || typeof newValue[0] === 'number'))
	                return this.data.source = newValue.map(function(name, index) {
	                    return {id: index, name: name};
	                });


	            if(this.data.value !== undefined && this.data.value !== null) {
	                this.data.selected = newValue.find(function(item) {
	                    return item[this.data.key] == this.data.value;
	                }, this);
	            } else if(this.data.selected && newValue.indexOf(this.data.selected) < 0)
	                this.data.selected = undefined;

	            // 当placeholder为空时，自动选择第一项
	            if(!this.data.placeholder && !this.data.selected) {
	                this.data.selected = newValue[0];
	            }
	        });
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.readonly || this.data.disabled || (item && (item.disabled || item.divider)))
	            return;

	        this.data.selected = item;
	        
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });

	        this.toggle(false);
	    },
	});

	module.exports = Select2;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-select2 {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" title={selected ? selected.name : placeholder} on-click={this.toggle(!open)}>\n        <i class=\"u-icon u-icon-caret-down\"></i>\n        <span>{selected ? selected.name : placeholder}</span>\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <ul class=\"m-listview\">\n            {#if placeholder}<li z-sel={!selected} on-click={this.select(null)}>{placeholder}</li>{/if}\n            {#list source as item}\n            <li z-sel={selected === item} z-dis={item.disabled} title={item.name} on-click={this.select(item)}>{item.name}</li>\n            {/list}\n        </ul>\n    </div>\n</div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Select2Group 多级选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(37);
	var _ = __webpack_require__(4);

	/**
	 * @class Select2Group
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.selected           <=  最后的选择项
	 * @param {object[]=[]}             options.data.selectedItems      <=  所有的选择项
	 * @param {string[]=[]}             options.data.placeholders        => 默认项的文字
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Select2Group = Component.extend({
	    name: 'select2Group',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            depth: 1,
	            sources: [],
	            selected: null,
	            selectedItems: [],
	            placeholders: []
	        });
	        this.supr();

	        this.$watch('selected', function(newValue, oldValue) {
	            /**
	             * @event change 最后的选择项改变时触发
	             * @property {object} selected 最后的选择项
	             * @property {object} selectedItems 所有的选择项
	             */
	            this.$emit('change', {
	                selected: newValue,
	                selectedItems: this.data.selectedItems
	            });
	        });

	        this.data.sources[0] = this.data.source;
	    },
	    /**
	     * @private
	     */
	    select: function(item, level) {
	        if(this.data.readonly || this.data.disabled || (item && (item.disabled || item.divider)))
	            return;

	        this.data.sources[level + 1] = item ? item.children : undefined;
	        for(var i = level + 2; i < this.data.depth; i++)
	            this.data.sources[i] = undefined;

	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         * @property {object} level 当前选择的层级
	         */
	        this.$emit('select', {
	            selected: item,
	            level: level
	        });
	    },
	    /**
	     * @private
	     */
	    change: function(item, index) {
	        if(index === this.data.depth - 1)
	            this.data.selected = item;

	        this.data.selectedItems[index] = item;
	    }
	});

	module.exports = Select2Group;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-select2Group {class}\" r-hide={!visible}>\n    {#list 0..(depth - 1) as i}\n    <select2 source={sources[i]} readonly={readonly} disabled={disabled} placeholder={placeholders[i] || '请选择'} on-select={this.select($event.selected, i)} on-change={this.change($event.selected, i)} />\n    {/list}\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TreeSelect 树型选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Select2 = __webpack_require__(34);
	var template = __webpack_require__(39);
	var _ = __webpack_require__(4);
	var Treeview = __webpack_require__(40);

	/**
	 * @class TreeSelect
	 * @extend Select2
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.selected           <=> 当前选择项
	 * @param {string='请选择'}         options.data.placeholder         => 默认项的文字
	 * @param {boolean=false}           options.data.hierarchical       @=> 是否分级动态加载，需要service
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var TreeSelect = Select2.extend({
	    name: 'treeSelect',
	    template: template,
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            // @inherited open: false,
	            // @inherited selected: null,
	            // @inherited placeholder: '请选择'
	            hierarchical: false,
	            updateAuto: false
	        });
	        this.supr();
	    }
	});

	module.exports = TreeSelect;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-select2 {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" title={selected ? selected.name : placeholder} on-click={this.toggle(!open)}>\n        <i class=\"u-icon u-icon-caret-down\"></i>\n        <span>{selected ? selected.name : placeholder}</span>\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <treeView source={source} hierarchical={hierarchical} service={service} on-select={this.select($event.selected)} />\n    </div>\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TreeView  树型视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(7);
	var template = __webpack_require__(41);
	var hierarchicalTemplate = __webpack_require__(42);
	var _ = __webpack_require__(4);

	/**
	 * @class TreeView
	 * @extend SourceComponent
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.selected           <=> 当前选择项
	 * @param {boolean=false}           options.data.hierarchical       @=> 是否分级动态加载，需要service
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var TreeView = SourceComponent.extend({
	    name: 'treeView',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            selected: null,
	            multiple: false,
	            hierarchical: false
	        });
	        this.supr();

	        this.$ancestor = this;
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.readonly || this.data.disabled || item.disabled)
	            return;

	        this.data.selected = item;
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });
	    },
	    /**
	     * @method toggle(item) 展开或收起某一项
	     * @private
	     * @param  {object} item 展开收起项
	     * @return {void}
	     */
	    toggle: function(item) {
	        if(this.data.readonly || this.data.disabled || item.disabled)
	            return;

	        item.open = !item.open;

	        /**
	         * @event toggle 展开或收起某一项时触发
	         * @property {object} item 展开收起项
	         * @property {boolean} open 展开还是收起
	         */
	        this.$emit('toggle', {
	            item: item,
	            open: item.open
	        });
	    }
	});

	var TreeViewList = SourceComponent.extend({
	    name: 'treeViewList',
	    template: hierarchicalTemplate,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            itemTemplate: null,
	            visible: false
	        });
	        this.supr();

	        this.$ancestor = this.$parent.$ancestor;
	        this.service = this.$ancestor.service;
	        this.data.itemTemplate = this.$ancestor.data.itemTemplate;
	        this.data.hierarchical = this.$ancestor.data.hierarchical;

	        this.$watch('visible', function(newValue) {
	            if(!this.data.hierarchical)
	                return;

	            if(!newValue || this.$parent.name !== 'treeViewList')
	                return;

	            this.$updateSource(function() {
	                this.data.hierarchical = false;
	            });
	        });
	    },
	    /**
	     * @override
	     */
	    getParams: function() {
	        if(this.data.parent)
	            return _.extend({parentId: this.data.parent.id}, this.$ancestor.getParams());
	    },
	    /**
	     * @method $updateSource() 从service中更新数据源
	     * @public
	     * @deprecated
	     * @return {SourceComponent} this
	     */
	    $updateSource: function() {
	        this.service.getList(this.getParams(), function(result) {
	            // 给每个节点item添加parent
	            result.forEach(function(item) {
	                item.parent = this.data.parent;
	            }.bind(this));

	            this.$update('source', result);

	            this.$emit('updateSource', {
	                result: result
	            });
	        }.bind(this));
	        return this;
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @private
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        this.$ancestor.select(item);
	    },
	    /**
	     * @method toggle(item) 展开或收起某一项
	     * @private
	     * @param  {object} item 展开收起项
	     * @return {void}
	     */
	    toggle: function(item) {
	        this.$ancestor.toggle(item);
	    }
	});

	module.exports = TreeView;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-treeview {class}\" z-dis={disabled} r-hide={!visible}>\n    <treeViewList source={source} visible />\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"treeview_list\" r-hide={!visible}>\n    {#list source as item}\n    <li>\n        <div class=\"treeview_item\">\n            {#if item.childrenCount || (item.children && item.children.length)}\n            <i class=\"u-icon\" r-class={ {'u-icon-caret-right': !item.open, 'u-icon-caret-down': item.open}} on-click={this.toggle(item)}></i>\n            {/if}\n            <div class=\"treeview_itemname\" z-sel={this.$ancestor.data.selected === item} z-dis={item.disabled} title={item.name} on-click={this.select(item)}>{#if @(itemTemplate)}{#inc @(itemTemplate)}{#else}{item.name}{/if}</div>\n        </div>\n        {#if item.childrenCount || (item.children && item.children.length)}<treeViewList source={item.children} visible={item.open} parent={item} />{/if}\n    </li>\n    {/list}\n</ul>"

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Suggest   自动提示
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Dropdown = __webpack_require__(11);
	var template = __webpack_require__(44);
	var _ = __webpack_require__(4);

	/**
	 * @class Suggest
	 * @extend Dropdown
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.selected           <=> 当前选择项
	 * @param {string=''}               options.data.value              <=> 文本框中的值
	 * @param {string='请输入'}         options.data.placeholder         => 文本框的占位文字
	 * @param {number}                  options.data.maxlength           => 文本框的最大长度
	 * @param {number=0}                options.data.startLength         => 开始提示长度。当输入长度>=该值后开始提示
	 * @param {string='all'}            options.data.matchType           => 匹配方式，`all`表示匹配全局，`start`表示只匹配开头，`end`表示只匹配结尾
	 * @param {boolean=false}           options.data.strict              => 是否为严格模式。当为严格模式时，`value`属性必须在source中选择，否则为空。
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var Suggest = Dropdown.extend({
	    name: 'suggest',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            // @inherited open: false,
	            selected: null,
	            value: '',
	            placeholder: '请输入',
	            maxlength: undefined,
	            startLength: 0,
	            delay: 300,
	            matchType: 'all',
	            strict: false,
	            autofocus: false
	        });
	        this.supr();
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        this.$update('selected', item);
	        this.data.value = item.name;
	        //this.data.selected = item;
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });
	        this.toggle(false);
	    },
	    /**
	     * @method toggle(open)  在展开状态和收起状态之间切换
	     * @public
	     * @param  {boolean} open 展开还是收起
	     * @return {void}
	     */
	    toggle: function(open, _isInput) {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.data.open = open;

	        /**
	         * @event toggle 展开或收起状态改变时触发
	         * @property {boolean} open 展开还是收起
	         */
	        this.$emit('toggle', {
	            open: open
	        });

	        var index = Dropdown.opens.indexOf(this);
	        if(open && index < 0)
	            Dropdown.opens.push(this);
	        else if(!open && index >= 0) {
	            Dropdown.opens.splice(index, 1);

	            if(!_isInput && this.data.strict)
	               this.data.value = this.data.selected ? this.data.selected.name : '';
	        }
	    },
	    /**
	     * @private
	     */
	    input: function($event) {
	        var value = this.data.value;

	        if(value.length >= this.data.startLength) {
	            this.toggle(true);
	            if(this.service)
	                this.$updateSource();
	        } else
	            this.toggle(false, true);
	    },
	    /**
	     * @private
	     */
	    uninput: function($event) {

	    },
	    /**
	     * @private
	     */
	    getParams: function() {
	        return {value: this.data.value};
	    },
	    /**
	     * @private
	     */
	    filter: function(item) {
	        var value = this.data.value;

	        if(!value && this.data.startLength)
	            return false;

	        if(this.data.matchType === 'all')
	            return item.name.indexOf(value) >= 0;
	        else if(this.data.matchType === 'startLength')
	            return item.name.slice(0, value.length) === value;
	        else if(this.data.matchType === 'end')
	            return item.name.slice(-value.length) === value;
	    }
	});

	module.exports = Suggest;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-suggest {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\">\n        <input class=\"u-input u-input-full\" placeholder={placeholder} maxlength={maxlength} autofocus={autofocus} r-model={value} on-focus={this.input($event)} on-keyup={this.input($event)} on-blur={this.uninput($event)} ref=\"input\" readonly={readonly} disabled={disabled}>\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <ul class=\"m-listview\">\n            {#list source as item}\n            {#if this.filter(item)}\n                <li title={item.name} on-click={this.select(item)}>{item.name}</li>\n            {/if}\n            {/list}\n        </ul>\n    </div>\n</div>"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Uploader  上传
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(46);
	var _ = __webpack_require__(4);

	/**
	 * @class Uploader
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.title               => 按钮文字
	 * @param {string=''}               options.data.url                 => 上传路径
	 * @param {string='json'}           options.data.dataType            => 数据类型
	 * @param {object}                  options.data.data                => 附加数据
	 * @param {string='file'}           options.data.name                => 上传文件的name
	 * @param {string|string[]=''}      options.data.extensions          => 可上传的扩展名，如果为空，则表示可上传任何文件类型
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Uploader = Component.extend({
	    name: 'uploader',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            title: '',
	            url: '',
	            contentType: 'multipart/form-data',
	            dataType: 'json',
	            data: {},
	            name: 'file',
	            extensions: null,
	            _id: new Date().getTime()
	        });
	        this.supr();
	    },
	    /**
	     * @method upload() 弹出文件对话框并且上传文件
	     * @public
	     * @return {void}
	     */
	    upload: function() {
	        if(!this.data.disabled)
	            this.$refs.file.click();
	    },
	    /**
	     * @method submit() 提交表单
	     * @private
	     * @return {void}
	     */
	    submit: function() {
	        if(this.data.extensions) {
	            var fileName = this.$refs.file.value;
	            var ext = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();

	            var extensions = this.data.extensions;
	            if(typeof extensions === 'string')
	                extensions = extensions.split(',');
	            
	            if(extensions.indexOf(ext) === -1)
	                return this.$emit('error', {
	                    message: this.extensionError()
	                });
	        }

	        this.$emit('sending', this.data.data);

	        this.$refs.form.submit();
	    },
	    cbUpload: function() {
	        var iframe = this.$refs.iframe;

	        var xml = {};
	        try {
	            if(iframe.contentWindow) {
	                xml.responseText = iframe.contentWindow.document.body ? iframe.contentWindow.document.body.innerHTML : null;
	                xml.responseXML = iframe.contentWindow.document.XMLDocument ? iframe.contentWindow.document.XMLDocument : iframe.contentWindow.document;
	            } else if(iframe.contentDocument) {
	                xml.responseText = iframe.contentDocument.document.body?iframe.contentDocument.document.body.innerHTML : null;
	                xml.responseXML = iframe.contentDocument.document.XMLDocument?iframe.contentDocument.document.XMLDocument : iframe.contentDocument.document;
	            }
	        } catch(e) {
	            this.$emit('error', e);
	        }

	        if(!xml.responseText)
	            return this.$emit('error', {
	                message: 'No responseText!'
	            });

	        function uploadHttpData(r, type) {
	            var data = (type == 'xml' || !type) ? r.responseXML : r.responseText;
	            // If the type is 'script', eval it in global context
	            if (type === 'json') {
	                try {
	                    data = JSON.parse(data);
	                } catch (e) {
	                    var text = /<pre.*?>(.*?)<\/pre>/.exec(data);
	                    text = text ? text[1] : data;
	                    data = JSON.parse(text);
	                }
	            }
	            return data;
	        }

	        this.$emit('success', uploadHttpData(xml, this.data.dataType));
	        this.$emit('complete', xml);

	        this.$refs.file.value = '';
	    },
	    /**
	     * @method extensionError() 返回错误
	     * @private
	     * @return {string} string 错误
	     */
	    extensionError:　function() {
	        return '只能上传' + this.data.extensions.join(', ')　+ '类型的文件！';
	    },
	});

	module.exports = Uploader;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-uploader {class}\" r-hide={!visible}>\n    <div on-click={this.upload()}>\n        {#if this.$body}\n            {#inc this.$body}\n        {#else}\n            <a class=\"u-btn\">{title || '上传'}</a>\n        {/if}\n    </div>\n    <form method=\"POST\" action={url} target=\"iframe{_id}\" enctype={contentType} ref=\"form\">\n        <input type=\"file\" name={name} ref=\"file\" on-change={this.submit()}>\n        {#list Object.keys(data) as key}\n        <input type=\"hidden\" name={key} value={data[key]}>\n        {/list}\n    </form>\n    <iframe name=\"iframe{_id}\" on-load={this.cbUpload()} ref=\"iframe\" />\n</div>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * DatePicker 日期选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Dropdown = __webpack_require__(11);
	var template = __webpack_require__(48);
	var _ = __webpack_require__(4);

	var filter = __webpack_require__(49).filter;
	var Calendar = __webpack_require__(50);
	var compatibility = __webpack_require__(49).compatibility;
	var MS_OF_DAY = 24*3600*1000;

	/**
	 * @class DatePicker
	 * @extend Dropdown
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object=null}             options.data.date               <=> 当前选择的日期
	 * @param {string='请输入'}         options.data.placeholder         => 文本框的占位文字
	 * @param {Date|string=null}        options.data.minDate             => 最小日期，如果为空则不限制
	 * @param {Date|string=null}        options.data.maxDate             => 最大日期，如果为空则不限制
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var DatePicker = Dropdown.extend({
	    name: 'datePicker',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            // @inherited open: false,
	            minDate: null,
	            maxDate: null,
	            placeholder: '请输入',
	            date: null,
	            _date: undefined,
	            autofocus: false
	        });
	        this.supr();

	        this.$watch('date', function(newValue, oldValue) {
	            // 字符类型自动转为日期类型
	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.date = new Date(newValue);
	            }

	            // 如果newValue为非法日期，则置为空 
	            if(newValue == 'Invalid Date' || newValue == 'NaN')
	                return this.data.date = null;

	            // 如果不为空并且超出日期范围，则设置为范围边界的日期
	            if(newValue) {
	                var isOutOfRange = this.isOutOfRange(newValue);
	                if(isOutOfRange)
	                    return this.data.date = isOutOfRange;
	            }

	            if(newValue && (!this.data._date || this.data._date.toDateString() !== newValue.toDateString()))
	                this.data._date = new Date(newValue);

	            /**
	             * @event change 日期改变时触发
	             * @property {object} date 改变后的日期
	             */
	            this.$emit('change', {
	                date: newValue
	            });
	        });

	        this.$watch('minDate', function(newValue, oldValue) {
	            if(!newValue)
	                return;

	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.minDate = new Date(newValue);
	            }

	            if(newValue == 'Invalid Date' || newValue == 'NaN')
	                return this.data.minDate = null;
	        });

	        this.$watch('maxDate', function(newValue, oldValue) {
	            if(!newValue)
	                return;

	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.maxDate = new Date(newValue);
	            }

	            if(newValue == 'Invalid Date' || newValue == 'NaN')
	                return this.data.maxDate = null;
	        });

	        this.$watch(['minDate', 'maxDate'], function(minDate, maxDate) {
	            if(!(minDate && minDate instanceof Date || maxDate && maxDate instanceof Date))
	                return;

	            if(minDate && maxDate)
	                if(minDate/MS_OF_DAY>>0 > maxDate/MS_OF_DAY>>0)
	                    throw new Calendar.DateRangeException(minDate, maxDate);

	            // 如果不为空并且超出日期范围，则设置为范围边界的日期
	            if(this.data.date) {
	                var isOutOfRange = this.isOutOfRange(this.data.date);
	                if(isOutOfRange)
	                    return this.data.date = isOutOfRange;
	            }
	        });
	    },
	    /**
	     * @method select(date) 选择一个日期
	     * @public
	     * @param  {Date=null} date 选择的日期
	     * @return {void}
	     */
	    select: function(date) {
	        if(this.data.readonly || this.data.disabled || this.isOutOfRange(date))
	            return;

	        this.data.date = date;

	        /**
	         * @event select 选择某一项时触发
	         * @property {object} date 当前选择项
	         */
	        this.$emit('select', {
	            date: date
	        });

	        this.toggle(false);
	    },
	    /**
	     * @method _input($event) 输入日期
	     * @private
	     * @param  {object} $event
	     * @return {void}
	     */
	    _input: function($event) {
	        var value = $event.target.value;
	        var date = value ? new Date(value) : null;

	        if(date != 'Invalid Date')
	            this.data.date = date;
	        else
	            $event.target.value = filter.format(this.data.date, 'yyyy-MM-dd');
	    },
	    /**
	     * @method isOutOfRange(date) 是否超出规定的日期范围
	     * @public
	     * @param {Date} date 待测的日期
	     * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
	     */
	    isOutOfRange: function(date) {
	        var minDate = this.data.minDate;
	        var maxDate = this.data.maxDate;

	        // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
	        var minDate = minDate && new Date((minDate/MS_OF_DAY>>0)*MS_OF_DAY);
	        var maxDate = maxDate && new Date((maxDate/MS_OF_DAY>>0)*MS_OF_DAY);

	        // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期。
	        return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
	    }
	});

	module.exports = DatePicker;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-datepicker {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\" on-blur={this.toggle(false)}>\n    <div class=\"dropdown_hd\">\n        <input class=\"u-input u-input-full\" placeholder={placeholder} value={date | format: 'yyyy-MM-dd'} ref=\"input\" autofocus={autofocus} readonly={readonly} disabled={disabled}\n            on-focus={this.toggle(true)} on-change={this._input($event)}>\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <calendar date={_date} minDate={minDate} maxDate={maxDate} on-select={this.select($event.date)} />\n    </div>\n</div>"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    _: __webpack_require__(4),
	    ajax: __webpack_require__(8),
	    Component: __webpack_require__(2),
	    SourceComponent: __webpack_require__(7),
	    // directive: require('./src/directive.js'),
	    filter: __webpack_require__(5),
	    compatibility: __webpack_require__(3)
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Calendar  日历
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(51);
	var _ = __webpack_require__(4);

	var compatibility = __webpack_require__(49).compatibility;
	var MS_OF_DAY = 24*3600*1000;

	/**
	 * @class Calendar
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {Date|string=TODAY}       options.data.date               <=> 当前选择的日期
	 * @param {Date|string=null}        options.data.minDate             => 最小日期，如果为空则不限制
	 * @param {Date|string=null}        options.data.maxDate             => 最大日期，如果为空则不限制
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Calendar = Component.extend({
	    name: 'calendar',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            date: null,
	            minDate: null,
	            maxDate: null,
	            _days: []
	        });
	        this.supr();

	        this.$watch('date', function(newValue, oldValue) {
	            // 字符类型自动转为日期类型
	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.date = new Date(newValue);
	            }

	            // 如果newValue为空或非法日期， 则自动转到今天
	            if(!newValue || newValue == 'Invalid Date')
	                return this.data.date = new Date((new Date/MS_OF_DAY>>0)*MS_OF_DAY);

	            // 如果超出日期范围，则设置为范围边界的日期
	            var isOutOfRange = this.isOutOfRange(newValue);
	            if(isOutOfRange) {
	                this.data.date = isOutOfRange;

	                // 防止第二次刷新同月
	                this._update();
	                return;
	            }

	            if(!oldValue || !oldValue.getFullYear)
	                this._update();
	            else if(newValue.getFullYear() !== oldValue.getFullYear() || newValue.getMonth() !== oldValue.getMonth())
	                this._update();

	            /**
	             * @event change 日期改变时触发
	             * @property {object} date 改变后的日期
	             */
	            this.$emit('change', {
	                date: newValue
	            });
	        });

	        this.$watch('minDate', function(newValue, oldValue) {
	            if(!newValue)
	                return;

	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.minDate = new Date(newValue);
	            }

	            if(newValue == 'Invalid Date')
	                return this.data.minDate = null;
	        });

	        this.$watch('maxDate', function(newValue, oldValue) {
	            if(!newValue)
	                return;

	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.maxDate = new Date(newValue);
	            }

	            if(newValue == 'Invalid Date')
	                return this.data.maxDate = null;
	        });

	        this.$watch(['minDate', 'maxDate'], function(minDate, maxDate) {
	            if(!(minDate && minDate instanceof Date || maxDate && maxDate instanceof Date))
	                return;

	            if(minDate && maxDate)
	                if(minDate/MS_OF_DAY>>0 > maxDate/MS_OF_DAY>>0)
	                    throw new Calendar.DateRangeException(minDate, maxDate);
	            
	            // 如果超出日期范围，则设置为范围边界的日期
	            var isOutOfRange = this.isOutOfRange(this.data.date);
	            if(isOutOfRange)
	                this.data.date = isOutOfRange;
	        });
	    },
	    /**
	     * @method _update() 日期改变后更新日历
	     * @private
	     * @return {void}
	     */
	    _update: function() {
	        this.data._days = [];
	        
	        var date = this.data.date;
	        var month = date.getMonth();
	        var mfirst = new Date(date); mfirst.setDate(1);
	        var mfirstTime = +mfirst;
	        var nfirst = new Date(mfirst); nfirst.setMonth(month + 1); nfirst.setDate(1);
	        var nfirstTime = +nfirst;
	        var lastTime = nfirstTime + ((7 - nfirst.getDay())%7 - 1)*MS_OF_DAY;
	        var num = - mfirst.getDay();
	        var tmpTime, tmp;
	        do {
	            tmpTime = mfirstTime + (num++)*MS_OF_DAY;
	            tmp = new Date(tmpTime);
	            this.data._days.push(tmp);
	        } while(tmpTime < lastTime);
	    },
	    /**
	     * @method addYear(year) 调整年份
	     * @public
	     * @param  {number=0} year 加/减的年份
	     * @return {Date} date 计算后的日期
	     */
	    addYear: function(year) {
	        if(this.data.readonly || this.data.disabled || !year)
	            return;

	        var date = new Date(this.data.date);
	        var oldMonth = date.getMonth();
	        date.setFullYear(date.getFullYear() + year);
	        if(date.getMonth() != oldMonth)
	            date.setDate(0);
	        
	        return this.data.date = date;
	    },
	    /**
	     * @method addMonth(month) 调整月份
	     * @public
	     * @param  {number=0} month 加/减的月份
	     * @return {Date} date 计算后的日期
	     */
	    addMonth: function(month) {
	        if(this.data.readonly || this.data.disabled || !month)
	            return;

	        var date = new Date(this.data.date);
	        var correctMonth = date.getMonth() + month;
	        date.setMonth(correctMonth);
	        // 如果跳月，则置为上一个月
	        if((date.getMonth() - correctMonth)%12)
	            date.setDate(0);
	        
	        return this.data.date = date;
	    },
	    /**
	     * @method select(date) 选择一个日期
	     * @public
	     * @param  {Date=null} date 选择的日期
	     * @return {void}
	     */
	    select: function(date) {
	        if(this.data.readonly || this.data.disabled || this.isOutOfRange(date))
	            return;

	        this.data.date = new Date(date);

	        /**
	         * @event select 选择某一个日期时触发
	         * @property {object} date 当前选择的日期
	         */
	        this.$emit('select', {
	            date: date
	        });
	    },
	    /**
	     * @method goToday() 回到今天
	     * @public
	     * @return {void}
	     */
	    goToday: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.data.date = new Date((new Date/MS_OF_DAY>>0)*MS_OF_DAY);
	    },
	    /**
	     * @method isOutOfRange(date) 是否超出规定的日期范围
	     * @public
	     * @param {Date} date 待测的日期
	     * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
	     */
	    isOutOfRange: function(date) {
	        var minDate = this.data.minDate;
	        var maxDate = this.data.maxDate;

	        // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
	        var minDate = minDate && new Date((minDate/MS_OF_DAY>>0)*MS_OF_DAY);
	        var maxDate = maxDate && new Date((maxDate/MS_OF_DAY>>0)*MS_OF_DAY);

	        // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
	        return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
	    }
	});

	Calendar.DateRangeException = function(minDate, maxDate) {
	    this.type = 'DateRangeException';
	    this.message = 'Wrong Date Range where `minDate` is ' + minDate + ' and `maxDate` is ' + maxDate + '!';
	}

	Calendar.DateRangeException.prototype.toString = function() {
	    return this.message;
	}

	module.exports = Calendar;

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-calendar {class}\" z-dis={disabled} r-hide={!visible}>\n    <div class=\"calendar_hd\">\n        <span class=\"calendar_prev\">\n            <span class=\"calendar_item\" on-click={this.addYear(-1)}><i class=\"u-icon u-icon-angle-double-left\"></i></span>\n            <span class=\"calendar_item\" on-click={this.addMonth(-1)}><i class=\"u-icon u-icon-angle-left\"></i></span>\n        </span>\n        <span>{date | format: 'yyyy-MM'}</span>\n        <span class=\"calendar_next\">\n            <span class=\"calendar_item\" on-click={this.addMonth(1)}><i class=\"u-icon u-icon-angle-right\"></i></span>\n            <span class=\"calendar_item\" on-click={this.addYear(1)}><i class=\"u-icon u-icon-angle-double-right\"></i></span>\n        </span>\n    </div>\n    <div class=\"calendar_bd\">\n        <div class=\"calendar_week\"><span class=\"calendar_item\">日</span><span class=\"calendar_item\">一</span><span class=\"calendar_item\">二</span><span class=\"calendar_item\">三</span><span class=\"calendar_item\">四</span><span class=\"calendar_item\">五</span><span class=\"calendar_item\">六</span></div>\n        <div class=\"calendar_day\">{#list _days as day}<span class=\"calendar_item\" z-sel={date.toDateString() === day.toDateString()} z-dis={!!this.isOutOfRange(day)} r-class={ {'z-muted': date.getMonth() !== day.getMonth()} } on-click={this.select(day)}>{day | format: 'dd'}</span>{/list}</div>\n        {#inc this.$body}\n    </div>\n</div>"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TimePicker 时间选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Component = __webpack_require__(2);
	var template = __webpack_require__(53);
	var _ = __webpack_require__(4);
	var NumberInput = __webpack_require__(22);

	/**
	 * @class TimePicker
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string='00:00'}          options.data.time               <=> 当前的时间值
	 * @param {string='00:00'}          options.data.minTime             => 最小时间
	 * @param {string='23:59'}          options.data.maxTime             => 最大时间
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var TimePicker = Component.extend({
	    name: 'timePicker',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            time: '00:00',
	            hour: 0,
	            minute: 0,
	            minTime: '00:00',
	            maxTime: '23:59',
	            autofocus: false
	        });
	        this.supr();

	        this.$watch('time', function(newValue, oldValue) {
	            if(!newValue)
	                throw new TimePicker.TimeFormatException(newValue);

	            // 如果超出时间范围，则设置为范围边界的时间
	            var isOutOfRange = this.isOutOfRange(newValue);
	            if(isOutOfRange)
	                return this.data.time = isOutOfRange;

	            time = newValue.split(':');
	            this.data.hour = +time[0];
	            this.data.minute = +time[1];

	            /**
	             * @event change 时间改变时触发
	             * @property {object} time 改变后的时间
	             */
	            this.$emit('change', {
	                time: newValue
	            });
	        });

	        this.$watch(['hour', 'minute'], function(hour, minute) {
	            hour += '';
	            minute += '';
	            this.data.time = (hour.length > 1 ? hour : '0' + hour) + ':' + (minute.length > 1 ? minute : '0' + minute);
	        });

	        this.$watch(['minTime', 'maxTime'], function(minTime, maxTime) {
	            if(!minTime)
	                throw new TimePicker.TimeFormatException(minTime);
	            if(!maxTime)
	                throw new TimePicker.TimeFormatException(maxTime);

	            if(minTime > maxTime)
	                    throw new TimePicker.TimeRangeException(minTime, maxTime);
	            
	            // 如果超出时间范围，则设置为范围边界的时间
	            var isOutOfRange = this.isOutOfRange(this.data.time);
	            if(isOutOfRange)
	                this.data.time = isOutOfRange;
	        });
	    },
	    /**
	     * @method isOutOfRange(time) 是否超出规定的时间范围
	     * @public
	     * @param {Time} time 待测的时间
	     * @return {boolean|Time} time 如果没有超出时间范围，则返回false；如果超出时间范围，则返回范围边界的时间
	     */
	    isOutOfRange: function(time) {
	        var minTime = this.data.minTime;
	        var maxTime = this.data.maxTime;

	        // minTime && time < minTime && minTime，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的时间
	        return (minTime && time < minTime && minTime) || (maxTime && time > maxTime && maxTime);
	    }
	});

	TimePicker.TimeFormatException = function(time) {
	    this.message = 'Wrong Time Format: ' + time + '!';
	}

	TimePicker.TimeFormatException.prototype.toString = function() {
	    return this.message;
	}

	TimePicker.TimeRangeException = function(minTime, maxTime) {
	    this.type = 'TimeRangeException';
	    this.message = 'Wrong Time Range where `minTime` is ' + minTime + ' and `maxTime` is ' + maxTime + '!';
	}

	TimePicker.TimeRangeException.prototype.toString = function() {
	    return this.message;
	}

	module.exports = TimePicker;

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<span class=\"u-timepicker {class}\" r-hide={!visible}>\n\t<numberInput min=\"0\" max=\"23\" format=\"00\" value={hour} readonly={readonly} disabled={disabled} autofocus={autofocus} />\n\t<span>:</span>\n\t<numberInput min=\"0\" max=\"59\" format=\"00\" value={minute} readonly={readonly} disabled={disabled} />\n</span>"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * DateTimePicker 日期选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Dropdown = __webpack_require__(11);
	var DatePicker = __webpack_require__(47);
	var template = __webpack_require__(55);
	var _ = __webpack_require__(4);

	var filter = __webpack_require__(49).filter;
	var Calendar = __webpack_require__(50);
	var TimePicker = __webpack_require__(52);
	var compatibility = __webpack_require__(49).compatibility;

	/**
	 * @class DateTimePicker
	 * @extend Dropdown
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object=null}             options.data.date               <=> 当前选择的日期时间
	 * @param {string='请输入'}         options.data.placeholder         => 文本框的占位文字
	 * @param {Date|string=null}        options.data.minDate             => 最小日期时间，如果为空则不限制
	 * @param {Date|string=null}        options.data.maxDate             => 最大日期时间，如果为空则不限制
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var DateTimePicker = Dropdown.extend({
	    name: 'dateTimePicker',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {   
	        _.extend(this.data, {
	            // @inherited source: [],
	            // @inherited open: false,
	            minDate: null,
	            maxDate: null,
	            placeholder: '请输入',
	            date: null,
	            _date: undefined,
	            _time: undefined,
	            autofocus: false
	        });
	        this.supr();

	        this.$watch('date', function(newValue, oldValue) {
	            // 字符类型自动转为日期类型
	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.date = new Date(newValue);
	            }

	            // 如果newValue为非法日期，则置为空 
	            if(newValue == 'Invalid Date' || newValue == 'NaN')
	                return this.data.date = null;

	            // 如果不为空并且超出日期范围，则设置为范围边界的日期
	            if(newValue) {
	                var isOutOfRange = this.isOutOfRange(newValue);
	                if(isOutOfRange)
	                    return this.data.date = isOutOfRange;
	            }

	            if(newValue && newValue - oldValue !== 0) {
	                this.data.date.setSeconds(0);
	                this.data.date.setMilliseconds(0);
	                this.data._date = new Date(newValue);
	                this.data._time = filter.format(newValue, 'HH:mm');
	            }

	            /**
	             * @event change 日期时间改变时触发
	             * @property {object} date 改变后的日期时间
	             */
	            this.$emit('change', {
	                date: newValue
	            });
	        });

	        this.$watch('minDate', function(newValue, oldValue) {
	            if(!newValue)
	                return;

	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.minDate = new Date(newValue);
	            }

	            if(newValue == 'Invalid Date' || newValue == 'NaN')
	                return this.data.minDate = null;
	        });

	        this.$watch('maxDate', function(newValue, oldValue) {
	            if(!newValue)
	                return;

	            if(typeof newValue === 'string') {
	                if(compatibility.isIE8)
	                    return this.data.date = compatibility.StringDate(newValue);
	                return this.data.maxDate = new Date(newValue);
	            }

	            if(newValue == 'Invalid Date' || newValue == 'NaN')
	                return this.data.maxDate = null;
	        });

	        this.$watch(['minDate', 'maxDate'], function(minDate, maxDate) {
	            if(!(minDate && minDate instanceof Date || maxDate && maxDate instanceof Date))
	                return;

	            if(minDate && maxDate && minDate - maxDate > 0)
	                    throw new Calendar.DateRangeException(minDate, maxDate);

	            // 如果不为空并且超出日期范围，则设置为范围边界的日期
	            if(this.data.date) {
	                var isOutOfRange = this.isOutOfRange(this.data.date);
	                if(isOutOfRange)
	                    return this.data.date = isOutOfRange;
	            }
	        });
	    },
	    /**
	     * @method _update(date, time) 日期或时间改变后更新日期时间
	     * @private
	     * @return {void}
	     */
	    _update: function(date, time) {
	        if(!time)
	            return this.data._time = '00:00';

	        date = new Date(date);
	        time = time.split(':');
	        date.setHours(time[0]);
	        date.setMinutes(time[1]);
	        this.data.date = date;


	    },
	    /**
	     * @method select()
	     * @public
	     * @ignore
	     */
	    select: function() {
	        /**
	         * @event select
	         * @public
	         * @ignore
	         */
	    },
	    /**
	     * @method _input($event) 输入日期
	     * @private
	     * @param  {object} $event
	     * @return {void}
	     */
	    _input: function($event) {
	        var value = $event.target.value;
	        var date = value ? new Date(value) : null;

	        if(date != 'Invalid Date')
	            this.data.date = date;
	        else
	            $event.target.value = filter.format(this.data.date, 'yyyy-MM-dd HH:mm');
	    },
	    /**
	     * @method isOutOfRange(date) 是否超出规定的日期时间范围
	     * @public
	     * @param {Date} date 待测的日期时间
	     * @return {boolean|Date} date 如果没有超出日期时间范围，则返回false；如果超出日期时间范围，则返回范围边界的日期时间
	     */
	    isOutOfRange: function(date) {
	        var minDate = this.data.minDate;
	        var maxDate = this.data.maxDate;

	        // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期时间。
	        return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
	    }
	});

	module.exports = DateTimePicker;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-datetimepicker {class}\" z-dis={disabled} r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\">\n        <input class=\"u-input u-input-full\" placeholder={placeholder} value={date | format: 'yyyy-MM-dd HH:mm'} ref=\"input\" autofocus={autofocus} readonly={readonly} disabled={disabled}\n            on-focus={this.toggle(true)} on-change={this._input($event)}>\n    </div>\n    <div class=\"dropdown_bd\" r-show={open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <calendar minDate={minDate} maxDate={maxDate} date={_date} on-select={this._update($event.date, _time)}>\n            <timePicker time={_time} on-change={this._update(_date, _time)} />\n        </calendar>\n    </div>\n</div>"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Progress  进度条
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(57);
	var _ = __webpack_require__(4);

	/**
	 * @class Progress
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {number=36}               options.data.percent             => 百分比
	 * @param {string|boolean=true}     options.data.text                => 在进度条中是否显示百分比。值为`string`时显示该段文字。
	 * @param {string=null}             options.data.size                => 进度条的尺寸
	 * @param {string=null}             options.data.state               => 进度条的状态
	 * @param {boolean=false}           options.data.striped             => 是否显示条纹
	 * @param {boolean=false}           options.data.active              => 进度条是否为激活状态，当`striped`为`true`时，进度条显示动画
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Progress = Component.extend({
	    name: 'progress',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            percent: 36,
	            text: true,
	            size: null,
	            state: null,
	            striped: false,
	            active: false
	        });
	        this.supr();
	    }
	});

	module.exports = Progress;

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-progress u-progress-{@(size)} u-progress-{@(state)} {class}\" r-class={ {'u-progress-striped': striped, 'z-act': active} } r-hide={!visible}>\n    <div class=\"progress_bar\" style=\"width: {percent}%;\">{text ? (text === true ? percent + '%' : text) : ''}</div>\n</div>"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Loading   加载中
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(59);
	var _ = __webpack_require__(4);

	/**
	 * @class Loading
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.static              => 是否嵌入文档流
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Loading = Component.extend({
	    name: 'loading',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            'static': false,
	            visible: false
	        });
	        this.supr();
	    },
	    /**
	     * @protected
	     */
	    init: function() {
	        this.supr();
	        // 证明不是内嵌组件
	        if(this.$root === this)
	            this.$inject(document.body);
	    },
	    /**
	     * @method show() 显示组件
	     * @public
	     * @return {void}
	     */
	    show: function() {
	        if(this.data.disabled)
	            return;

	        this.data.visible = true;
	        this.$update();
	    },
	    /**
	     * @method show() 隐藏组件
	     * @public
	     * @return {void}
	     */
	    hide: function() {
	        if(this.data.disabled)
	            return;

	        this.data.visible = false;
	        this.$update();
	    }
	});

	/**
	 * 直接初始化一个实例
	 * @type {Loading}
	 */
	var loading = new Loading();
	Loading.loading = loading;

	/**
	 * @method show() 显示加载中
	 * @static
	 * @public
	 * @return {void}
	 */
	Loading.show = function() {
	    loading.show();
	}

	/**
	 * @method hide() 隐藏加载中
	 * @static
	 * @public
	 * @return {void}
	 */
	Loading.hide = function() {
	    loading.hide();
	}

	module.exports = Loading;

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-loading {class}\" r-class={ {'u-loading-static': static} } r-hide={!visible}>\n    {#if this.$body}\n        {#inc this.$body}\n    {#else}\n        <i class=\"u-icon u-icon-spinner u-icon-spin\"></i>\n    {/if}\n</div>"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Gotop  回到顶部
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(61);
	var _ = __webpack_require__(4);

	/**
	 * @class Gotop
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string='bottomright'}    options.data.position            => 组件的位置，可选参数：`topcenter`、`topleft`、`topright`、`bottomcenter`、`bottomleft`、`bottomright`、`static`
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Gotop = Component.extend({
	    name: 'gotop',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            position: 'bottomright'
	        });
	        this.supr();
	    },
	    /**
	     * @method gotop() 回到顶部
	     * @public
	     * @return {void}
	     */
	    gotop: function() {
	        if(this.data.disabled)
	            return;

	        document.body.scrollTop = 0;
	    }
	});

	module.exports = Gotop;

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<a class=\"u-gotop u-gotop-{position} {class}\" r-hide={!visible} on-click={this.gotop()}>\n    {#if this.$body}\n        {#inc this.$body}\n    {#else}\n        <i class=\"u-icon u-icon-arrow-up\"></i>\n    {/if}\n</a>"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Tabs       选项卡
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(63);
	var _ = __webpack_require__(4);

	/**
	 * @class Tabs
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Tabs = Component.extend({
	    name: 'tabs',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            tabs: [],
	            selected: null
	        });
	        this.supr();
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.readonly || this.data.disabled || item.data.disabled)
	            return;

	        this.data.selected = item;
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });
	    }
	});

	var Tab = Component.extend({
	    name: 'tab',
	    template: '<div r-hide={this.$outer.data.selected !== this}>{#inc this.$body}</div>',
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            title: ''
	        });
	        this.supr();

	        if(this.$outer)
	            this.$outer.data.tabs.push(this);

	        if(!this.$outer.data.selected)
	            this.$outer.data.selected = this;
	    }
	});

	module.exports = Tabs;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-tabs {class}\" z-dis={disabled} r-hide={!visible}>\n    <ul class=\"tabs_hd\">\n        {#list tabs as item}\n        <li z-crt={item == selected} z-dis={item.data.disabled} on-click={this.select(item)}>{item.data.title}</li>\n        {/list}\n    </ul>\n    <div class=\"tabs_bd\">\n        {#inc this.$body}\n    </div>\n</div>"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Collapse       选项卡
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(65);
	var itemTemplate = __webpack_require__(66);
	var _ = __webpack_require__(4);

	/**
	 * @class Collapse
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.accordion           => 是否每次只展开一个
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Collapse = Component.extend({
	    name: 'collapse',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            panels: [],
	            accordion: false
	        });
	        this.supr();
	    }
	    /**
	     * @method toggle(item) 展开或收起某一项
	     * @private
	     * @param  {object} item 展开收起项
	     * @return {void}
	     */
	});

	var Panel = Component.extend({
	    name: 'panel',
	    template: itemTemplate,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            title: '',
	            open: false
	        });
	        this.supr();

	        if(this.$outer)
	            this.$outer.data.panels.push(this);
	    },
	    toggle: function(open) {
	        if(open && this.$outer.data.accordion) {
	            this.$outer.data.panels.forEach(function(pane) {
	                pane.data.open = false;
	            });
	        }

	        this.data.open = open;
	    }
	});

	module.exports = Collapse;

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-collapse {class}\" z-dis={disabled} r-hide={!visible}>\n    {#inc this.$body}\n</div>"

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-panel {class}\" r-hide={!visible}>\n    <div class=\"panel_hd\" on-click={this.toggle(!open)}>{title}</div>\n    <div r-hide={!open} style=\"overflow: hidden\" r-animation=\"on: enter; class: animated slideInY; on: leave; class: animated slideOutY;\">\n        <div class=\"panel_bd\">\n            {#inc this.$body}\n        </div>\n    </div>\n</div>"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Pager     分页
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Component = __webpack_require__(2);
	var template = __webpack_require__(68);
	var _ = __webpack_require__(4);

	/**
	 * @class Pager
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {number=1}                options.data.current            <=> 当前页
	 * @param {total=11}                options.data.total               => 总页数
	 * @param {string='center'}         options.data.position            => 分页的位置，可选参数：`center`、`left`、`right`
	 * @param {middle=5}                options.data.middle              => 当页数较多时，中间显示的页数
	 * @param {side=2}                  options.data.side                => 当页数较多时，两端显示的页数
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Pager = Component.extend({
	    name: 'pager',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            current: 1,
	            total: 11,
	            position: 'center',
	            middle: 5,
	            side: 2,
	            _start: 1,
	            _end: 5
	        });
	        this.supr();

	        this.$watch(['current', 'total'], function(current, total) {
	            this.data.current = current = +current;
	            this.data.total = total = +total;
	            var show = this.data.middle>>1;
	            var side = this.data.side;

	            this.data._start = current - show;
	            this.data._end = current + show;
	            if(this.data._start < side + 1)
	                this.data._start = side + 1;
	            if(this.data._end > total - side)
	                this.data._end = total - side;
	            if(current - this.data._start < show)
	                this.data._end += this.data._start - current + show;
	            if(this.data._end - current < show)
	                this.data._start += this.data._end - current - show;
	        });

	        this.$watch(['middle', 'side'], function(middle, side) {
	            this.data.middle = +middle;
	            this.data.side = +side;
	        });
	    },
	    /**
	     * @method select(page) 选择某一页
	     * @public
	     * @param  {object} page 选择页
	     * @return {void}
	     */
	    select: function(page) {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        if(page < 1) return;
	        if(page > this.data.total) return;
	        if(page == this.data.current) return;

	        this.data.current = page;
	        /**
	         * @event select 选择某一页时触发
	         * @property {object} current 当前选择页
	         */
	        this.$emit('select', {
	            current: this.data.current
	        });
	    }
	});

	module.exports = Pager;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"m-pager m-pager-{@(position)} {class}\" z-dis={disabled} r-hide={!visible}>\n    <li class=\"pager_prev\" z-dis={current <= 1} on-click={this.select(current - 1)}><a>上一页</a></li>\n    {#if total - middle > side * 2 + 1}\n        {#list 1..side as i}\n        <li z-crt={current == i} on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n        {#if _start > side + 1}<li><span>...</span></li>{/if}\n        {#list _start.._end as i}\n        <li z-crt={current == i} on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n        {#if _end < total - side}<li><span>...</span></li>{/if}\n        {#list (total - side + 1)..total as i}\n        <li z-crt={current == i} on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n    {#else}\n        {#list 1..total as i}\n        <li z-crt={current == i} on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n    {/if}\n    <li class=\"pager_next\" z-dis={current >= total} on-click={this.select(current + 1)}><a>下一页</a></li>\n</ul>"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Notify    通知
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(70);
	var _ = __webpack_require__(4);

	/**
	 * @class Notify
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string='topcenter'}      options.data.position            => 通知的位置，可选参数：`topcenter`、`topleft`、`topright`、`bottomcenter`、`bottomleft`、`bottomright`、`static`
	 * @param {number=2000}             options.data.duration            => 每条消息的停留毫秒数，如果为0，则表示消息常驻不消失。
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Notify = Component.extend({
	    name: 'notify',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            messages: [],
	            position: 'topcenter',
	            duration: 2000
	        });
	        this.supr();
	    },
	    /**
	     * @protected
	     */
	    init: function() {
	        this.supr();
	        // 证明不是内嵌组件
	        if(this.$root === this)
	            this.$inject(document.body);
	    },
	    /**
	     * @method show(text[,state][,duration]) 弹出一个消息
	     * @public
	     * @param  {string=''} text 消息内容
	     * @param  {string=null} state 消息状态，可选参数：`info`、`success`、`warning`、`error`
	     * @param  {number=notify.duration} duration 该条消息的停留毫秒数，如果为0，则表示消息常驻不消失。
	     * @return {void}
	     */
	    show: function(text, state, duration) {
	        var message = {
	            text: text,
	            state: state,
	            duration: duration >= 0 ? duration : this.data.duration
	        };
	        this.data.messages.unshift(message);
	        this.$update();

	        if(+message.duration)
	            this.$timeout(this.close.bind(this, message), +message.duration);

	        /**
	         * @event show 弹出一个消息时触发
	         * @property {object} message 弹出的消息对象
	         */
	        this.$emit('show', {
	            message: message
	        });
	    },
	    /**
	     * @method close(message) 关闭某条消息
	     * @public
	     * @param  {object} message 需要关闭的消息对象
	     * @return {void}
	     */
	    close: function(message) {
	        var index = this.data.messages.indexOf(message);
	        this.data.messages.splice(index, 1);
	        this.$update();
	        /**
	         * @event close 关闭某条消息时触发
	         * @property {object} message 关闭了的消息对象
	         */
	        this.$emit('close', {
	            message: message
	        });
	    },
	    /**
	     * @method closeAll() 关闭所有消息
	     * @public
	     * @return {void}
	     */
	    closeAll: function() {
	        this.$update('messages', []);
	    }
	}).use('$timeout');


	/**
	 * 直接初始化一个实例
	 * @state {Notify}
	 */
	var notify = new Notify();
	Notify.notify = notify;

	/**
	 * @method show(text[,state][,duration]) 弹出一个消息
	 * @static
	 * @public
	 * @param  {string=''} text 消息内容
	 * @param  {string=null} state 消息状态，可选参数：`info`、`success`、`warning`、`error`
	 * @param  {number=notify.duration} duration 该条消息的停留毫秒数，如果为0，则表示消息常驻不消失。
	 * @return {void}
	 */
	Notify.show = function() {
	    notify.show.apply(notify, arguments);
	}
	/**
	 * @method [info|success|warning|error](text) 弹出特殊类型的消息
	 * @static
	 * @public
	 * @param  {string=''} text 消息内容
	 * @return {void}
	 */
	var states = ['success', 'warning', 'info', 'error'];
	states.forEach(function(state) {
	    Notify[state] = function(text) {
	        Notify.show(text, state);
	    }
	});
	/**
	 * @method close(message) 关闭某条消息
	 * @static
	 * @public
	 * @param  {object} message 需要关闭的消息对象
	 * @return {void}
	 */
	Notify.close = function() {
	    notify.close.apply(notify, arguments);
	}
	/**
	 * @method closeAll() 关闭所有消息
	 * @static
	 * @public
	 * @return {void}
	 */
	Notify.closeAll = function() {
	    notify.closeAll.apply(notify, arguments);
	}

	module.exports = Notify;

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-notify m-notify-{@(position)} {class}\" r-hide={!visible}>\n    {#list messages as message}\n    <div class=\"u-message u-message-{@(message.state)}\" r-animation=\"on: enter; class: animated fadeIn fast; on: leave; class: animated fadeOut fast;\">\n        <a class=\"message_close\" on-click={this.close(message)}><i class=\"u-icon u-icon-close\"></i></a>\n        <i class=\"message_icon u-icon u-icon-{@(message.state)}-circle\" r-hide={@(!message.state)}></i>\n        {@(message.text)}\n    </div>\n    {/list}\n</div>"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Modal     模态对话框
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(72);
	var _ = __webpack_require__(4);

	var Draggable = __webpack_require__(73).Draggable;

	/**
	 * @class Modal
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性 | Binding Properties
	 * @param {string='提示'}           options.data.title               => 对话框标题 | Title of Dialog
	 * @param {string=''}               options.data.content             => 对话框内容
	 * @param {string|boolean=true}     options.data.okButton            => 是否显示确定按钮。值为`string`时显示该段文字。
	 * @param {string|boolean=false}    options.data.cancelButton        => 是否显示取消按钮。值为`string`时显示该段文字。
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Modal = Component.extend({
	    name: 'modal',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            title: '提示',
	            content: '',
	            okButton: true,
	            cancelButton: false,
	            draggable: false
	        });
	        this.supr();
	    },
	    /**
	     * @protected
	     */
	    init: function() {
	        this.supr();
	        // 证明不是内嵌组件
	        if(this.$root === this)
	            this.$inject(document.body);
	    },
	    /**
	     * @method close(result) 关闭对话框
	     * @public
	     * @param  {boolean} result 点击确定还是取消
	     * @return {void}
	     */
	    close: function(result) {
	        /**
	         * @event close 关闭对话框时触发
	         * @property {boolean} result 点击了确定还是取消
	         */
	        this.$emit('close', {
	            result: result
	        });
	        result ? this.ok() : this.cancel();
	    },
	    /**
	     * @method ok() 确定对话框
	     * @public
	     * @return {void}
	     */
	    ok: function() {
	        /**
	         * @event ok 确定对话框时触发
	         */
	        this.$emit('ok');

	        this.destroy();
	    },
	    /**
	     * @method cancel() 取消对话框
	     * @public
	     * @return {void}
	     */
	    cancel: function() {
	        /**
	         * @event cancel 取消对话框时触发
	         */
	        this.$emit('cancel');

	        this.destroy();
	    },
	    /**
	     * @private
	     */
	    keyup: function($event) {
	        if($event.which == 13)
	            this.ok();
	    },
	    _onDragStart: function($event) {
	        var dialog = this.$refs.modalDialog;
	        dialog.style.left = dialog.offsetLeft + 'px';
	        dialog.style.top = dialog.offsetTop + 'px';
	        dialog.style.zIndex = '1000';
	        dialog.style.position = 'absolute';
	    },
	    _onDrag: function($event) {
	        var dialog = this.$refs.modalDialog;
	        dialog.style.left = dialog.offsetLeft + $event.movementX + 'px';
	        dialog.style.top = dialog.offsetTop + $event.movementY + 'px';
	    }
	});

	/**
	 * @method alert(content[,title]) 弹出一个alert对话框。关闭时始终触发确定事件。
	 * @static
	 * @public
	 * @param  {string=''} content 对话框内容
	 * @param  {string='提示'} title 对话框标题
	 * @return {Modal} modal 返回该对话框
	 */
	Modal.alert = function(content, title, okButton) {
	    var modal = new Modal({
	        data: {
	            content: content,
	            title: title,
	            okButton: okButton
	        }
	    });

	    return modal;
	}

	/**
	 * @method confirm(content[,title]) 弹出一个confirm对话框
	 * @static
	 * @public
	 * @param  {string=''} content 对话框内容
	 * @param  {string='提示'} title 对话框标题
	 * @return {Modal} modal 返回该对话框
	 */
	Modal.confirm = function(content, title, okButton, cancelButton) {
	    var modal = new Modal({
	        data: {
	            content: content,
	            title: title,
	            okButton: okButton,
	            cancelButton: cancelButton || true
	        }
	    });
	    
	    return modal;
	}

	module.exports = Modal;


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-modal {class}\" on-keyup={this.keyup($event)} r-hide={!visible}>\n    <div class=\"modal_dialog\" ref=\"modalDialog\">\n        <draggable disabled={!draggable} image=\"empty\" effect=\"none\" on-dragstart={this._onDragStart($event)} on-drag={this._onDrag($event)}>\n        <div class=\"modal_hd\">\n            <a class=\"modal_close\" on-click={this.close(!cancelButton)}><i class=\"u-icon u-icon-close\"></i></a>\n            <h3 class=\"modal_title\">{title}</h3>\n        </div>\n        </draggable>\n        <div class=\"modal_bd\">\n            {#if contentTemplate}{#inc @(contentTemplate)}{#else}{content}{/if}\n        </div>\n        <div class=\"modal_ft\">\n            {#if okButton}\n            <button class=\"u-btn u-btn-primary\" on-click={this.close(true)}>{okButton === true ? '确定' : okButton}</button>\n            {/if}\n            {#if cancelButton}\n            <button class=\"u-btn\" on-click={this.close(false)}>{cancelButton === true ? '取消' : cancelButton}</button>\n            {/if}\n        </div>\n    </div>\n</div>"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    Draggable: __webpack_require__(74),
	    Droppable: __webpack_require__(76)
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Draggable  拖拽
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var _ = __webpack_require__(4);
	var dragDrop = __webpack_require__(75);

	var isFirefox = navigator.userAgent.indexOf('Firefox') >= 0;

	/**
	 * @class Draggable
	 * @extend Regular
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Image|function='auto'}  options.data.image  @=> 拖拽时的图像。值为`auto`拖拽时，复制一个拖拽元素的图像（浏览器的默认设置），值为`empty`拖拽时不显示图像，可以用`<draggable.image>`自定义图像。也可以直接传入一个函数，要求返回{image: 图像元素, x: 横向偏移, y: 纵向偏移}。
	 * @param {string}                  options.data.effect              => 效果（与浏览器的effectAllowed一致）。可选的值有`none`、`uninitialized`、`all`、`copy`、`move`、`link`、`copyLink`、`copyMove`、`linkMove`。
	 * @param {object}                  options.data.data                => 拖拽时需要传递的数据
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 */
	var Draggable = Regular.extend({
	    name: 'draggable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            image: 'auto',
	            effect: undefined,
	            data: null,
	            disabled: false
	        });
	        this.supr();
	    },
	    init: function() {
	        // 修改内部DOM元素
	        var inner = _.dom.element(this);
	        _.dom.on(inner, 'dragstart', this._onDragStart.bind(this));
	        _.dom.on(inner, 'drag', this._onDrag.bind(this));
	        _.dom.on(inner, 'dragend', this._onDragEnd.bind(this));

	        this._onDragOverDocument = this._onDragOverDocument.bind(this);

	        this.$watch('disabled', function(newValue) {
	            inner.draggable = !newValue;

	            if(newValue)
	                _.dom.delClass(inner, 'z-draggable');
	            else
	                _.dom.addClass(inner, 'z-draggable');

	        });
	        this.supr();
	    },
	    _getImageData: function() {
	        if(typeof this.data.image === 'function')
	            return this.data.image();
	        else if(this.data.image instanceof Draggable.Image) {
	            var image = _.dom.element(this.data.image);
	            return {
	                image: image,
	                x: this.data.image.data.x,
	                y: this.data.image.data.y,
	                appendToBody: true
	            };
	        } else if(this.data.image === 'empty') {
	            var empty = document.createElement('span');
	            empty.innerHTML = '&nbsp;';
	            empty.style.position = 'fixed';
	            return {
	                image: empty,
	                x: 0, y: 0,
	                appendToBody: true
	            };
	        } else if(this.data.image === 'auto')
	            return null;
	    },
	    _onDragStart: function($event) {
	        var e = $event.event;

	        // 处理DataTransfer
	        // IE低版本没有这个属性
	        if(e.dataTransfer) {
	            var imageData = this._getImageData();
	            if(imageData) {
	                imageData.appendToBody && document.body.appendChild(imageData.image);
	                e.dataTransfer.setDragImage(imageData.image, imageData.x, imageData.y);
	            }

	            if(this.data.effect)
	                e.dataTransfer.effectAllowed = this.data.effect;

	            // Firefox必须设置这个东西
	            e.dataTransfer.setData('text', '');
	        }

	        dragDrop.data = this.data.data;
	        dragDrop.cancel = false;
	        dragDrop.movementX = 0;
	        dragDrop.movementY = 0;
	        dragDrop.screenX = e.screenX;
	        dragDrop.screenY = e.screenY;
	        dragDrop.imageData = imageData;

	        isFirefox && _.dom.on(document.body, 'dragover', this._onDragOverDocument);

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data
	        }, $event), e);
	        this.$emit('dragstart', eventData);

	        _.dom.addClass(e.target, 'z-dragging');
	    },
	    _onDrag: function($event) {
	        var e = $event.event;

	        // 拖拽结束时会监听到一个都为0的事件
	        if(e.clientX === 0 && e.clientY === 0 && e.screenX === 0 && e.screenY === 0)
	            return;

	        dragDrop.movementX = e.screenX - dragDrop.screenX;
	        dragDrop.movementY = e.screenY - dragDrop.screenY;
	        dragDrop.screenX = e.screenX;
	        dragDrop.screenY = e.screenY;

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data,
	            movementX: dragDrop.movementX,
	            movementY: dragDrop.movementY
	        }, $event), e);
	        this.$emit('drag', eventData);
	    },
	    _onDragEnd: function($event) {
	        var e = $event.event;

	        isFirefox && _.dom.off(document.body, 'dragover', this._onDragOverDocument);

	        _.dom.delClass(e.target, 'z-dragging');
	        if(dragDrop.imageData && dragDrop.imageData.appendToBody)
	            document.body.removeChild(dragDrop.imageData.image);

	        dragDrop.data = null;
	        dragDrop.cancel = false;
	        dragDrop.imageData = null;

	        var eventData = _.extend(_.extend({}, $event), e);
	        this.$emit('dragend', eventData);
	    },
	    // For FireFox
	    _onDragOverDocument: function($event) {
	        var e = $event.event;

	        // 拖拽结束时会监听到一个都为0的事件
	        if(e.clientX === 0 && e.clientY === 0 && e.screenX === 0 && e.screenY === 0)
	            return;

	        dragDrop.movementX = e.screenX - dragDrop.screenX;
	        dragDrop.movementY = e.screenY - dragDrop.screenY;
	        dragDrop.screenX = e.screenX;
	        dragDrop.screenY = e.screenY;

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data,
	            movementX: dragDrop.movementX,
	            movementY: dragDrop.movementY
	        }, $event), e);
	        this.$emit('drag', eventData);
	    }
	});

	Draggable.Image = Regular.extend({
	    name: 'draggable.image',
	    template: '{#inc this.$body}',
	    config: function() {
	        _.extend(this.data, {
	            x: 0,
	            y: 0
	        });
	        this.supr();
	    },
	    init: function() {
	        var image = _.dom.element(this);
	        image.style.position = 'fixed';
	        if(this.$outer instanceof Draggable)
	            this.$outer.data.image = this;
	    }
	})

	module.exports = Draggable;

/***/ },
/* 75 */
/***/ function(module, exports) {

	var dragDrop = {
	    data: null,
	    cancel: false,
	    screenX: 0,
	    screenY: 0,
	    movementX: 0,
	    movementY: 0
	}

	module.exports = dragDrop;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Droppable  放置
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var _ = __webpack_require__(4);
	var dragDrop = __webpack_require__(75);

	/**
	 * @class Droppable
	 * @extend Regular
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object}                  options.data.effect              => 效果（与浏览器的dropEffect一致）。可选的值有`none`、`copy`、`move`、`link`。
	 * @param {object}                  options.data.data               <=  拖放后传递过来的数据
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 */
	var Droppable = Regular.extend({
	    name: 'droppable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            effect: undefined,
	            data: null,
	            disabled: false
	        });
	        this.supr();
	    },
	    init: function() {
	        // 修改内部DOM元素
	        var inner = _.dom.element(this);
	        _.dom.on(inner, 'dragenter', this._onDragEnter.bind(this));
	        _.dom.on(inner, 'dragover', this._onDragOver.bind(this));
	        _.dom.on(inner, 'dragleave', this._onDragLeave.bind(this));
	        _.dom.on(inner, 'drop', this._onDrop.bind(this));

	        this.$watch('disabled', function(newValue) {
	            if(newValue)
	                _.dom.delClass(inner, 'z-droppable');
	            else
	                _.dom.addClass(inner, 'z-droppable');
	        });

	        this.supr();
	    },
	    _onDragEnter: function($event) {
	        if(dragDrop.cancel)
	            return;

	        var e = $event.event;

	        if(this.data.effect)
	            e.dataTransfer.dropEffect = this.data.effect;
	        if(this.data.disabled)
	            return dragDrop.cancel = true;

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data,
	            cancel: dragDrop.cancel
	        }, $event), e);
	        this.$emit('dragenter', eventData);

	        if(eventData.cancel)
	            return dragDrop.cancel = eventData.cancel;

	        _.dom.addClass(e.target, 'z-dragover');
	    },
	    _onDragOver: function($event) {
	        if(dragDrop.cancel)
	            return;

	        $event.preventDefault();
	        var e = $event.event;

	        if(this.data.effect)
	            e.dataTransfer.dropEffect = this.data.effect;

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data,
	            cancel: dragDrop.cancel
	        }, $event), e);
	        this.$emit('dragover', eventData);

	        if(eventData.cancel)
	            return dragDrop.cancel = eventData.cancel;
	    },
	    _onDragLeave: function($event) {
	        var e = $event.event;
	        _.dom.delClass(e.target, 'z-dragover');

	        if(dragDrop.cancel)
	            return dragDrop.cancel = false;

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data
	        }, $event), e);
	        this.$emit('dragleave', eventData);
	    },
	    _onDrop: function($event) {
	        var e = $event.event;
	        _.dom.delClass(e.target, 'z-dragover');

	        if(dragDrop.cancel)
	            return dragDrop.cancel = false;

	        $event.preventDefault();

	        this.data.data = dragDrop.data;
	        this.$update();

	        // emit事件
	        var eventData = _.extend(_.extend({
	            data: dragDrop.data
	        }, $event), e);
	        this.$emit('drop', eventData);
	    }
	});

	module.exports = Droppable;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * ListView  列表视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(7);
	var template = __webpack_require__(78);
	var _ = __webpack_require__(4);

	var Draggable = __webpack_require__(73).Draggable;
	var Droppable = __webpack_require__(73).Droppable;

	/**
	 * @class ListView
	 * @extend SourceComponent
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object[]=[]}             options.data.source             <=> 数据源
	 * @param {string}                  options.data.source[].name       => 每项的内容
	 * @param {object=null}             options.data.selected           <=> 当前选择项
	 * @param {string=null}             options.data.itemTemplate       @=> 单项模板
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 * @param {object}                  options.service                 @=> 数据服务
	 */
	var ListView = SourceComponent.extend({
	    name: 'listView',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            selected: null,
	            itemTemplate: null,
	            dragDrop: false
	        });
	        this.supr();
	    },
	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.readonly || this.data.disabled || item.disabled)
	            return;

	        this.data.selected = item;
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} selected 当前选择项
	         */
	        this.$emit('select', {
	            selected: item
	        });
	    },
	    _onDragEnter: function($event) {
	        if($event.data.root !== this.data.source)
	            $event.cancel = true;
	    },
	    _onDragOver: function($event) {
	        if($event.data.root !== this.data.source)
	            $event.cancel = true;

	        var target = $event.target;
	        _.dom.delClass(target, 'z-dragover-before');
	        _.dom.delClass(target, 'z-dragover-after');

	        var dimension = _.dom.getDimension(target);
	        if($event.clientY < dimension.top + dimension.height/2)
	            _.dom.addClass(target, 'z-dragover-before');
	        else
	            _.dom.addClass(target, 'z-dragover-after');
	    },
	    _onDragLeave: function($event) {
	        // var target = $event.target;
	        // _.dom.delClass(target, 'z-dragover-before');
	        // _.dom.delClass(target, 'z-dragover-after');
	    },
	    _onDrop: function($event, item) {
	        var target = $event.target;
	        _.dom.delClass(target, 'z-dragover-before');
	        _.dom.delClass(target, 'z-dragover-after');

	        if(item === $event.data.item)
	            return $event.stopPropagation();

	        var dimension = _.dom.getDimension(target);

	        var oldItem = $event.data.item;
	        var oldIndex = this.data.source.indexOf(oldItem);
	        this.data.source.splice(oldIndex, 1);

	        var index = this.data.source.indexOf(item);
	        if($event.clientY >= dimension.top + dimension.height/2)
	            index++;
	        this.data.source.splice(index, 0, oldItem);

	        $event.stopPropagation();
	    },
	    _onDragOver2: function($event) {
	        // if($event.data.root !== this.data.source)
	        //     return $event.dataTransfer.dropEffect = 'none';
	    },
	    _onDrop2: function($event) {
	        console.log('drop2');
	        var oldItem = $event.data.item;
	        var oldIndex = this.data.source.indexOf(oldItem);
	        this.data.source.splice(oldIndex, 1);
	        this.data.source.push(oldItem);
	    }
	});

	module.exports = ListView;

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<droppable disabled={!dragDrop} on-dragenter={this._onDragEnter($event)} on-dragover={this._onDragOver2($event)} on-drop={this._onDrop2($event)}>\n<ul class=\"m-listview {class}\" z-dis={disabled} r-hide={!visible}>\n    {#list source as item}\n    <droppable disabled={!dragDrop} on-dragenter={this._onDragEnter($event)} on-dragover={this._onDragOver($event)} on-dragleave={this._onDragLeave($event)} on-drop={this._onDrop($event, item)}>\n    <draggable disabled={!dragDrop} data={ @({root: source, item: item, index: item_index}) }>\n    <li title={item.name} z-sel={selected === item} z-dis={item.disabled} on-click={this.select(item)}>\n        {#if @(itemTemplate)}{#inc @(itemTemplate)}{#else}{item.name}{/if}\n    </li>\n    </draggable>\n    </droppable>\n    {/list}\n</ul>\n</droppable>"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Editor    编辑器
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(80);
	var _ = __webpack_require__(4);

	/**
	 * @class Editor
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性 | Binding Properties
	 */
	var Editor = Component.extend({
	    name: 'modal',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            title: '提示',
	            content: '',
	            okButton: true,
	            cancelButton: false,
	            width: null
	        });
	        this.supr();
	    },
	    /**
	     * @protected
	     */
	    init: function() {
	        this.supr();
	        // 证明不是内嵌组件
	        if(this.$root === this)
	            this.$inject(document.body);
	    },
	    /**
	     * @method close(result) 关闭模态对话框
	     * @public
	     * @param  {boolean} result 点击确定还是取消
	     * @return {void}
	     */
	    close: function(result) {
	        /**
	         * @event close 关闭对话框时触发
	         * @property {boolean} result 点击了确定还是取消
	         */
	        this.$emit('close', {
	            result: result
	        });
	        result ? this.ok() : this.cancel();
	        this.destroy();
	    },
	    /**
	     * @override
	     */
	    ok: function() {
	        /**
	         * @event ok 确定对话框时触发
	         */
	        this.$emit('ok');
	    },
	    /**
	     * @override
	     */
	    cancel: function() {
	        /**
	         * @event close 取消对话框时触发
	         */
	        this.$emit('cancel');
	    }
	});

	module.exports = Editor;


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * HTMLEditor 编辑器
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(82);
	var _ = __webpack_require__(4);

	/**
	 * @class HTMLEditor
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性 | Binding Properties
	 * @param {string=''}               options.data.content            <=> 编辑器内容
	 * @param {number}                  options.data.maxlength           => 文本框的最大长度
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var HTMLEditor = Component.extend({
	    name: 'htmlEditor',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            content: '',
	            maxlength: undefined,
	            autofocus: false
	        });
	        this.supr();
	    },
	    computed: {
	        html: function() {
	            return this.data.content;
	        }
	    },
	    bold: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '<strong>' + rangeData.text + '</strong>';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    italic: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '<em>' + rangeData.text + '</em>';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    quote: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        // var value = this.$refs.textarea.value;
	        // for(var i = rangeData.start - 1; i > 0; i--)
	        //     if(value[i] == '\n') {
	        //         i++;
	        //         break;
	        //     }
	        // rangeData.start = i;
	        // for(var i = rangeData.end; i < value.length; i++)
	        //     if(value[i] == '\n') {
	        //         i--;
	        //         break;
	        //     }
	        // rangeData.end = i;
	        rangeData.text = '<blockquote>' + rangeData.text + '</blockquote>';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    ul: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '<li>' + rangeData.text + '</li>';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    ol: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '<li>' + rangeData.text + '</li>';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    link: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '<a href="#">' + rangeData.text + '</a>';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    image: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.$refs.uploader.upload();
	    },
	    latex: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;
	        
	        var rangeData = this.getCursorPosition();
	        rangeData.text = '$$a^2 + b^2 = c^2$$';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    uploaderSuccess: function(data) {
	        var rangeData = this.getCursorPosition();
	        rangeData.text = '<img src="' + data.result + '">';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    uploaderError: function(e) {
	        Notify.error(e);
	    },
	    getCursorPosition: function() {
	        var textarea = this.$refs.textarea;

	        var rangeData = {text: '', start: 0, end: 0};
	        textarea.focus();

	        if (textarea.setSelectionRange) { // W3C
	            rangeData.start = textarea.selectionStart;
	            rangeData.end = textarea.selectionEnd;
	            rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end): '';
	        } else if (document.selection) { // IE
	            var i,
	                oS = document.selection.createRange(),
	                // Don't: oR = textarea.createTextRange()
	                oR = document.body.createTextRange();
	            oR.moveToElementText(textarea);

	            rangeData.text = oS.text;
	            rangeData.bookmark = oS.getBookmark();

	            // object.moveStart(sUnit [, iCount])
	            // Return Value: Integer that returns the number of units moved.
	            for (i = 0; oR.compareEndPoints('StartToStart', oS) < 0 && oS.moveStart('character', -1) !== 0; i++) {
	                // Why? You can alert(textarea.value.length)
	                if (textarea.value.charAt(i) == '\n') {
	                    i++;
	                }
	            }
	            rangeData.start = i;
	            rangeData.end = rangeData.text.length + rangeData.start;
	        }

	        return rangeData;
	    },
	    setCursorPosition: function(rangeData) {
	        if(!rangeData)
	            throw new Error('You must get cursor position first!');

	        var textarea = this.$refs.textarea;

	        var oldValue = textarea.value;
	        textarea.value = oldValue.substring(0, rangeData.start) + rangeData.text + oldValue.substring(rangeData.end, oldValue.length);
	        rangeData.end = rangeData.start + rangeData.text.length;
	        if (textarea.setSelectionRange) { // W3C
	            textarea.focus();
	            textarea.setSelectionRange(rangeData.start, rangeData.end);
	        } else if (textarea.createTextRange) { // IE
	            var oR = textarea.createTextRange();
	            // Fixbug :
	            // In IE, if cursor position at the end of textarea, the setCursorPosition function don't work
	            if(textarea.value.length === rangeData.start) {
	                oR.collapse(false)
	                oR.select();
	            } else {
	                oR.moveToBookmark(rangeData.bookmark);
	                oR.select();
	            }
	        }
	    }
	});

	module.exports = HTMLEditor;


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-editor {class}\" z-dis={disabled} r-hide={!visible}>\n    <div class=\"editor_preview\" r-html={html}></div>\n    <ul class=\"m-toolbar editor_toolbar\" z-dis={disabled}>\n        <li><a title=\"加粗\" on-click={this.bold()}><i class=\"u-icon u-icon-bold\"></i></a></li>\n        <li><a title=\"斜体\" on-click={this.italic()}><i class=\"u-icon u-icon-italic\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"引用\" on-click={this.quote()}><i class=\"u-icon u-icon-quote\"></i></a></li>\n        <li><a title=\"无序列表\" on-click={this.ul()}><i class=\"u-icon u-icon-list-ul\"></i></a></li>\n        <li><a title=\"有序列表\" on-click={this.ol()}><i class=\"u-icon u-icon-list-ol\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"链接\" on-click={this.link()}><i class=\"u-icon u-icon-link\"></i></a></li>\n        <li><a title=\"图片\" on-click={this.image()}><i class=\"u-icon u-icon-image\"></i></a></li>\n    </ul>\n    <textarea class=\"editor_textarea\" r-model={content} ref=\"textarea\" maxlength={maxlength} autofocus={autofocus} readonly={readonly} disabled={disabled}></textarea>\n</div>\n<uploader visible={false} url={imageUrl} extensions={extensions} ref=\"uploader\" on-success={this.uploaderSuccess($event)} on-error={this.uploaderError($event)} />"

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * MarkEditor 编辑器
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(84);
	var _ = __webpack_require__(4);

	var marked = __webpack_require__(85);

	/**
	 * @class MarkEditor
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性 | Binding Properties
	 * @param {string=''}               options.data.content            <=> 编辑器内容
	 * @param {number}                  options.data.maxlength           => 文本框的最大长度
	 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var MarkEditor = Component.extend({
	    name: 'markEditor',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            content: '',
	            maxlength: undefined,
	            autofocus: false
	        });
	        this.supr();
	    },
	    computed: {
	        html: function() {
	            return marked(this.data.content);
	        }
	    },
	    bold: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '**' + rangeData.text + '**';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    italic: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '*' + rangeData.text + '*';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    quote: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        var value = this.$refs.textarea.value;
	        for(var i = rangeData.start - 1; i > 0; i--)
	            if(value[i] == '\n') {
	                i++;
	                break;
	            }
	        rangeData.start = i;
	        rangeData.text = '> ';
	        rangeData.end = rangeData.start;
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    ul: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        var value = this.$refs.textarea.value;
	        for(var i = rangeData.start - 1; i > 0; i--)
	            if(value[i] == '\n') {
	                i++;
	                break;
	            }
	        rangeData.start = i;
	        rangeData.text = '- ';
	        rangeData.end = rangeData.start;
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    ol: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        var value = this.$refs.textarea.value;
	        for(var i = rangeData.start - 1; i > 0; i--)
	            if(value[i] == '\n') {
	                i++;
	                break;
	            }
	        rangeData.start = i;
	        rangeData.text = '1. ';
	        rangeData.end = rangeData.start;
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    link: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        var rangeData = this.getCursorPosition();
	        rangeData.text = '[' + rangeData.text + '](http://)';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    image: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.$refs.uploader.upload();
	    },
	    latex: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;
	        
	        var rangeData = this.getCursorPosition();
	        rangeData.text = '$$a^2 + b^2 = c^2$$';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    uploaderSuccess: function(data) {
	        var rangeData = this.getCursorPosition();
	        rangeData.text = '\n![](' + data.result + ')';
	        this.setCursorPosition(rangeData);
	        this.data.content = this.$refs.textarea.value;
	        this.$update();
	    },
	    uploaderError: function(e) {
	        Notify.error(e);
	    },
	    getCursorPosition: function() {
	        var textarea = this.$refs.textarea;

	        var rangeData = {text: '', start: 0, end: 0};
	        textarea.focus();

	        if (textarea.setSelectionRange) { // W3C
	            rangeData.start = textarea.selectionStart;
	            rangeData.end = textarea.selectionEnd;
	            rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end): '';
	        } else if (document.selection) { // IE
	            var i,
	                oS = document.selection.createRange(),
	                // Don't: oR = textarea.createTextRange()
	                oR = document.body.createTextRange();
	            oR.moveToElementText(textarea);

	            rangeData.text = oS.text;
	            rangeData.bookmark = oS.getBookmark();

	            // object.moveStart(sUnit [, iCount])
	            // Return Value: Integer that returns the number of units moved.
	            for (i = 0; oR.compareEndPoints('StartToStart', oS) < 0 && oS.moveStart('character', -1) !== 0; i++) {
	                // Why? You can alert(textarea.value.length)
	                if (textarea.value.charAt(i) == '\n') {
	                    i++;
	                }
	            }
	            rangeData.start = i;
	            rangeData.end = rangeData.text.length + rangeData.start;
	        }

	        return rangeData;
	    },
	    setCursorPosition: function(rangeData) {
	        if(!rangeData)
	            throw new Error('You must get cursor position first!');

	        var textarea = this.$refs.textarea;

	        var oldValue = textarea.value;
	        textarea.value = oldValue.substring(0, rangeData.start) + rangeData.text + oldValue.substring(rangeData.end, oldValue.length);
	        rangeData.end = rangeData.start + rangeData.text.length;
	        if (textarea.setSelectionRange) { // W3C
	            textarea.focus();
	            textarea.setSelectionRange(rangeData.start, rangeData.end);
	        } else if (textarea.createTextRange) { // IE
	            var oR = textarea.createTextRange();
	            // Fixbug :
	            // In IE, if cursor position at the end of textarea, the setCursorPosition function don't work
	            if(textarea.value.length === rangeData.start) {
	                oR.collapse(false)
	                oR.select();
	            } else {
	                oR.moveToBookmark(rangeData.bookmark);
	                oR.select();
	            }
	        }
	    }
	});

	module.exports = MarkEditor;


/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-editor {class}\" z-dis={disabled} r-hide={!visible}>\n    <div class=\"editor_preview\" r-html={html}></div>\n    <ul class=\"m-toolbar editor_toolbar\" z-dis={disabled}>\n        <li><a title=\"加粗\" on-click={this.bold()}><i class=\"u-icon u-icon-bold\"></i></a></li>\n        <li><a title=\"斜体\" on-click={this.italic()}><i class=\"u-icon u-icon-italic\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"引用\" on-click={this.quote()}><i class=\"u-icon u-icon-quote\"></i></a></li>\n        <li><a title=\"无序列表\" on-click={this.ul()}><i class=\"u-icon u-icon-list-ul\"></i></a></li>\n        <li><a title=\"有序列表\" on-click={this.ol()}><i class=\"u-icon u-icon-list-ol\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"链接\" on-click={this.link()}><i class=\"u-icon u-icon-link\"></i></a></li>\n        <li><a title=\"图片\" on-click={this.image()}><i class=\"u-icon u-icon-image\"></i></a></li>\n        <li class=\"f-fr\"><a title=\"帮助\" href=\"http://www.jianshu.com/p/7bd23251da0a\" target=\"_blank\"><i class=\"u-icon u-icon-info\"></i></a></li>\n    </ul>\n    <textarea class=\"editor_textarea\" r-model={content} ref=\"textarea\" maxlength={maxlength} autofocus={autofocus} readonly={readonly} disabled={disabled}></textarea>\n</div>\n<uploader visible={false} url={imageUrl} extensions={extensions} ref=\"uploader\" on-success={this.uploaderSuccess($event)} on-error={this.uploaderError($event)} />"

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;