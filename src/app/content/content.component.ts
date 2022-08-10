import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    allowShowName = false;
    completeText = 'Enter your name.';
    userName: string = '';

    constructor() {
        setTimeout(() => {
            this.allowShowName = true;
        }, 3000);
    }

    ngOnInit(): void {
    }

    onShowName() {
        this.completeText = `Your name is ${this.userName}`;
    }
}
