import { init, LablebSDKOptions } from '@lableb/javascript-sdk';
export declare class AngularSdkService {
    client: null | ReturnType<typeof init>;
    constructor();
    init(options: LablebSDKOptions): void;
    search(query: string): Promise<import("@lableb/javascript-sdk/dist/types").SearchResponse> | undefined;
}
