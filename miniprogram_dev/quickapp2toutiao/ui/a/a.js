module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _URL = __webpack_require__(2);

var _URL2 = _interopRequireDefault(_URL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*  network.getType/// */
  push: function push(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri = quick_object.uri;
    //    const quick_params = quick_object.params
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        tt.reLaunch({
          url: '/quickapp2toutiao/page/router.push/ie?url=' + encodeURI(quick_uri)
        });
      } else {
        tt.navigateTo({
          url: quick_uri
        });
      }
      return;
    }

    var url = new _URL2.default(quick_uri);
    if (url.host === null) {
      tt.navigateTo({
        url: quick_uri
      });
      return;
    }
    switch (url.scheme) {
      case 'tel':
        tt.makePhoneCall({
          phoneNumber: url.host
        });
        break;
      case 'sms':
        tt.showModal({
          title: '不支持',
          content: '微信小程序暂不支持发短信'
        });
        break;
      case 'http':
      case 'https':
        tt.navigateTo({
          url: '/quickapp2toutiao/page/router.push/ie?url=' + encodeURI(quick_uri)
        });
        break;
      case 'internal':
        tt.showModal({
          title: '带配置',
          content: '微信小程序暂不支持打开文件'
        });
        break;
      case 'hap':
        switch (url.host) {
          case 'app':
            tt.showModal({
              title: '带配置',
              content: '请配置要打开的小程序'
            });
            break;
          case 'settings':
            tt.showModal({
              title: '带配置',
              content: '微信小程序暂不支持打开手机设置'
            });
            break;
          default:
            throw new Error(url.host);
        }

        break;
      default:
        throw new Error(url.scheme);
    }
  },


  /** router.replace */

  replace: function replace(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri = quick_object.uri;
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        tt.reLaunch({
          url: '/quickapp2toutiao/page/router.push/ie?url=' + encodeURI(quick_uri)
        });
      } else {
        tt.navigateTo({
          url: quick_uri
        });
      }
    }
  },

  /** router.back */

  back: function back(quick_object) {
    var quick_path = quick_object.path;
    if (!quick_path) {
      tt.navigateBack({});
    } else if (quick_path.startsWith('/')) {
      if (quick_path === '/') {
        tt.navigateTo({
          url: '/quickapp2toutiao/page/router.push/ie?url=' + encodeURI(quick_path)
        });
      } else {
        tt.reLaunch({
          url: quick_path
        });
      }
    }
  },

  /** router.clear() */

  clear: function clear() {
    //  const tt_object = {}
  },

  /** router.getLength */

  getLength: function getLength() {
    //  const tt_object = {}
  },

  /** router.getState */

  getState: function getState() {
    //  const tt_object = {}
  },

  /** router.getPages */

  getPages: function getPages() {
    //  const tt_object = {}
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return URL; });
class URL {
  constructor(url) {
    const p1 = url.indexOf(':')
    if (p1 > 0) {
      const temp = url.substring(p1 + 1)
      const flag = temp.startsWith('//') ? 3 : 1
      //
      this.scheme = url.substring(0, p1)
      const p2 = url.indexOf('/', p1 + flag)
      if (p2 > 0) {
        this.host = url.substring(p1 + flag, p2)
        const p3 = url.indexOf('?')
        if (p2 < url.length) {
          if (p3 > 0) {
            this.path = url.substring(p2, p3)
          } else {
            this.path = url.substring(p2)
          }
        }
      } else {
        this.host = url.substring(p1 + flag)
      }
    }
    //
    this.params = {}
    const p4 = url.indexOf('?')
    if (p4 > 0) {
      this.querystring = url.substring(p4 + 1)
      const querys = this.querystring.split('&')
      for (const query of querys) {
        const pair = query.split('=')
        this.params[pair[0]] = decodeURIComponent(pair[1])
      }
    }
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _system = __webpack_require__(1);

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    href: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached: function attached() {
      this.setData({
        href: this.properties.href
      });
      console.log(this.data);
    },
    detached: function detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  },
  data: {},
  methods: {
    a_bindtap: function a_bindtap() {
      _system2.default.push({
        uri: this.data.href,
        params: this.data.params
      });
    }
  }
}); /* eslint-disable no-console */

/***/ })
/******/ ]);