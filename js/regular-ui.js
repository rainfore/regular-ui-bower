(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"), require("marked"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular", "marked"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"), require("marked"));
	else
		root["RGUI"] = factory(root["Regular"], root["marked"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_78__) {
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

	var RGUI = {}

	/**
	 * base
	 */
	RGUI.Regular = __webpack_require__(1);
	RGUI.Component = __webpack_require__(2);
	RGUI.SourceComponent = __webpack_require__(5);
	RGUI._ = __webpack_require__(3);
	RGUI.ajax = __webpack_require__(6);

	/**
	 * jsUnit
	 */
	// 导航类
	RGUI.Dropdown = __webpack_require__(11);
	RGUI.Menu = __webpack_require__(13);

	// 表单类
	RGUI.Input2 = __webpack_require__(16);
	RGUI.NumberInput = __webpack_require__(20);
	RGUI.Check2 = __webpack_require__(22);
	RGUI.CheckGroup = __webpack_require__(24);
	RGUI.Check2Group = __webpack_require__(26);
	RGUI.RadioGroup = __webpack_require__(28);
	RGUI.Radio2Group = __webpack_require__(30);
	RGUI.Select2 = __webpack_require__(32);
	RGUI.TreeSelect = __webpack_require__(34);
	RGUI.Suggest = __webpack_require__(39);
	RGUI.Uploader = __webpack_require__(43);

	// 日期类
	RGUI.DatePicker = __webpack_require__(45);
	RGUI.TimePicker = __webpack_require__(49);
	RGUI.DateTimePicker = __webpack_require__(51);

	// 其他
	RGUI.Progress = __webpack_require__(53);
	RGUI.Gotop = __webpack_require__(55);

	/**
	 * jsModule
	 */
	// 导航类
	RGUI.Tab = __webpack_require__(57);
	RGUI.Accordion = __webpack_require__(59);
	RGUI.Pager = __webpack_require__(62);
	RGUI.Menubar = __webpack_require__(64);

	// 窗口类
	RGUI.Notify = __webpack_require__(9);
	RGUI.Modal = __webpack_require__(66);

	// 数据类
	RGUI.ListView = __webpack_require__(41);
	RGUI.GridView = __webpack_require__(68);
	RGUI.TreeView = __webpack_require__(36);
	RGUI.TableView = __webpack_require__(70);

	// 日期类
	RGUI.Calendar = __webpack_require__(47);

	// 上传类
	//

	// 编辑器类
	RGUI.Editor = __webpack_require__(72);
	RGUI.HTMLEditor = __webpack_require__(74);
	RGUI.MarkEditor = __webpack_require__(76);

	module.exports = RGUI;

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
	var _ = __webpack_require__(3);
	var filter = __webpack_require__(4);

	/**
	 * @class Component
	 * @extend Regular
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            'class': ''
	        });
	        this.supr();
	    }
	})
	.filter(filter)
	.directive({

	})

	module.exports = Component;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Regular = __webpack_require__(1);

	var _ = {
	    extend: function(o1, o2, override) {
	        for(var i in o2)
	            if(override || o1[i] === undefined)
	                o1[i] = o2[i]
	        return o1;
	    },
	    dom: Regular.dom,
	    multiline: function(func) {
	        var reg = /^function\s*\(\)\s*\{\s*\/\*+\s*([\s\S]*)\s*\*+\/\s*\}$/;
	        return reg.exec(func)[1];
	    }
	}

	module.exports = _;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var filter = {};

	filter.format = function() {
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
	}();

	filter.average = function(array, key) {
	    array = array || [];
	    return array.length? filter.total(array, key) / array.length : 0;
	}
	filter.total = function(array, key) {
	    var total = 0;
	    if(!array) return;
	    array.forEach(function( item ){
	        total += key? item[key] : item;
	    })
	    return total;
	}

	filter.filter = function(array, filterFn) {
	    if(!array || !array.length) return;
	    return array.filter(function(item, index){
	        return filterFn(item, index);
	    })
	}

	module.exports = filter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * SourceComponent 数据组件基类
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var _ = __webpack_require__(3);

	/**
	 * @class SourceComponent
	 * @extend Component
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {boolean=true}            options.data.updateAuto         当有service时，是否自动加载
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
	     * @return {object}
	     */
	    getParams: function() {
	        return {};
	    },
	    /**
	     * @method $updateSource() 从service中更新数据源
	     * @public
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var reqwest = __webpack_require__(7);
	var ajax = {};
	// var eventEmitter = new require('events').EventEmitter();
	// var ajax = {
	//     $on: eventEmitter.on,
	//     $off: eventEmitter.removeListener,
	//     $emit: eventEmitter.emit
	// };

	var Notify = __webpack_require__(9);

	ajax.request = function(opt) {
	    var noop = function(){};
	    var oldError = opt.error || noop,
	        oldSuccess = opt.success || noop,
	        oldComplete = opt.complete || noop;

	    opt.data = opt.data || {};

	    if(!opt.contentType && opt.method && opt.method.toLowerCase() !== 'get')
	        opt.contentType = 'application/json';
	    else
	        opt.data.timestamp = +new Date;

	    if(opt.contentType === 'application/json') {
	        opt.data = JSON.stringify(opt.data);
	    }

	    //ajax.$emit('start', opt);
	    opt.success = function(data) {
	        //ajax.$emit('success', data);

	        if(!data.success) {
	            Notify.error(data.message);
	            oldError(data.result, data);
	            return;
	        }
	        
	        oldSuccess(data.result, data);
	    }

	    opt.error = function(data) {
	        //ajax.$emit('error', data);
	        oldError(data.result, data);
	    }

	    opt.complete = function(data) {
	        //ajax.$emit('complete', data);
	        oldComplete(data.result, data);
	    }

	    reqwest(opt);
	}

	ajax.get = function(url, success) {
	    ajax.request({
	        url: url,
	        method: 'get',
	        success: success
	    });
	}

	ajax.post = function(url, data, success) {
	    ajax.request({
	        url: url,
	        method: 'post',
	        type: 'json',
	        success: success
	    })
	}

	module.exports = ajax;

/***/ },
/* 7 */
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
	      XHR2 = __webpack_require__(8)
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

	    var isAFormData = typeof FormData === 'function' && (o['data'] instanceof FormData);
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
/* 8 */
/***/ function(module, exports) {

	module.exports = XMLHttpRequest;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Notify    通知
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(10);
	var _ = __webpack_require__(3);

	/**
	 * @class Notify
	 * @extend Component
	 * @param {object}                  options.data                    监听数据
	 * @param {string='topcenter'}      options.data.position           通知的位置，可选参数：`topcenter`、`topleft`、`topright`、`bottomcenter`、`bottomleft`、`bottomright`、`static`
	 * @param {number=2000}             options.data.duration           每条消息的停留毫秒数，如果为0，则表示消息常驻不消失。
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	     * @method show(text[,type][,duration]) 弹出一个消息
	     * @public
	     * @param  {string=''} text 消息内容
	     * @param  {string=null} type 消息类型，可选参数：`info`、`success`、`warning`、`error`
	     * @param  {number=notify.duration} duration 该条消息的停留毫秒数，如果为0，则表示消息常驻不消失。
	     * @return {void}
	     */
	    show: function(text, type, duration) {
	        var message = {
	            text: text,
	            type: type,
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
	 * @type {Notify}
	 */
	var notify = new Notify();
	Notify.notify = notify;

	/**
	 * @method show(text[,type][,duration]) 弹出一个消息
	 * @static
	 * @public
	 * @param  {string=''} text 消息内容
	 * @param  {string=null} type 消息类型，可选参数：`info`、`success`、`warning`、`error`
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
	var types = ['success', 'warning', 'info', 'error'];
	types.forEach(function(type) {
	    Notify[type] = function(text) {
	        Notify.show(text, type);
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
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-notify m-notify-{@(position)} {@(class)}\" r-hide={!visible}>\n    {#list messages as message}\n    <div class=\"u-message u-message-{@(message.type)}\" r-animation=\"on: enter; class: animated fadeIn fast; on: leave; class: animated fadeOut fast;\">\n        <a class=\"message_close\" on-click={this.close(message)}><i class=\"u-icon u-icon-close\"></i></a>\n        <i class=\"message_icon u-icon u-icon-{@(message.type)}-circle\" r-hide={@(!message.type)}></i>\n        {@(message.text)}\n    </div>\n    {/list}\n</div>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Dropdown  下拉菜单
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(12);
	var _ = __webpack_require__(3);

	/**
	 * @class Dropdown
	 * @extend SourceComponent
	 * @param {object}                  options.data                    绑定属性
	 * @param {string=''}               options.data.title              按钮文字
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {boolean=false}           options.data.source[].disabled  禁用此项
	 * @param {boolean=false}           options.data.source[].divider   设置此项分隔线
	 * @param {string=null}             options.data.itemTemplate       单项模板
	 * @param {boolean=false}           options.data.open               当前为展开/收起状态
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {object} item 选择项
	     * @return {void}
	     */
	    select: function(item) {
	        if(this.data.disabled || item.disabled || item.divider)
	            return;

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
	    }
	});

	// 处理点击dropdown之外的地方后的收起事件。
	Dropdown.opens = [];

	_.dom.on(document.body, 'click', function(e) {
	    Dropdown.opens.forEach(function(dropdown) {
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

	module.exports = "<div class=\"u-dropdown {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" on-click={this.toggle(!open)}>\n        {#if this.$body}\n            {#inc this.$body}\n        {#else}\n            <a class=\"u-btn\">{title || '下拉菜单'} <i class=\"u-icon u-icon-caret-down\"></i></a>\n        {/if}\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <ul class=\"m-listview\">\n            {#list source as item}\n            <li r-class={ {'z-dis': item.disabled, 'dropdown_divider': item.divider} } on-click={this.select(item)}>{#if @(itemTemplate)}{#include @(itemTemplate)}{#else}{item.name}{/if}</li>\n            {/list}\n        </ul>\n    </div>\n</div>"

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
	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(14);
	var hierarchicalTemplate = __webpack_require__(15);
	var _ = __webpack_require__(3);

	/**
	 * @class  Menu
	 * @extend Dropdown
	 * @param {object}                  options.data                    绑定属性
	 * @param {string=''}               options.data.title              按钮文字
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {boolean=false}           options.data.source[].disabled  禁用此项
	 * @param {boolean=false}           options.data.source[].divider   设置此项分隔线
	 * @param {string=null}             options.data.itemTemplate       单项模板
	 * @param {boolean=false}           options.data.open               当前为展开/收起状态
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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

	module.exports = "<div class=\"u-dropdown u-dropdown-menu {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" on-click={this.toggle(!open)}>\n        {#if this.$body}\n            {#inc this.$body}\n        {#else}\n            <a class=\"u-btn\">{title || '多级菜单'} <i class=\"u-icon u-icon-caret-down\"></i></a>\n        {/if}\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <menuList source={source} visible={true} />\n    </div>\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"m-listview menu_list\" r-hide={!visible}>\n    {#list source as item}\n    <li r-class={ {'z-dis': item.disabled, 'dropdown_divider': item.divider} }>\n        <div class=\"menu_item\">\n            {#if item.childrenCount || (item.children && item.children.length)}\n            <i class=\"u-icon u-icon-caret-right\"></i>\n            {/if}\n            <div class=\"menu_itemname\" title={item.name} on-click={this.select(item)}>{#if @(itemTemplate)}{#include @(itemTemplate)}{#else}{item.name}{/if}</div>\n        </div>\n        {#if item.childrenCount || (item.children && item.children.length)}<menuList source={item.children} visible={item.open} parent={item} />{/if}\n    </li>\n    {/list}\n</ul>"

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
	var _ = __webpack_require__(3);
	var validator = __webpack_require__(18);

	/**
	 * @class Input2
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {string=''}               options.data.value              输入框的值
	 * @param {string=''}               options.data.type               输入框的类型
	 * @param {string=''}               options.data.placeholder        占位符
	 * @param {object[]=[]}             options.data.rules              验证规则
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            rules: []
	        });
	        this.supr();
	    },
	    validate: function(value, rules) {
	        var result = validator.validate(value, rules);
	        
	        this.data.type = result.success ? 'success' : 'error';
	        this.data.tip = result.message;
	    }
	});

	module.exports = Input2;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-input2 {@(class)}\" r-hide={!visible}>\n    <input class=\"u-input u-input-{type}\" r-model={value} placeholder={placeholder} disabled={disabled} readonly={readonly} on-keyup={this.validate(value, rules)}>\n</label>\n{#if tip}<span class=\"u-tip u-tip-{type}\">{tip}</span>{/if}"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Validator 表单验证
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var vali = __webpack_require__(19);
	var validator = {}

	/**
	 * 235235
	rules = [
	    {type: 'isRequired', min: 2, max: 5
	]
	*/

	validator.validate = function(value, rules) {
	    var result = {
	        success: true,
	        message: ''
	    }

	    rules.forEach(function(rule) {
	        rule.success = true;

	        if(rule.type === 'is') {
	            rule.success = rule.reg.test(value);
	        } else if(rule.type === 'isRequired') {
	            rule.success = !!value;
	        } else if(rule.type === 'isFilled') {
	            rule.success = !!value && value.trim();
	        } else if(rule.type === 'isEmail') {
	            rule.success = vali.isEmail(value);
	        } else if(rule.type === 'isURL') {
	            rule.success = vali.isURL(value);
	        } else if(rule.type === 'isNumber') {
	            rule.success = vali.isInt(value);
	        } else if(rule.type === 'isInt') {
	            rule.success = vali.isInt(value);
	        } else if(rule.type === 'isFloat') {
	            rule.success = vali.isFloat(value);
	        } else if(rule.type === 'isLength') {
	            rule.success = vali.isLength(value, rule.min, rule.max);
	        } else {
	            rule.success = rule.method(value);
	        }

	        if(!rule.success && result.success) {
	            result.success = false;
	            result.message = rule.message;
	        }
	    });

	    return result;
	}

	validator.validateForm = function(data, fields) {
	    var conclusion = {
	        results: {},
	        success: true,
	        message: ''
	    }
	    
	    for(var key in fields) {
	        var rules = fields[key];
	        if(!rules)
	            continue;
	        var value = data[key];

	        conclusion.results[key] = validator.validate(value, rules);
	    }

	    return conclusion;
	}

	module.exports = validator;

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
	    } else {
	        this[name] = definition();
	    }
	})('validator', function (validator) {

	    'use strict';

	    validator = { version: '4.0.5' };

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
	      'en-ZA': /^(\+?27|0)\d{9}$/,
	      'en-AU': /^(\+?61|0)4\d{8}$/,
	      'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
	      'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	      'pt-PT': /^(\+351)?9[1236]\d{7}$/,
	      'el-GR': /^(\+30)?((2\d{9})|(69\d{8}))$/,
	      'en-GB': /^(\+?44|0)7\d{9}$/,
	      'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
	      'en-ZM': /^(\+26)?09[567]\d{7}$/,
	      'ru-RU': /^(\+?7|8)?9\d{9}$/
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
	        } else if (typeof input !== 'string') {
	            input += '';
	        }
	        return input;
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
	        return str !== '' && float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
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

	    validator.isDate = function (str) {
	        return !isNaN(Date.parse(str));
	    };

	    validator.isAfter = function (str, date) {
	        var comparison = validator.toDate(date || new Date())
	          , original = validator.toDate(str);
	        return !!(original && comparison && original > comparison);
	    };

	    validator.isBefore = function (str, date) {
	        var comparison = validator.toDate(date || new Date())
	          , original = validator.toDate(str);
	        return original && comparison && original < comparison;
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
	 * NumberInput 输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Input2 = __webpack_require__(16);
	var template = __webpack_require__(21);
	var _ = __webpack_require__(3);

	/**
	 * @class NumberInput
	 * @extend Input2
	 * @param {object}                  options.data                    绑定属性
	 * @param {string=''}               options.data.value              输入框的值
	 * @param {string=''}               options.data.type               输入框的类型
	 * @param {string=''}               options.data.placeholder        占位符
	 * @param {number=null}             options.data.min                最小值
	 * @param {number=null}             options.data.max                最大值
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            // @inherited type: '',
	            // @inherited placeholder: '',
	            min: null,
	            max: null
	        });
	        this.supr();

	        this.$watch('value', function(newValue, oldValue) {
	            if(this.data.max !== null && this.data.value > this.data.max)
	                this.data.value = this.data.max;
	            if(this.data.min !== null && this.data.value < this.data.min)
	                this.data.value = this.data.min;

	            if(newValue != oldValue)
	                this.$emit('change', {
	                    value: newValue
	                });
	        });
	    },
	    increase: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.data.value++;
	    },
	    decrease: function() {
	        if(this.data.readonly || this.data.disabled)
	            return;

	        this.data.value--;
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
	            return +value || 0;
	            // return +(value.replace(/[^\d\.\-]/g, '')) || 0;
	        }
	    }
	});

	module.exports = NumberInput;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-input2 u-input2-numberinput {@(class)}\" r-hide={!visible}>\n    <input class=\"u-input u-input-{type}\" r-model={value | number} placeholder={placeholder} disabled={disabled} readonly={readonly}>\n    <a class=\"u-btn\" r-class={ {'z-dis': disabled} } on-click={this.increase()}><i class=\"u-icon u-icon-caret-up\"></i></a>\n    <a class=\"u-btn\" r-class={ {'z-dis': disabled} } on-click={this.decrease()}><i class=\"u-icon u-icon-caret-down\"></i></a>\n</label>\n{#if tip}<span class=\"u-tip u-tip-{type}\">{tip}</span>{/if}"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Check2   多选按钮
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(23);
	var _ = __webpack_require__(3);

	/**
	 * @class Check2
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {string=''}               options.data.name               多选按钮的文字
	 * @param {object=null}             options.data.checked            多选按钮的选择状态
	 * @param {boolean=false}           options.data.block              是否以block方式显示
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<label class=\"u-check2 {@(class)}\" r-class={ {'z-dis': disabled, 'z-chk': checked, 'z-part': checked === null, 'u-check2-block': block} } r-hide={!visible} title={name} on-click={this.check(!checked)}><div class=\"check2_box\"><i class=\"u-icon u-icon-check\"></i></div> {name}</label>"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * CheckGroup 多选组
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(25);
	var _ = __webpack_require__(3);

	/**
	 * @class CheckGroup
	 * @extend SourceComponent
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {boolean=false}           options.data.block              多行显示
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {@(class)}\" r-hide={!visible}>\n    {#list source as item}\n    <label class=\"u-check2\" r-class={ {'z-dis': disabled, 'u-check2-block': block} } title={item.name}><input type=\"checkbox\" class=\"u-check\" r-model={item.checked} disabled={disabled}> {item.name}</label>\n    {/list}\n</div>"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Check2Group 输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var CheckGroup = __webpack_require__(24);
	var template = __webpack_require__(27);
	var _ = __webpack_require__(3);
	var Check2 = __webpack_require__(22);

	/**
	 * @class Check2Group
	 * @extend CheckGroup
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {boolean=false}           options.data.block              多行显示
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
	 */
	var Check2Group = CheckGroup.extend({
	    name: 'check2Group',
	    template: template
	});

	module.exports = Check2Group;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {@(class)}\" r-hide={!visible}>\n    {#list source as item}\n    <check2 name={item.name} checked={item.checked} disabled={disabled} block={block} />\n    {/list}\n</div>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * RadioGroup 单选组
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(29);
	var _ = __webpack_require__(3);

	/**
	 * @class RadioGroup
	 * @extend SourceComponent
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.seleced            当前选择项
	 * @param {boolean=false}           options.data.block              多行显示
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {@(class)}\" r-hide={!visible}>\n    {#list source as item}\n    <label class=\"u-radio2\" r-class={ {'z-dis': disabled, 'u-radio2-block': block} } title={item.name} on-click={this.select(item)}><input type=\"radio\" class=\"u-radio\" name={_radioGroupId} disabled={disabled}> {item.name}</label>\n    {/list}\n</div>"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Radio2Group 输入扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var RadioGroup = __webpack_require__(28);
	var template = __webpack_require__(31);
	var _ = __webpack_require__(3);

	/**
	 * @class Radio2Group
	 * @extend RadioGroup
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.seleced            当前选择项
	 * @param {boolean=false}           options.data.block              多行显示
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
	 */
	var Radio2Group = RadioGroup.extend({
	    name: 'radio2Group',
	    template: template
	});

	module.exports = Radio2Group;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-unitgroup {@(class)}\" r-hide={!visible}>\n    {#list source as item}\n    <label class=\"u-radio2\" r-class={ {'z-dis': disabled, 'z-sel': item === selected, 'u-radio2-block': block} } title={item.name} on-click={this.select(item)}><div class=\"radio2_box\"><i class=\"u-icon u-icon-radio\"></i></div> {item.name}</label>\n    {/list}\n</div>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Select2  选择扩展
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Dropdown = __webpack_require__(11);
	var template = __webpack_require__(33);
	var _ = __webpack_require__(3);

	/**
	 * @class Select2
	 * @extend Dropdown
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.selected           当前选择项
	 * @param {string='请选择'}         options.data.placeholder        默认项的文字
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
	            selected: null,
	            placeholder: '请选择'
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
	});

	module.exports = Select2;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-dropdown-select2 {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" on-click={this.toggle(!open)}>\n        <span>{selected ? selected.name : placeholder}</span>\n        <i class=\"u-icon u-icon-caret-down\"></i>\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <ul class=\"m-listview\">\n            {#if placeholder}<li r-class={ {'z-sel': selected === null} } on-click={this.select(null)}>{placeholder}</li>{/if}\n            {#list source as item}\n            <li r-class={ {'z-sel': selected === item} } on-click={this.select(item)}>{item.name}</li>\n            {/list}\n        </ul>\n    </div>\n</div>"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TreeSelect 树型选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Select2 = __webpack_require__(32);
	var template = __webpack_require__(35);
	var _ = __webpack_require__(3);
	var Treeview = __webpack_require__(36);

	/**
	 * @class TreeSelect
	 * @extend Select2
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.selected           当前选择项
	 * @param {string='请选择'}         options.data.placeholder        默认项的文字
	 * @param {boolean=false}           options.data.hierarchical       是否分级动态加载，需要service
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-dropdown-select2 {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\" on-click={this.toggle(!open)}>\n        <i class=\"u-icon u-icon-caret-down\"></i>\n        <span>{selected ? selected.name : placeholder}</span>\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <treeView source={source} hierarchical={hierarchical} service={service} on-select={this.select($event.selected)} />\n    </div>\n</div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TreeView  树型视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(37);
	var hierarchicalTemplate = __webpack_require__(38);
	var _ = __webpack_require__(3);

	/**
	 * @class TreeView
	 * @extend SourceComponent
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.selected           当前选择项
	 * @param {boolean=false}           options.data.hierarchical       是否分级动态加载，需要service
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-treeview {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    <treeViewList source={source} visible={true} />\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"treeview_list\" r-hide={!visible}>\n    {#list source as item}\n    <li>\n        <div class=\"treeview_item\">\n            {#if item.childrenCount || (item.children && item.children.length)}\n            <i class=\"u-icon\" r-class={ {'u-icon-caret-right': !item.open, 'u-icon-caret-down': item.open}} on-click={this.toggle(item)}></i>\n            {/if}\n            <div class=\"treeview_itemname\" r-class={ {'z-sel': this.$ancestor.data.selected === item, 'z-dis': item.disabled} } title={item.name} on-click={this.select(item)}>{#if @(itemTemplate)}{#include @(itemTemplate)}{#else}{item.name}{/if}</div>\n        </div>\n        {#if item.childrenCount || (item.children && item.children.length)}<treeViewList source={item.children} visible={item.open} parent={item} />{/if}\n    </li>\n    {/list}\n</ul>"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Suggest   自动提示
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Dropdown = __webpack_require__(11);
	var template = __webpack_require__(40);
	var _ = __webpack_require__(3);
	var ListView = __webpack_require__(41);

	/**
	 * @class Suggest
	 * @extend Dropdown
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.selected           当前选择项
	 * @param {string=''}               options.data.value              文本框中的值
	 * @param {string='请输入'}         options.data.placeholder        文本框默认文字
	 * @param {number=0}                options.data.minLength          最小提示长度。当输入长度>=该值后开始提示
	 * @param {string='all'}            options.data.matchType          匹配方式，`all`表示匹配全局，`start`表示只匹配开头，`end`表示只匹配结尾
	 * @param {boolean=false}           options.data.strict             是否为严格模式。当为严格模式时，`value`属性必须在source中选择，否则为空。
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
	            minLength: 0,
	            delay: 300,
	            matchType: 'all',
	            strict: false
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
	    // 输入时
	    input: function($event) {
	        var value = this.data.value;

	        if(value.length >= this.data.minLength) {
	            this.toggle(true);
	            if(this.service)
	                this.$updateSource();
	        } else
	            this.toggle(false, true);
	    },
	    uninput: function($event) {

	    },
	    getParams: function() {
	        return {value: this.data.value};
	    },
	    filter: function(item) {
	        var value = this.data.value;

	        if(!value && this.data.minLength)
	            return false;

	        if(this.data.matchType == 'all')
	            return item.name.indexOf(value) >= 0;
	        else if(this.data.matchType == 'start')
	            return item.name.slice(0, value.length) == value;
	        else if(this.data.matchType == 'end')
	            return item.name.slice(-value.length) == value;
	    }
	});

	module.exports = Suggest;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-dropdown-suggest {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\">\n        <input class=\"u-input u-input-full\" placeholder={placeholder} r-model={value} on-focus={this.input($event)} on-keyup={this.input($event)} on-blur={this.uninput($event)} ref=\"input\" disabled={disabled} {#if readonly}readonly=\"readonly\"{/if}>\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <ul class=\"m-listview\">\n            {#list source as item}\n            {#if this.filter(item)}\n                <li on-click={this.select(item)}>{item.name}</li>\n            {/if}\n            {/list}\n        </ul>\n    </div>\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * ListView  列表视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(42);
	var _ = __webpack_require__(3);

	/**
	 * @class ListView
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.selected           当前选择项
	 * @param {string=null}             options.data.itemTemplate       单项模板
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
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
	            itemTemplate: null
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
	    }
	});

	module.exports = ListView;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"m-listview {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    {#list source as item}\n    <li r-class={ {'z-sel': selected === item, 'z-dis': item.disabled} } title={item.name} on-click={this.select(item)}>{#if @(itemTemplate)}{#include @(itemTemplate)}{#else}{item.name}{/if}</li>\n    {/list}\n</ul>"

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Uploader  上传
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(44);
	var _ = __webpack_require__(3);

	/**
	 * @class Uploader
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {string=''}               options.data.title              按钮文字
	 * @param {string=''}               options.data.url                上传路径
	 * @param {string='json'}           options.data.dataType           数据类型
	 * @param {object}                  options.data.data               附加数据
	 * @param {string|string[]=''}      options.data.extensions         可上传的扩展名，如果为空，则表示可上传任何文件类型
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	                return this.$emit('error', this.extensionError());
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
	            console.log(e);
	        }

	        if(!xml.responseText)
	            return;

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
	    extensionError:　function() {
	        return '只能上传' + this.data.extensions.join(', ')　+ '类型的文件！';
	    },
	});

	module.exports = Uploader;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-uploader {@(class)}\" r-hide={!visible}>\n\t<div on-click={this.upload()}>\n\t\t{#if this.$body}\n\t\t\t{#inc this.$body}\n    \t{#else}\n    \t\t<a class=\"u-btn\">{title || '上传'}</a>\n\t\t{/if}\n    </div>\n    <form method=\"POST\" action={url} target=\"iframe{_id}\" enctype={contentType} ref=\"form\">\n        <input type=\"file\" name=\"file\" ref=\"file\" on-change={this.submit()}>\n        {#list Object.keys(data) as key}\n        <input type=\"hidden\" name={key} value={data[key]}>\n        {/list}\n    </form>\n    <iframe name=\"iframe{_id}\" on-load={this.cbUpload()} ref=\"iframe\">\n    </iframe>\n</div>"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * DatePicker 日期选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Dropdown = __webpack_require__(11);
	var template = __webpack_require__(46);
	var _ = __webpack_require__(3);

	var filter = __webpack_require__(4);
	var Calendar = __webpack_require__(47);

	/**
	 * @class DatePicker
	 * @extend Dropdown
	 * @param {object}                  options.data                    绑定属性
	 * @param {object=null}             options.data.date               当前选择的日期
	 * @param {string='请输入'}         options.data.placeholder        文本框默认文字
	 * @param {Date=null}               options.data.minDate            最小日期，如果为空则不限制
	 * @param {Date=null}               options.data.maxDate            最大日期，如果为空则不限制
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            placeholder: '请输入'
	        });
	        this.supr();
	    },
	    /**
	     * @method select(date) 选择一个日期
	     * @public
	     * @param  {Date=null} date 选择的日期
	     * @return {void}
	     */
	    select: function(date) {
	        /**
	         * @event select 选择某一项时触发
	         * @property {object} date 当前选择项
	         */
	        this.$emit('select', {
	            date: date
	        });
	        this.toggle(false);
	    },
	    input: function($event) {
	        var date = new Date($event.target.value);
	        if(date != 'Invalid Date')
	            this.data.date = date;
	        else
	            $event.target.value = filter.format(this.data.date, 'yyyy-MM-dd');
	    }
	});

	module.exports = DatePicker;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-dropdown-datepicker {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\">\n        <input class=\"u-input u-input-full\" placeholder={placeholder} value={date | format: 'yyyy-MM-dd'} on-focus={this.toggle(true)} on-change={this.input($event)} ref=\"input\" disabled={disabled} {#if readonly}readonly=\"readonly\"{/if}>\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <calendar date={date} minDate={minDate} maxDate={maxDate} on-select={this.select($event.date)} />\n    </div>\n</div>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Calendar  日历
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(48);
	var _ = __webpack_require__(3);

	var MS_OF_DAY = 24*3600*1000;

	/**
	 * @class Calendar
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {Date=null}               options.data.date               当前选择的日期
	 * @param {Date=null}               options.data.minDate            最小日期，如果为空则不限制
	 * @param {Date=null}               options.data.maxDate            最大日期，如果为空则不限制
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            if(newValue && oldValue && newValue.getFullYear() === oldValue.getFullYear() && newValue.getMonth() === oldValue.getMonth())
	                return;

	            // if(newValue && this.isOutOfRange(newValue))
	            //     this.data.date = this.data.minDate || this.data.maxDate;
	            
	            this.update();
	        });

	        if(!this.data.date)
	            this.goToday();
	    },
	    /**
	     * @method update() 日期改变后更新日历
	     * @private
	     * @return {void}
	     */
	    update: function() {
	        this.data._days = [];
	        
	        var date = this.data.date;
	        var month = date.getMonth();
	        var mfirst = new Date(date); mfirst.setDate(1);
	        var mfirstTime = mfirst.getTime();
	        var nfirst = new Date(mfirst); nfirst.setMonth(month + 1); nfirst.setDate(1);
	        var nfirstTime = nfirst.getTime();
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
	     * @return {void}
	     */
	    addYear: function(year) {
	        if(this.data.readonly || this.data.disabled || !year)
	            return;

	        var date = new Date(this.data.date);
	        date.setFullYear(date.getFullYear() + year);
	        this.data.date = date;
	    },
	    /**
	     * @method addMonth(month) 调整月份
	     * @public
	     * @param  {number=0} month 加/减的月份
	     * @return {void}
	     */
	    addMonth: function(month) {
	        if(this.data.readonly || this.data.disabled || !month)
	            return;

	        var date = new Date(this.data.date);
	        date.setMonth(date.getMonth() + month);
	        this.data.date = date;
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
	        this.data.date = new Date((new Date().getTime()/MS_OF_DAY>>0)*MS_OF_DAY);
	    },
	    /**
	     * @method isOutOfRange 是否超出日期范围
	     * @param {Date} day 某一天
	     * @return {void}
	     */
	    isOutOfRange: function(day) {
	        var minDate = this.data.minDate ? new Date((this.data.minDate.getTime()/MS_OF_DAY>>0)*MS_OF_DAY) : null;
	        var maxDate = this.data.maxDate ? new Date((this.data.maxDate.getTime()/MS_OF_DAY>>0)*MS_OF_DAY) : null;

	        return (minDate && day < minDate) || (maxDate && day > maxDate);
	    }
	});

	module.exports = Calendar;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-calendar {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    <div class=\"calendar_hd\">\n        <span class=\"calendar_prev\">\n            <span class=\"calendar_item\" on-click={this.addYear(-1)}><i class=\"u-icon u-icon-angle-double-left\"></i></span>\n            <span class=\"calendar_item\" on-click={this.addMonth(-1)}><i class=\"u-icon u-icon-angle-left\"></i></span>\n        </span>\n        <span>{date | format: 'yyyy-MM'}</span>\n        <span class=\"calendar_next\">\n            <span class=\"calendar_item\" on-click={this.addMonth(1)}><i class=\"u-icon u-icon-angle-right\"></i></span>\n            <span class=\"calendar_item\" on-click={this.addYear(1)}><i class=\"u-icon u-icon-angle-double-right\"></i></span>\n        </span>\n    </div>\n    <div class=\"calendar_bd\">\n        <div class=\"calendar_week\"><span class=\"calendar_item\">日</span><span class=\"calendar_item\">一</span><span class=\"calendar_item\">二</span><span class=\"calendar_item\">三</span><span class=\"calendar_item\">四</span><span class=\"calendar_item\">五</span><span class=\"calendar_item\">六</span></div>\n        <div class=\"calendar_day\">{#list _days as day}<span class=\"calendar_item\" r-class={ {'z-sel': date.toDateString() === day.toDateString(), 'z-muted': date.getMonth() !== day.getMonth(), 'z-dis': this.isOutOfRange(day)} } on-click={this.select(day)}>{day | format: 'dd'}</span>{/list}</div>\n        {#inc this.$body}\n    </div>\n</div>"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TimePicker 日期选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Component = __webpack_require__(2);
	var template = __webpack_require__(50);
	var _ = __webpack_require__(3);
	var NumberInput = __webpack_require__(20);

	/**
	 * @class TimePicker
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {string='00:00'}          options.data.time               当前的时间值
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            minute: 0
	        });
	        this.supr();

	        this.$watch('time', function(newValue, oldValue) {
	            if(newValue && newValue != oldValue) {
	                time = newValue.split(':');
	                this.data.hour = +time[0];
	                this.data.minute = +time[1];

	                this.$emit('change', {
	                    time: newValue
	                })
	            }
	        });

	        this.$watch(['hour', 'minute'], function(hour, minute) {
	            hour = '' + hour;
	            minute = '' + minute;
	            this.data.time = (hour.length > 1 ? hour : '0' + hour) + ':' + (minute.length > 1 ? minute : '0' + minute);
	        });
	    }
	});

	module.exports = TimePicker;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<span class=\"u-timepicker {@(class)}\" r-hide={!visible}>\n\t<numberInput min=\"0\" max=\"23\" format=\"00\" value={hour} disabled={disabled} readonly={readonly} />\n\t<span>:</span>\n\t<numberInput min=\"0\" max=\"59\" format=\"00\" value={minute} disabled={disabled} readonly={readonly} />\n</span>"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * DateTimePicker 日期选择
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var DatePicker = __webpack_require__(45);
	var template = __webpack_require__(52);
	var _ = __webpack_require__(3);
	var TimePicker = __webpack_require__(49);

	var filter = __webpack_require__(4);

	/**
	 * @class DateTimePicker
	 * @extend DatePicker
	 * @param {object}                  options.data                    绑定属性
	 * @param {object=null}             options.data.date               当前选择的日期
	 * @param {string='请输入'}         options.data.placeholder        文本框默认文字
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 */
	var DateTimePicker = DatePicker.extend({
	    name: 'dateTimePicker',
	    template: template,
	    config: function() {   
	        _.extend(this.data, {
	            // @inherited source: [],
	            // @inherited open: false,
	            // @inherited placeholder: '请输入',
	            date: null,
	            _date: undefined,
	            _time: '00:00'
	        });
	        this.supr();

	        this.$watch('date', function(newValue, oldValue) {
	            if(newValue && newValue != 'Invalid Date' && newValue - oldValue !== 0) {
	                this.data._date = new Date(newValue);
	                this.data._time = filter.format(newValue, 'HH:mm');
	            }
	        });

	        this.$watch(['_date', '_time'], function(_date, _time) {
	            if(_date && _time) {
	                var date = new Date(this.data._date);
	                var time = this.data._time.split(':');
	                date.setHours(time[0]);
	                date.setMinutes(time[1]);
	                date.setSeconds(0);
	                date.setMilliseconds(0);
	                this.data.date = date;
	            }
	        });
	    },
	    input: function($event) {
	        var date = new Date($event.target.value);
	        if(date != 'Invalid Date') {
	            date.setSeconds(0);
	            date.setMilliseconds(0);
	            this.data.date = date;
	        } else
	            $event.target.value = filter.format(this.data.date, 'yyyy-MM-dd HH:mm');
	    }
	});

	module.exports = DateTimePicker;

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-dropdown u-dropdown-datepicker u-dropdown-datetimepicker {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible} ref=\"element\">\n    <div class=\"dropdown_hd\">\n        <input class=\"u-input u-input-full\" placeholder={placeholder} value={date | format: 'yyyy-MM-dd HH:mm'} on-focus={this.toggle(true)} on-change={this.input($event)} ref=\"input\" disabled={disabled} {#if readonly}readonly=\"readonly\"{/if}>\n    </div>\n    <div class=\"dropdown_bd\" r-hide={!open} r-animation=\"on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;\">\n        <calendar date={_date}>\n            <timePicker time={_time} />\n        </calendar>\n    </div>\n</div>"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Progress  进度条
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(54);
	var _ = __webpack_require__(3);

	/**
	 * @class Progress
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {number=36}               options.data.percent            百分比
	 * @param {string|boolean=true}     options.data.text               在进度条中是否显示百分比。值为`string`时显示该段文字。
	 * @param {string=null}             options.data.size               进度条的尺寸
	 * @param {string=null}             options.data.type               进度条的类型，改变显示颜色
	 * @param {boolean=false}           options.data.striped            是否显示条纹
	 * @param {boolean=false}           options.data.active             进度条是否为激活状态，当`striped`为`true`时，进度条显示动画
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	            type: null,
	            striped: false,
	            active: false
	        });
	        this.supr();
	    }
	});

	module.exports = Progress;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"u-progress u-progress-{@(size)} u-progress-{@(type)} {@(class)}\" r-class={ {'u-progress-striped': striped, 'z-act': active} } r-hide={!visible}>\n    <div class=\"progress_bar\" style=\"width: {percent}%;\">{text ? (text === true ? percent + '%' : text) : ''}</div>\n</div>"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Gotop  回到顶部
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(56);
	var _ = __webpack_require__(3);

	/**
	 * @class Gotop
	 * @param {object}                  options.data                    绑定属性
	 * @param {string='bottomright'}    options.data.position           组件的位置，可选参数：`topcenter`、`topleft`、`topright`、`bottomcenter`、`bottomleft`、`bottomright`、`static`
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
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
	        if(this.data.readonly || this.data.disabled)
	            return;

	        document.body.scrollTop = 0;
	    }
	});

	module.exports = Gotop;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<a class=\"u-gotop u-gotop-{position} {@(class)}\" on-click={this.gotop()}><i class=\"u-icon u-icon-arrow-up\"></i></a>"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Tab       选项卡
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(58);
	var _ = __webpack_require__(3);

	/**
	 * @class Tab
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 */
	var Tab = Component.extend({
	    name: 'tab',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            source: [],
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
	        if(item.disabled || this.data.readonly || this.data.disabled)
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

	var TabPane = Component.extend({
	    name: 'tabPane',
	    template: '<div r-hide={this.$outer.data.selected.tab != this}>{#include this.$body}</div>',
	    /**
	     * @protected
	     */
	    config: function() { 
	        if(this.$outer) {
	            var source = this.$outer.data.source;
	            var item = {
	                title: this.data.title,
	                disabled: this.data.disabled,
	                tab: this
	            };
	            source.push(item);

	            if(!this.$outer.data.selected)
	                this.$outer.data.selected = item;
	        }
	    }
	});

	module.exports = Tab;

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-tab {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    <ul class=\"tab_hd\">\n        {#list source as item}\n        <li r-class={ {'z-crt': item == selected, 'z-dis': item.disabled} } on-click={this.select(item)}>{item.title}</li>\n        {/list}\n    </ul>\n    <div class=\"tab_bd\">\n        {#inc this.$body}\n    </div>\n</div>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Accordion       选项卡
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(60);
	var itemTemplate = __webpack_require__(61);
	var _ = __webpack_require__(3);

	/**
	 * @class Accordion
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性
	 * @param {boolean=true}            options.data.collapse           是否只能同时展开一个
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 */
	var Accordion = Component.extend({
	    name: 'accordion',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            panes: [],
	            collapse: true
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

	var AccordionPane = Component.extend({
	    name: 'accordionPane',
	    template: itemTemplate,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            title: '',
	            open: false,
	            disabled: false
	        });
	        this.supr();

	        if(this.$outer)
	            this.$outer.data.panes.push(this);
	    },
	    toggle: function(open) {
	        if(open && this.$outer.data.collapse) {
	            this.$outer.data.panes.forEach(function(pane) {
	                pane.data.open = false;
	            });
	        }

	        this.data.open = open;
	    }
	});

	module.exports = Accordion;

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-accordion {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    {#inc this.$body}\n</div>"

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-panel\">\n    <div class=\"panel_hd\" on-click={this.toggle(!open)}>{title}</div>\n    <div class=\"panel_bd\" r-hide={!open}>\n        {#include this.$body}\n    </div>\n</div>"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Pager     分页
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	var Component = __webpack_require__(2);
	var template = __webpack_require__(63);
	var _ = __webpack_require__(3);

	/**
	 * @class Pager
	 * @extend Component
	 * @param {object}                  options.data                    监听数据
	 * @param {number=1}                options.data.current            当前页
	 * @param {total=11}                options.data.total              总页数
	 * @param {string='center'}         options.data.position           分页的位置，可选参数：`center`、`left`、`right`
	 * @param {middle=5}                options.data.middle             当页数较多时，中间显示的页数
	 * @param {side=2}                  options.data.side               当页数较多时，两端显示的页数
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 */
	var Pager = Component.extend({
	    name: 'pager',
	    template: template,
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
/* 63 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"m-pager m-pager-{@(position)} {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    <li class=\"pager_prev\" r-class={ {'z-dis' : current <= 1} } on-click={this.select(current - 1)}><a>上一页</a></li>\n    {#if total - middle > side * 2 + 1}\n        {#list 1..side as i}\n        <li r-class={ {'z-crt': current == i} } on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n        {#if _start > side + 1}<li><span>...</span></li>{/if}\n        {#list _start.._end as i}\n        <li r-class={ {'z-crt': current == i} } on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n        {#if _end < total - side}<li><span>...</span></li>{/if}\n        {#list (total - side + 1)..total as i}\n        <li r-class={ {'z-crt': current == i} } on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n    {#else}\n        {#list 1..total as i}\n        <li r-class={ {'z-crt': current == i} } on-click={this.select(i)}><a>{i}</a></li>\n        {/list}\n    {/if}\n    <li class=\"pager_next\" r-class={ {'z-dis' : current >= total} } on-click={this.select(current + 1)}><a>下一页</a></li>\n</ul>"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Menubar  列表视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(65);
	var _ = __webpack_require__(3);
	var Menu = __webpack_require__(13);

	/**
	 * @class Menubar
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object=null}             options.data.selected           当前选择项
	 * @param {string=null}             options.data.itemTemplate       单项模板
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
	 */
	var Menubar = SourceComponent.extend({
	    name: 'menubar',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            itemTemplate: null
	        });
	        this.supr();
	    }
	});

	module.exports = Menubar;

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div>\n    {#list source as item}\n    <menu name={item.name} source={item.children} />\n    {/list}\n</div>\n"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Modal     模态对话框
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(67);
	var _ = __webpack_require__(3);

	/**
	 * @class Modal
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性 | Binding Properties
	 * @param {string='提示'}           options.data.title              对话框标题 | Title of Dialog
	 * @param {string=''}               options.data.content            对话框内容
	 * @param {string|boolean=true}     options.data.okButton           是否显示确定按钮。值为`string`时显示该段文字。
	 * @param {string|boolean=false}    options.data.cancelButton       是否显示取消按钮。值为`string`时显示该段文字。
	 * @param {number=null}             options.data.width              对话框宽度。值为否定时宽度为CSS设置的宽度。
	 * @param {string=''}               options.data.class              补充class
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

	        this.destroy();
	    },
	    /**
	     * @override
	     */
	    cancel: function() {
	        /**
	         * @event cancel 取消对话框时触发
	         */
	        this.$emit('cancel');

	        this.destroy();
	    },
	    keyup: function($event) {
	        if($event.which == 13)
	            this.ok();
	    }
	});

	/**
	 * @method alert(content[,title]) 弹出一个alert对话框。关闭时始终触发确定事件。
	 * @static
	 * @public
	 * @param  {string=''} content 对话框内容
	 * @param  {string='提示'} title 对话框标题
	 * @return {void}
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
	 * @return {void}
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
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-modal {@(class)}\" on-keyup={this.keyup($event)} r-hide={!visible}>\n    <div class=\"modal_dialog\" {#if width}style=\"width: {width}px\"{/if}>\n        <div class=\"modal_hd\">\n            <a class=\"modal_close\" on-click={this.close(!cancelButton)}><i class=\"u-icon u-icon-close\"></i></a>\n            <h3 class=\"modal_title\">{title}</h3>\n        </div>\n        <div class=\"modal_bd\">\n            {#if contentTemplate}{#include @(contentTemplate)}{#else}{content}{/if}\n        </div>\n        <div class=\"modal_ft\">\n            {#if okButton}\n            <button class=\"u-btn u-btn-primary\" on-click={this.close(true)}>{okButton === true ? '确定' : okButton}</button>\n            {/if}\n            {#if cancelButton}\n            <button class=\"u-btn\" on-click={this.close(false)}>{cancelButton === true ? '取消' : cancelButton}</button>\n            {/if}\n        </div>\n    </div>\n</div>"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * GridView  网格视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(69);
	var _ = __webpack_require__(3);

	/**
	 * @class GridView
	 * @extend SourceComponent
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
	 */
	var GridView = SourceComponent.extend({
	    name: 'gridView',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: []
	        });
	        this.supr();
	    }
	});

	module.exports = GridView;

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-gridview {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    {#list source as item}\n    <div class=\"gridview_item\" r-class={ {'z-sel': selected === item} }>{#if @(itemTemplate)}{#include @(itemTemplate)}{#else}{item.name}{/if}</div>\n    {/list}\n</div>"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * TableView 表格视图
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var SourceComponent = __webpack_require__(5);
	var template = __webpack_require__(71);
	var _ = __webpack_require__(3);

	/**
	 * @class TableView
	 * @extend SourceComponent
	 * @param {object}                  options.data                    绑定属性
	 * @param {object[]=[]}             options.data.source             数据源
	 * @param {number}                  options.data.source[].id        每项的id
	 * @param {string}                  options.data.source[].name      每项的内容
	 * @param {object[]=[]}             options.data.field              字段集
	 * @param {string}                  options.data.field[].key        每个字段的key
	 * @param {string}                  options.data.field[].name       每个字段在表头显示的文字，如果没有则显示key
	 * @param {boolean=false}           options.data.striped            是否显示条纹
	 * @param {boolean=false}           options.data.hover              是否每行在hover时显示样式
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 * @param {object}                  options.service                 数据服务
	 */
	var TableView = SourceComponent.extend({
	    name: 'tableView',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            // @inherited source: [],
	            fields: [],
	            striped: false,
	            hover: false,
	            // TODO: 暂不考虑多字段排序
	            order: {
	                by: null,
	                desc: false
	            }
	        });
	        this.supr();
	    },
	    /**
	     * @method sort(field) 按照某个字段排序
	     * @public
	     * @param  {object} field 排序字段
	     * @return {void}
	     */
	    sort: function(field) {
	        if(!field.sortable)
	            return;

	        var order = this.data.order;

	        if(order.by === field.key)
	            order.desc = !order.desc;
	        else {
	            order.by = field.key;
	            order.desc = false;
	        }

	        if(this.service)
	            this.$updateSource();
	        else {
	            this.data.source.sort(function(a, b) {
	                if(order.desc)
	                    return a[order.by] < b[order.by];
	                else
	                    return a[order.by] > b[order.by];
	            });
	        }
	        /**
	         * @event sort 按照某个字段排序时触发
	         * @property {object} field 排序字段
	         */
	        this.$emit('sort', {
	            field: field
	        });
	    }
	});

	module.exports = TableView;

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<table class=\"m-table m-tableview {@(class)}\" r-class={ {'m-table-striped': striped, 'm-table-hover': hover} } r-hide={!visible}>\n    <thead>\n        <tr>\n            {#list fields as field}\n            <th r-class={ {'tableview_sortable': field.sortable} } on-click={this.sort(field)}>\n                {field.name || field.key}\n                {#if field.sortable}\n                    <i class=\"u-icon {order.by === field.key ? (order.desc ? 'u-icon-sort-desc' : 'u-icon-sort-asc') : 'u-icon-sort'}\"></i>\n                {/if}\n            </th>\n            {/list}\n        </tr>\n    </thead>\n    <tbody>\n        {#list source as item}\n        <tr>\n            {#list fields as field}\n            <td>{item[field.key]}</td>\n            {/list}\n        </tr>\n        {/list}\n    </tbody>\n</table>"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * Editor    编辑器
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(73);
	var _ = __webpack_require__(3);

	/**
	 * @class Editor
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性 | Binding Properties
	 * @param {string='提示'}           options.data.title              对话框标题 | Title of Dialog
	 * @param {string=''}               options.data.content            对话框内容
	 * @param {string|boolean=true}     options.data.okButton           是否显示确定按钮。值为`string`时显示该段文字。
	 * @param {string|boolean=false}    options.data.cancelButton       是否显示取消按钮。值为`string`时显示该段文字。
	 * @param {number=null}             options.data.width              对话框宽度。值为否定时宽度为CSS设置的宽度。
	 * @param {function}                options.ok                      当点击确定的时候执行
	 * @param {function}                options.cancel                  当点击取消的时候执行
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
/* 73 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * HTMLEditor 编辑器
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(75);
	var _ = __webpack_require__(3);

	/**
	 * @class HTMLEditor
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性 | Binding Properties
	 * @param {string=''}               options.data.content            编辑器内容
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 */
	var HTMLEditor = Component.extend({
	    name: 'htmlEditor',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            content: ''
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
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-editor {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    <div class=\"editor_preview\" r-html={html}></div>\n    <ul class=\"m-toolbar editor_toolbar\" r-class={ {'z-dis': disabled} }>\n        <li><a title=\"加粗\" on-click={this.bold()}><i class=\"u-icon u-icon-bold\"></i></a></li>\n        <li><a title=\"斜体\" on-click={this.italic()}><i class=\"u-icon u-icon-italic\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"引用\" on-click={this.quote()}><i class=\"u-icon u-icon-quote\"></i></a></li>\n        <li><a title=\"无序列表\" on-click={this.ul()}><i class=\"u-icon u-icon-list-ul\"></i></a></li>\n        <li><a title=\"有序列表\" on-click={this.ol()}><i class=\"u-icon u-icon-list-ol\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"链接\" on-click={this.link()}><i class=\"u-icon u-icon-link\"></i></a></li>\n        <li><a title=\"图片\" on-click={this.image()}><i class=\"u-icon u-icon-image\"></i></a></li>\n    </ul>\n    <textarea class=\"editor_textarea\" r-model={content} ref=\"textarea\" readonly={readonly} disabled={disabled}></textarea>\n</div>\n<uploader visible={false} url={imageUrl} extensions={extensions} ref=\"uploader\" on-success={this.uploaderSuccess($event)} on-error={this.uploaderError($event)} />"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * MarkEditor 编辑器
	 * @author   sensen(rainforest92@126.com)
	 * ------------------------------------------------------------
	 */

	'use strict';

	var Component = __webpack_require__(2);
	var template = __webpack_require__(77);
	var _ = __webpack_require__(3);

	var marked = __webpack_require__(78);

	/**
	 * @class MarkEditor
	 * @extend Component
	 * @param {object}                  options.data                    绑定属性 | Binding Properties
	 * @param {string=''}               options.data.content            编辑器内容
	 * @param {boolean=false}           options.data.readonly           是否只读
	 * @param {boolean=false}           options.data.disabled           是否禁用
	 * @param {boolean=true}            options.data.visible            是否显示
	 * @param {string=''}               options.data.class              补充class
	 */
	var MarkEditor = Component.extend({
	    name: 'markEditor',
	    template: template,
	    /**
	     * @protected
	     */
	    config: function() {
	        _.extend(this.data, {
	            content: ''
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
/* 77 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-editor {@(class)}\" r-class={ {'z-dis': disabled} } r-hide={!visible}>\n    <div class=\"editor_preview\" r-html={html}></div>\n    <ul class=\"m-toolbar editor_toolbar\" r-class={ {'z-dis': disabled} }>\n        <li><a title=\"加粗\" on-click={this.bold()}><i class=\"u-icon u-icon-bold\"></i></a></li>\n        <li><a title=\"斜体\" on-click={this.italic()}><i class=\"u-icon u-icon-italic\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"引用\" on-click={this.quote()}><i class=\"u-icon u-icon-quote\"></i></a></li>\n        <li><a title=\"无序列表\" on-click={this.ul()}><i class=\"u-icon u-icon-list-ul\"></i></a></li>\n        <li><a title=\"有序列表\" on-click={this.ol()}><i class=\"u-icon u-icon-list-ol\"></i></a></li>\n        <li class=\"toolbar_divider\">|</li>\n        <li><a title=\"链接\" on-click={this.link()}><i class=\"u-icon u-icon-link\"></i></a></li>\n        <li><a title=\"图片\" on-click={this.image()}><i class=\"u-icon u-icon-image\"></i></a></li>\n        <li class=\"f-fr\"><a title=\"帮助\" href=\"http://www.jianshu.com/p/7bd23251da0a\" target=\"_blank\"><i class=\"u-icon u-icon-info\"></i></a></li>\n    </ul>\n    <textarea class=\"editor_textarea\" r-model={content} ref=\"textarea\" readonly={readonly} disabled={disabled}></textarea>\n</div>\n<uploader visible={false} url={imageUrl} extensions={extensions} ref=\"uploader\" on-success={this.uploaderSuccess($event)} on-error={this.uploaderError($event)} />"

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_78__;

/***/ }
/******/ ])
});
;