import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    martinProfile: string;
    kamstrupImage: string;

    technology: Technology[] = [
        { id: 13, name: 'WPF Development', wanted : '0%', current : '80%'  },
        { id: 14, name: 'Java programming', wanted : '20%', current : '65%'  },
        { id: 12, name: 'Android Development', wanted : '30%', current : '70%'  },
        { id: 15, name: 'SQL programming', wanted : '10%', current : '50%'  }
      ];

    constructor() {
        this.kamstrupImage = '/assets/img/Kamstrup_logo_red_small.jpg';
        this.martinProfile = '/assets/img/mig2.jpg';
    }

    ngOnInit() {
    }
}
