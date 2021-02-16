import { CommonModule } from '@angular/common';
import { Component, ɵɵdefineInjectable, Injectable, ɵɵinject, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { init } from '@lableb/javascript-sdk';

class FiltersComponent {
    constructor() { }
    ngOnInit() {
    }
}
FiltersComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-filters',
                template: "<p>filters works!</p>\n",
                styles: [""]
            },] }
];
FiltersComponent.ctorParameters = () => [];

class PaginationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pagination',
                template: "<p>pagination works!</p>\n",
                styles: [""]
            },] }
];
PaginationComponent.ctorParameters = () => [];

class RecommendComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecommendComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-recommend',
                template: "<p>recommend works!</p>\n",
                styles: ["p{color:red}"]
            },] }
];
RecommendComponent.ctorParameters = () => [];

class DataService {
    constructor() {
        this.searchResults = null;
        this.searchResultsSubject = new BehaviorSubject({});
    }
    setSearchResults(results) {
        this.searchResults = results;
        this.searchResultsSubject.next(results);
    }
}
DataService.ɵprov = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(); }, token: DataService, providedIn: "root" });
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DataService.ctorParameters = () => [];

class ResultsComponent {
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

class SDKConfigurations {
    constructor() {
        this.projectName = '';
        this.collectionName = '';
        this.searchToken = '';
        this.autoCompleteHandler = '';
        this.generateSessionId = () => '';
        this.indexToken = '';
        this.recommendHandler = '';
        this.searchHandler = '';
    }
}

class ClientService {
    constructor(config) {
        this.config = config;
        this.client = null;
        console.log('---------');
        console.log('Client Service construcor');
        console.log('---------');
        this.client = init(this.config);
    }
}
ClientService.ɵprov = ɵɵdefineInjectable({ factory: function ClientService_Factory() { return new ClientService(ɵɵinject(SDKConfigurations)); }, token: ClientService, providedIn: "root" });
ClientService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ClientService.ctorParameters = () => [
    { type: SDKConfigurations }
];

class SearchComponent {
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

class LablebModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('LablebModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(SDKConfig) {
        return {
            ngModule: LablebModule,
            providers: [
                { provide: SDKConfigurations, useValue: SDKConfig }
            ]
        };
    }
}
LablebModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SearchComponent,
                    ResultsComponent,
                    RecommendComponent,
                    FiltersComponent,
                    PaginationComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                exports: [
                    SearchComponent,
                    ResultsComponent,
                    RecommendComponent,
                    FiltersComponent,
                    PaginationComponent,
                ],
                providers: []
            },] }
];
LablebModule.ctorParameters = () => [
    { type: LablebModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/*
 * Public API Surface of angular-sdk
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LablebModule, SDKConfigurations, SearchComponent as ɵa, ResultsComponent as ɵb, RecommendComponent as ɵc, FiltersComponent as ɵd, PaginationComponent as ɵe };
//# sourceMappingURL=lalosh-angular-sdk.js.map
