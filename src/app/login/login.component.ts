import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  })

  export class LoginComponent implements OnInit{
    message: string = 'Vous êtes déconnecté.';
    name: string | any;
    password: string | any;
    auth: AuthService | any;

    constructor(
      private authService: AuthService,
      private router: Router
      ) { }

    ngOnInit() {
      this.auth = this.authService ;
    }
      setMessage() {
        if(this.auth.isLoggedIn) {
            this.message = 'Vous êtes connecté';
        }else {
          this.message = 'Identifiant ou mot de passe incorrect.'
        }
      }

      Login() {
          this.message = 'Tentative de connexion en cours...';
          this.auth.login(this.name, this.password)
            .subscribe((isLoggedIn: boolean) => {
              this.setMessage();
              if(isLoggedIn){
              this.router.navigate(['/home']);
              }else {
                this.password = '';
                this.router.navigate(['/login']);
              }
            })
      }
      logout() {
        this.auth.logout();
        this.message = 'vous êtes déco.'
      }
      }
