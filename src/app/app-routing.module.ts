import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component'; // Añade esto si AppComponent es usado en las rutas

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: 'login', component: LoginComponent },           // Ruta para el componente login
  { path: 'main', component: MainComponent },  
  { path: 'home', component: AppComponent }               // Ruta opcional para el componente app
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
