import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  currentStatus: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  changeCurrentStatus(msg: string): void {
     this.currentStatus.next(msg);
  }
}
