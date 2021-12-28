import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  loginGG() {
    this.auth
      .signinGmail()
      .then((res) => {
        this.router.navigate(['/management']);
        // location.href="/home"
      })
      .catch((err) => {
        console.log(err);
      });
  }
  route() {
    this.router.navigate(['/register']);
  }
  login(email: any, password: any) {
    this.auth.LogInUsingCreateAcc(email, password);
  }
}
