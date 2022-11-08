import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countryList : any;
  count : any;
  name: any;
  divId: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCountry().subscribe((data)=>{
      
      console.log(data);
      
      this.countryList = data;
      this.count = this.countryList.filter((item: any) => item).length;
      console.log('showing ' + this.count + ' items')
    });

    let countryName = document.querySelectorAll('[id^=Country]').length
    console.log(countryName);
  }

  
}