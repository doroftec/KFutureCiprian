import { Component, OnInit } from '@angular/core';
import { ClientsTestPageServices } from'./clientsTestPageServices';
import { ClientTest } from './clientTest.model';
import { DropdownModule } from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng'
import {Header} from 'primeng/primeng';
import { InputMaskModule, TabViewModule, InputSwitchModule, InputTextModule, DialogModule, ButtonModule, CalendarModule, DataScrollerModule, GrowlModule, MessagesModule,PanelModule} from 'primeng/primeng';
import { DatePipe } from '@angular/common';

@Component({
    templateUrl: 'app/clients_test_page/clientsTestPage.cmp.html',
    styleUrls: ['app/clients_test_page/clientsTestPage.cmp.css']
})
export class ClientsTestPageCmp implements OnInit {
    constructor(private _clientsTestPageServices: ClientsTestPageServices) { }
    
    genders: SelectItem[];
    countries: SelectItem[];
    clientsDummy: SelectItem[];
    clients: ClientTest[];
    selectedClient: ClientTest;
    client: ClientTest;
    selectedName: string;
    dateBirth: string;

    displayDetailsDialog: boolean;
    displayUpdateDialog: boolean;
    displayAddClientDialog: boolean;
    checkDeleteDialogFlag: boolean;


    errorMsgIdFlag: boolean;
    errorMsgFirstNameFlag: boolean;
    errorMsgLastNameFlag: boolean;
    errorMsgGenderFlag: boolean;
    errorMsgCountryFlag: boolean;
    errorMsgDateBirthFlag: boolean;
    errorMsgAddressFlag: boolean;
    errorMsgPhoneFlag: boolean;
    errorMsgEmailFlag: boolean;

    errorMsgId: string;
    errorMsgFirstName: string;
    errorMsgLastName: string;
    errorMsgGender: string;
    errorMsgCountry: string;
    errorMsgDateBirth: string;
    errorMsgAddress: string;
    errorMsgPhone: string;
    errorMsgEmail: string;

    validationOke: boolean;

    errorMessage: string;

    ngOnInit() { 
        this.getClients();

        this.validationOke = true;

        this.genders = [];
        this.genders.push({label: 'Select gender', value: 'Select gender'});
        this.genders.push({label: 'M', value: 'M'});
        this.genders.push({label: 'F', value: 'F'});

        this.countries = [];
        this.countries.push({label: 'Select country', value: 'Select country'});
        this.countries.push({label: 'Romania', value: 'Romania'});
        this.countries.push({label: 'Italy', value: 'Italy'});
        this.countries.push({label: 'France', value: 'France'});
        this.countries.push({label: 'Spain', value: 'Spain'});

        this.clientsDummy = [];
        this.clientsDummy.push({label:'Client 1', value:null});
        this.clientsDummy.push({label:'Client 2', value:null});
        this.clientsDummy.push({label:'Client 3', value:null});
        this.clientsDummy.push({label:'Client 4', value:null});
        this.clientsDummy.push({label:'Client 5', value:null});
        this.clientsDummy.push({label:'Client 6', value:null});
    }

    validationFileds(client: ClientTest){

        if(client.id == null){
            this.validationOke = false;
            this.errorMsgIdFlag = true;
            this.errorMsgId = "ID field shoudn't be empty" ;
        }else{
            this.errorMsgIdFlag = false;
        }

        if(client.firstName == null){
            this.validationOke = false;
            this.errorMsgFirstNameFlag = true;
            this.errorMsgFirstName = "First Name field shoudn't be empty" ;
        }else{
            this.errorMsgFirstNameFlag = false;
        }

        if(client.lastName == null){
            this.validationOke = false;
            this.errorMsgLastNameFlag = true;
            this.errorMsgLastName = "Last Name field shoudn't be empty" ;
        }else{
            this.errorMsgLastNameFlag = false;
        }
        
        if(client.email == null){
            this.validationOke = false;
            this.errorMsgEmailFlag = true;
            this.errorMsgEmail = "Email field shoudn't be empty" ;
        }else{
            this.errorMsgEmailFlag = false;
        }
        
        if(client.country == 'Select country'){
            this.validationOke = false;
            this.errorMsgCountryFlag = true;
            this.errorMsgCountry = "Please select a country" ;
        }else{
            this.errorMsgCountryFlag = false;
        }
        
        if(client.dateBirth == null){
            this.validationOke = false;
            this.errorMsgDateBirthFlag = true;
            this.errorMsgDateBirth = "Date Birth field shoudn't be empty" ;
        }else{
            this.errorMsgDateBirthFlag = false;
        }

        if(client.gender == 'Select gender'){
            this.validationOke = false;
            this.errorMsgGenderFlag = true;
            this.errorMsgGender = "Please select a gender" ;
        }else{
            this.errorMsgGenderFlag = false;
        }
        
        if(client.phone == null){
            this.validationOke = false;
            this.errorMsgPhoneFlag = true;
            this.errorMsgPhone = "Phone field shoudn't be empty" ;
        }else{
            this.errorMsgPhoneFlag = false;
        }

        if(client.phone != null && client.gender != 'Select gender' && client.dateBirth != null && client.country != 'Select country' && client.email != null && client.lastName != null && client.firstName != null && client.id != null){
            this.validationOke = true;
        }
    }



    saveClientInDb(){
        this.validationFileds(this.selectedClient);

        if(this.validationOke == true){
            var birthDay = new Date(this.selectedClient.dateBirth.toString());
            this.selectedClient.dateBirth = birthDay;
            this._clientsTestPageServices.saveOrUpdateClient(this.selectedClient).subscribe(
            error=>alert(error),
            ()=>console.log('Finished Post')
            );

            console.log(this.selectedClient.dateBirth);
            this.selectedClient = null;
            this.displayAddClientDialog = false;
            this.getClients();
        }
    }

    updateClientInDb(){
        this.validationFileds(this.selectedClient);
        
        this.selectedClient.dateBirth = new Date(this.dateBirth);
        this._clientsTestPageServices.saveOrUpdateClient(this.selectedClient).subscribe(
          error=>alert(error),
          ()=>console.log('Finished Post')
       );
        this.displayUpdateDialog = false;
    }

    resetMsgsFlags(){
        this.errorMsgIdFlag = false;
        this.errorMsgFirstNameFlag = false;;
        this.errorMsgLastNameFlag = false;
        this.errorMsgGenderFlag = false;
        this.errorMsgCountryFlag = false;
        this.errorMsgDateBirthFlag = false;
        this.errorMsgAddressFlag = false;
        this.errorMsgPhoneFlag = false;
        this.errorMsgEmailFlag = false;
    }

    selectClient(clientTest: ClientTest) {
        this.selectedClient = clientTest;
        this.displayDetailsDialog = true;
    }

    updateClientBtn(clientTest: ClientTest){
        this.resetMsgsFlags();
        var datePipe = new DatePipe('en-US');
        this.dateBirth = datePipe.transform(clientTest.dateBirth, 'MM/dd/yyyy');       
        this.selectedClient = clientTest;
        this.displayUpdateDialog = true;
    }

    private deleteClient(clientId: number){
         this._clientsTestPageServices.deleteClient(clientId).subscribe(listOfNewClients => this.clients = <ClientTest[]>listOfNewClients, error=>alert(error));
    }

    checkDeleteDialog(client: ClientTest){
        this.selectedClient = client;   
        this.checkDeleteDialogFlag = true;
    }

    checkDeleteDialogYes(client: ClientTest){
        this.deleteClient(client.id);
        this.checkDeleteDialogFlag = false;
        this.selectedClient = null;
    }

    checkDeleteDialogNo(client: ClientTest){
        this.checkDeleteDialogFlag = false;
        this.selectedClient = null;
    }

    onDialogHide() {
        this.selectedClient = null;
    }

    getClients(){
        this._clientsTestPageServices.getClients().subscribe(
            clients => this.clients = clients,
            error => this.errorMessage = <any>error);
    }

    addNewClient(){
        this.resetMsgsFlags();
        this.displayAddClientDialog = true;
        this.selectedClient = new ClientTest();
        this.selectedClient.id = null;
        this.selectedClient.firstName = null;
        this.selectedClient.lastName = null;
        this.selectedClient.dateBirth = null;
        this.selectedClient.country = null;
        this.selectedClient.address = null;
        this.selectedClient.gender = null;
        this.selectedClient.phone = null;
    }
}