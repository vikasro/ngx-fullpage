webpackJsonp([2],{

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
	 */
	"use strict";
	var mnFullpage_directive_1 = __webpack_require__(113);
	exports.MnFullpageDirective = mnFullpage_directive_1.MnFullpageDirective;
	var mnFullpage_options_class_1 = __webpack_require__(112);
	exports.MnFullpageOptions = mnFullpage_options_class_1.MnFullpageOptions;
	var mnFullpage_service_1 = __webpack_require__(217);
	exports.MnFullpageService = mnFullpage_service_1.MnFullpageService;


/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MnFullpageOptions = (function () {
	    /**
	     * Public default constructor
	     *
	     * @param options options js-object
	     */
	    function MnFullpageOptions(options) {
	        if (options) {
	            Object.assign(this, options);
	        }
	    }
	    MnFullpageOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [Object])
	    ], MnFullpageOptions);
	    return MnFullpageOptions;
	}());
	exports.MnFullpageOptions = MnFullpageOptions;


/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var $ = __webpack_require__(103);
	__webpack_require__(119);
	var mnFullpage_options_class_1 = __webpack_require__(112);
	var DIRECTIVE_NAME = 'mnFullpage';
	var MnFullpageDirective = (function () {
	    /**
	     * Default public constructor
	     *
	     * @param el element where directive is placed on
	     */
	    function MnFullpageDirective(el) {
	        this._el = el;
	    }
	    /**
	     * Static method for option name retrieving
	     *
	     * @param property this class property name
	     * @returns {string} FullpageOption class option (property) name
	     */
	    MnFullpageDirective.extractName = function (property) {
	        return property[MnFullpageDirective.propertyPrefix.length].toLowerCase()
	            + property.substring(MnFullpageDirective.propertyPrefix.length + 1);
	    };
	    /**
	     * Perform actions on init
	     */
	    MnFullpageDirective.prototype.ngOnInit = function () {
	        /**
	         * Initialize options object with default (empty)
	         * values if it doesn't exist
	         */
	        if (!this.options) {
	            this.options = new mnFullpage_options_class_1.MnFullpageOptions();
	        }
	        /**
	         * Iterate over all properties of directive class
	         */
	        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
	            var property = _a[_i];
	            /**
	             * If property name doesn't start with 'fullpage' prefix (it is stored in
	             * FullpageDirective.propertyPrefix static property) then skip this property and
	             * continue the cycle
	             */
	            if (!property.startsWith(MnFullpageDirective.propertyPrefix)) {
	                continue;
	            }
	            /**
	             * Extract option name from the property name
	             *
	             * @type {string} option name
	             */
	            var option = MnFullpageDirective.extractName(property);
	            /**
	             * If options is already defined skip it
	             */
	            if (this.options[option]) {
	                continue;
	            }
	            /**
	             * Set property value to the options object property
	             */
	            this.options[option] = this[property];
	        }
	        /**
	         * Enable fullpage for the element
	         */
	        $(this._el.nativeElement).fullpage(this.options);
	    };
	    /**
	     * Prefix for directive-relative properties
	     *
	     * @type {string} prefix
	     */
	    MnFullpageDirective.propertyPrefix = "" + DIRECTIVE_NAME;
	    __decorate([
	        core_1.Input("" + DIRECTIVE_NAME), 
	        __metadata('design:type', (typeof (_a = typeof mnFullpage_options_class_1.MnFullpageOptions !== 'undefined' && mnFullpage_options_class_1.MnFullpageOptions) === 'function' && _a) || Object)
	    ], MnFullpageDirective.prototype, "options", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageMenu", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageLockAnchors", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MnFullpageDirective.prototype, "mnFullpageAnchors", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageNavigation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageNavigationPosition", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MnFullpageDirective.prototype, "mnFullpageNavigationTooltips", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageShowActiveTooltip", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageSlidesNavigation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageSlidesNavPosition", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageCss3", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MnFullpageDirective.prototype, "mnFullpageScrollingSpeed", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageAutoScrolling", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageFitToSection", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MnFullpageDirective.prototype, "mnFullpageFitToSectionDelay", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageScrollBar", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageEasing", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageEasingcss3", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageLoopBottom", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageLoopTop", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageLoopHorizontal", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageContinuousVertical", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageNormalScrollElements", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageScrollOverflow", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MnFullpageDirective.prototype, "mnFullpageTouchSensitivity", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MnFullpageDirective.prototype, "mnFullpageNormalScrollElementTouchThreshold", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageKeyboardScrolling", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageAnimateAnchor", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageRecordHistory", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageControlArrows", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageVerticalCentered", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], MnFullpageDirective.prototype, "mnFullpageResize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MnFullpageDirective.prototype, "mnFullpageSectionsColor", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpagePaddingTop", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpagePaddingBottom", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageFixedElements", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MnFullpageDirective.prototype, "mnFullpageResponsiveWidth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MnFullpageDirective.prototype, "mnFullpageResponsiveHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageSectionSelector", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MnFullpageDirective.prototype, "mnFullpageSlideSelector", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], MnFullpageDirective.prototype, "mnFullpageAfterLoad", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], MnFullpageDirective.prototype, "mnFullpageOnLeave", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], MnFullpageDirective.prototype, "mnFullpageAfterRender", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], MnFullpageDirective.prototype, "mnFullpageAfterResize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], MnFullpageDirective.prototype, "mnFullpageAfterSlideLoad", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], MnFullpageDirective.prototype, "mnFullpageOnSlideLeave", void 0);
	    MnFullpageDirective = __decorate([
	        core_1.Directive({
	            selector: "[" + DIRECTIVE_NAME + "]"
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
	    ], MnFullpageDirective);
	    return MnFullpageDirective;
	    var _a, _b;
	}());
	exports.MnFullpageDirective = MnFullpageDirective;


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var $ = __webpack_require__(103);
	__webpack_require__(119);
	var MnFullpageService = (function () {
	    function MnFullpageService() {
	    }
	    /**
	     * Scrolls one section up
	     */
	    MnFullpageService.prototype.moveSectionUp = function () {
	        $.fn.fullpage.moveSectionUp();
	    };
	    /**
	     * Scrolls one section down
	     */
	    MnFullpageService.prototype.moveSectionDown = function () {
	        $.fn.fullpage.moveSectionDown();
	    };
	    /**
	     * Scrolls the page to the given section and slide.
	     * The first slide, the visible one by default, will have index 0.
	     *
	     * @param section
	     * @param slide
	     */
	    MnFullpageService.prototype.moveTo = function (section, slide) {
	        $.fn.fullpage.moveTo(section, slide);
	    };
	    /**
	     * Exactly the same as moveTo but in this case it performs the scroll without animation.
	     * A direct jump to the destination.
	     *
	     * @param section
	     * @param slide
	     */
	    MnFullpageService.prototype.silentMoveTo = function (section, slide) {
	        $.fn.fullpage.silentMoveTo(section, slide);
	    };
	    /**
	     * Scrolls the horizontal slider of the current section to the next slide
	     */
	    MnFullpageService.prototype.moveSlideRight = function () {
	        $.fn.fullpage.moveSlideRight();
	    };
	    /**
	     * Scrolls the horizontal slider of the current section to the previous slide
	     */
	    MnFullpageService.prototype.moveSlideLeft = function () {
	        $.fn.fullpage.moveSlideLeft();
	    };
	    /**
	     * Sets the scrolling configuration in real time.
	     * Defines the way the page scrolling behaves. If it is set to true,
	     * it will use the "automatic" scrolling, otherwise, it will use the "manual"
	     * or "normal" scrolling of the site. Be careful when combining this option with
	     * scrollOverflow set to true, as it might be difficult to scroll using the mouse
	     * wheel or the trackpad when the section is scrollable
	     *
	     * @param enable
	     */
	    MnFullpageService.prototype.setAutoScrolling = function (enable) {
	        $.fn.fullpage.setAutoScrolling(enable);
	    };
	    /**
	     * Sets the value for the option fitToSection determining whether to fit
	     * the section in the screen or not.
	     *
	     * @param enable
	     */
	    MnFullpageService.prototype.setFitToSection = function (enable) {
	        $.fn.fullpage.setFitToSection(enable);
	    };
	    /**
	     * Sets the value for the option lockAnchors determining whether
	     * anchors will have any effect in the URL or not.
	     *
	     * @param enable
	     */
	    MnFullpageService.prototype.setLockAnchors = function (enable) {
	        $.fn.fullpage.setLockAnchors(enable);
	    };
	    /**
	     * Adds or remove the possibility of scrolling through sections by
	     * using the mouse wheel/trackpad or touch gestures (which is active
	     * by default). Note this won't disable the keyboard scrolling.
	     * You would need to use setKeyboardScrolling for it.
	     *
	     * Directions: (optional parameter) Admitted values: all, up, down,
	     * left, right or a combination of them separated by commas like down,
	     * right. It defines the direction for which the scrolling will
	     * be enabled or disabled.
	     *
	     * @param allow
	     * @param directions
	     */
	    MnFullpageService.prototype.setAllowScrolling = function (allow, directions) {
	        $.fn.fullpage.setAllowScrolling(allow, directions);
	    };
	    /**
	     * Adds or remove the possibility of scrolling through sections by
	     * using the keyboard arrow keys (which is active by default).
	     *
	     * Directions: (optional parameter) Admitted values: all, up, down,
	     * left, right or a combination of them separated by commas like down,
	     * right. It defines the direction for which the scrolling will be
	     * enabled or disabled.
	     *
	     * @param allow
	     * @param directions
	     */
	    MnFullpageService.prototype.setKeyboardScrolling = function (allow, directions) {
	        $.fn.fullpage.setKeyboardScrolling(allow, directions);
	    };
	    /**
	     * Defines whether to record the history for each hash change in the URL
	     *
	     * @param enable
	     */
	    MnFullpageService.prototype.setRecordHistory = function (enable) {
	        $.fn.fullpage.setRecordHistory(enable);
	    };
	    /**
	     * Defines the scrolling speed in milliseconds
	     *
	     * @param milliseconds
	     */
	    MnFullpageService.prototype.setScrollingSpeed = function (milliseconds) {
	        $.fn.fullpage.setScrollingSpeed(milliseconds);
	    };
	    /**
	     * Destroys the plugin events and optionally its HTML markup and styles.
	     * Ideal to use when using AJAX to load content.
	     *
	     * type: can be empty or all. If all is passed, the HTML markup and styles
	     * used by fullpage.js will be removed. This way the original HTML markup,
	     * the one used before any plugin modification is made, will be maintained.
	     *
	     * @param type
	     */
	    MnFullpageService.prototype.destroy = function (type) {
	        $.fn.fullpage.destroy(type);
	    };
	    /**
	     * Updates the DOM structure to fit the new window size or its contents.
	     * Ideal to use in combination with AJAX calls or external changes in the
	     * DOM structure of the site.
	     */
	    MnFullpageService.prototype.reBuild = function () {
	        $.fn.fullpage.reBuild();
	    };
	    MnFullpageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], MnFullpageService);
	    return MnFullpageService;
	}());
	exports.MnFullpageService = MnFullpageService;


/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
	 */
	"use strict";
	var mnFullpage_directive_1 = __webpack_require__(113);
	var index_1 = __webpack_require__(216);
	exports.MnFullpageDirective = index_1.MnFullpageDirective;
	exports.MnFullpageOptions = index_1.MnFullpageOptions;
	exports.MnFullpageService = index_1.MnFullpageService;
	exports.MN_FULLPAGE_DIRECTIVES = [mnFullpage_directive_1.MnFullpageDirective];


/***/ },

/***/ 469:
/***/ function(module, exports) {

	module.exports = "<ul id=\"menu\"> <li data-menuanchor=\"menuAnchor1\" class=\"active\"><a href=\"#menuAnchor1\">First section</a></li> <li data-menuanchor=\"menuAnchor2\"><a href=\"#menuAnchor2\">Second section</a></li> <li data-menuanchor=\"menuAnchor3\"><a href=\"#menuAnchor3\">Third section</a></li> <li data-menuanchor=\"menuAnchor4\"><a href=\"#menuAnchor4\">Fourth section</a></li> <li data-menuanchor=\"menuAnchor5\"><a href=\"#menuAnchor5\">Fifth section</a></li> </ul> <div [mnFullpage]=\"options\" [mnFullpageNavigation]=\"true\" [mnFullpageKeyboardScrolling]=\"true\" [mnFullpageSlidesNavigation]=\"true\" [mnFullpageSlidesNavPosition]=\"bottom\"> <div class=\"section welcome-section fp-section fp-table\"> <h1>Angular 2 fullPage.js</h1> <h4>Create Beautiful Fullscreen Scrolling Websites (now with Angular 2)!</h4> <img class=\"logo-image\" src=\"https://raw.githubusercontent.com/meiblorn/ng2-fullpage/develop/logo.png\"/> </div> <div class=\"section install-section fp-section fp-table\"> <h1>Easy to install !</h1> <div class=\"code-block\"> <pre>\n                <code class=\"bash\">{{templates.install}}</code>\n            </pre> </div> </div> <div class=\"section usage-section fp-section fp-table\"> <h1>Easy to use !</h1> <div class=\"code-block\"> <pre>\n                <code class=\"html\">{{templates.usage}}</code>\n            </pre> </div> </div> <div class=\"section slides-section fp-section fp-table\"> <div class=\"slide\"> <h1>Many ways to configure!</h1> <h4>Use keyboard arrows or navigation below to slide right</h4> </div> <div class=\"slide\"> <h1>Configure it via attributes</h1> <div class=\"code-block\"> <pre>\n                    <code class=\"html\">{{templates.slides.attributes}}</code>\n                </pre> </div> </div> <div class=\"slide\"> <h1>Use configuration object instead</h1> <div class=\"code-block\"> <pre>\n                    <code class=\"javascript\">{{templates.slides.classOptions}}</code>\n                </pre> </div> </div> <div class=\"slide\"> <h1>Or MIX IT !</h1> <div class=\"code-block\"> <pre>\n                    <code class=\"javascript\">{{templates.slides.mix}}</code>\n                </pre> </div> </div> </div> <div class=\"section usage-section fp-section fp-table\"> <h1>Get full control on the page !</h1> <div class=\"code-block\"> <pre>\n                <code class=\"html\">{{templates.service}}</code>\n            </pre> </div> </div> <div class=\"section start-use-it-now-section fp-section fp-table\"> <h1>Start use it now!</h1> <h4> Return to <a href=\"https://github.com/meiblorn/ng2-fullpage\">GitHub</a> or start reading <a href=\"docs/index.html\">docs</a> </h4> </div> </div>";

/***/ },

/***/ 477:
/***/ function(module, exports) {

	module.exports = "@import url(https://fonts.googleapis.com/css?family=Titillium+Web);body{font-family:'Titillium Web', Arial sans-serif;color:#333}h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:100%;margin:0;padding:0;color:#444}h1{font-size:4em}h4{font-size:1.3em}#fp-nav{top:50% !important}#menu li{display:inline-block;margin:10px;color:#000;background:#fff;background:rgba(255,255,255,0.5);-webkit-border-radius:5px;border-radius:5px}#menu li.active{background:#666;background:rgba(0,0,0,0.5);color:#fff}#menu li a{text-decoration:none;color:#000}#menu li.active a:hover{color:#000}#menu li:hover{background:rgba(255,255,255,0.8)}#menu li a,#menu li.active a{padding:9px 18px;display:block}#menu li.active a{color:#fff}#menu{position:fixed;height:40px;z-index:70;padding:0;margin:auto}.section{text-align:center}.section pre{margin-top:5px;text-align:start}.section pre code{background:rgba(255,255,255,0.1) !important;font-weight:normal;font-size:1.2em;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);padding:25px}.code-block{margin:auto;display:inline-block}.welcome-section{background:linear-gradient(90deg, rgba(0,255,68,0.2), rgba(255,0,0,0.4))}.welcome-section .logo-image{margin:25px}.install-section{background:linear-gradient(90deg, rgba(32,255,0,0.2), rgba(255,0,0,0.4))}.usage-section{background:linear-gradient(90deg, rgba(145,255,1,0.2), rgba(255,0,0,0.4))}.slides-section{background:linear-gradient(90deg, rgba(255,155,0,0.2), rgba(255,0,0,0.4))}.start-use-it-now-section{background:linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,0,0,0.4))}\n"

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var components_1 = __webpack_require__(145);
	var AppComponent = (function () {
	    function AppComponent(fullpageService) {
	        this.fullpageService = fullpageService;
	        this.options = new components_1.MnFullpageOptions({
	            controlArrows: false,
	            scrollingSpeed: 1000,
	            menu: '#menu',
	            css3: true,
	            anchors: ['menuAnchor1', 'menuAnchor2', 'menuAnchor3', 'menuAnchor4', 'menuAnchor5']
	        });
	        this.templates = {
	            install: __webpack_require__(470),
	            usage: __webpack_require__(475),
	            slides: {
	                attributes: __webpack_require__(472),
	                classOptions: __webpack_require__(473),
	                mix: __webpack_require__(474)
	            },
	            service: __webpack_require__(471)
	        };
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof components_1.MnFullpageOptions !== 'undefined' && components_1.MnFullpageOptions) === 'function' && _a) || Object)
	    ], AppComponent.prototype, "options", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], AppComponent.prototype, "templates", void 0);
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [core_1.provide(components_1.MnFullpageService, { useClass: components_1.MnFullpageService })],
	            directives: [components_1.MnFullpageDirective],
	            styles: [
	                __webpack_require__(476),
	                __webpack_require__(477)
	            ],
	            encapsulation: core_1.ViewEncapsulation.None,
	            template: __webpack_require__(469)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof components_1.MnFullpageService !== 'undefined' && components_1.MnFullpageService) === 'function' && _b) || Object])
	    ], AppComponent);
	    return AppComponent;
	    var _a, _b;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
	 */
	"use strict";
	var core_1 = __webpack_require__(2);
	var platform_browser_dynamic_1 = __webpack_require__(311);
	var app_component_1 = __webpack_require__(467);
	core_1.enableProdMode();
	document.addEventListener('DOMContentLoaded', function () {
	    platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, []).catch(function (err) { return console.error(err); });
	});


/***/ },

/***/ 470:
/***/ function(module, exports) {

	module.exports = "#!/bin/bash\n\n# install module via npm\nnpm install ng2-fullpage --save\n\n# install typings\ntypings install jquery --save --ambient\n\n# you are done!\n"

/***/ },

/***/ 471:
/***/ function(module, exports) {

	module.exports = "import {Component, Input} from '@angular/core';\nimport {MnFullpageDirective, MnFullpageService} from 'ng2-fullpage';\n\n@Component({\n    selector: 'app',\n    providers: [provide(MnFullpageService, {useClass: MnFullpageService}],\n    directives: [MnFullpageDirective],\n    template: `\n        <button (click)=\"fullpageService.moveSectionUp();\">Move section up</button>\n        <button (click)=\"fullpageService.moveSectionDown();\">Move section down</button>\n\n        <div mnFullpage [mnFullpageNavigation]=\"true\">\n            ....\n        </div>\n    `\n})\nexport class AppComponent {\n\n     constructor(private fullpageService: MnFullpageService) {\n     }\n\n}\n"

/***/ },

/***/ 472:
/***/ function(module, exports) {

	module.exports = "<div mnFullpage\n     [mnFullpageNavigation]=\"true\"\n     [mnFullpageKeyboardScrolling]=\"true\"\n     [mnFullpageSlidesNavigation]=\"true\"\n     [mnFullpageSlidesNavPosition]=\"bottom\"\n     [mnFullpageControlArrows]=\"false\">\n\n    <div class=\"section fp-section fp-table\">Section 1</div>\n    <div class=\"section fp-section fp-table\">Section 2</div>\n\n</div>\n"

/***/ },

/***/ 473:
/***/ function(module, exports) {

	module.exports = "import {Component, Output} from '@angular/core';\nimport {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';\n\n@Component({\n    selector: 'app',\n    directives: [MnFullpageDirective],\n    template: `\n        <div [mnFullpage]=\"options\">\n            <div class=\"section\"> Some section 1 </div>\n            <div class=\"section\"> Some section 2 </div>\n        </div>\n    `\n})\nexport class AppComponent {\n    @Output() private options: MnFullpageOptions = new MnFullpageOptions({\n        navigation: true,\n        keyboardScrolling: true\n    });\n}\n"

/***/ },

/***/ 474:
/***/ function(module, exports) {

	module.exports = "import {Component, Output} from '@angular/core';\nimport {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';\n\n@Component({\n    selector: 'app',\n    directives: [MnFullpageDirective],\n    template: `\n        <div [mnFullpage]=\"options\" [mnFullpageControlArrows]=\"false\">\n            <div class=\"section\"> Some section 1 </div>\n            <div class=\"section\"> Some section 2 </div>\n        </div>\n    `\n})\nexport class AppComponent {\n    @Output() private options: MnFullpageOptions = new MnFullpageOptions({\n        navigation: true,\n        keyboardScrolling: true\n    });\n}\n"

/***/ },

/***/ 475:
/***/ function(module, exports) {

	module.exports = "<!-- Just add directive [mnFullpage] -->\n<!-- And parametrize it via [mnFullpage*] attributes -->\n<div mnFullpage\n     [mnFullpageNavigation]=\"true\"\n     [mnFullpageKeyboardScrolling]=\"true\">\n\n    <div id=\"section1\" class=\"section fp-section fp-table\">\n        Section 1\n    </div>\n    <div id=\"section2\" class=\"section fp-section fp-table\">\n        Section 2\n    </div>\n    <div id=\"section3\" class=\"section fp-section fp-table\">\n        <div class=\"slide\"> Slide 1</div>\n        <div class=\"slide\"> Slide 2</div>\n        <div class=\"slide\"> Slide 3</div>\n        <div class=\"slide\"> Slide 4</div>\n    </div>\n    <div id=\"section4\" class=\"section fp-section fp-table\">\n        Section 4\n    </div>\n</div>\n"

/***/ },

/***/ 476:
/***/ function(module, exports) {

	module.exports = "/*!\r\n * fullPage 2.8.1\r\n * https://github.com/alvarotrigo/fullPage.js\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo\r\n */\r\nhtml.fp-enabled,\r\n.fp-enabled body {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow:hidden;\r\n\r\n    /*Avoid flicker on slides transitions for mobile phones #336 */\r\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\r\n}\r\n#superContainer {\r\n    height: 100%;\r\n    position: relative;\r\n\r\n    /* Touch detection for Windows 8 */\r\n    -ms-touch-action: none;\r\n\r\n    /* IE 11 on Windows Phone 8.1*/\r\n    touch-action: none;\r\n}\r\n.fp-section {\r\n    position: relative;\r\n    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */\r\n    -moz-box-sizing: border-box; /* <=28 */\r\n    box-sizing: border-box;\r\n}\r\n.fp-slide {\r\n    float: left;\r\n}\r\n.fp-slide, .fp-slidesContainer {\r\n    height: 100%;\r\n    display: block;\r\n}\r\n.fp-slides {\r\n    z-index:1;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */\r\n    transition: all 0.3s ease-out;\r\n}\r\n.fp-section.fp-table, .fp-slide.fp-table {\r\n    display: table;\r\n    table-layout:fixed;\r\n    width: 100%;\r\n}\r\n.fp-tableCell {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.fp-slidesContainer {\r\n    float: left;\r\n    position: relative;\r\n}\r\n.fp-controlArrow {\r\n    -webkit-user-select: none; /* webkit (safari, chrome) browsers */\r\n    -moz-user-select: none; /* mozilla browsers */\r\n    -khtml-user-select: none; /* webkit (konqueror) browsers */\r\n    -ms-user-select: none; /* IE10+ */\r\n    position: absolute;\r\n    z-index: 4;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    margin-top: -38px;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    -ms-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n.fp-controlArrow.fp-prev {\r\n    left: 15px;\r\n    width: 0;\r\n    border-width: 38.5px 34px 38.5px 0;\r\n    border-color: transparent #fff transparent transparent;\r\n}\r\n.fp-controlArrow.fp-next {\r\n    right: 15px;\r\n    border-width: 38.5px 0 38.5px 34px;\r\n    border-color: transparent transparent transparent #fff;\r\n}\r\n.fp-scrollable {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.iScrollIndicator{\r\n    border: 0 !important;\r\n}\r\n.fp-notransition {\r\n    -webkit-transition: none !important;\r\n    transition: none !important;\r\n}\r\n#fp-nav {\r\n    position: fixed;\r\n    z-index: 100;\r\n    margin-top: -32px;\r\n    top: 50%;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n}\r\n#fp-nav.right {\r\n    right: 17px;\r\n}\r\n#fp-nav.left {\r\n    left: 17px;\r\n}\r\n.fp-slidesNav{\r\n    position: absolute;\r\n    z-index: 4;\r\n    left: 50%;\r\n    opacity: 1;\r\n}\r\n.fp-slidesNav.bottom {\r\n    bottom: 17px;\r\n}\r\n.fp-slidesNav.top {\r\n    top: 17px;\r\n}\r\n#fp-nav ul,\r\n.fp-slidesNav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#fp-nav ul li,\r\n.fp-slidesNav ul li {\r\n    display: block;\r\n    width: 14px;\r\n    height: 13px;\r\n    margin: 7px;\r\n    position:relative;\r\n}\r\n.fp-slidesNav ul li {\r\n    display: inline-block;\r\n}\r\n#fp-nav ul li a,\r\n.fp-slidesNav ul li a {\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n#fp-nav ul li a.active span,\r\n.fp-slidesNav ul li a.active span,\r\n#fp-nav ul li:hover a.active span,\r\n.fp-slidesNav ul li:hover a.active span{\r\n    height: 12px;\r\n    width: 12px;\r\n    margin: -6px 0 0 -6px;\r\n    border-radius: 100%;\r\n }\r\n#fp-nav ul li a span,\r\n.fp-slidesNav ul li a span {\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 4px;\r\n    width: 4px;\r\n    border: 0;\r\n    background: #333;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin: -2px 0 0 -2px;\r\n    -webkit-transition: all 0.1s ease-in-out;\r\n    -moz-transition: all 0.1s ease-in-out;\r\n    -o-transition: all 0.1s ease-in-out;\r\n    transition: all 0.1s ease-in-out;\r\n}\r\n#fp-nav ul li:hover a span,\r\n.fp-slidesNav ul li:hover a span{\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: -5px 0px 0px -5px;\r\n}\r\n#fp-nav ul li .fp-tooltip {\r\n    position: absolute;\r\n    top: -2px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-family: arial, helvetica, sans-serif;\r\n    white-space: nowrap;\r\n    max-width: 220px;\r\n    overflow: hidden;\r\n    display: block;\r\n    opacity: 0;\r\n    width: 0;\r\n    cursor: pointer;\r\n}\r\n#fp-nav ul li:hover .fp-tooltip,\r\n#fp-nav.fp-show-active a.active + .fp-tooltip {\r\n    -webkit-transition: opacity 0.2s ease-in;\r\n    transition: opacity 0.2s ease-in;\r\n    width: auto;\r\n    opacity: 1;\r\n}\r\n#fp-nav ul li .fp-tooltip.right {\r\n    right: 20px;\r\n}\r\n#fp-nav ul li .fp-tooltip.left {\r\n    left: 20px;\r\n}\r\n.fp-auto-height.fp-section,\r\n.fp-auto-height .fp-slide,\r\n.fp-auto-height .fp-tableCell{\r\n    height: auto !important;\r\n}\r\n\r\n.fp-responsive .fp-auto-height-responsive.fp-section,\r\n.fp-responsive .fp-auto-height-responsive .fp-slide,\r\n.fp-responsive .fp-auto-height-responsive .fp-tableCell {\r\n    height: auto !important;\r\n}"

/***/ }

});