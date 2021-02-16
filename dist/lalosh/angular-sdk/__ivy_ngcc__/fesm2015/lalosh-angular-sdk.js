import { CommonModule } from '@angular/common';
import { Component, ɵɵdefineInjectable, Injectable, ɵɵinject, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { init } from '@lableb/javascript-sdk';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function ResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "p");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "p");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(res_r1 == null ? null : res_r1.id);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(res_r1 == null ? null : res_r1.title);
} }
class FiltersComponent {
    constructor() { }
    ngOnInit() {
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(); };
FiltersComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FiltersComponent, selectors: [["lib-filters"]], decls: 2, vars: 0, template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, "filters works!");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
FiltersComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FiltersComponent, [{
        type: Component,
        args: [{
                selector: 'lib-filters',
                template: "<p>filters works!</p>\n",
                styles: [""]
            }]
    }], function () { return []; }, null); })();

class PaginationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["lib-pagination"]], decls: 2, vars: 0, template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, "pagination works!");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
PaginationComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pagination',
                template: "<p>pagination works!</p>\n",
                styles: [""]
            }]
    }], function () { return []; }, null); })();

class RecommendComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecommendComponent.ɵfac = function RecommendComponent_Factory(t) { return new (t || RecommendComponent)(); };
RecommendComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RecommendComponent, selectors: [["lib-recommend"]], decls: 2, vars: 0, template: function RecommendComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, "recommend works!");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["p[_ngcontent-%COMP%]{color:red}"] });
RecommendComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RecommendComponent, [{
        type: Component,
        args: [{
                selector: 'lib-recommend',
                template: "<p>recommend works!</p>\n",
                styles: ["p{color:red}"]
            }]
    }], function () { return []; }, null); })();

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
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(); }, token: DataService, providedIn: "root" });
DataService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ResultsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.searchResults = new BehaviorSubject({});
        this.searchResults = this.dataService.searchResultsSubject;
    }
    ngOnInit() {
    }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(ɵngcc0.ɵɵdirectiveInject(DataService)); };
ResultsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ResultsComponent, selectors: [["lableb-results"]], decls: 4, vars: 3, consts: [[4, "ngFor", "ngForOf"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, "results works!");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, ResultsComponent_div_2_Template, 5, 2, "div", 0);
        ɵngcc0.ɵɵpipe(3, "async");
    } if (rf & 2) {
        let tmp_0_0 = null;
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", (tmp_0_0 = ɵngcc0.ɵɵpipeBind1(3, 1, ctx.searchResults)) == null ? null : tmp_0_0.results);
    } }, directives: [ɵngcc1.NgForOf], pipes: [ɵngcc1.AsyncPipe], styles: [""] });
ResultsComponent.ctorParameters = () => [
    { type: DataService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResultsComponent, [{
        type: Component,
        args: [{
                selector: 'lableb-results',
                template: "<p>results works!</p>\n<div *ngFor=\"let res of (searchResults | async)?.results\">\n    <p>{{res?.id}}</p>\n    <p>{{res?.title}}</p>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: DataService }]; }, null); })();

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
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(ɵngcc0.ɵɵinject(SDKConfigurations)); };
ClientService.ɵprov = ɵɵdefineInjectable({ factory: function ClientService_Factory() { return new ClientService(ɵɵinject(SDKConfigurations)); }, token: ClientService, providedIn: "root" });
ClientService.ctorParameters = () => [
    { type: SDKConfigurations }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClientService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: SDKConfigurations }]; }, null); })();

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
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(ɵngcc0.ɵɵdirectiveInject(ClientService), ɵngcc0.ɵɵdirectiveInject(DataService)); };
SearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["lableb-search"]], decls: 1, vars: 1, consts: [["placeholder", "search...", 3, "formControl"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "input", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("formControl", ctx.searchInput);
    } }, directives: [ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.FormControlDirective], styles: ["p[_ngcontent-%COMP%]{color:#00f}"] });
SearchComponent.ctorParameters = () => [
    { type: ClientService },
    { type: DataService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{
                selector: 'lableb-search',
                template: "<input placeholder=\"search...\" [formControl]=\"searchInput\" />\n\n",
                styles: ["p{color:#00f}"]
            }]
    }], function () { return [{ type: ClientService }, { type: DataService }]; }, null); })();

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
LablebModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LablebModule });
LablebModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LablebModule_Factory(t) { return new (t || LablebModule)(ɵngcc0.ɵɵinject(LablebModule, 12)); }, providers: [], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
LablebModule.ctorParameters = () => [
    { type: LablebModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LablebModule, { declarations: function () { return [SearchComponent, ResultsComponent, RecommendComponent, FiltersComponent, PaginationComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule]; }, exports: function () { return [SearchComponent, ResultsComponent, RecommendComponent, FiltersComponent, PaginationComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LablebModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: LablebModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/*
 * Public API Surface of angular-sdk
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LablebModule, SDKConfigurations, SearchComponent as ɵa, ResultsComponent as ɵb, RecommendComponent as ɵc, FiltersComponent as ɵd, PaginationComponent as ɵe };

//# sourceMappingURL=lalosh-angular-sdk.js.map