(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('@lableb/javascript-sdk')) :
    typeof define === 'function' && define.amd ? define('@lalosh/angular-sdk', ['exports', '@angular/common', '@angular/core', '@angular/forms', 'rxjs', '@lableb/javascript-sdk'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.lalosh = global.lalosh || {}, global.lalosh['angular-sdk'] = {}), global.ng.common, global.ng.core, global.ng.forms, global.rxjs, global.javascriptSdk));
}(this, (function (exports, common, i0, forms, rxjs, javascriptSdk) { 'use strict';

    var FiltersComponent = /** @class */ (function () {
        function FiltersComponent() {
        }
        FiltersComponent.prototype.ngOnInit = function () {
        };
        return FiltersComponent;
    }());
    FiltersComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-filters',
                    template: "<p>filters works!</p>\n",
                    styles: [""]
                },] }
    ];
    FiltersComponent.ctorParameters = function () { return []; };

    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent() {
        }
        PaginationComponent.prototype.ngOnInit = function () {
        };
        return PaginationComponent;
    }());
    PaginationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-pagination',
                    template: "<p>pagination works!</p>\n",
                    styles: [""]
                },] }
    ];
    PaginationComponent.ctorParameters = function () { return []; };

    var RecommendComponent = /** @class */ (function () {
        function RecommendComponent() {
        }
        RecommendComponent.prototype.ngOnInit = function () {
        };
        return RecommendComponent;
    }());
    RecommendComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-recommend',
                    template: "<p>recommend works!</p>\n",
                    styles: ["p{color:red}"]
                },] }
    ];
    RecommendComponent.ctorParameters = function () { return []; };

    var DataService = /** @class */ (function () {
        function DataService() {
            this.searchResults = null;
            this.searchResultsSubject = new rxjs.BehaviorSubject({});
        }
        DataService.prototype.setSearchResults = function (results) {
            this.searchResults = results;
            this.searchResultsSubject.next(results);
        };
        return DataService;
    }());
    DataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(); }, token: DataService, providedIn: "root" });
    DataService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DataService.ctorParameters = function () { return []; };

    var ResultsComponent = /** @class */ (function () {
        function ResultsComponent(dataService) {
            this.dataService = dataService;
            this.searchResults = new rxjs.BehaviorSubject({});
            this.searchResults = this.dataService.searchResultsSubject;
        }
        ResultsComponent.prototype.ngOnInit = function () {
        };
        return ResultsComponent;
    }());
    ResultsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lableb-results',
                    template: "<p>results works!</p>\n<div *ngFor=\"let res of (searchResults | async)?.results\">\n    <p>{{res?.id}}</p>\n    <p>{{res?.title}}</p>\n</div>",
                    styles: [""]
                },] }
    ];
    ResultsComponent.ctorParameters = function () { return [
        { type: DataService }
    ]; };

    var SDKConfigurations = /** @class */ (function () {
        function SDKConfigurations() {
            this.projectName = '';
            this.collectionName = '';
            this.searchToken = '';
            this.autoCompleteHandler = '';
            this.generateSessionId = function () { return ''; };
            this.indexToken = '';
            this.recommendHandler = '';
            this.searchHandler = '';
        }
        return SDKConfigurations;
    }());

    var ClientService = /** @class */ (function () {
        function ClientService(config) {
            this.config = config;
            this.client = null;
            console.log('---------');
            console.log('Client Service construcor');
            console.log('---------');
            this.client = javascriptSdk.init(this.config);
        }
        return ClientService;
    }());
    ClientService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ClientService_Factory() { return new ClientService(i0.ɵɵinject(SDKConfigurations)); }, token: ClientService, providedIn: "root" });
    ClientService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ClientService.ctorParameters = function () { return [
        { type: SDKConfigurations }
    ]; };

    var SearchComponent = /** @class */ (function () {
        function SearchComponent(clientService, dataService) {
            this.clientService = clientService;
            this.dataService = dataService;
            this.searchInput = new forms.FormControl('');
        }
        SearchComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.searchInput.valueChanges
                .subscribe(function (query) {
                var _a, _b;
                (_b = (_a = _this.clientService) === null || _a === void 0 ? void 0 : _a.client) === null || _b === void 0 ? void 0 : _b.search({ query: query }).then(function (response) {
                    _this.dataService.setSearchResults(response);
                }).catch(function (error) { return console.error(error); });
            });
        };
        return SearchComponent;
    }());
    SearchComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lableb-search',
                    template: "<input placeholder=\"search...\" [formControl]=\"searchInput\" />\n\n",
                    styles: ["p{color:#00f}"]
                },] }
    ];
    SearchComponent.ctorParameters = function () { return [
        { type: ClientService },
        { type: DataService }
    ]; };

    var LablebModule = /** @class */ (function () {
        function LablebModule(parentModule) {
            if (parentModule) {
                throw new Error('LablebModule is already loaded. Import it in the AppModule only');
            }
        }
        LablebModule.forRoot = function (SDKConfig) {
            return {
                ngModule: LablebModule,
                providers: [
                    { provide: SDKConfigurations, useValue: SDKConfig }
                ]
            };
        };
        return LablebModule;
    }());
    LablebModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        SearchComponent,
                        ResultsComponent,
                        RecommendComponent,
                        FiltersComponent,
                        PaginationComponent
                    ],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
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
    LablebModule.ctorParameters = function () { return [
        { type: LablebModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
    ]; };

    /*
     * Public API Surface of angular-sdk
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LablebModule = LablebModule;
    exports.SDKConfigurations = SDKConfigurations;
    exports.ɵa = SearchComponent;
    exports.ɵb = ResultsComponent;
    exports.ɵc = RecommendComponent;
    exports.ɵd = FiltersComponent;
    exports.ɵe = PaginationComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lalosh-angular-sdk.umd.js.map
