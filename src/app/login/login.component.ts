import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public apiUrl = 'http://34.228.175.3:3030';

  constructor(private router: Router) {}
  onSubmit() {
    if (this.username && this.password) {
      console.log('Login successful');
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // Aquí puedes añadir la lógica para autenticar al usuario

      let data = {usr:this.username,pass:this.password}

      this.postData(data);

    } else {
      console.log('Please enter both username and password');
    }
  }

  async postData(data: any): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/prueba-login-post`, data); // Reemplaza '/endpoint' con tu endpoint
      console.log(response.data);

      if(response.data.message){

        if(response.data.message.access){
          this.router.navigate(['/main']);
        }
        else{
          alert('ERROR:' + response.data.message.msg);
        }
      }

    } catch (error) {
      console.error('Error sending POST request', error);
      throw error;
    }
  }


}
