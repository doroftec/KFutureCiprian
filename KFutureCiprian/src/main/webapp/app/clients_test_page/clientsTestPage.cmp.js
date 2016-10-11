"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var clientsTestPageServices_1 = require('./clientsTestPageServices');
var clientTest_model_1 = require('./clientTest.model');
var common_1 = require('@angular/common');
var ClientsTestPageCmp = (function () {
    function ClientsTestPageCmp(_clientsTestPageServices) {
        this._clientsTestPageServices = _clientsTestPageServices;
    }
    ClientsTestPageCmp.prototype.ngOnInit = function () {
        this.getClients();
        this.validationOke = true;
        this.genders = [];
        this.genders.push({ label: 'Select gender', value: 'Select gender' });
        this.genders.push({ label: 'M', value: 'M' });
        this.genders.push({ label: 'F', value: 'F' });
        this.countries = [];
        this.countries.push({ label: 'Select country', value: 'Select country' });
        this.countries.push({ label: 'Romania', value: 'Romania' });
        this.countries.push({ label: 'Italy', value: 'Italy' });
        this.countries.push({ label: 'France', value: 'France' });
        this.countries.push({ label: 'Spain', value: 'Spain' });
        this.clientsDummy = [];
        this.clientsDummy.push({ label: 'Client 1', value: null });
        this.clientsDummy.push({ label: 'Client 2', value: null });
        this.clientsDummy.push({ label: 'Client 3', value: null });
        this.clientsDummy.push({ label: 'Client 4', value: null });
        this.clientsDummy.push({ label: 'Client 5', value: null });
        this.clientsDummy.push({ label: 'Client 6', value: null });
    };
    ClientsTestPageCmp.prototype.validationFileds = function (client) {
        if (client.id == null) {
            this.validationOke = false;
            this.errorMsgIdFlag = true;
            this.errorMsgId = "ID field shoudn't be empty";
        }
        else {
            this.errorMsgIdFlag = false;
        }
        if (client.firstName == null) {
            this.validationOke = false;
            this.errorMsgFirstNameFlag = true;
            this.errorMsgFirstName = "First Name field shoudn't be empty";
        }
        else {
            this.errorMsgFirstNameFlag = false;
        }
        if (client.lastName == null) {
            this.validationOke = false;
            this.errorMsgLastNameFlag = true;
            this.errorMsgLastName = "Last Name field shoudn't be empty";
        }
        else {
            this.errorMsgLastNameFlag = false;
        }
        if (client.email == null) {
            this.validationOke = false;
            this.errorMsgEmailFlag = true;
            this.errorMsgEmail = "Email field shoudn't be empty";
        }
        else {
            this.errorMsgEmailFlag = false;
        }
        if (client.country == 'Select country') {
            this.validationOke = false;
            this.errorMsgCountryFlag = true;
            this.errorMsgCountry = "Please select a country";
        }
        else {
            this.errorMsgCountryFlag = false;
        }
        if (client.dateBirth == null) {
            this.validationOke = false;
            this.errorMsgDateBirthFlag = true;
            this.errorMsgDateBirth = "Date Birth field shoudn't be empty";
        }
        else {
            this.errorMsgDateBirthFlag = false;
        }
        if (client.gender == 'Select gender') {
            this.validationOke = false;
            this.errorMsgGenderFlag = true;
            this.errorMsgGender = "Please select a gender";
        }
        else {
            this.errorMsgGenderFlag = false;
        }
        if (client.phone == null) {
            this.validationOke = false;
            this.errorMsgPhoneFlag = true;
            this.errorMsgPhone = "Phone field shoudn't be empty";
        }
        else {
            this.errorMsgPhoneFlag = false;
        }
        if (client.phone != null && client.gender != 'Select gender' && client.dateBirth != null && client.country != 'Select country' && client.email != null && client.lastName != null && client.firstName != null && client.id != null) {
            this.validationOke = true;
        }
    };
    ClientsTestPageCmp.prototype.saveClientInDb = function () {
        this.validationFileds(this.selectedClient);
        if (this.validationOke == true) {
            var birthDay = new Date(this.selectedClient.dateBirth.toString());
            this.selectedClient.dateBirth = birthDay;
            this._clientsTestPageServices.saveOrUpdateClient(this.selectedClient).subscribe(function (error) { return alert(error); }, function () { return console.log('Finished Post'); });
            console.log(this.selectedClient.dateBirth);
            this.selectedClient = null;
            this.displayAddClientDialog = false;
            this.getClients();
        }
    };
    ClientsTestPageCmp.prototype.updateClientInDb = function () {
        this.validationFileds(this.selectedClient);
        this.selectedClient.dateBirth = new Date(this.dateBirth);
        this._clientsTestPageServices.saveOrUpdateClient(this.selectedClient).subscribe(function (error) { return alert(error); }, function () { return console.log('Finished Post'); });
        this.displayUpdateDialog = false;
    };
    ClientsTestPageCmp.prototype.resetMsgsFlags = function () {
        this.errorMsgIdFlag = false;
        this.errorMsgFirstNameFlag = false;
        ;
        this.errorMsgLastNameFlag = false;
        this.errorMsgGenderFlag = false;
        this.errorMsgCountryFlag = false;
        this.errorMsgDateBirthFlag = false;
        this.errorMsgAddressFlag = false;
        this.errorMsgPhoneFlag = false;
        this.errorMsgEmailFlag = false;
    };
    ClientsTestPageCmp.prototype.selectClient = function (clientTest) {
        this.selectedClient = clientTest;
        this.displayDetailsDialog = true;
    };
    ClientsTestPageCmp.prototype.updateClientBtn = function (clientTest) {
        this.resetMsgsFlags();
        var datePipe = new common_1.DatePipe('en-US');
        this.dateBirth = datePipe.transform(clientTest.dateBirth, 'MM/dd/yyyy');
        this.selectedClient = clientTest;
        this.displayUpdateDialog = true;
    };
    ClientsTestPageCmp.prototype.deleteClient = function (clientId) {
        var _this = this;
        this._clientsTestPageServices.deleteClient(clientId).subscribe(function (listOfNewClients) { return _this.clients = listOfNewClients; }, function (error) { return alert(error); });
    };
    ClientsTestPageCmp.prototype.checkDeleteDialog = function (client) {
        this.selectedClient = client;
        this.checkDeleteDialogFlag = true;
    };
    ClientsTestPageCmp.prototype.checkDeleteDialogYes = function (client) {
        this.deleteClient(client.id);
        this.checkDeleteDialogFlag = false;
        this.selectedClient = null;
    };
    ClientsTestPageCmp.prototype.checkDeleteDialogNo = function (client) {
        this.checkDeleteDialogFlag = false;
        this.selectedClient = null;
    };
    ClientsTestPageCmp.prototype.onDialogHide = function () {
        this.selectedClient = null;
    };
    ClientsTestPageCmp.prototype.getClients = function () {
        var _this = this;
        this._clientsTestPageServices.getClients().subscribe(function (clients) { return _this.clients = clients; }, function (error) { return _this.errorMessage = error; });
    };
    ClientsTestPageCmp.prototype.addNewClient = function () {
        this.resetMsgsFlags();
        this.displayAddClientDialog = true;
        this.selectedClient = new clientTest_model_1.ClientTest();
        this.selectedClient.id = null;
        this.selectedClient.firstName = null;
        this.selectedClient.lastName = null;
        this.selectedClient.dateBirth = null;
        this.selectedClient.country = null;
        this.selectedClient.address = null;
        this.selectedClient.gender = null;
        this.selectedClient.phone = null;
    };
    ClientsTestPageCmp = __decorate([
        core_1.Component({
            templateUrl: 'app/clients_test_page/clientsTestPage.cmp.html',
            styleUrls: ['app/clients_test_page/clientsTestPage.cmp.css']
        }), 
        __metadata('design:paramtypes', [clientsTestPageServices_1.ClientsTestPageServices])
    ], ClientsTestPageCmp);
    return ClientsTestPageCmp;
}());
exports.ClientsTestPageCmp = ClientsTestPageCmp;
//# sourceMappingURL=clientsTestPage.cmp.js.map