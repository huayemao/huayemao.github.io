(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{9743:function(e,n,t){e.exports=(function e(n,t,r){function o(a,u){if(!t[a]){if(!n[a]){if(i)return i(a,!0);var c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){return o(n[a][1][e]||e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o})({1:[function(e,n,r){(function(e){"use strict";var t,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),t=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)t="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var n=e.document.createElement("script");n.onreadystatechange=function(){s(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,t=function(){c.port2.postMessage(0)}}var f=[];function s(){r=!0;for(var e,n,t=f.length;t;){for(n=f,f=[],e=-1;++e<t;)n[e]();t=f.length}r=!1}n.exports=function(e){1!==f.push(e)||r||t()}}).call(this,void 0!==t.g?t.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,t){"use strict";var r=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function s(e,n,t){this.promise=e,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof t&&(this.onRejected=t,this.callRejected=this.otherCallRejected)}function l(e,n,t){r(function(){var r;try{r=n(t)}catch(n){return i.reject(e,n)}r===e?i.reject(e,TypeError("Cannot resolve promise with itself")):i.resolve(e,r)})}function d(e){var n=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof n)return function(){n.apply(e,arguments)}}function v(e,n){var t=!1;function r(n){t||(t=!0,i.reject(e,n))}function o(n){t||(t=!0,i.resolve(e,n))}var a=h(function(){n(o,r)});"error"===a.status&&r(a.value)}function h(e,n){var t={};try{t.value=e(n),t.status="success"}catch(e){t.status="error",t.value=e}return t}n.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,n){if("function"!=typeof e&&this.state===u||"function"!=typeof n&&this.state===a)return this;var t=new this.constructor(o);return this.state!==c?l(t,this.state===u?e:n,this.outcome):this.queue.push(new s(t,e,n)),t},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,n){var t=h(d,n);if("error"===t.status)return i.reject(e,t.value);var r=t.value;if(r)v(e,r);else{e.state=u,e.outcome=n;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(n)}return e},i.reject=function(e,n){e.state=a,e.outcome=n;for(var t=-1,r=e.queue.length;++t<r;)e.queue[t].callRejected(n);return e},f.resolve=function(e){return e instanceof this?e:i.resolve(new this(o),e)},f.reject=function(e){var n=new this(o);return i.reject(n,e)},f.all=function(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var a=Array(t),u=0,c=-1,f=new this(o);++c<t;)(function(e,o){n.resolve(e).then(function(e){a[o]=e,++u!==t||r||(r=!0,i.resolve(f,a))},function(e){r||(r=!0,i.reject(f,e))})})(e[c],c);return f},f.race=function(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var a=-1,u=new this(o);++a<t;)(function(e){n.resolve(e).then(function(e){r||(r=!0,i.resolve(u,e))},function(e){r||(r=!0,i.reject(u,e))})})(e[a]);return u}},{1:1}],3:[function(e,n,r){(function(n){"use strict";"function"!=typeof n.Promise&&(n.Promise=e(2))}).call(this,void 0!==t.g?t.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function i(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(o){if("TypeError"!==o.name)throw o;for(var t=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)t.append(e[r]);return t.getBlob(n.type)}}"undefined"==typeof Promise&&e(3);var a=Promise;function u(e,n){n&&e.then(function(e){n(null,e)},function(e){n(e)})}function c(e,n,t){"function"==typeof n&&e.then(n),"function"==typeof t&&e.catch(t)}function f(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function s(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var l="local-forage-detect-blob-support",d=void 0,v={},h=Object.prototype.toString,y="readonly",p="readwrite";function b(e){var n=v[e.name],t={};t.promise=new a(function(e,n){t.resolve=e,t.reject=n}),n.deferredOperations.push(t),n.dbReady?n.dbReady=n.dbReady.then(function(){return t.promise}):n.dbReady=t.promise}function m(e){var n=v[e.name].deferredOperations.pop();if(n)return n.resolve(),n.promise}function g(e,n){var t=v[e.name].deferredOperations.pop();if(t)return t.reject(n),t.promise}function _(e,n){return new a(function(t,r){if(v[e.name]=v[e.name]||j(),e.db){if(!n)return t(e.db);b(e),e.db.close()}var i=[e.name];n&&i.push(e.version);var a=o.open.apply(o,i);n&&(a.onupgradeneeded=function(n){var t=a.result;try{t.createObjectStore(e.storeName),n.oldVersion<=1&&t.createObjectStore(l)}catch(t){if("ConstraintError"===t.name)console.warn('The database "'+e.name+'" has been upgraded from version '+n.oldVersion+" to version "+n.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw t}}),a.onerror=function(e){e.preventDefault(),r(a.error)},a.onsuccess=function(){var n=a.result;n.onversionchange=function(e){e.target.close()},t(n),m(e)}})}function I(e,n){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==n&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function S(e){return i([function(e){for(var n=e.length,t=new ArrayBuffer(n),r=new Uint8Array(t),o=0;o<n;o++)r[o]=e.charCodeAt(o);return t}(atob(e.data))],{type:e.type})}function w(e){return e&&e.__local_forage_encoded_blob}function E(e){var n=this,t=n._initReady().then(function(){var e=v[n._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return c(t,e,e),t}function N(e,n,t,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,n);t(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then(function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),_(e,!0)}).then(function(){return(function(e){b(e);for(var n=v[e.name],t=n.forages,r=0;r<t.length;r++){var o=t[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,_(e,!1).then(function(n){return(e.db=n,I(e))?_(e,!0):n}).then(function(r){e.db=n.db=r;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=r}).catch(function(n){throw g(e,n),n})})(e).then(function(){N(e,n,t,r-1)})}).catch(t);t(o)}}function j(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}var R={_driver:"asyncStorage",_initStorage:function(e){var n=this,t={db:null};if(e)for(var r in e)t[r]=e[r];var o=v[t.name];o||(o=j(),v[t.name]=o),o.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=E);var i=[];function u(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var f=o.forages[c];f!==n&&i.push(f._initReady().catch(u))}var s=o.forages.slice(0);return a.all(i).then(function(){return t.db=o.db,_(t,!1)}).then(function(e){return(t.db=e,I(t,n._defaultConfig.version))?_(t,!0):e}).then(function(e){t.db=o.db=e,n._dbInfo=t;for(var r=0;r<s.length;r++){var i=s[r];i!==n&&(i._dbInfo.db=t.db,i._dbInfo.version=t.version)}})},_support:function(){try{if(!o||!o.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,n){var t=this,r=new a(function(n,r){t.ready().then(function(){N(t._dbInfo,y,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var t=a.result;if(t){var r=t.value;w(r)&&(r=S(r));var o=e(r,t.key,u++);void 0!==o?n(o):t.continue()}else n()},a.onerror=function(){r(a.error)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},getItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){N(t._dbInfo,y,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),w(e)&&(e=S(e)),n(e)},a.onerror=function(){r(a.error)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},setItem:function(e,n,t){var r=this;e=f(e);var o=new a(function(t,o){var u;r.ready().then(function(){var e;return(u=r._dbInfo,"[object Blob]"===h.call(n))?(e=u.db,"boolean"==typeof d?a.resolve(d):new a(function(n){var t=e.transaction(l,p),r=i([""]);t.objectStore(l).put(r,"key"),t.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)},t.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/);n(navigator.userAgent.match(/Edge\//)||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1}).then(function(e){return d=e})).then(function(e){return e?n:new a(function(e,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){e({__local_forage_encoded_blob:!0,data:btoa(t.target.result||""),type:n.type})},r.readAsBinaryString(n)})}):n}).then(function(n){N(r._dbInfo,p,function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===n&&(n=void 0);var c=u.put(n,e);a.oncomplete=function(){void 0===n&&(n=null),t(n)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}})}).catch(o)});return u(o,t),o},removeItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){N(t._dbInfo,p,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).delete(e);i.oncomplete=function(){n()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},clear:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){N(n._dbInfo,p,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;t(e)}}catch(e){t(e)}})}).catch(t)});return u(t,e),t},length:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){N(n._dbInfo,y,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){t(i.error)}}catch(e){t(e)}})}).catch(t)});return u(t,e),t},key:function(e,n){var t=this,r=new a(function(n,r){if(e<0){n(null);return}t.ready().then(function(){N(t._dbInfo,y,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var t=c.result;if(!t){n(null);return}0===e?n(t.key):u?n(t.key):(u=!0,t.advance(e))},c.onerror=function(){r(c.error)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},keys:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){N(n._dbInfo,y,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var n=i.result;if(!n){e(a);return}a.push(n.key),n.continue()},i.onerror=function(){t(i.error)}}catch(e){t(e)}})}).catch(t)});return u(t,e),t},dropInstance:function(e,n){n=s.apply(this,arguments);var t,r=this.config();if((e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName),e.name){var i=e.name===r.name&&this._dbInfo.db?a.resolve(this._dbInfo.db):_(e,!1).then(function(n){var t=v[e.name],r=t.forages;t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n;return n});t=e.storeName?i.then(function(n){if(n.objectStoreNames.contains(e.storeName)){var t=n.version+1;b(e);var r=v[e.name],i=r.forages;n.close();for(var u=0;u<i.length;u++){var c=i[u];c._dbInfo.db=null,c._dbInfo.version=t}return new a(function(n,r){var i=o.open(e.name,t);i.onerror=function(e){i.result.close(),r(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),n(e)}}).then(function(e){r.db=e;for(var n=0;n<i.length;n++){var t=i[n];t._dbInfo.db=e,m(t._dbInfo)}}).catch(function(n){throw(g(e,n)||a.resolve()).catch(function(){}),n})}}):i.then(function(n){b(e);var t=v[e.name],r=t.forages;n.close();for(var i=0;i<r.length;i++)r[i]._dbInfo.db=null;return new a(function(n,t){var r=o.deleteDatabase(e.name);r.onerror=function(){var e=r.result;e&&e.close(),t(r.error)},r.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},r.onsuccess=function(){var e=r.result;e&&e.close(),n(e)}}).then(function(e){t.db=e;for(var n=0;n<r.length;n++)m(r[n]._dbInfo)}).catch(function(n){throw(g(e,n)||a.resolve()).catch(function(){}),n})})}else t=a.reject("Invalid arguments");return u(t,n),t}},A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O=/^~~local_forage_type~([^~]+)~/,D="__lfsc__:",k=D.length,x="arbf",B="blob",C="si08",T="ui08",F="uic8",L="si16",M="si32",z="ur16",P="ui32",U="fl32",q="fl64",W=k+x.length,K=Object.prototype.toString;function H(e){var n,t,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(n=0;n<u;n+=4)t=A.indexOf(e[n]),r=A.indexOf(e[n+1]),o=A.indexOf(e[n+2]),i=A.indexOf(e[n+3]),s[c++]=t<<2|r>>4,s[c++]=(15&r)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function Q(e){var n,t=new Uint8Array(e),r="";for(n=0;n<t.length;n+=3)r+=A[t[n]>>2]+A[(3&t[n])<<4|t[n+1]>>4]+A[(15&t[n+1])<<2|t[n+2]>>6]+A[63&t[n+2]];return t.length%3==2?r=r.substring(0,r.length-1)+"=":t.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var X={serialize:function(e,n){var t="";if(e&&(t=K.call(e)),e&&("[object ArrayBuffer]"===t||e.buffer&&"[object ArrayBuffer]"===K.call(e.buffer))){var r,o=D;e instanceof ArrayBuffer?(r=e,o+=x):(r=e.buffer,"[object Int8Array]"===t?o+=C:"[object Uint8Array]"===t?o+=T:"[object Uint8ClampedArray]"===t?o+=F:"[object Int16Array]"===t?o+=L:"[object Uint16Array]"===t?o+=z:"[object Int32Array]"===t?o+=M:"[object Uint32Array]"===t?o+=P:"[object Float32Array]"===t?o+=U:"[object Float64Array]"===t?o+=q:n(Error("Failed to get type for BinaryArray"))),n(o+Q(r))}else if("[object Blob]"===t){var i=new FileReader;i.onload=function(){n(D+B+("~~local_forage_type~"+e.type)+"~"+Q(this.result))},i.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(t){console.error("Couldn't convert value into a JSON string: ",e),n(null,t)}},deserialize:function(e){if(e.substring(0,k)!==D)return JSON.parse(e);var n,t=e.substring(W),r=e.substring(k,W);if(r===B&&O.test(t)){var o=t.match(O);n=o[1],t=t.substring(o[0].length)}var a=H(t);switch(r){case x:return a;case B:return i([a],{type:n});case C:return new Int8Array(a);case T:return new Uint8Array(a);case F:return new Uint8ClampedArray(a);case L:return new Int16Array(a);case z:return new Uint16Array(a);case M:return new Int32Array(a);case P:return new Uint32Array(a);case U:return new Float32Array(a);case q:return new Float64Array(a);default:throw Error("Unkown type: "+r)}},stringToBuffer:H,bufferToString:Q};function G(e,n,t,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,r)}function J(e,n,t,r,o,i){e.executeSql(t,r,o,function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],function(e,u){u.rows.length?i(e,a):G(e,n,function(){e.executeSql(t,r,o,i)},i)},i):i(e,a)},i)}function V(e,n,t,r){var o=this;e=f(e);var i=new a(function(i,a){o.ready().then(function(){void 0===n&&(n=null);var u=n,c=o._dbInfo;c.serializer.serialize(n,function(n,f){f?a(f):c.db.transaction(function(t){J(t,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,n],function(){i(u)},function(e,n){a(n)})},function(n){if(n.code===n.QUOTA_ERR){if(r>0){i(V.apply(o,[e,u,t,r-1]));return}a(n)}})})}).catch(a)});return u(i,t),i}var Y={_driver:"webSQLStorage",_initStorage:function(e){var n=this,t={db:null};if(e)for(var r in e)t[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new a(function(e,r){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(e){return r(e)}t.db.transaction(function(o){G(o,t,function(){n._dbInfo=t,e()},function(e,n){r(n)})},r)});return t.serializer=X,o},_support:"function"==typeof openDatabase,iterate:function(e,n){var t=this,r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){J(t,o,"SELECT * FROM "+o.storeName,[],function(t,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1))){n(f);return}}n()},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},getItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){J(t,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,t){var r=t.rows.length?t.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),n(r)},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},setItem:function(e,n,t){return V.apply(this,[e,n,t,1])},removeItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){J(t,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){n()},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},clear:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){J(n,r,"DELETE FROM "+r.storeName,[],function(){e()},function(e,n){t(n)})})}).catch(t)});return u(t,e),t},length:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){J(n,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],function(n,t){e(t.rows.item(0).c)},function(e,n){t(n)})})}).catch(t)});return u(t,e),t},key:function(e,n){var t=this,r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){J(t,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,t){n(t.rows.length?t.rows.item(0).key:null)},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},keys:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){J(n,r,"SELECT key FROM "+r.storeName,[],function(n,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o).key);e(r)},function(e,n){t(n)})})}).catch(t)});return u(t,e),t},dropInstance:function(e,n){n=s.apply(this,arguments);var t,r=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this;return u(t=e.name?new a(function(n){var t;n((t=e.name===r.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName)?{db:t,storeNames:[e.storeName]}:new a(function(e,n){t.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(n,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);e({db:t,storeNames:o})},function(e,t){n(t)})},function(e){n(e)})}))}).then(function(e){return new a(function(n,t){e.db.transaction(function(r){for(var o=[],i=0,u=e.storeNames.length;i<u;i++)o.push(function(e){return new a(function(n,t){r.executeSql("DROP TABLE IF EXISTS "+e,[],function(){n()},function(e,n){t(n)})})}(e.storeNames[i]));a.all(o).then(function(){n()}).catch(function(e){t(e)})},function(e){t(e)})})}):a.reject("Invalid arguments"),n),t}};function Z(e,n){var t=e.name+"/";return e.storeName!==n.storeName&&(t+=e.storeName+"/"),t}var $={_driver:"localStorageWrapper",_initStorage:function(e){var n={};if(e)for(var t in e)n[t]=e[t];return(n.keyPrefix=Z(e,this._defaultConfig),!function(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(e){return!0}}()||localStorage.length>0)?(this._dbInfo=n,n.serializer=X,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,n){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,r=n.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var f=localStorage.getItem(c);if(f&&(f=n.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}});return u(r,n),r},getItem:function(e,n){var t=this;e=f(e);var r=t.ready().then(function(){var n=t._dbInfo,r=localStorage.getItem(n.keyPrefix+e);return r&&(r=n.serializer.deserialize(r)),r});return u(r,n),r},setItem:function(e,n,t){var r=this;e=f(e);var o=r.ready().then(function(){void 0===n&&(n=null);var t=n;return new a(function(o,i){var a=r._dbInfo;a.serializer.serialize(n,function(n,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,n),o(t)}catch(e){("QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&i(e),i(e)}})})});return u(o,t),o},removeItem:function(e,n){var t=this;e=f(e);var r=t.ready().then(function(){var n=t._dbInfo;localStorage.removeItem(n.keyPrefix+e)});return u(r,n),r},clear:function(e){var n=this,t=n.ready().then(function(){for(var e=n._dbInfo.keyPrefix,t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}});return u(t,e),t},length:function(e){var n=this.keys().then(function(e){return e.length});return u(n,e),n},key:function(e,n){var t=this,r=t.ready().then(function(){var n,r=t._dbInfo;try{n=localStorage.key(e)}catch(e){n=null}return n&&(n=n.substring(r.keyPrefix.length)),n});return u(r,n),r},keys:function(e){var n=this,t=n.ready().then(function(){for(var e=n._dbInfo,t=localStorage.length,r=[],o=0;o<t;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r});return u(t,e),t},dropInstance:function(e,n){if(n=s.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var t,r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var o=this;return u(t=e.name?new a(function(n){n(e.storeName?Z(e,o._defaultConfig):e.name+"/")}).then(function(e){for(var n=localStorage.length-1;n>=0;n--){var t=localStorage.key(n);0===t.indexOf(e)&&localStorage.removeItem(t)}}):a.reject("Invalid arguments"),n),t}},ee=function(e,n){for(var t,r=e.length,o=0;o<r;){if((t=e[o])===n||"number"==typeof t&&"number"==typeof n&&isNaN(t)&&isNaN(n))return!0;o++}return!1},en=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},et={},er={},eo={INDEXEDDB:R,WEBSQL:Y,LOCALSTORAGE:$},ei=[eo.INDEXEDDB._driver,eo.WEBSQL._driver,eo.LOCALSTORAGE._driver],ea=["dropInstance"],eu=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ea),ec={description:"",driver:ei.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ef(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var t in n)n.hasOwnProperty(t)&&(en(n[t])?arguments[0][t]=n[t].slice():arguments[0][t]=n[t])}return arguments[0]}var es=new(function(){function e(n){for(var t in function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}(this,e),eo)if(eo.hasOwnProperty(t)){var r=eo[t],o=r._driver;this[t]=o,et[o]||this.defineDriver(r)}this._defaultConfig=ef({},ec),this._config=ef({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(e){if((void 0===e?"undefined":r(e))==="object"){if(this._ready)return Error("Can't call config() after localforage has been used.");for(var n in e){if("storeName"===n&&(e[n]=e[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof e[n])return Error("Database version must be a number.");this._config[n]=e[n]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,n,t){var r=new a(function(n,t){try{var r=e._driver,o=Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver){t(o);return}for(var i=eu.concat("_initStorage"),c=0,f=i.length;c<f;c++){var s=i[c];if((!ee(ea,s)||e[s])&&"function"!=typeof e[s]){t(o);return}}!function(){for(var n=function(e){return function(){var n=Error("Method "+e+" is not implemented by the current driver"),t=a.reject(n);return u(t,arguments[arguments.length-1]),t}},t=0,r=ea.length;t<r;t++){var o=ea[t];e[o]||(e[o]=n(o))}}();var l=function(t){et[r]&&console.info("Redefining LocalForage driver: "+r),et[r]=e,er[r]=t,n()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(l,t):l(!!e._support):l(!0)}catch(e){t(e)}});return c(r,n,t),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,n,t){var r=et[e]?a.resolve(et[e]):a.reject(Error("Driver not found."));return c(r,n,t),r},e.prototype.getSerializer=function(e){var n=a.resolve(X);return c(n,e),n},e.prototype.ready=function(e){var n=this,t=n._driverSet.then(function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready});return c(t,e,e),t},e.prototype.setDriver=function(e,n,t){var r=this;en(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function u(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}var f=null!==this._driverSet?this._driverSet.catch(function(){return a.resolve()}):a.resolve();return this._driverSet=f.then(function(){var e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then(function(e){r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(){var e=0;return function n(){for(;e<o.length;){var t=o[e];return e++,r._dbInfo=null,r._ready=null,r.getDriver(t).then(u).catch(n)}i();var c=Error("No available storage method found.");return r._driverSet=a.reject(c),r._driverSet}()}})}).catch(function(){i();var e=Error("No available storage method found.");return r._driverSet=a.reject(e),r._driverSet}),c(this._driverSet,n,t),this._driverSet},e.prototype.supports=function(e){return!!er[e]},e.prototype._extend=function(e){ef(this,e)},e.prototype._getSupportedDrivers=function(e){for(var n=[],t=0,r=e.length;t<r;t++){var o=e[t];this.supports(o)&&n.push(o)}return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,n=eu.length;e<n;e++)!function(e,n){e[n]=function(){var t=arguments;return e.ready().then(function(){return e[n].apply(e,t)})}}(this,eu[e])},e.prototype.createInstance=function(n){return new e(n)},e}());n.exports=es},{3:3}]},{},[4])(4)}}]);