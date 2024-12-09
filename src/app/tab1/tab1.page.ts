import { Component } from '@angular/core';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonChip, IonFab, IonFabButton, IonFabList, IonModal, IonButton, IonButtons, IonInput } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, cart, restaurant, heart } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonChip, IonFab, IonFabButton, IonFabList, IonModal, IonButton, IonButtons, IonInput],
})
export class Tab1Page {
  
  availableChips: string[] = ['Histamine', 'Acrylamid', 'Anti-Oxi', 'Iron'];

  constructor() {
    addIcons({heart,cart,restaurant,add});
  }
}
