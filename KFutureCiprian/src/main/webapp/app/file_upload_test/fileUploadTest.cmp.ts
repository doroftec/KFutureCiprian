import {Component, OnInit} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import { FileUploader} from 'ng2-file-upload';
import { FileUploadTestService } from './fileUploadTest.services';
import { FileUploadTest } from './fileUploadTest.model';
import 'rxjs/Rx';
import {Header} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import { InputMaskModule, TabViewModule, InputSwitchModule, InputTextModule, DialogModule, ButtonModule, CalendarModule, DataScrollerModule, GrowlModule, MessagesModule,PanelModule} from 'primeng/primeng';
import { CookieService } from 'angular2-cookie/core';
declare let saveAs: any;

const URL2 = 'https://evening-anchorage-3159.herokuapp.com/api/';

const URL = 'rest/upload';

@Component({
    templateUrl: 'app/file_upload_test/fileUploadTest.cmp.html',
    styleUrls: ['app/file_upload_test/fileUploadTest.cmp.css']
})

export class FileUploadTestCmp implements OnInit {
    
  constructor(private _fileUploadTestService: FileUploadTestService, private _cookieService: CookieService){
    this.uploader = new FileUploader({url: URL, authToken:_cookieService.get('X-Auth-Token')});
  }

  arrOfFiles : FileUploadTest[];
  dataBytes: any;
  errorMessage: string;

  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

    // On init
    public ngOnInit():void {
      this.uploadedFilesFromDb();
    }

    public uploadedFilesFromDb(){
      this._fileUploadTestService.getUploadedBlobsFiles().subscribe(
            arrOfFiles => this.arrOfFiles = arrOfFiles,
            error => this.errorMessage = <any>error);
    }
//text/csv, application/pdf
    downloadFile(data: any[]){
      var blob = new Blob([data], { type: 'application/pdf' });
      var url= window.URL.createObjectURL(blob);
      saveAs(blob, 'test.pdf');
    }

    downloadPDF(fileUpTest: FileUploadTest){
      this._fileUploadTestService.downloadPDF(fileUpTest.id).subscribe(blob =>{
      saveAs(blob, fileUpTest.fileName);
      })
    }

    functie(){
      var mediaType = 'application/pdf';
      var filename = 'test.pdf';

      var blob = new Blob([this.dataBytes], {type: mediaType});
      saveAs(blob, filename);
    }
}