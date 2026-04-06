import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending',
  imports: [CommonModule],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export class Trending {
  destinations = [
    {pais: "Paris", tours: "100+ Tours", img: "img1.png"},
    {pais: "Singapore", tours: "300+ Tours", img: "img2.png"},
    {pais: "Roma", tours: "400+ Tours", img: "img3.png"},
    {pais: "Bangkok", tours: "100+ Tours", img: "img4.png"},
    {pais: "Bail", tours: "600+ Tours", img: "img5.png"},
    {pais: "Phuket", tours: "200+ Tours", img: "img6.png"},
    {pais: "Tokyo", tours: "700+ Tours", img: "img7.png"},
    {pais: "Cappadocia", tours: "900+ Tours", img: "img8.png"}
  ];
}
