import { Component, OnInit } from '@angular/core';
import { User } from './beans/user';
import { LoginService } from './services/login.service';
import { HttpResponse } from '@angular/common/http';
import { TachesService } from './services/taches.service';
import { Tache } from './beans/taches';
import { FormControl } from '../../node_modules/@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User;
  taches: Tache[];
  token: string;

  input = new FormControl();;
  password = new FormControl();;

  constructor(private loginService: LoginService, private tachesServ: TachesService) { }

  ngOnInit() {
    this.user = new User();
    this.token = localStorage.getItem('token');
  }

  onSubmit() {
    this.user.username = this.input.value;
    this.user.password = this.password.value;
    console.log(this.user);
    this.loginService.login(this.user).subscribe(
      (resp: HttpResponse<any>) => localStorage.setItem('token', resp.headers.get('Authorization')));
  }

  // Services Tests
  gets() {
    this.tachesServ.gets().subscribe((taches) => this.taches = taches);
  }

  add() {
    const tache = new Tache();
    tache.name = 'Test';
    tache.description = 'Testing !';
    this.tachesServ.add(tache).subscribe(tache => this.taches.push(tache));
  }

  get(id: number) {
    this.tachesServ.get(id).subscribe(tache => console.log(tache));
  }

  delete(id: number) {
    this.tachesServ.delete(id).subscribe();
  }

  update(id: number) {
    const tache = new Tache();
    tache.name = 'Unit Testing';
    this.tachesServ.update(id, tache).subscribe(tache => console.log(tache));
  }

}
