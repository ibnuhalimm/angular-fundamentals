import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    allowShowName = false;
    userName = '';
    showUserName = false;

    constructor() {
        setTimeout(() => {
            this.allowShowName = true;
        }, 3000);
    }

    ngOnInit(): void {
    }

    onShowName() {
        this.showUserName = true;
    }
}
