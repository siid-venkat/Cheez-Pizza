import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  liDataa = [
    {
      name: "Home",
      mati: "home",
    },
    {
      name: "Desserts",
      mati: "local_pizza",
    },
    {
      name: "Soft-Drinks",
      mati: "fastfood",
    },
    {
      name: "Orders",
      mati: " shopping_basket",

    },

  ]



}
