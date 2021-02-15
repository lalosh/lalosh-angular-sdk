import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';
import { init } from '@lableb/javascript-sdk';

class AngularSdkService {
    constructor() {
        this.client = null;
    }
    init(options) {
        this.client = init(options);
    }
    search(query) {
        var _a;
        return (_a = this.client) === null || _a === void 0 ? void 0 : _a.search({ query });
    }
}
AngularSdkService.ɵprov = ɵɵdefineInjectable({ factory: function AngularSdkService_Factory() { return new AngularSdkService(); }, token: AngularSdkService, providedIn: "root" });
AngularSdkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AngularSdkService.ctorParameters = () => [];

class AngularSdkComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularSdkComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-sdk',
                template: `
    <p>
      @lalosh/angular-sdk!
    </p>
  `
            },] }
];
AngularSdkComponent.ctorParameters = () => [];

class AngularSdkModule {
}
AngularSdkModule.decorators = [
    { type: NgModule, args: [{
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

export { AngularSdkComponent, AngularSdkModule, AngularSdkService };
//# sourceMappingURL=lalosh-angular-sdk.js.map
