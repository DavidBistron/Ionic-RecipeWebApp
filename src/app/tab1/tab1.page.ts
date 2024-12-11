import { Component } from '@angular/core';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonChip, IonFab, IonFabButton, IonFabList, IonModal, IonButton, IonButtons, IonInput } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';  // HttpClient direkt importieren

// Every Recipe contains: Name, Ingredients[], HowTo, Tags[]
// Interface, because structure of recipes are clearly defined
export interface Recipe {
  name: string;
  ingredients: string[];
  howTo: string;
  tags?: string[];
}

export interface RecipeCategory {
  [key: string]: { // Index-Signatur für beliebige Kategorien
    name: string;
    amount: number;
    unit: string;
    tags: string[];
  }[];
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonChip, IonFab, IonFabButton, IonFabList, IonModal, IonButton, IonButtons, IonInput],
})

export class Tab1Page {

  recipes : RecipeCategory = {
    Cereal: [
      {
        name: 'Cereals with Berries',
        amount: 200,
        unit: 'g',
        tags: ['Iron', 'Histamine', 'Veggie']
      },
      {
        name: 'Cereals with Apples',
        amount: 150,
        unit: 'g',
        tags: ['Iron', 'Histamine', 'Veggie']
      }
    ],
    Noodles: [
      {
        name: 'Veggie Lasagne',
        amount: 1,
        unit: 'plate',
        tags: []
      }
    ],
    Potatoes: [
      {
        name: 'Spicy Oven Potatoes',
        amount: 4,
        unit: 'pieces',
        tags: []
      }
    ]
  };

  constructor(private http: HttpClient, private alertController: AlertController) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.http.get<RecipeCategory>('assets/data/recipes.json').subscribe(data => {
      this.recipes = data;
    });
  }

  // Öffnet das Pop-Up zum Hinzufügen eines Rezepts
  async openAddRecipePopup(category: string) {
    const alert = await this.alertController.create({
      header: `Add Recipe to ${category}`,
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Recipe Name'
        },
        {
          name: 'amount',
          type: 'number',
          placeholder: 'Amount'
        },
        {
          name: 'unit',
          type: 'text',
          placeholder: 'Unit (e.g., g, pieces)'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.name && data.amount && data.unit) {
              this.addRecipe(category, data);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Rezept zum JSON hinzufügen
  addRecipe(category: string, data: any) {
    const newRecipe = {
      name: data.name,
      amount: parseInt(data.amount, 10),
      unit: data.unit,
      tags: [] // Hier könnten später Tags hinzugefügt werden, wenn benötigt
    };

    // Rezept zur richtigen Kategorie hinzufügen
    if (this.recipes[category]) {
      this.recipes[category].push(newRecipe);
    }
  }
}
