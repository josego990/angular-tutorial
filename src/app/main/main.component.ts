import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}

  navigateToFeatures() {
    this.router.navigate(['/features']); // Redirige a la ruta '/features' (asegúrate de tener esta ruta configurada)
  }
}
