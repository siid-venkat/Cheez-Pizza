import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  colorr;
  constructor() { }

  selectedPerson = null;
  ngOnInit() {
  }
  /*get the data when click on the row */

  selectData(pp) {
    this.selectedPerson = pp;
    console.log(pp.ProductName);
  }

  /* this method calls when want to change status Of the Order. */
  statusChange(data) {
    switch (data.Status) {
      case "received":
        data.Status = 'preparing';
        break;
      case "preparing":
        data.Status = 'serving';
        break;
      case "onhold":
        data.Status = 'received';
        break;
      case "serving":
        data.Status = 'bill';
        break;

      default:
        data.Status = 'onhold';
        break;
    }
  }
  /* data for the Table */
  datas = [
    {
      sl: 1,
      Image: "../../../assets/pizaa1.jpg",
      ProductName: "Cheese Pizza",
      Price: 100,
      CustomerName: "Ram",
      Phone: 123455989,
      Area: "Villas Flat,Btm 2nd Stage",
      City: "Bangalore",
      Status: "received",
      TotalPrice: 120
    },
    {
      sl: 2,
      Image: "../../../assets/pizaa2.jpg",
      ProductName: "Ceese Pizza With Tomato",
      Price: 140,
      CustomerName: "Venkat",
      Phone: 123455989,
      Area: "Bkm,jayanagar 2nd Stage",
      City: "Bangalore",
      Status: "onhold",
      TotalPrice: 160,
    },
    {
      sl: 3,
      Image: "../../../assets/pizaa3.jpg",
      ProductName: "Chesse Pizza With Chilli",
      Price: 50,
      CustomerName: "Kishore",
      Phone: 123455989,
      Area: "kite Flat,Bommanahalli",
      City: "Chennai",
      Status: "onhold",
      TotalPrice: 70
    },
    {
      sl: 4,
      Image: "../../../assets/pizaa4.jpg",
      ProductName: "Cheese Piza Pottato",
      Price: 350,
      CustomerName: "Vikram",
      Phone: 123455989,
      Area: "Villas Flat,Btm 2nd Stage",
      City: "Hyderbad",
      Status: "preparing",
      TotalPrice: 370
    },
    {
      sl: 1,
      Image: "https://static.toiimg.com/photo/72975551.cms",
      ProductName: "Cheese Pizza",
      Price: 100,
      CustomerName: "Joseph",
      Phone: 123455989,
      Area: "Villas Flat,Btm 2nd Stage",
      City: "Mumbai",
      Status: "serving",
      TotalPrice: 120
    },
    {
      sl: 2,
      Image: "../../../assets/pizaa1.jpg",
      ProductName: "Ceese Pizza With Tomato",
      Price: 140,
      CustomerName: "Stephan",
      Phone: 123455989,
      Area: "Villas Flat,Btm 2nd Stage",
      City: "Trivandrum",
      Status: "preparing",
      TotalPrice: 160,
    },
    {
      sl: 3,
      Image: "../../../assets/pizaa4.jpg",
      ProductName: "Chesse Pizza With Chilli",
      Price: 50,
      CustomerName: "Watson",
      Phone: 123455989,
      Area: "Villas Flat,Btm 2nd Stage",
      City: "Bangalore",
      Status: "received",
      TotalPrice: 70
    },
    {
      sl: 4,
      Image: "../../../assets/pizaa3.jpg",
      ProductName: "Cheese Piza Pottato",
      Price: 350,
      CustomerName: "Jasmine",
      Phone: 123455989,
      Area: "Villas Flat,Btm 2nd Stage",
      City: "Bangalore",
      Status: "onhold",
      TotalPrice: 370
    },
  ]
}
