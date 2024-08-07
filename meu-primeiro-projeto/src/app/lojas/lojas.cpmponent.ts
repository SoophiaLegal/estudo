import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css'],  // Corrigir a chave para 'styleUrls'
})
export class LojasComponent {
  title = 'meu-primeiro-projeto';
}
