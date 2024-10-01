import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'assets/images/images/categorie_electromenager.jpg', description: 'Grands appareils pour votre maison.', available: true },
    { id: 2, title: 'Petit électroménager', image: 'assets/images/images/categorie_petit_electromenager.jpg', description: 'Appareils électriques de petite taille.', available: true },
    { id: 3, title: 'Produits informatiques', image: 'assets/images/images/categorie_produits_informatiques.jpg', description: 'Tout pour votre informatique.', available: true },
    { id: 4, title: 'Smart Phones', image: 'assets/images/images/categorie_smartPhone.jpg', description: 'Téléphones intelligents.', available: true },
    { id: 5, title: 'TV, images et son', image: 'assets/images/images/categorie_tv_image_son.jpg', description: 'Pour votre divertissement.', available: true },
    { id: 6, title: 'Produits voiture', image: 'assets/images/images/produits_nettoyages.jpg', description: 'Produits pour votre voiture.', available: true },
  ];
  showDesc(x:string)
  {
    alert(x);
  }
  searchTerm: string = ''; 
}
