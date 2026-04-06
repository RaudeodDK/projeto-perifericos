
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Menu } from "./menu/menu";
import { Tourz } from "./tourz/tourz";
import { Footer} from "./footer/footer";
import { Banner } from "./banner/banner";
import { Trending } from "./trending/trending";
import { Telefone } from "./telefone/telefone";
import { Costumer } from "./costumer/costumer";
import { Articles } from "./articles/articles";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, Tourz, Footer, Banner, Trending, Telefone, Costumer, Articles],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected readonly title = signal('projeto-perifericos-angular');
}

//Eduardo Hugo Oliveira Lima
