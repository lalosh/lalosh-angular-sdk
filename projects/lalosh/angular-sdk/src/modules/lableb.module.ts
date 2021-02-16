import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SearchComponent,
  ResultsComponent,
  RecommendComponent,
  FiltersComponent,
  PaginationComponent,
} from '../components';
import { SDKConfigurations } from '../services/config.service';



@NgModule({
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
  providers: [
  ]

})
export class LablebModule {

  constructor(@Optional() @SkipSelf() parentModule?: LablebModule) {
    
    if (parentModule) {
      throw new Error(
        'LablebModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(SDKConfig: SDKConfigurations): ModuleWithProviders<LablebModule> {

    return {
      ngModule: LablebModule,
      providers: [
        { provide: SDKConfigurations, useValue: SDKConfig }
      ]
    }

  }
}
