import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  //styleUrls: ['./app.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){

  }
  //title = 'My First Angular App!';
  drill1(){
    //this.router.navigateByUrl('/drill1')
  }
}
