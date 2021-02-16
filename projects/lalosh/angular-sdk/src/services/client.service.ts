import { Injectable } from '@angular/core';
import { SDKConfigurations } from './config.service';
import { init } from '@lableb/javascript-sdk';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public client: ReturnType<typeof init> | null = null;

  constructor(
    private config: SDKConfigurations
  ) {
    console.log('---------')
    console.log('Client Service construcor')
    console.log('---------')
    this.client = init(this.config);
  }


}
