import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [];
  details = {
    name: '',
    description: '',
    imageUrl: '',
    qty: 0
  };
	constructor(private apiService: ApiService) { }

  title = 'online-groceries-fe';
  display = "none";

  ngOnInit() {
		this.apiService.sendGetRequest().subscribe((data: Product)=>{  
			console.log(data);  
			this.products = data.items;  
		})  
	}

  openDetail(id){
    console.log(id);
    this.display = 'block';
    this.details = this.products.filter(x => x.id === id)[0];
    console.log(this.details);
  }

  closeModal(){
    this.display = 'none';
  }
}

export interface Product {
  readonly items: any[];
}
