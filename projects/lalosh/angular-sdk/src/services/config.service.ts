import { LablebSDKOptions } from '@lableb/javascript-sdk/dist/types';


export class SDKConfigurations implements LablebSDKOptions {
  projectName = '';
  collectionName = '';
  searchToken = '';
  autoCompleteHandler = '';
  generateSessionId = () => '';
  indexToken = '';
  recommendHandler = '';
  searchHandler = '';
}
