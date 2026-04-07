import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  imports: [CommonModule],
  templateUrl: './popular.html',
  styleUrl: './popular.css',
})
export class Popular {
  cards = [
    {img: "popular (1).png", localidade: "Paris, France", titulo: "Centipede Tour - Guided Arizona Desert Tour by ATV", avaliacao:"4.8(243)", dias:"4 day", preco:"$189.25"},
    {img: "popular (2).png", localidade: "New York, USA", titulo: "Molokini and Turtle Town Snorkeling Adventure Aboard", avaliacao:"4.8(243)", dias:"4 day", preco:"$255.00"},
    {img: "popular (3).png", localidade: "London, UK", titulo: "Westminster Walking Tour & Westminster Abbey Entry", avaliacao:"4.8(243)", dias:"4 day", preco:"$945.25"},
    {img: "popular (4).png", localidade: "Paris, France", titulo: "All Inclusive Ultimate Circle Island Day Tour with Lunch", avaliacao:"4.8(243)", dias:"4 day", preco:"$771.00"},
    {img: "popular (5).png", localidade: "Paris, France", titulo: "Space Center Houston Admission Ticket", avaliacao:"4.8(243)", dias:"4 day", preco:"$189.25"},
    {img: "popular (6).png", localidade: "New York, USA", titulo: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area", avaliacao:"4.8(243)", dias:"4 day", preco:"$255.00"},
    {img: "popular (7).png", localidade: "London, UK", titulo: "History and Hauntings of Salem Guided Walking Tour", avaliacao:"4.8(243)", dias:"4 day", preco:"$943.00"},
    {img: "popular (8).png", localidade: "New York, USA", titulo: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up", avaliacao:"4.8(243)", dias:"4 day", preco:"$771.00"}
  ]
}
