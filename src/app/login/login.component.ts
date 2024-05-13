import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isSignUp: boolean = false;
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) { }

  signUp() {
    this.isSignUp = true;
  }
  signIn() {
    this.isSignUp = false;
  }

  onSubmit() {
    // Sign up logic
    if (this.isSignUp) {
      const userData = {
        username: this.username,
        email: this.email,
        phone: this.phone,
      };
      this.http.post('/backend-route', userData)
        .subscribe(response => {
          console.log('Sign up successful:', response);
        }, error => {
          console.error('Sign up error:', error);
        });
    }
    // Login logic
    else {
      const loginData = {
        email: this.email,
        password: this.password
      };
      this.http.post('/backend-route', loginData)
        .subscribe(response => {
          console.log('Login successful:', response);
        }, error => {
          console.error('Login error:', error);
        });
    }
  }
}
