import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/model/user/user-entity';
import { UserService } from 'src/app/shared/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private UserService: UserService,
    private router: Router) {}

    //modelo
    formUser: UserEntity = {
      correo: '',
      contrasenia: '',
      id: 0,
      name: '',
      rol: ''
    };

    login(form: any) {
      this.UserService.login(this.formUser).subscribe(
        (data) => {
          localStorage.setItem('token', String(data));
          this.router.navigate(['/gestionParqueadero/home']);
        }
      )
    }

}
