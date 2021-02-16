import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DataService {
    constructor() {
        this.searchResults = null;
        this.searchResultsSubject = new BehaviorSubject({});
    }
    setSearchResults(results) {
        this.searchResults = results;
        this.searchResultsSubject.next(results);
    }
}
DataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(); }, token: DataService, providedIn: "root" });
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DataService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGFsb3NoL2FuZ3VsYXItc2RrL3NyYy9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sV0FBVztJQUV0QjtRQUNPLGtCQUFhLEdBQTBCLElBQUksQ0FBQztRQUM1Qyx5QkFBb0IsR0FBNkMsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFGaEYsQ0FBQztJQUlqQixnQkFBZ0IsQ0FBQyxPQUF1QjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXNwb25zZSB9IGZyb20gJ0BsYWJsZWIvamF2YXNjcmlwdC1zZGsvZGlzdC90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHB1YmxpYyBzZWFyY2hSZXN1bHRzOiBTZWFyY2hSZXNwb25zZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgc2VhcmNoUmVzdWx0c1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxQYXJ0aWFsPFNlYXJjaFJlc3BvbnNlPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblxuICBzZXRTZWFyY2hSZXN1bHRzKHJlc3VsdHM6IFNlYXJjaFJlc3BvbnNlKSB7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gcmVzdWx0cztcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNTdWJqZWN0Lm5leHQocmVzdWx0cyk7XG4gIH1cbn1cbiJdfQ==