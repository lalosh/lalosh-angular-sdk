import { SDKConfigurations } from './config.service';
import { init } from '@lableb/javascript-sdk';
export declare class ClientService {
    private config;
    client: ReturnType<typeof init> | null;
    constructor(config: SDKConfigurations);
}
