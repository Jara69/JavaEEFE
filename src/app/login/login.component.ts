import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Token} from '../../Token';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  user: User[] = [];
  url = '/api/users/login';

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private tokenServ: TokenService) { }

  submit(): void {
    const body = {
      username: this.username,
      password: this.password
    };
    if (this.password === this.password) {
      this.http.post(this.url, body, {observe: 'response'}).subscribe((data) => {
        console.log(data.body);
        this.tokenServ.setToken(data);
        this.router.navigate(['/users']);
      });    } else {
      console.log('Najdi doktora šéfe');
    }
  }

  ngOnInit(): void {
  }

}
