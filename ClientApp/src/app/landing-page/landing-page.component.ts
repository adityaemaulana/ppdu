import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public landing_slides = [
    "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg",
    "https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png",
    "https://cdn.shopify.com/s/files/1/2658/1334/products/HJ08064_1024x1024.jpg"
  ];

  public galleries = [
    { "name" : "Infrastruktur", "image" : "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg"},
    { "name" : "Direktorat PPDI", "image" : "https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png"},
    { "name" : "PPP Project", "image" : "https://cdn.shopify.com/s/files/1/2658/1334/products/HJ08064_1024x1024.jpg"},
    { "name" : "RSUD Krian", "image" : "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg"},
    { "name" : "Direktorat PPDI", "image" : "https://cdn.shopify.com/s/files/1/2658/1334/products/HJ08064_1024x1024.jpg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
