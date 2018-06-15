import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import * as CryptoJS from "crypto-js";

@Component({
    selector: 'app-hashtester',
    templateUrl: './hashtester.component.html',
    styleUrls: ['./hashtester.component.css']
})
export class HashtesterComponent implements OnInit {
    arrow: string;
    smallerThanMd: boolean;
    hashedText: string;
    showKey: boolean;
    hmacKey: string;

    algorithms = ['SHA1', 'HMACSHA1', 'SHA256', 'HMACSHA256',
        'SHA512', 'HMACSHA512', 'MD5', 'HMACMD5'];

    constructor() {
        this.arrow = '/assets/img/Sideways_Arrow_Icon.svg';
        this.smallerThanMd = window.innerWidth <= 767;
        this.showKey = false;
    }

    ngOnInit() {
        this.hashedText = '';
        this.hmacKey = '';
    }

    onResize(event) {
        this.smallerThanMd = event.target.innerWidth <= 767;
    }

    onChange(selectedAlgorithm: string) {
        this.showKey = selectedAlgorithm.includes('HMAC');
    }

    hash(textToHash: string, selectedAlgorithm: string) {
        if (selectedAlgorithm == 'SHA1')
            this.hashedText = CryptoJS.SHA1(textToHash).toString();
        if (selectedAlgorithm == 'HMACSHA1')
            this.hashedText = CryptoJS.HmacSHA1(textToHash, this.hmacKey).toString();
        if (selectedAlgorithm == 'SHA256')
            this.hashedText = CryptoJS.SHA256(textToHash).toString();
        if (selectedAlgorithm == 'HMACSHA256')
            this.hashedText = CryptoJS.HmacSHA256(textToHash, this.hmacKey).toString();
        if (selectedAlgorithm == 'SHA512')
            this.hashedText = CryptoJS.SHA512(textToHash).toString();
        if (selectedAlgorithm == 'HMACSHA512')
            this.hashedText = CryptoJS.HmacSHA512(textToHash, this.hmacKey).toString();
        if (selectedAlgorithm == 'MD5')
            this.hashedText = CryptoJS.MD5(textToHash).toString();
        if (selectedAlgorithm == 'HMACMD5')
            this.hashedText = CryptoJS.HmacMD5(textToHash, this.hmacKey).toString();
    }
}
