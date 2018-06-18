import { Component, OnInit } from '@angular/core';
import * as CryptoJS from "crypto-js";

@Component({
    selector: 'app-encryptiontool',
    templateUrl: './encryptiontool.component.html',
    styleUrls: ['./encryptiontool.component.css']
})
export class EncryptiontoolComponent implements OnInit {

    inputText: string;
    menuHeader: string;
    selectedAlgorithm: string;
    encryptionKey: string;
    encryptSelected: boolean;
    decryptSelected: boolean;

    algorithms = ['AES', 'TripleDES', 'DES'];

    constructor() { }

    ngOnInit() {
        this.encryptSelected = true;
        this.decryptSelected = false;
        this.menuHeader = "Encrypt";
        this.selectedAlgorithm = this.algorithms[0];
    }

    encrypt() {
        this.encryptSelected = true;
        this.decryptSelected = false;
        this.menuHeader = "Encrypt";
    }

    decrypt() {
        this.encryptSelected = false;
        this.decryptSelected = true;
        this.menuHeader = "Decrypt";
    }

    onChange(selectedAlgorithm: string) {
        this.selectedAlgorithm = selectedAlgorithm;
    }

    handleInputText(input: string) {
        console.log("InputText: " + input);
        console.log("SelectedAlgorithm: " + this.selectedAlgorithm);
        console.log("encryptionKey: " + this.encryptionKey);
        if (this.encryptSelected) {
            if (this.selectedAlgorithm == 'TripleDES')
                this.inputText = CryptoJS.TripleDES.encrypt(input, this.encryptionKey).toString();
            if (this.selectedAlgorithm == 'DES')
                this.inputText = CryptoJS.DES.encrypt(input, this.encryptionKey).toString();
            if (this.selectedAlgorithm == "AES")
                this.inputText = CryptoJS.AES.encrypt(input, this.encryptionKey).toString();
        }
        else {
            if (this.selectedAlgorithm == 'TripleDES')
                this.inputText = CryptoJS.TripleDES.decrypt(input, this.encryptionKey).toString(CryptoJS.enc.Utf8);
            if (this.selectedAlgorithm == 'DES')
                this.inputText = CryptoJS.DES.decrypt(input, this.encryptionKey).toString(CryptoJS.enc.Utf8);
            if (this.selectedAlgorithm == 'AES')
                this.inputText = CryptoJS.AES.decrypt(input, this.encryptionKey).toString(CryptoJS.enc.Utf8);
        }
    }
}
