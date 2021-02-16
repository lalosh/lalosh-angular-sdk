import { SearchResponse } from '@lableb/javascript-sdk/dist/types';
import { BehaviorSubject } from 'rxjs';
export declare class DataService {
    constructor();
    searchResults: SearchResponse | null;
    searchResultsSubject: BehaviorSubject<Partial<SearchResponse>>;
    setSearchResults(results: SearchResponse): void;
}
