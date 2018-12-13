import { BehaviorSubject } from 'rxjs';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  selectedPlace: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private viewRef: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef): void {
    this.viewRef = viewRef;
   }

    addComponent(compToAdd: any): void {

     const factory =  this.resolver.resolveComponentFactory(compToAdd);

      const compRef = factory.create(this.viewRef.parentInjector);

       this.viewRef.insert(compRef.hostView);

    }

    removeComponent() {

      this.viewRef.detach();
    }
}
