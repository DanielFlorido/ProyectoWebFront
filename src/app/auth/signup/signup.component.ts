import { UserEntity } from 'src/app/model/user/user-entity';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/userService/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule],
  standalone: true
})

export class SignupComponent {
  //modelo
  formUser: UserEntity = {
    id: 0,
    name: '',
    contrasenia: '',
    rol: '',
    correo: ''
  };

  constructor(private userService: UserService,
    private router: Router) {}

  add(form: any) {
      this.userService.add(this.formUser).subscribe(
        
    (data) => {
        this.router.navigate(['/gestionParqueadero/home', data.id]);
      }
    );
  }
}
