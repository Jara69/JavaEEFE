
import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  url = 'api/users/';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this.url).subscribe((data: User[]) => {
      this.users = data;
    });
  }

  detail(id: number): void {
    this.router.navigate(['/user'], {queryParams: {id}});

  }

  delete(id: number): void {
    this.http.delete(this.url + id).subscribe((data: User) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
