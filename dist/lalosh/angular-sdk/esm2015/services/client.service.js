import { Injectable } from '@angular/core';
import { SDKConfigurations } from './config.service';
import { init } from '@lableb/javascript-sdk';
import * as i0 from "@angular/core";
import * as i1 from "./config.service";
export class ClientService {
    constructor(config) {
        this.config = config;
        this.client = null;
        console.log('---------');
        console.log('Client Service construcor');
        console.log('---------');
        this.client = init(this.config);
    }
}
ClientService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ClientService_Factory() { return new ClientService(i0.ɵɵinject(i1.SDKConfigurations)); }, token: ClientService, providedIn: "root" });
ClientService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ClientService.ctorParameters = () => [
    { type: SDKConfigurations }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9sYWxvc2gvYW5ndWxhci1zZGsvc3JjL3NlcnZpY2VzL2NsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLOUMsTUFBTSxPQUFPLGFBQWE7SUFJeEIsWUFDVSxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUg1QixXQUFNLEdBQW1DLElBQUksQ0FBQztRQUtuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTREtDb25maWd1cmF0aW9ucyB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgaW5pdCB9IGZyb20gJ0BsYWJsZWIvamF2YXNjcmlwdC1zZGsnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRTZXJ2aWNlIHtcblxuICBwdWJsaWMgY2xpZW50OiBSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTREtDb25maWd1cmF0aW9uc1xuICApIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tJylcbiAgICBjb25zb2xlLmxvZygnQ2xpZW50IFNlcnZpY2UgY29uc3RydWNvcicpXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLScpXG4gICAgdGhpcy5jbGllbnQgPSBpbml0KHRoaXMuY29uZmlnKTtcbiAgfVxuXG5cbn1cbiJdfQ==