import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  displayName: string = '';
  constructor(
    public auth: AuthService,
    public user: UserService,
    private router: Router
  ) {
    user
      .getCurrentUser()
      .then(
        (user) =>
          (this.displayName =
            user.displayName != null ? user.displayName : user.email)
      );
    console.log(this.displayName);
  }

  ngOnInit(): void {}
  loginGG() {
    this.auth
      .signinGmail()
      .then((res) => {
        // this.router.navigate(["/home"]);
        // location.href="/home"
      })
      .catch((err) => {
        console.log(err);
      });
  }
  logoutGG() {
    this.auth.logout().then((res) => {
      this.router.navigate(['']);
    });
  }
}
