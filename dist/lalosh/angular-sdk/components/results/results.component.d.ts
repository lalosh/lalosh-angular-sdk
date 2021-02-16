import { OnInit } from '@angular/core';
import { SearchResponse } from '@lableb/javascript-sdk/dist/types';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/data.service';
import * as ɵngcc0 from '@angular/core';
export declare class ResultsComponent implements OnInit {
    private dataService;
    searchResults: BehaviorSubject<Partial<SearchResponse>>;
    constructor(dataService: DataService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResultsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ResultsComponent, "lableb-results", never, {}, {}, never, never>;
}

//# sourceMappingURL=results.component.d.ts.map