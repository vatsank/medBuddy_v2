import { Component, OnInit } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ComponentInteractionService) { }

  ngOnInit() {
  }
signOut(){
   this.service.changeCurrentStatus('logout');
}
}
