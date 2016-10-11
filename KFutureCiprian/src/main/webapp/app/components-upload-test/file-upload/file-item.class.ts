import {NgZone} from '@angular/core';

import {FileLikeObject} from './file-like-object.class';
import {FileUploader} from './file-uploader.class';

export class FileItem {
  public file:FileLikeObject;
  public _file:File;
  public alias:string = 'file';
  public url:string = '/';
  public method:string = 'POST';
  public headers:any = [];
  public withCredentials:boolean = true;
  public formData:any = [];
  public isReady:boolean = false;
  public isUploading:boolean = false;
  public isUploaded:boolean = false;
  public isSuccess:boolean = false;
  public isCancel:boolean = false;
  public isError:boolean = false;
  public progress:number = 0;
  public index:number = void 0;
  private _zone:NgZone;

  private uploader:FileUploader;
  private some:any;
  private options:any;

  public constructor(uploader:FileUploader, some:any, options:any) {
    this.uploader = uploader;
    this.some = some;
    this.options = options;
    this.file = new FileLikeObject(some);
    this._file = some;
    this.url = uploader.options.url;
    this._zone = new NgZone({ enableLongStackTrace: false });
  }

  public upload():void {
    try {
      this.uploader.uploadItem(this);
    } catch (e) {
      this.uploader._onCompleteItem(this, '', 0, []);
      this.uploader._onErrorItem(this, '', 0, []);
    }
  }

  public cancel():void {
    this.uploader.cancelItem(this);
  }

  public remove():void {
    this.uploader.removeFromQueue(this);
  }

  public onBeforeUpload():void {
    return void 0;
  }

  public onBuildForm(form:any):any {
    return {form};
  }

  public onProgress(progress:number):any {
    return {progress};
  }

  public onSuccess(response:any, status:any, headers:any):any {
    return {response,status,headers};
  }

  public onError(response:any, status:any, headers:any):any {
    return {response,status,headers};
  }

  public onCancel(response:any, status:any, headers:any):any {
    return {response,status,headers};
  }

  public onComplete(response:any, status:any, headers:any):any {
    return {response,status,headers};
  }

  public _onBeforeUpload():void {
    this.isReady = true;
    this.isUploading = true;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = false;
    this.progress = 0;
    this.onBeforeUpload();
  }

  public _onBuildForm(form:any):void {
    this.onBuildForm(form);
  }

  public _onProgress(progress:number):void {
    this._zone.run(() => {
      this.progress = progress;
    });
    this.onProgress(progress);
  }

  public _onSuccess(response:any, status:any, headers:any):void {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = true;
    this.isSuccess = true;
    this.isCancel = false;
    this.isError = false;
    this.progress = 100;
    this.index = void 0;
    this.onSuccess(response, status, headers);
  }

  public _onError(response:any, status:any, headers:any):void {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = true;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = true;
    this.progress = 0;
    this.index = void 0;
    this.onError(response, status, headers);
  }

  public _onCancel(response:any, status:any, headers:any):void {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = true;
    this.isError = false;
    this.progress = 0;
    this.index = void 0;
    this.onCancel(response, status, headers);
  }

  public _onComplete(response:any, status:any, headers:any):void {
    this.onComplete(response, status, headers);

    if (this.uploader.options.removeAfterUpload) {
      this.remove();
    }
  }

  public _prepareToUploading():void {
    this.index = this.index || ++this.uploader._nextIndex;
    this.isReady = true;
  }
}
