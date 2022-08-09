import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    allowNewContent = false;

    constructor() {
        setTimeout(() => {
            this.allowNewContent = true;
        }, 5000);
    }

    ngOnInit(): void {
    }

}
