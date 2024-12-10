import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, alarm, cart, heart } from 'ionicons/icons';

/* Decorator --> wrapper function used to define metadata or to extend functionality of a class without modifying it */ 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [ IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonIcon],
})
export class AppComponent {
  constructor() {
    addIcons({heart,cart,alarm,logOutOutline});
  }
}