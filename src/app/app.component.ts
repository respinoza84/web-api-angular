import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wep-api-Angular';
  constructor(private router: Router) { }
  gotoList() {
    this.router.navigate(['/employees']);
  }
  
}
