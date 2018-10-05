import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  chatVisibility: boolean = false;

  ngOnInit() {
  }

  closeChat(){
    this.chatVisibility=true;   
  }

}
