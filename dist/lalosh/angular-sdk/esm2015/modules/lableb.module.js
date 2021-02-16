import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent, ResultsComponent, RecommendComponent, FiltersComponent, PaginationComponent, } from '../components';
import { SDKConfigurations } from '../services/config.service';
export class LablebModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFibGViLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xhbG9zaC9hbmd1bGFyLXNkay9zcmMvbW9kdWxlcy9sYWJsZWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTRCL0QsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0MsWUFBMkI7UUFFN0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixpRUFBaUUsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBNEI7UUFFekMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2FBQ3BEO1NBQ0YsQ0FBQTtJQUVILENBQUM7OztZQTNDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxTQUFTLEVBQUUsRUFDVjthQUVGOzs7WUFHb0QsWUFBWSx1QkFBbEQsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBTZWFyY2hDb21wb25lbnQsXG4gIFJlc3VsdHNDb21wb25lbnQsXG4gIFJlY29tbWVuZENvbXBvbmVudCxcbiAgRmlsdGVyc0NvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbn0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTREtDb25maWd1cmF0aW9ucyB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBSZXN1bHRzQ29tcG9uZW50LFxuICAgIFJlY29tbWVuZENvbXBvbmVudCxcbiAgICBGaWx0ZXJzQ29tcG9uZW50LFxuICAgIFBhZ2luYXRpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFJlc3VsdHNDb21wb25lbnQsXG4gICAgUmVjb21tZW5kQ29tcG9uZW50LFxuICAgIEZpbHRlcnNDb21wb25lbnQsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gIF1cblxufSlcbmV4cG9ydCBjbGFzcyBMYWJsZWJNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IExhYmxlYk1vZHVsZSkge1xuICAgIFxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0xhYmxlYk1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KFNES0NvbmZpZzogU0RLQ29uZmlndXJhdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExhYmxlYk1vZHVsZT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMYWJsZWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBTREtDb25maWd1cmF0aW9ucywgdXNlVmFsdWU6IFNES0NvbmZpZyB9XG4gICAgICBdXG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==