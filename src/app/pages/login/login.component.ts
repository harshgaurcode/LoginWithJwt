import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    EmailId: '',
    Password: '',
  };
  http = inject(HttpClient);
  router = inject(Router);
  onLogin() {
    this.http
      .post(
        'https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Login Successfull');
          localStorage.setItem('angular18Token',res.data.token);
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}
