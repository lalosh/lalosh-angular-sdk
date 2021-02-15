import { Injectable } from '@angular/core';
import { init, LablebSDKOptions } from '@lableb/javascript-sdk';

@Injectable({
  providedIn: 'root'
})
export class AngularSdkService {

  client: null | ReturnType<typeof init>;

  constructor() {
    this.client = null;
  }

  public init(options: LablebSDKOptions) {
    this.client = init(options);
  }

  public search(query: string) {
    return this.client?.search({ query });
  }
}
