webpackJsonp([1,4],{

/***/ 251:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 251;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(270);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_chat_example_data__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_users_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thread_threads_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_messages_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(messagesService, threadsService, usersService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.usersService = usersService;
        __WEBPACK_IMPORTED_MODULE_1__data_chat_example_data__["a" /* ChatExampleData */].init(messagesService, threadsService, usersService);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(333),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_users_service__["a" /* UsersService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_users_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thread_threads_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_messages_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_thread_chat_thread_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_nav_bar_chat_nav_bar_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_threads_chat_threads_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_window_chat_window_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_page_chat_page_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_from_now_pipe__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chat_thread_chat_thread_component__["a" /* ChatThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_nav_bar_chat_nav_bar_component__["a" /* ChatNavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_threads_chat_threads_component__["a" /* ChatThreadsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__chat_window_chat_window_component__["a" /* ChatWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__chat_page_chat_page_component__["a" /* ChatPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_from_now_pipe__["a" /* FromNowPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__message_messages_service__["a" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_5__thread_threads_service__["a" /* ThreadsService */], __WEBPACK_IMPORTED_MODULE_4__user_users_service__["a" /* UsersService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_users_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = (function () {
    function ChatMessageComponent(UsersService) {
        this.UsersService = UsersService;
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UsersService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
            if (_this.message.author && user) {
                _this.incoming = _this.message.author.id !== user.id;
            }
        });
    };
    return ChatMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]) === "function" && _a || Object)
], ChatMessageComponent.prototype, "message", void 0);
ChatMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'chat-message',
        template: __webpack_require__(334),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], ChatMessageComponent);

var _a, _b;
//# sourceMappingURL=chat-message.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_messages_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatNavBarComponent = (function () {
    function ChatNavBarComponent(messagesService, threadsService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
    }
    ChatNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.messages
            .combineLatest(this.threadsService.currentThread, function (messages, currentThread) {
            return [currentThread, messages];
        })
            .subscribe(function (_a) {
            var currentThread = _a[0], messages = _a[1];
            _this.unreadMessagesCount =
                __WEBPACK_IMPORTED_MODULE_1_lodash__["reduce"](messages, function (sum, m) {
                    var messageIsInCurrentThread = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                    // note: in a "real" app you should also exclude
                    // messages that were authored by the current user b/c they've
                    // already been "read"
                    if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                    }
                    return sum;
                }, 0);
        });
    };
    return ChatNavBarComponent;
}());
ChatNavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'chat-nav-bar',
        template: __webpack_require__(335),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object])
], ChatNavBarComponent);

var _a, _b;
//# sourceMappingURL=chat-nav-bar.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPageComponent = (function () {
    function ChatPageComponent() {
    }
    ChatPageComponent.prototype.ngOnInit = function () {
    };
    return ChatPageComponent;
}());
ChatPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'chat-page',
        template: __webpack_require__(336),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [])
], ChatPageComponent);

//# sourceMappingURL=chat-page.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_thread_model__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatThreadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatThreadComponent = (function () {
    function ChatThreadComponent(threadsService) {
        this.threadsService = threadsService;
        this.selected = false;
    }
    ChatThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadsService.currentThread
            .subscribe(function (currentThread) {
            _this.selected = currentThread &&
                _this.thread &&
                (currentThread.id === _this.thread.id);
        });
    };
    ChatThreadComponent.prototype.clicked = function (event) {
        this.threadsService.setCurrentThread(this.thread);
        event.preventDefault();
    };
    return ChatThreadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__thread_thread_model__["a" /* Thread */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thread_thread_model__["a" /* Thread */]) === "function" && _a || Object)
], ChatThreadComponent.prototype, "thread", void 0);
ChatThreadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'chat-thread',
        template: __webpack_require__(337),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object])
], ChatThreadComponent);

var _a, _b;
//# sourceMappingURL=chat-thread.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatThreadsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatThreadsComponent = (function () {
    function ChatThreadsComponent(threadsService) {
        this.threadsService = threadsService;
        this.threads = threadsService.orderedThreads;
    }
    return ChatThreadsComponent;
}());
ChatThreadsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'chat-threads',
        template: __webpack_require__(338),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */]) === "function" && _a || Object])
], ChatThreadsComponent);

var _a;
//# sourceMappingURL=chat-threads.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_users_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message_model__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_messages_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatWindowComponent = (function () {
    function ChatWindowComponent(messagesService, threadsService, UsersService, el) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.UsersService = UsersService;
        this.el = el;
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = this.threadsService.currentThreadMessages;
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_3__message_message_model__["a" /* Message */]();
        this.threadsService.currentThread.subscribe(function (thread) {
            _this.currentThread = thread;
        });
        this.UsersService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
        });
        this.messages
            .subscribe(function (messages) {
            setTimeout(function () {
                _this.scrollToBottom();
            });
        });
    };
    ChatWindowComponent.prototype.onEnter = function (event) {
        this.sendMessage();
        event.preventDefault();
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        var m = this.draftMessage;
        m.author = this.currentUser;
        m.thread = this.currentThread;
        m.isRead = true;
        this.messagesService.addMessage(m);
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_3__message_message_model__["a" /* Message */]();
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    };
    return ChatWindowComponent;
}());
ChatWindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'chat-window',
        template: __webpack_require__(339),
        styles: [__webpack_require__(330)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _d || Object])
], ChatWindowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat-window.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_model__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatExampleData; });
/* tslint:disable:max-line-length */




// the person using the app us Juliet
var me = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Juliet', 'assets/images/avatars/female-avatar-1.png');
var ladycap = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
var echo = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
var rev = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
var wait = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');
var tLadycap = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tLadycap', ladycap.name, ladycap.avatarSrc);
var tEcho = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tEcho', echo.name, echo.avatarSrc);
var tRev = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tRev', rev.name, rev.avatarSrc);
var tWait = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tWait', wait.name, wait.avatarSrc);
var initialMessages = [
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: me,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(45, 'minutes').toDate(),
        text: 'Yet let me weep for such a feeling loss.',
        thread: tLadycap
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: ladycap,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(20, 'minutes').toDate(),
        text: 'So shall you feel the loss, but not the friend which you weep for.',
        thread: tLadycap
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: echo,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, 'minutes').toDate(),
        text: "I'll echo whatever you send me",
        thread: tEcho
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: rev,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(3, 'minutes').toDate(),
        text: "I'll reverse whatever you send me",
        thread: tRev
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: wait,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(4, 'minutes').toDate(),
        text: "I'll wait however many seconds you send to me before responding. Try sending '3'",
        thread: tWait
    }),
];
var ChatExampleData = (function () {
    function ChatExampleData() {
    }
    ChatExampleData.init = function (messagesService, threadsService, UsersService) {
        // TODO make `messages` hot
        messagesService.messages.subscribe(function () { return ({}); });
        // set "Juliet" as the current user
        UsersService.setCurrentUser(me);
        // create the initial messages
        initialMessages.map(function (message) { return messagesService.addMessage(message); });
        threadsService.setCurrentThread(tEcho);
        this.setupBots(messagesService);
    };
    ChatExampleData.setupBots = function (messagesService) {
        // echo bot
        messagesService.messagesForThreadUser(tEcho, echo)
            .forEach(function (message) {
            messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
                author: echo,
                text: message.text,
                thread: tEcho
            }));
        }, null);
        // reverse bot
        messagesService.messagesForThreadUser(tRev, rev)
            .forEach(function (message) {
            messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
                author: rev,
                text: message.text.split('').reverse().join(''),
                thread: tRev
            }));
        }, null);
        // waiting bot
        messagesService.messagesForThreadUser(tWait, wait)
            .forEach(function (message) {
            var waitTime = parseInt(message.text, 10);
            var reply;
            if (isNaN(waitTime)) {
                waitTime = 0;
                reply = "I didn't understand " + message.text + ". Try sending me a number";
            }
            else {
                reply = "I waited " + waitTime + " seconds to send you this.";
            }
            setTimeout(function () {
                messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
                    author: wait,
                    text: reply,
                    thread: tWait
                }));
            }, waitTime * 1000);
        }, null);
    };
    return ChatExampleData;
}());

//# sourceMappingURL=chat-example-data.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
/* unused harmony export fromNowPipeInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * FromNowPipe let's us convert a date into a human-readable relative-time
 * such as "10 minutes ago".
 */
var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    return FromNowPipe;
}());
FromNowPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'fromNow'
    })
], FromNowPipe);

var fromNowPipeInjectables = [
    FromNowPipe
];
//# sourceMappingURL=from-now.pipe.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

/**
 * A User represents an agent that sends messages
 */
var User = (function () {
    function User(name, avatarSrc) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_model__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_messages_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadsService; });
/* unused harmony export threadsServiceInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadsService = (function () {
    function ThreadsService(messagesService) {
        this.messagesService = messagesService;
        // `currentThread` contains the currently selected thread
        this.currentThread = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__thread_model__["a" /* Thread */]());
        this.threads = messagesService.messages
            .map(function (messages) {
            var threads = {};
            // Store the message's thread in our accumulator `threads`
            messages.map(function (message) {
                threads[message.thread.id] = threads[message.thread.id] ||
                    message.thread;
                // Cache the most recent message for each thread
                var messagesThread = threads[message.thread.id];
                if (!messagesThread.lastMessage ||
                    messagesThread.lastMessage.sentAt < message.sentAt) {
                    messagesThread.lastMessage = message;
                }
            });
            return threads;
        });
        this.orderedThreads = this.threads
            .map(function (threadGroups) {
            var threads = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](threadGroups);
            return __WEBPACK_IMPORTED_MODULE_4_lodash__["sortBy"](threads, function (t) { return t.lastMessage.sentAt; }).reverse();
        });
        this.currentThreadMessages = this.currentThread
            .combineLatest(messagesService.messages, function (currentThread, messages) {
            if (currentThread && messages.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_4_lodash__["chain"](messages)
                    .filter(function (message) {
                    return (message.thread.id === currentThread.id);
                })
                    .map(function (message) {
                    message.isRead = true;
                    return message;
                })
                    .value();
            }
            else {
                return [];
            }
        });
        this.currentThread.subscribe(this.messagesService.markThreadAsRead);
    }
    ThreadsService.prototype.setCurrentThread = function (newThread) {
        this.currentThread.next(newThread);
    };
    return ThreadsService;
}());
ThreadsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
], ThreadsService);

var threadsServiceInjectables = [
    ThreadsService
];
var _a;
//# sourceMappingURL=threads.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* unused harmony export messagesServiceInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialMessages = [];
var MessagesService = (function () {
    function MessagesService() {
        // a stream that publishes new messages only once
        this.newMessages = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // action streams
        this.create = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.markThreadAsRead = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.messages = this.updates
            .scan(function (messages, operation) {
            return operation(messages);
        }, initialMessages)
            .publishReplay(1)
            .refCount();
        // `create` takes a Message and then puts an operation (the inner function)
        // on the `updates` stream to add the Message to the list of messages.
        //
        // That is, for each item that gets added to `create` (by using `next`)
        // this stream emits a concat operation function.
        //
        // Next we subscribe `this.updates` to listen to this stream, which means
        // that it will receive each operation that is created
        //
        // Note that it would be perfectly acceptable to simply modify the
        // "addMessage" function below to simply add the inner operation function to
        // the update stream directly and get rid of this extra action stream
        // entirely. The pros are that it is potentially clearer. The cons are that
        // the stream is no longer composable.
        this.create
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
        this.newMessages
            .subscribe(this.create);
        // similarly, `markThreadAsRead` takes a Thread and then puts an operation
        // on the `updates` stream to mark the Messages as read
        this.markThreadAsRead
            .map(function (thread) {
            return function (messages) {
                return messages.map(function (message) {
                    // note that we're manipulating `message` directly here. Mutability
                    // can be confusing and there are lots of reasons why you might want
                    // to, say, copy the Message object or some other 'immutable' here
                    if (message.thread.id === thread.id) {
                        message.isRead = true;
                    }
                    return message;
                });
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService.prototype.messagesForThreadUser = function (thread, user) {
        return this.newMessages
            .filter(function (message) {
            // belongs to this thread
            return (message.thread.id === thread.id) &&
                // and isn't authored by this user
                (message.author.id !== user.id);
        });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MessagesService);

var messagesServiceInjectables = [
    MessagesService
];
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 103,
	"./af.js": 103,
	"./ar": 110,
	"./ar-dz": 104,
	"./ar-dz.js": 104,
	"./ar-kw": 105,
	"./ar-kw.js": 105,
	"./ar-ly": 106,
	"./ar-ly.js": 106,
	"./ar-ma": 107,
	"./ar-ma.js": 107,
	"./ar-sa": 108,
	"./ar-sa.js": 108,
	"./ar-tn": 109,
	"./ar-tn.js": 109,
	"./ar.js": 110,
	"./az": 111,
	"./az.js": 111,
	"./be": 112,
	"./be.js": 112,
	"./bg": 113,
	"./bg.js": 113,
	"./bn": 114,
	"./bn.js": 114,
	"./bo": 115,
	"./bo.js": 115,
	"./br": 116,
	"./br.js": 116,
	"./bs": 117,
	"./bs.js": 117,
	"./ca": 118,
	"./ca.js": 118,
	"./cs": 119,
	"./cs.js": 119,
	"./cv": 120,
	"./cv.js": 120,
	"./cy": 121,
	"./cy.js": 121,
	"./da": 122,
	"./da.js": 122,
	"./de": 125,
	"./de-at": 123,
	"./de-at.js": 123,
	"./de-ch": 124,
	"./de-ch.js": 124,
	"./de.js": 125,
	"./dv": 126,
	"./dv.js": 126,
	"./el": 127,
	"./el.js": 127,
	"./en-au": 128,
	"./en-au.js": 128,
	"./en-ca": 129,
	"./en-ca.js": 129,
	"./en-gb": 130,
	"./en-gb.js": 130,
	"./en-ie": 131,
	"./en-ie.js": 131,
	"./en-nz": 132,
	"./en-nz.js": 132,
	"./eo": 133,
	"./eo.js": 133,
	"./es": 135,
	"./es-do": 134,
	"./es-do.js": 134,
	"./es.js": 135,
	"./et": 136,
	"./et.js": 136,
	"./eu": 137,
	"./eu.js": 137,
	"./fa": 138,
	"./fa.js": 138,
	"./fi": 139,
	"./fi.js": 139,
	"./fo": 140,
	"./fo.js": 140,
	"./fr": 143,
	"./fr-ca": 141,
	"./fr-ca.js": 141,
	"./fr-ch": 142,
	"./fr-ch.js": 142,
	"./fr.js": 143,
	"./fy": 144,
	"./fy.js": 144,
	"./gd": 145,
	"./gd.js": 145,
	"./gl": 146,
	"./gl.js": 146,
	"./gom-latn": 147,
	"./gom-latn.js": 147,
	"./he": 148,
	"./he.js": 148,
	"./hi": 149,
	"./hi.js": 149,
	"./hr": 150,
	"./hr.js": 150,
	"./hu": 151,
	"./hu.js": 151,
	"./hy-am": 152,
	"./hy-am.js": 152,
	"./id": 153,
	"./id.js": 153,
	"./is": 154,
	"./is.js": 154,
	"./it": 155,
	"./it.js": 155,
	"./ja": 156,
	"./ja.js": 156,
	"./jv": 157,
	"./jv.js": 157,
	"./ka": 158,
	"./ka.js": 158,
	"./kk": 159,
	"./kk.js": 159,
	"./km": 160,
	"./km.js": 160,
	"./kn": 161,
	"./kn.js": 161,
	"./ko": 162,
	"./ko.js": 162,
	"./ky": 163,
	"./ky.js": 163,
	"./lb": 164,
	"./lb.js": 164,
	"./lo": 165,
	"./lo.js": 165,
	"./lt": 166,
	"./lt.js": 166,
	"./lv": 167,
	"./lv.js": 167,
	"./me": 168,
	"./me.js": 168,
	"./mi": 169,
	"./mi.js": 169,
	"./mk": 170,
	"./mk.js": 170,
	"./ml": 171,
	"./ml.js": 171,
	"./mr": 172,
	"./mr.js": 172,
	"./ms": 174,
	"./ms-my": 173,
	"./ms-my.js": 173,
	"./ms.js": 174,
	"./my": 175,
	"./my.js": 175,
	"./nb": 176,
	"./nb.js": 176,
	"./ne": 177,
	"./ne.js": 177,
	"./nl": 179,
	"./nl-be": 178,
	"./nl-be.js": 178,
	"./nl.js": 179,
	"./nn": 180,
	"./nn.js": 180,
	"./pa-in": 181,
	"./pa-in.js": 181,
	"./pl": 182,
	"./pl.js": 182,
	"./pt": 184,
	"./pt-br": 183,
	"./pt-br.js": 183,
	"./pt.js": 184,
	"./ro": 185,
	"./ro.js": 185,
	"./ru": 186,
	"./ru.js": 186,
	"./sd": 187,
	"./sd.js": 187,
	"./se": 188,
	"./se.js": 188,
	"./si": 189,
	"./si.js": 189,
	"./sk": 190,
	"./sk.js": 190,
	"./sl": 191,
	"./sl.js": 191,
	"./sq": 192,
	"./sq.js": 192,
	"./sr": 194,
	"./sr-cyrl": 193,
	"./sr-cyrl.js": 193,
	"./sr.js": 194,
	"./ss": 195,
	"./ss.js": 195,
	"./sv": 196,
	"./sv.js": 196,
	"./sw": 197,
	"./sw.js": 197,
	"./ta": 198,
	"./ta.js": 198,
	"./te": 199,
	"./te.js": 199,
	"./tet": 200,
	"./tet.js": 200,
	"./th": 201,
	"./th.js": 201,
	"./tl-ph": 202,
	"./tl-ph.js": 202,
	"./tlh": 203,
	"./tlh.js": 203,
	"./tr": 204,
	"./tr.js": 204,
	"./tzl": 205,
	"./tzl.js": 205,
	"./tzm": 207,
	"./tzm-latn": 206,
	"./tzm-latn.js": 206,
	"./tzm.js": 207,
	"./uk": 208,
	"./uk.js": 208,
	"./ur": 209,
	"./ur.js": 209,
	"./uz": 211,
	"./uz-latn": 210,
	"./uz-latn.js": 210,
	"./uz.js": 211,
	"./vi": 212,
	"./vi.js": 212,
	"./x-pseudo": 213,
	"./x-pseudo.js": 213,
	"./yo": 214,
	"./yo.js": 214,
	"./zh-cn": 215,
	"./zh-cn.js": 215,
	"./zh-hk": 216,
	"./zh-hk.js": 216,
	"./zh-tw": 217,
	"./zh-tw.js": 217
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 331;


/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<div>\n  <chat-page></chat-page>\n</div>\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-container\"\n     [ngClass]=\"{'base-sent': !incoming, 'base-receive': incoming}\">\n\n  <div class=\"avatar\"\n       *ngIf=\"!incoming\">\n    <img src=\"{{message.author.avatarSrc}}\">\n  </div>\n\n  <div class=\"messages\"\n    [ngClass]=\"{'msg-sent': !incoming, 'msg-receive': incoming}\">\n    <p>{{message.text}}</p>\n    <p class=\"time\">{{message.sender}} • {{message.sentAt | fromNow}}</p>\n  </div>\n\n  <div class=\"avatar\"\n       *ngIf=\"incoming\">\n    <img src=\"{{message.author.avatarSrc}}\">\n  </div>\n</div>\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n    </div>\n    <p class=\"navbar-text navbar-right\">\n      <button class=\"btn btn-primary\" type=\"button\">\n        Messages <span class=\"badge\">{{ unreadMessagesCount }}</span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<div>\n  <chat-nav-bar></chat-nav-bar>\n  <div class=\"container\">\n    <chat-threads></chat-threads>\n    <chat-window></chat-window>\n  </div>\n</div>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<div class=\"media conversation\">\n  <div class=\"pull-left\">\n    <img class=\"media-object avatar\"\n         src=\"{{thread.avatarSrc}}\">\n  </div>\n  <div class=\"media-body\">\n    <h5 class=\"media-heading contact-name\">{{thread.name}}\n      <span *ngIf=\"selected\">&bull;</span>\n    </h5>\n    <small class=\"message-preview\">{{thread.lastMessage.text}}</small>\n  </div>\n  <a (click)=\"clicked($event)\" class=\"div-link\">Select</a>\n</div>\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<!-- conversations -->\n<div class=\"row\">\n  <div class=\"conversation-wrap\">\n\n    <chat-thread\n         *ngFor=\"let thread of threads | async\"\n         [thread]=\"thread\">\n    </chat-thread>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\">\n  <div class=\"chat-window\">\n    <div class=\"panel-container\">\n      <div class=\"panel panel-default\">\n\n        <div class=\"panel-heading top-bar\">\n          <div class=\"panel-title-container\">\n            <h3 class=\"panel-title\">\n              <span class=\"glyphicon glyphicon-comment\"></span>\n              Chat - {{currentThread.name}}\n            </h3>\n          </div>\n          <div class=\"panel-buttons-container\">\n            <!-- you could put minimize or close buttons here -->\n          </div>\n        </div>\n\n        <div class=\"panel-body msg-container-base\">\n          <chat-message\n          *ngFor=\"let message of messages | async\"\n          [message]=\"message\">\n        </chat-message>\n      </div>\n\n      <div class=\"panel-footer\">\n        <div class=\"input-group\">\n          <input type=\"text\"\n          class=\"chat-input\"\n          placeholder=\"Write your message here...\"\n          (keydown.enter)=\"onEnter($event)\"\n          [(ngModel)]=\"draftMessage.text\" />\n          <span class=\"input-group-btn\">\n            <button class=\"btn-chat\"\n            (click)=\"onEnter($event)\"\n            >Send</button>\n          </span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* unused harmony export userServiceInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * UserService manages our current user
 */
var UsersService = (function () {
    function UsersService() {
        // `currentUser` contains the current user
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    UsersService.prototype.setCurrentUser = function (newUser) {
        this.currentUser.next(newUser);
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UsersService);

var userServiceInjectables = [
    UsersService
];
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });

/**
 * Message represents one message being sent in a Thread
 */
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thread; });

/**
 * Thread represents a group of Users exchanging Messages
 */
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());

//# sourceMappingURL=thread.model.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
/* jshint bitwise:false, node:true */
/* tslint:disable:no-bitwise no-var-keyword typedef */
// taken from TodoMVC
/* jshint bitwise:false, node:true */ function uuid() {
    var i, random;
    var result = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }
    return result;
}
;
//# sourceMappingURL=uuid.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(252);


/***/ })

},[612]);
//# sourceMappingURL=main.bundle.js.map