import { Component } from '@angular/core';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonChip, IonFab, IonFabButton, IonFabList, IonModal, IonButton, IonButtons, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonChip, IonFab, IonFabButton, IonFabList, IonModal, IonButton, IonButtons, IonInput],
})
export class Tab2Page {

  constructor() {}

}
