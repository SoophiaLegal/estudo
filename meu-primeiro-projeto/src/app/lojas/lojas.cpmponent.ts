import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatMenuModule],
  templateUrl: './lojas.component.html',
  styleUrl: './lojas.component.css', 
})
export class LojasComponent {
  title = 'meu-primeiro-projeto';



}
