import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects = [
    {
      "name" : "Transportasi Medan",
      "image" : "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 15 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Medan, Sumatera Utara"
    },
    {
      "name" : "Jalan Tol Jakarta Cikampe II Elevated",
      "image" : "https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png",
      "status" : "Konstruksi",
      "nilai" : "Rp 16,4 Billion",
      "sektor" : "Jalan",
      "lokasi" : "Kota Bekasi, Jawa Barat"
    },
    {
      "name" : "Bandara Hang Nadim",
      "image" : "https://cdn.shopify.com/s/files/1/2658/1334/products/HJ08064_1024x1024.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 3,5 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Batam, Kepulauan Riau"
    },
    {
      "name" : "Bandara Hang Nadim",
      "image" : "https://cdn.shopify.com/s/files/1/2658/1334/products/HJ08064_1024x1024.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 4,5 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Batam, Kepulauan Riau"
    },
    {
      "name" : "Jalan Tol Jakarta Cikampe",
      "image" : "https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png",
      "status" : "Konstruksi",
      "nilai" : "Rp 17,4 Billion",
      "sektor" : "Jalan",
      "lokasi" : "Kota Bekasi, Jawa Barat"
    },
    {
      "name" : "Transportasi Medan",
      "image" : "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 16 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Medan, Sumatera Utara"
    },
    {
      "name" : "Jalan Tol Jakarta Cikampe",
      "image" : "https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png",
      "status" : "Konstruksi",
      "nilai" : "Rp 17,4 Billion",
      "sektor" : "Jalan",
      "lokasi" : "Kota Bekasi, Jawa Barat"
    },
    {
      "name" : "Transportasi Medan",
      "image" : "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 16 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Medan, Sumatera Utara"
    },
    {
      "name" : "Bandara Hang Nadim",
      "image" : "https://cdn.shopify.com/s/files/1/2658/1334/products/HJ08064_1024x1024.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 4,5 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Batam, Kepulauan Riau"
    },
    {
      "name" : "Transportasi Medan",
      "image" : "https://hookagency.com/wp-content/uploads/2015/11/light-blue-gradient-ui-gradient.jpg",
      "status" : "Penyiapan",
      "nilai" : "Rp 16 Billion",
      "sektor" : "Transportasi",
      "lokasi" : "Medan, Sumatera Utara"
    },
    {
      "name" : "Jalan Tol Jakarta Cikampe",
      "image" : "https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png",
      "status" : "Konstruksi",
      "nilai" : "Rp 17,4 Billion",
      "sektor" : "Jalan",
      "lokasi" : "Kota Bekasi, Jawa Barat"
    }
  ];
  
  public currentData = [];
  public pageNumbers = [];
  public currentIdx = 0;
  public dataPerSlide = 3;

  constructor() { }

  ngOnInit() {
    this.updateData(0);
  }

  updateData(idx : number) {
    let data = [];
    let start = idx * this.dataPerSlide;

    for(let i = start; i < (start + this.dataPerSlide) && i < this.projects.length; i++) {
      data.push(this.projects[i]);
    }

    this.updatePagination(idx);
    this.currentIdx = idx;
    this.currentData = data;
  }

  updatePagination(idx : number) {
    let numbers = [];
    let limit = Math.ceil(this.projects.length/this.dataPerSlide);

    if(idx >= this.dataPerSlide - 1) {
      for(let i = idx-1; i < (idx + this.dataPerSlide) && i < limit; i++) {
        numbers.push(i);
      }     
    } else {
      for(let i = 0; i < this.dataPerSlide && i < limit; i++) {
        numbers.push(i);
      }
    }

    this.pageNumbers = numbers;
  }
}
