import { LablebSDKOptions } from '@lableb/javascript-sdk/dist/types';
export declare class SDKConfigurations implements LablebSDKOptions {
    projectName: string;
    collectionName: string;
    searchToken: string;
    autoCompleteHandler: string;
    generateSessionId: () => string;
    indexToken: string;
    recommendHandler: string;
    searchHandler: string;
}
