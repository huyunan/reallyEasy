(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/_json-format@1.0.1@json-format/index.js":
    /*!**************************************************************!*\
      !*** ./node_modules/_json-format@1.0.1@json-format/index.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function node_modules_jsonFormat101JsonFormatIndexJs(module, exports) {
      /*
        change for npm modules.
        by Luiz Estácio.
      
        json-format v.1.1
        http://github.com/phoboslab/json-format
      
        Released under MIT license:
        http://www.opensource.org/licenses/mit-license.php
      */
      var p = [],
          indentConfig = {
        tab: {
          "char": '\t',
          size: 1
        },
        space: {
          "char": ' ',
          size: 4
        }
      },
          configDefault = {
        type: 'tab'
      },
          push = function push(m) {
        return '\\' + p.push(m) + '\\';
      },
          pop = function pop(m, i) {
        return p[i - 1];
      },
          tabs = function tabs(count, indentType) {
        return new Array(count + 1).join(indentType);
      };

      function JSONFormat(json, indentType) {
        p = [];
        var out = "",
            indent = 0; // Extract backslashes and strings

        json = json.replace(/\\./g, push).replace(/(".*?"|'.*?')/g, push).replace(/\s+/, ''); // Indent and insert newlines

        for (var i = 0; i < json.length; i++) {
          var c = json.charAt(i);

          switch (c) {
            case '{':
            case '[':
              out += c + "\n" + tabs(++indent, indentType);
              break;

            case '}':
            case ']':
              out += "\n" + tabs(--indent, indentType) + c;
              break;

            case ',':
              out += ",\n" + tabs(indent, indentType);
              break;

            case ':':
              out += ": ";
              break;

            default:
              out += c;
              break;
          }
        } // Strip whitespace from numeric arrays and put backslashes 
        // and strings back in


        out = out.replace(/\[[\d,\s]+?\]/g, function (m) {
          return m.replace(/\s/g, '');
        }).replace(/\\(\d+)\\/g, pop) // strings
        .replace(/\\(\d+)\\/g, pop); // backslashes in strings

        return out;
      }

      ;

      module.exports = function (json, config) {
        config = config || configDefault;
        var indent = indentConfig[config.type];

        if (indent == null) {
          throw new Error('Unrecognized indent type: "' + config.type + '"');
        }

        var indentType = new Array((config.size || indent.size) + 1).join(indent["char"]);
        return JSONFormat(JSON.stringify(json), indentType);
      };
      /***/

    },

    /***/
    "./node_modules/_json5@2.1.3@json5/dist/index.js":
    /*!*******************************************************!*\
      !*** ./node_modules/_json5@2.1.3@json5/dist/index.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function node_modules_json5213Json5DistIndexJs(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        function createCommonjsModule(fn, module) {
          return module = {
            exports: {}
          }, fn(module, module.exports), module.exports;
        }

        var _global = createCommonjsModule(function (module) {
          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
          : Function('return this')();

          if (typeof __g == 'number') {
            __g = global;
          } // eslint-disable-line no-undef

        });

        var _core = createCommonjsModule(function (module) {
          var core = module.exports = {
            version: '2.6.5'
          };

          if (typeof __e == 'number') {
            __e = core;
          } // eslint-disable-line no-undef

        });

        var _core_1 = _core.version;

        var _isObject = function _isObject(it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        var _anObject = function _anObject(it) {
          if (!_isObject(it)) {
            throw TypeError(it + ' is not an object!');
          }

          return it;
        };

        var _fails = function _fails(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        }; // Thank's IE8 for his funny defineProperty


        var _descriptors = !_fails(function () {
          return Object.defineProperty({}, 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });

        var document = _global.document; // typeof document.createElement is 'object' in old IE

        var is = _isObject(document) && _isObject(document.createElement);

        var _domCreate = function _domCreate(it) {
          return is ? document.createElement(it) : {};
        };

        var _ie8DomDefine = !_descriptors && !_fails(function () {
          return Object.defineProperty(_domCreate('div'), 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        }); // 7.1.1 ToPrimitive(input [, PreferredType])
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string


        var _toPrimitive = function _toPrimitive(it, S) {
          if (!_isObject(it)) {
            return it;
          }

          var fn, val;

          if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) {
            return val;
          }

          if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) {
            return val;
          }

          if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) {
            return val;
          }

          throw TypeError("Can't convert object to primitive value");
        };

        var dP = Object.defineProperty;
        var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          _anObject(O);

          P = _toPrimitive(P, true);

          _anObject(Attributes);

          if (_ie8DomDefine) {
            try {
              return dP(O, P, Attributes);
            } catch (e) {
              /* empty */
            }
          }

          if ('get' in Attributes || 'set' in Attributes) {
            throw TypeError('Accessors not supported!');
          }

          if ('value' in Attributes) {
            O[P] = Attributes.value;
          }

          return O;
        };
        var _objectDp = {
          f: f
        };

        var _propertyDesc = function _propertyDesc(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        var _hide = _descriptors ? function (object, key, value) {
          return _objectDp.f(object, key, _propertyDesc(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };

        var hasOwnProperty = {}.hasOwnProperty;

        var _has = function _has(it, key) {
          return hasOwnProperty.call(it, key);
        };

        var id = 0;
        var px = Math.random();

        var _uid = function _uid(key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        var _library = false;

        var _shared = createCommonjsModule(function (module) {
          var SHARED = '__core-js_shared__';
          var store = _global[SHARED] || (_global[SHARED] = {});
          (module.exports = function (key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
          })('versions', []).push({
            version: _core.version,
            mode: _library ? 'pure' : 'global',
            copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
          });
        });

        var _functionToString = _shared('native-function-to-string', Function.toString);

        var _redefine = createCommonjsModule(function (module) {
          var SRC = _uid('src');

          var TO_STRING = 'toString';

          var TPL = ('' + _functionToString).split(TO_STRING);

          _core.inspectSource = function (it) {
            return _functionToString.call(it);
          };

          (module.exports = function (O, key, val, safe) {
            var isFunction = typeof val == 'function';

            if (isFunction) {
              _has(val, 'name') || _hide(val, 'name', key);
            }

            if (O[key] === val) {
              return;
            }

            if (isFunction) {
              _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            }

            if (O === _global) {
              O[key] = val;
            } else if (!safe) {
              delete O[key];

              _hide(O, key, val);
            } else if (O[key]) {
              O[key] = val;
            } else {
              _hide(O, key, val);
            } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

          })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || _functionToString.call(this);
          });
        });

        var _aFunction = function _aFunction(it) {
          if (typeof it != 'function') {
            throw TypeError(it + ' is not a function!');
          }

          return it;
        }; // optional / simple context binding


        var _ctx = function _ctx(fn, that, length) {
          _aFunction(fn);

          if (that === undefined) {
            return fn;
          }

          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };

            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };

            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }

          return function ()
          /* ...args */
          {
            return fn.apply(that, arguments);
          };
        };

        var PROTOTYPE = 'prototype';

        var $export = function $export(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
          var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          var key, own, out, exp;

          if (IS_GLOBAL) {
            source = name;
          }

          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

            out = (own ? target : source)[key]; // bind timers to global for call from export context

            exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

            if (target) {
              _redefine(target, key, out, type & $export.U);
            } // export


            if (exports[key] != out) {
              _hide(exports, key, exp);
            }

            if (IS_PROTO && expProto[key] != out) {
              expProto[key] = out;
            }
          }
        };

        _global.core = _core; // type bitmap

        $export.F = 1; // forced

        $export.G = 2; // global

        $export.S = 4; // static

        $export.P = 8; // proto

        $export.B = 16; // bind

        $export.W = 32; // wrap

        $export.U = 64; // safe

        $export.R = 128; // real proto method for `library`

        var _export = $export; // 7.1.4 ToInteger

        var ceil = Math.ceil;
        var floor = Math.floor;

        var _toInteger = function _toInteger(it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        }; // 7.2.1 RequireObjectCoercible(argument)


        var _defined = function _defined(it) {
          if (it == undefined) {
            throw TypeError("Can't call method on  " + it);
          }

          return it;
        }; // true  -> String#at
        // false -> String#codePointAt


        var _stringAt = function _stringAt(TO_STRING) {
          return function (that, pos) {
            var s = String(_defined(that));

            var i = _toInteger(pos);

            var l = s.length;
            var a, b;

            if (i < 0 || i >= l) {
              return TO_STRING ? '' : undefined;
            }

            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
          };
        };

        var $at = _stringAt(false);

        _export(_export.P, 'String', {
          // 21.1.3.3 String.prototype.codePointAt(pos)
          codePointAt: function codePointAt(pos) {
            return $at(this, pos);
          }
        });

        var codePointAt = _core.String.codePointAt;
        var max = Math.max;
        var min = Math.min;

        var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
          index = _toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        var fromCharCode = String.fromCharCode;
        var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

        _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
          // 21.1.2.2 String.fromCodePoint(...codePoints)
          fromCodePoint: function fromCodePoint(x) {
            var arguments$1 = arguments; // eslint-disable-line no-unused-vars

            var res = [];
            var aLen = arguments.length;
            var i = 0;
            var code;

            while (aLen > i) {
              code = +arguments$1[i++];

              if (_toAbsoluteIndex(code, 0x10ffff) !== code) {
                throw RangeError(code + ' is not a valid code point');
              }

              res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
            }

            return res.join('');
          }
        });

        var fromCodePoint = _core.String.fromCodePoint; // This is a generated file. Do not edit.

        var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
        var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
        var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
        var unicode = {
          Space_Separator: Space_Separator,
          ID_Start: ID_Start,
          ID_Continue: ID_Continue
        };
        var util = {
          isSpaceSeparator: function isSpaceSeparator(c) {
            return typeof c === 'string' && unicode.Space_Separator.test(c);
          },
          isIdStartChar: function isIdStartChar(c) {
            return typeof c === 'string' && (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '$' || c === '_' || unicode.ID_Start.test(c));
          },
          isIdContinueChar: function isIdContinueChar(c) {
            return typeof c === 'string' && (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9' || c === '$' || c === '_' || c === "\u200C" || c === "\u200D" || unicode.ID_Continue.test(c));
          },
          isDigit: function isDigit(c) {
            return typeof c === 'string' && /[0-9]/.test(c);
          },
          isHexDigit: function isHexDigit(c) {
            return typeof c === 'string' && /[0-9A-Fa-f]/.test(c);
          }
        };
        var source;
        var parseState;
        var stack;
        var pos;
        var line;
        var column;
        var token;
        var key;
        var root;

        var parse = function parse(text, reviver) {
          source = String(text);
          parseState = 'start';
          stack = [];
          pos = 0;
          line = 1;
          column = 0;
          token = undefined;
          key = undefined;
          root = undefined;

          do {
            token = lex(); // This code is unreachable.
            // if (!parseStates[parseState]) {
            //     throw invalidParseState()
            // }

            parseStates[parseState]();
          } while (token.type !== 'eof');

          if (typeof reviver === 'function') {
            return internalize({
              '': root
            }, '', reviver);
          }

          return root;
        };

        function internalize(holder, name, reviver) {
          var value = holder[name];

          if (value != null && typeof value === 'object') {
            for (var key in value) {
              var replacement = internalize(value, key, reviver);

              if (replacement === undefined) {
                delete value[key];
              } else {
                value[key] = replacement;
              }
            }
          }

          return reviver.call(holder, name, value);
        }

        var lexState;
        var buffer;
        var doubleQuote;
        var sign;
        var c;

        function lex() {
          lexState = 'default';
          buffer = '';
          doubleQuote = false;
          sign = 1;

          for (;;) {
            c = peek(); // This code is unreachable.
            // if (!lexStates[lexState]) {
            //     throw invalidLexState(lexState)
            // }

            var token = lexStates[lexState]();

            if (token) {
              return token;
            }
          }
        }

        function peek() {
          if (source[pos]) {
            return String.fromCodePoint(source.codePointAt(pos));
          }
        }

        function read() {
          var c = peek();

          if (c === '\n') {
            line++;
            column = 0;
          } else if (c) {
            column += c.length;
          } else {
            column++;
          }

          if (c) {
            pos += c.length;
          }

          return c;
        }

        var lexStates = {
          "default": function default$1() {
            switch (c) {
              case '\t':
              case '\v':
              case '\f':
              case ' ':
              case "\xA0":
              case "\uFEFF":
              case '\n':
              case '\r':
              case "\u2028":
              case "\u2029":
                read();
                return;

              case '/':
                read();
                lexState = 'comment';
                return;

              case undefined:
                read();
                return newToken('eof');
            }

            if (util.isSpaceSeparator(c)) {
              read();
              return;
            } // This code is unreachable.
            // if (!lexStates[parseState]) {
            //     throw invalidLexState(parseState)
            // }


            return lexStates[parseState]();
          },
          comment: function comment() {
            switch (c) {
              case '*':
                read();
                lexState = 'multiLineComment';
                return;

              case '/':
                read();
                lexState = 'singleLineComment';
                return;
            }

            throw invalidChar(read());
          },
          multiLineComment: function multiLineComment() {
            switch (c) {
              case '*':
                read();
                lexState = 'multiLineCommentAsterisk';
                return;

              case undefined:
                throw invalidChar(read());
            }

            read();
          },
          multiLineCommentAsterisk: function multiLineCommentAsterisk() {
            switch (c) {
              case '*':
                read();
                return;

              case '/':
                read();
                lexState = 'default';
                return;

              case undefined:
                throw invalidChar(read());
            }

            read();
            lexState = 'multiLineComment';
          },
          singleLineComment: function singleLineComment() {
            switch (c) {
              case '\n':
              case '\r':
              case "\u2028":
              case "\u2029":
                read();
                lexState = 'default';
                return;

              case undefined:
                read();
                return newToken('eof');
            }

            read();
          },
          value: function value() {
            switch (c) {
              case '{':
              case '[':
                return newToken('punctuator', read());

              case 'n':
                read();
                literal('ull');
                return newToken('null', null);

              case 't':
                read();
                literal('rue');
                return newToken('boolean', true);

              case 'f':
                read();
                literal('alse');
                return newToken('boolean', false);

              case '-':
              case '+':
                if (read() === '-') {
                  sign = -1;
                }

                lexState = 'sign';
                return;

              case '.':
                buffer = read();
                lexState = 'decimalPointLeading';
                return;

              case '0':
                buffer = read();
                lexState = 'zero';
                return;

              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8':
              case '9':
                buffer = read();
                lexState = 'decimalInteger';
                return;

              case 'I':
                read();
                literal('nfinity');
                return newToken('numeric', Infinity);

              case 'N':
                read();
                literal('aN');
                return newToken('numeric', NaN);

              case '"':
              case "'":
                doubleQuote = read() === '"';
                buffer = '';
                lexState = 'string';
                return;
            }

            throw invalidChar(read());
          },
          identifierNameStartEscape: function identifierNameStartEscape() {
            if (c !== 'u') {
              throw invalidChar(read());
            }

            read();
            var u = unicodeEscape();

            switch (u) {
              case '$':
              case '_':
                break;

              default:
                if (!util.isIdStartChar(u)) {
                  throw invalidIdentifier();
                }

                break;
            }

            buffer += u;
            lexState = 'identifierName';
          },
          identifierName: function identifierName() {
            switch (c) {
              case '$':
              case '_':
              case "\u200C":
              case "\u200D":
                buffer += read();
                return;

              case '\\':
                read();
                lexState = 'identifierNameEscape';
                return;
            }

            if (util.isIdContinueChar(c)) {
              buffer += read();
              return;
            }

            return newToken('identifier', buffer);
          },
          identifierNameEscape: function identifierNameEscape() {
            if (c !== 'u') {
              throw invalidChar(read());
            }

            read();
            var u = unicodeEscape();

            switch (u) {
              case '$':
              case '_':
              case "\u200C":
              case "\u200D":
                break;

              default:
                if (!util.isIdContinueChar(u)) {
                  throw invalidIdentifier();
                }

                break;
            }

            buffer += u;
            lexState = 'identifierName';
          },
          sign: function sign$1() {
            switch (c) {
              case '.':
                buffer = read();
                lexState = 'decimalPointLeading';
                return;

              case '0':
                buffer = read();
                lexState = 'zero';
                return;

              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8':
              case '9':
                buffer = read();
                lexState = 'decimalInteger';
                return;

              case 'I':
                read();
                literal('nfinity');
                return newToken('numeric', sign * Infinity);

              case 'N':
                read();
                literal('aN');
                return newToken('numeric', NaN);
            }

            throw invalidChar(read());
          },
          zero: function zero() {
            switch (c) {
              case '.':
                buffer += read();
                lexState = 'decimalPoint';
                return;

              case 'e':
              case 'E':
                buffer += read();
                lexState = 'decimalExponent';
                return;

              case 'x':
              case 'X':
                buffer += read();
                lexState = 'hexadecimal';
                return;
            }

            return newToken('numeric', sign * 0);
          },
          decimalInteger: function decimalInteger() {
            switch (c) {
              case '.':
                buffer += read();
                lexState = 'decimalPoint';
                return;

              case 'e':
              case 'E':
                buffer += read();
                lexState = 'decimalExponent';
                return;
            }

            if (util.isDigit(c)) {
              buffer += read();
              return;
            }

            return newToken('numeric', sign * Number(buffer));
          },
          decimalPointLeading: function decimalPointLeading() {
            if (util.isDigit(c)) {
              buffer += read();
              lexState = 'decimalFraction';
              return;
            }

            throw invalidChar(read());
          },
          decimalPoint: function decimalPoint() {
            switch (c) {
              case 'e':
              case 'E':
                buffer += read();
                lexState = 'decimalExponent';
                return;
            }

            if (util.isDigit(c)) {
              buffer += read();
              lexState = 'decimalFraction';
              return;
            }

            return newToken('numeric', sign * Number(buffer));
          },
          decimalFraction: function decimalFraction() {
            switch (c) {
              case 'e':
              case 'E':
                buffer += read();
                lexState = 'decimalExponent';
                return;
            }

            if (util.isDigit(c)) {
              buffer += read();
              return;
            }

            return newToken('numeric', sign * Number(buffer));
          },
          decimalExponent: function decimalExponent() {
            switch (c) {
              case '+':
              case '-':
                buffer += read();
                lexState = 'decimalExponentSign';
                return;
            }

            if (util.isDigit(c)) {
              buffer += read();
              lexState = 'decimalExponentInteger';
              return;
            }

            throw invalidChar(read());
          },
          decimalExponentSign: function decimalExponentSign() {
            if (util.isDigit(c)) {
              buffer += read();
              lexState = 'decimalExponentInteger';
              return;
            }

            throw invalidChar(read());
          },
          decimalExponentInteger: function decimalExponentInteger() {
            if (util.isDigit(c)) {
              buffer += read();
              return;
            }

            return newToken('numeric', sign * Number(buffer));
          },
          hexadecimal: function hexadecimal() {
            if (util.isHexDigit(c)) {
              buffer += read();
              lexState = 'hexadecimalInteger';
              return;
            }

            throw invalidChar(read());
          },
          hexadecimalInteger: function hexadecimalInteger() {
            if (util.isHexDigit(c)) {
              buffer += read();
              return;
            }

            return newToken('numeric', sign * Number(buffer));
          },
          string: function string() {
            switch (c) {
              case '\\':
                read();
                buffer += escape();
                return;

              case '"':
                if (doubleQuote) {
                  read();
                  return newToken('string', buffer);
                }

                buffer += read();
                return;

              case "'":
                if (!doubleQuote) {
                  read();
                  return newToken('string', buffer);
                }

                buffer += read();
                return;

              case '\n':
              case '\r':
                throw invalidChar(read());

              case "\u2028":
              case "\u2029":
                separatorChar(c);
                break;

              case undefined:
                throw invalidChar(read());
            }

            buffer += read();
          },
          start: function start() {
            switch (c) {
              case '{':
              case '[':
                return newToken('punctuator', read());
              // This code is unreachable since the default lexState handles eof.
              // case undefined:
              //     return newToken('eof')
            }

            lexState = 'value';
          },
          beforePropertyName: function beforePropertyName() {
            switch (c) {
              case '$':
              case '_':
                buffer = read();
                lexState = 'identifierName';
                return;

              case '\\':
                read();
                lexState = 'identifierNameStartEscape';
                return;

              case '}':
                return newToken('punctuator', read());

              case '"':
              case "'":
                doubleQuote = read() === '"';
                lexState = 'string';
                return;
            }

            if (util.isIdStartChar(c)) {
              buffer += read();
              lexState = 'identifierName';
              return;
            }

            throw invalidChar(read());
          },
          afterPropertyName: function afterPropertyName() {
            if (c === ':') {
              return newToken('punctuator', read());
            }

            throw invalidChar(read());
          },
          beforePropertyValue: function beforePropertyValue() {
            lexState = 'value';
          },
          afterPropertyValue: function afterPropertyValue() {
            switch (c) {
              case ',':
              case '}':
                return newToken('punctuator', read());
            }

            throw invalidChar(read());
          },
          beforeArrayValue: function beforeArrayValue() {
            if (c === ']') {
              return newToken('punctuator', read());
            }

            lexState = 'value';
          },
          afterArrayValue: function afterArrayValue() {
            switch (c) {
              case ',':
              case ']':
                return newToken('punctuator', read());
            }

            throw invalidChar(read());
          },
          end: function end() {
            // This code is unreachable since it's handled by the default lexState.
            // if (c === undefined) {
            //     read()
            //     return newToken('eof')
            // }
            throw invalidChar(read());
          }
        };

        function newToken(type, value) {
          return {
            type: type,
            value: value,
            line: line,
            column: column
          };
        }

        function literal(s) {
          for (var i = 0, list = s; i < list.length; i += 1) {
            var c = list[i];
            var p = peek();

            if (p !== c) {
              throw invalidChar(read());
            }

            read();
          }
        }

        function escape() {
          var c = peek();

          switch (c) {
            case 'b':
              read();
              return '\b';

            case 'f':
              read();
              return '\f';

            case 'n':
              read();
              return '\n';

            case 'r':
              read();
              return '\r';

            case 't':
              read();
              return '\t';

            case 'v':
              read();
              return '\v';

            case '0':
              read();

              if (util.isDigit(peek())) {
                throw invalidChar(read());
              }

              return '\0';

            case 'x':
              read();
              return hexEscape();

            case 'u':
              read();
              return unicodeEscape();

            case '\n':
            case "\u2028":
            case "\u2029":
              read();
              return '';

            case '\r':
              read();

              if (peek() === '\n') {
                read();
              }

              return '';

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              throw invalidChar(read());

            case undefined:
              throw invalidChar(read());
          }

          return read();
        }

        function hexEscape() {
          var buffer = '';
          var c = peek();

          if (!util.isHexDigit(c)) {
            throw invalidChar(read());
          }

          buffer += read();
          c = peek();

          if (!util.isHexDigit(c)) {
            throw invalidChar(read());
          }

          buffer += read();
          return String.fromCodePoint(parseInt(buffer, 16));
        }

        function unicodeEscape() {
          var buffer = '';
          var count = 4;

          while (count-- > 0) {
            var c = peek();

            if (!util.isHexDigit(c)) {
              throw invalidChar(read());
            }

            buffer += read();
          }

          return String.fromCodePoint(parseInt(buffer, 16));
        }

        var parseStates = {
          start: function start() {
            if (token.type === 'eof') {
              throw invalidEOF();
            }

            push();
          },
          beforePropertyName: function beforePropertyName() {
            switch (token.type) {
              case 'identifier':
              case 'string':
                key = token.value;
                parseState = 'afterPropertyName';
                return;

              case 'punctuator':
                // This code is unreachable since it's handled by the lexState.
                // if (token.value !== '}') {
                //     throw invalidToken()
                // }
                pop();
                return;

              case 'eof':
                throw invalidEOF();
            } // This code is unreachable since it's handled by the lexState.
            // throw invalidToken()

          },
          afterPropertyName: function afterPropertyName() {
            // This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'punctuator' || token.value !== ':') {
            //     throw invalidToken()
            // }
            if (token.type === 'eof') {
              throw invalidEOF();
            }

            parseState = 'beforePropertyValue';
          },
          beforePropertyValue: function beforePropertyValue() {
            if (token.type === 'eof') {
              throw invalidEOF();
            }

            push();
          },
          beforeArrayValue: function beforeArrayValue() {
            if (token.type === 'eof') {
              throw invalidEOF();
            }

            if (token.type === 'punctuator' && token.value === ']') {
              pop();
              return;
            }

            push();
          },
          afterPropertyValue: function afterPropertyValue() {
            // This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'punctuator') {
            //     throw invalidToken()
            // }
            if (token.type === 'eof') {
              throw invalidEOF();
            }

            switch (token.value) {
              case ',':
                parseState = 'beforePropertyName';
                return;

              case '}':
                pop();
            } // This code is unreachable since it's handled by the lexState.
            // throw invalidToken()

          },
          afterArrayValue: function afterArrayValue() {
            // This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'punctuator') {
            //     throw invalidToken()
            // }
            if (token.type === 'eof') {
              throw invalidEOF();
            }

            switch (token.value) {
              case ',':
                parseState = 'beforeArrayValue';
                return;

              case ']':
                pop();
            } // This code is unreachable since it's handled by the lexState.
            // throw invalidToken()

          },
          end: function end() {// This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'eof') {
            //     throw invalidToken()
            // }
          }
        };

        function push() {
          var value;

          switch (token.type) {
            case 'punctuator':
              switch (token.value) {
                case '{':
                  value = {};
                  break;

                case '[':
                  value = [];
                  break;
              }

              break;

            case 'null':
            case 'boolean':
            case 'numeric':
            case 'string':
              value = token.value;
              break;
            // This code is unreachable.
            // default:
            //     throw invalidToken()
          }

          if (root === undefined) {
            root = value;
          } else {
            var parent = stack[stack.length - 1];

            if (Array.isArray(parent)) {
              parent.push(value);
            } else {
              parent[key] = value;
            }
          }

          if (value !== null && typeof value === 'object') {
            stack.push(value);

            if (Array.isArray(value)) {
              parseState = 'beforeArrayValue';
            } else {
              parseState = 'beforePropertyName';
            }
          } else {
            var current = stack[stack.length - 1];

            if (current == null) {
              parseState = 'end';
            } else if (Array.isArray(current)) {
              parseState = 'afterArrayValue';
            } else {
              parseState = 'afterPropertyValue';
            }
          }
        }

        function pop() {
          stack.pop();
          var current = stack[stack.length - 1];

          if (current == null) {
            parseState = 'end';
          } else if (Array.isArray(current)) {
            parseState = 'afterArrayValue';
          } else {
            parseState = 'afterPropertyValue';
          }
        } // This code is unreachable.
        // function invalidParseState () {
        //     return new Error(`JSON5: invalid parse state '${parseState}'`)
        // }
        // This code is unreachable.
        // function invalidLexState (state) {
        //     return new Error(`JSON5: invalid lex state '${state}'`)
        // }


        function invalidChar(c) {
          if (c === undefined) {
            return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
          }

          return syntaxError("JSON5: invalid character '" + formatChar(c) + "' at " + line + ":" + column);
        }

        function invalidEOF() {
          return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
        } // This code is unreachable.
        // function invalidToken () {
        //     if (token.type === 'eof') {
        //         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
        //     }
        //     const c = String.fromCodePoint(token.value.codePointAt(0))
        //     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
        // }


        function invalidIdentifier() {
          column -= 5;
          return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
        }

        function separatorChar(c) {
          console.warn("JSON5: '" + formatChar(c) + "' in strings is not valid ECMAScript; consider escaping");
        }

        function formatChar(c) {
          var replacements = {
            "'": "\\'",
            '"': '\\"',
            '\\': '\\\\',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\v',
            '\0': '\\0',
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
          };

          if (replacements[c]) {
            return replacements[c];
          }

          if (c < ' ') {
            var hexString = c.charCodeAt(0).toString(16);
            return '\\x' + ('00' + hexString).substring(hexString.length);
          }

          return c;
        }

        function syntaxError(message) {
          var err = new SyntaxError(message);
          err.lineNumber = line;
          err.columnNumber = column;
          return err;
        }

        var stringify = function stringify(value, replacer, space) {
          var stack = [];
          var indent = '';
          var propertyList;
          var replacerFunc;
          var gap = '';
          var quote;

          if (replacer != null && typeof replacer === 'object' && !Array.isArray(replacer)) {
            space = replacer.space;
            quote = replacer.quote;
            replacer = replacer.replacer;
          }

          if (typeof replacer === 'function') {
            replacerFunc = replacer;
          } else if (Array.isArray(replacer)) {
            propertyList = [];

            for (var i = 0, list = replacer; i < list.length; i += 1) {
              var v = list[i];
              var item = void 0;

              if (typeof v === 'string') {
                item = v;
              } else if (typeof v === 'number' || v instanceof String || v instanceof Number) {
                item = String(v);
              }

              if (item !== undefined && propertyList.indexOf(item) < 0) {
                propertyList.push(item);
              }
            }
          }

          if (space instanceof Number) {
            space = Number(space);
          } else if (space instanceof String) {
            space = String(space);
          }

          if (typeof space === 'number') {
            if (space > 0) {
              space = Math.min(10, Math.floor(space));
              gap = '          '.substr(0, space);
            }
          } else if (typeof space === 'string') {
            gap = space.substr(0, 10);
          }

          return serializeProperty('', {
            '': value
          });

          function serializeProperty(key, holder) {
            var value = holder[key];

            if (value != null) {
              if (typeof value.toJSON5 === 'function') {
                value = value.toJSON5(key);
              } else if (typeof value.toJSON === 'function') {
                value = value.toJSON(key);
              }
            }

            if (replacerFunc) {
              value = replacerFunc.call(holder, key, value);
            }

            if (value instanceof Number) {
              value = Number(value);
            } else if (value instanceof String) {
              value = String(value);
            } else if (value instanceof Boolean) {
              value = value.valueOf();
            }

            switch (value) {
              case null:
                return 'null';

              case true:
                return 'true';

              case false:
                return 'false';
            }

            if (typeof value === 'string') {
              return quoteString(value, false);
            }

            if (typeof value === 'number') {
              return String(value);
            }

            if (typeof value === 'object') {
              return Array.isArray(value) ? serializeArray(value) : serializeObject(value);
            }

            return undefined;
          }

          function quoteString(value) {
            var quotes = {
              "'": 0.1,
              '"': 0.2
            };
            var replacements = {
              "'": "\\'",
              '"': '\\"',
              '\\': '\\\\',
              '\b': '\\b',
              '\f': '\\f',
              '\n': '\\n',
              '\r': '\\r',
              '\t': '\\t',
              '\v': '\\v',
              '\0': '\\0',
              "\u2028": "\\u2028",
              "\u2029": "\\u2029"
            };
            var product = '';

            for (var i = 0; i < value.length; i++) {
              var c = value[i];

              switch (c) {
                case "'":
                case '"':
                  quotes[c]++;
                  product += c;
                  continue;

                case '\0':
                  if (util.isDigit(value[i + 1])) {
                    product += '\\x00';
                    continue;
                  }

              }

              if (replacements[c]) {
                product += replacements[c];
                continue;
              }

              if (c < ' ') {
                var hexString = c.charCodeAt(0).toString(16);
                product += '\\x' + ('00' + hexString).substring(hexString.length);
                continue;
              }

              product += c;
            }

            var quoteChar = quote || Object.keys(quotes).reduce(function (a, b) {
              return quotes[a] < quotes[b] ? a : b;
            });
            product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);
            return quoteChar + product + quoteChar;
          }

          function serializeObject(value) {
            if (stack.indexOf(value) >= 0) {
              throw TypeError('Converting circular structure to JSON5');
            }

            stack.push(value);
            var stepback = indent;
            indent = indent + gap;
            var keys = propertyList || Object.keys(value);
            var partial = [];

            for (var i = 0, list = keys; i < list.length; i += 1) {
              var key = list[i];
              var propertyString = serializeProperty(key, value);

              if (propertyString !== undefined) {
                var member = serializeKey(key) + ':';

                if (gap !== '') {
                  member += ' ';
                }

                member += propertyString;
                partial.push(member);
              }
            }

            var _final;

            if (partial.length === 0) {
              _final = '{}';
            } else {
              var properties;

              if (gap === '') {
                properties = partial.join(',');
                _final = '{' + properties + '}';
              } else {
                var separator = ',\n' + indent;
                properties = partial.join(separator);
                _final = '{\n' + indent + properties + ',\n' + stepback + '}';
              }
            }

            stack.pop();
            indent = stepback;
            return _final;
          }

          function serializeKey(key) {
            if (key.length === 0) {
              return quoteString(key, true);
            }

            var firstChar = String.fromCodePoint(key.codePointAt(0));

            if (!util.isIdStartChar(firstChar)) {
              return quoteString(key, true);
            }

            for (var i = firstChar.length; i < key.length; i++) {
              if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
                return quoteString(key, true);
              }
            }

            return key;
          }

          function serializeArray(value) {
            if (stack.indexOf(value) >= 0) {
              throw TypeError('Converting circular structure to JSON5');
            }

            stack.push(value);
            var stepback = indent;
            indent = indent + gap;
            var partial = [];

            for (var i = 0; i < value.length; i++) {
              var propertyString = serializeProperty(String(i), value);
              partial.push(propertyString !== undefined ? propertyString : 'null');
            }

            var _final2;

            if (partial.length === 0) {
              _final2 = '[]';
            } else {
              if (gap === '') {
                var properties = partial.join(',');
                _final2 = '[' + properties + ']';
              } else {
                var separator = ',\n' + indent;
                var properties$1 = partial.join(separator);
                _final2 = '[\n' + indent + properties$1 + ',\n' + stepback + ']';
              }
            }

            stack.pop();
            indent = stepback;
            return _final2;
          }
        };

        var JSON5 = {
          parse: parse,
          stringify: stringify
        };
        var lib = JSON5;
        var es5 = lib;
        return es5;
      });
      /***/

    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/_@angular_core@10.0.11@@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/_@angular_router@10.0.11@@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomePageRoutingModule
      });
      HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomePageRoutingModule_Factory(t) {
          return new (t || HomePageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/_@angular_core@10.0.11@@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/_@angular_common@10.0.11@@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/_@ionic_angular@5.3.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/_@angular_forms@10.0.11@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomePageModule
      });
      HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomePageModule_Factory(t) {
          return new (t || HomePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/_@angular_core@10.0.11@@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/_@ionic_angular@5.3.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/_@angular_forms@10.0.11@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);

          this.rows = 20;
          this.jsonValue = '';
          this.jsonFormat = '';
        }

        _createClass(HomePage, [{
          key: "format",
          value: function format() {
            var jsonFormat = __webpack_require__(
            /*! json-format */
            "./node_modules/_json-format@1.0.1@json-format/index.js");

            var JSON5 = __webpack_require__(
            /*! json5 */
            "./node_modules/_json5@2.1.3@json5/dist/index.js");
            /* using indent with spaces */


            var config = {
              type: 'space',
              size: 2
            };
            console.log(JSON5.parse(this.jsonValue));
            this.jsonFormat = jsonFormat(this.jsonValue, config);
          }
        }, {
          key: "hu",
          value: function hu() {}
        }]);

        return HomePage;
      }();

      HomePage.ɵfac = function HomePage_Factory(t) {
        return new (t || HomePage)();
      };

      HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePage,
        selectors: [["app-home"]],
        decls: 30,
        vars: 7,
        consts: [[3, "translucent"], [3, "fullscreen"], ["size", "5"], [1, "easy-ion-item"], ["placeholder", "\u8BF7\u8F93\u5165\u9700\u8981\u8F6C\u6362\u7684json\u5B57\u7B26\u4E32...", "auto-grow", "true", "autofocus", "true", "clear-on-edit", "true", "color", "tertiary", "inputmode", "text", 3, "rows", "ngModel", "ngModelChange"], ["size", "2"], [1, "easy-grid-middle"], [3, "click"], ["placeholder", "\u8F6C\u6362\u540E\u7684\u7ED3\u679C", "auto-grow", "true", "autofocus", "true", "clear-on-edit", "true", "color", "tertiary", "inputmode", "text", "readonly", "true", 3, "rows", "value"], ["size", "small", 1, "easy-title-center"], ["href", "//www.runoob.com/"], ["target", "_blank", "rel", "nofollow", "href", "https://beian.miit.gov.cn/"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u771F\u65B9\u4FBF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u65B9\u4FBF\u7A0B\u5E8F\u5458\u5F00\u53D1\u5C0F\u5DE5\u5177");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePage_Template_ion_textarea_ngModelChange_13_listener($event) {
              return ctx.jsonValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_16_listener() {
              return ctx.format();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u683C\u5F0F\u5316");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-textarea", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-title", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Copyright \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u83DC\u9E1F\u6559\u7A0B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 2020 \u5907\u6848\u53F7\uFF1A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u95FDICP\u590715012807\u53F7-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("ngModel", ctx.jsonValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("value", ctx.jsonFormat);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"]],
        styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-grid-middle[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFJQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUZGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZWFzeS1ncmlkLW1pZGRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmVhc3ktaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmVhc3ktdGl0bGUtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map