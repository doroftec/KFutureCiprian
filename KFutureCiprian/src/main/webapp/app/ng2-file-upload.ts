export * from  './components-upload-test/file-upload/file-select.directive';
export * from  './components-upload-test/file-upload/file-drop.directive';
export * from  './components-upload-test/file-upload/file-uploader.class';

import {FileSelectDirective} from './components-upload-test/file-upload/file-select.directive';
import {FileDropDirective} from './components-upload-test/file-upload/file-drop.directive';

export const FILE_UPLOAD_DIRECTIVES:[any] = [FileSelectDirective, FileDropDirective];

export default {
  directives: [
    FILE_UPLOAD_DIRECTIVES
  ]
};
