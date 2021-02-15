(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@lableb/javascript-sdk')) :
    typeof define === 'function' && define.amd ? define('@lalosh/angular-sdk', ['exports', '@angular/core', '@lableb/javascript-sdk'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.lalosh = global.lalosh || {}, global.lalosh['angular-sdk'] = {}), global.ng.core, global.javascriptSdk));
}(this, (function (exports, i0, javascriptSdk) { 'use strict';

    var AngularSdkService = /** @class */ (function () {
        function AngularSdkService() {
            this.client = null;
        }
        AngularSdkService.prototype.init = function (options) {
            this.client = javascriptSdk.init(options);
        };
        AngularSdkService.prototype.search = function (query) {
            var _a;
            return (_a = this.client) === null || _a === void 0 ? void 0 : _a.search({ query: query });
        };
        return AngularSdkService;
    }());
    AngularSdkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularSdkService_Factory() { return new AngularSdkService(); }, token: AngularSdkService, providedIn: "root" });
    AngularSdkService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AngularSdkService.ctorParameters = function () { return []; };

    var AngularSdkComponent = /** @class */ (function () {
        function AngularSdkComponent() {
        }
        AngularSdkComponent.prototype.ngOnInit = function () {
        };
        return AngularSdkComponent;
    }());
    AngularSdkComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-angular-sdk',
                    template: "\n    <p>\n      @lalosh/angular-sdk!\n    </p>\n  "
                },] }
    ];
    AngularSdkComponent.ctorParameters = function () { return []; };

    var AngularSdkModule = /** @class */ (function () {
        function AngularSdkModule() {
        }
        return AngularSdkModule;
    }());
    AngularSdkModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AngularSdkComponent],
                    imports: [],
                    exports: [AngularSdkComponent]
                },] }
    ];

    /*
     * Public API Surface of angular-sdk
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularSdkComponent = AngularSdkComponent;
    exports.AngularSdkModule = AngularSdkModule;
    exports.AngularSdkService = AngularSdkService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lalosh-angular-sdk.umd.js.map
