import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  create(email: any, password: any) {
    this.auth.createUser(email, password);
  }
  ngOnInit(): void {}
}
