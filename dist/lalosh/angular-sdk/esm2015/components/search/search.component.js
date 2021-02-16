import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { DataService } from '../../services/data.service';
export class SearchComponent {
    constructor(clientService, dataService) {
        this.clientService = clientService;
        this.dataService = dataService;
        this.searchInput = new FormControl('');
    }
    ngOnInit() {
        this.searchInput.valueChanges
            .subscribe((query) => {
            var _a, _b;
            (_b = (_a = this.clientService) === null || _a === void 0 ? void 0 : _a.client) === null || _b === void 0 ? void 0 : _b.search({ query }).then(response => {
                this.dataService.setSearchResults(response);
            }).catch(error => console.error(error));
        });
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'lableb-search',
                template: "<input placeholder=\"search...\" [formControl]=\"searchInput\" />\n\n",
                styles: ["p{color:#00f}"]
            },] }
];
SearchComponent.ctorParameters = () => [
    { type: ClientService },
    { type: DataService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xhbG9zaC9hbmd1bGFyLXNkay9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTFELE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQ1UsYUFBNEIsRUFDNUIsV0FBd0I7UUFEeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMsZ0JBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFLM0MsQ0FBQztJQUdMLFFBQVE7UUFFTixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7YUFDMUIsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7O1lBRW5CLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsTUFBTSwwQ0FBRSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUNBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFFMUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixpRkFBc0M7O2FBRXZDOzs7WUFSUSxhQUFhO1lBQ2IsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbGllbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGFibGViLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VhcmNoSW5wdXQ6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNsaWVudFNlcnZpY2U6IENsaWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICkgeyB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuc2VhcmNoSW5wdXQudmFsdWVDaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKChxdWVyeSkgPT4ge1xuXG4gICAgICAgIHRoaXMuY2xpZW50U2VydmljZT8uY2xpZW50Py5zZWFyY2goeyBxdWVyeSB9KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U2VhcmNoUmVzdWx0cyhyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG4gICAgICB9KTtcblxuICB9XG5cbn1cbiJdfQ==