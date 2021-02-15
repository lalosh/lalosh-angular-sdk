import { Injectable } from '@angular/core';
import { init } from '@lableb/javascript-sdk';
import * as i0 from "@angular/core";
export class AngularSdkService {
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
AngularSdkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularSdkService_Factory() { return new AngularSdkService(); }, token: AngularSdkService, providedIn: "root" });
AngularSdkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AngularSdkService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zZGsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xhbG9zaC9hbmd1bGFyLXNkay9zcmMvbGliL2FuZ3VsYXItc2RrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFvQixNQUFNLHdCQUF3QixDQUFDOztBQUtoRSxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQyxPQUF5QjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7O1FBQ2xCLGFBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDeEMsQ0FBQzs7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpbml0LCBMYWJsZWJTREtPcHRpb25zIH0gZnJvbSAnQGxhYmxlYi9qYXZhc2NyaXB0LXNkayc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJTZGtTZXJ2aWNlIHtcblxuICBjbGllbnQ6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBpbml0PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsaWVudCA9IG51bGw7XG4gIH1cblxuICBpbml0KG9wdGlvbnM6IExhYmxlYlNES09wdGlvbnMpIHtcbiAgICB0aGlzLmNsaWVudCA9IGluaXQob3B0aW9ucyk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNsaWVudD8uc2VhcmNoKHsgcXVlcnkgfSk7XG4gIH1cbn1cbiJdfQ==