(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@lalosh/angular-sdk', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.lalosh = global.lalosh || {}, global.lalosh['angular-sdk'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var AngularSdkService = /** @class */ (function () {
        function AngularSdkService() {
        }
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