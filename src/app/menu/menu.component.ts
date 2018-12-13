import { ComponentInteractionService } from './../component-interaction.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() linkList: string;
  showLogin = true;
  showLogout = false;
  constructor(private service: ComponentInteractionService) { }

  ngOnInit() {

    this.service.currentStatus.subscribe(message => {
      if (message === 'logged') {
        this.showLogin = false;
        this.showLogout = true;
      }
    });

    this.service.currentStatus.subscribe(message => {
      if (message === 'logout') {
        this.showLogin = true;
        this.showLogout = false;
      }
    });
  }

}
