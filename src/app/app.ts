
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Menu } from "./menu/menu";
import { Tourz } from "./tourz/tourz";
import { Footer} from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, Tourz, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected readonly title = signal('projeto-perifericos-angular');
}

//Eduardo Hugo Oliveira Lima
