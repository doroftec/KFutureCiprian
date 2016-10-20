import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NavChangeService {
    navchange: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

}