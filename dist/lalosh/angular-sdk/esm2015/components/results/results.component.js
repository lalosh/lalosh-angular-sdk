import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/data.service';
export class ResultsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.searchResults = new BehaviorSubject({});
        this.searchResults = this.dataService.searchResultsSubject;
    }
    ngOnInit() {
    }
}
ResultsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lableb-results',
                template: "<p>results works!</p>\n<div *ngFor=\"let res of (searchResults | async)?.results\">\n    <p>{{res?.id}}</p>\n    <p>{{res?.title}}</p>\n</div>",
                styles: [""]
            },] }
];
ResultsComponent.ctorParameters = () => [
    { type: DataService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9sYWxvc2gvYW5ndWxhci1zZGsvc3JjL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0IsWUFDVSxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUgzQixrQkFBYSxHQUE2QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUt2RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7SUFDN0QsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDBKQUF1Qzs7YUFFeEM7OztZQU5RLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoUmVzcG9uc2UgfSBmcm9tICdAbGFibGViL2phdmFzY3JpcHQtc2RrL2Rpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xhYmxlYi1yZXN1bHRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN1bHRzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgc2VhcmNoUmVzdWx0czogQmVoYXZpb3JTdWJqZWN0PFBhcnRpYWw8U2VhcmNoUmVzcG9uc2U+PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXG4gICkgeyBcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmRhdGFTZXJ2aWNlLnNlYXJjaFJlc3VsdHNTdWJqZWN0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19