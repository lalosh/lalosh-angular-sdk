import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { DataService } from '../../services/data.service';
import * as ɵngcc0 from '@angular/core';
export declare class SearchComponent implements OnInit {
    private clientService;
    private dataService;
    searchInput: FormControl;
    constructor(clientService: ClientService, dataService: DataService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SearchComponent, "lableb-search", never, {}, {}, never, never>;
}

//# sourceMappingURL=search.component.d.ts.map