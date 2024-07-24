import { Component, OnInit } from '@angular/core';
import { CatfactServiceService } from '../catfact-service.service';
@Component({
  selector: 'app-cat-fact-component',
  templateUrl: './cat-fact-component.component.html',
  styleUrls: ['./cat-fact-component.component.css']
})

export class CatFactComponentComponent {
  catFact: string = '';
  catFacts: string[] = [];
  loading = false;
  error: string = '';
  page: number = 1;
  pageSize: number = 5;
  constructor(private catFactService: CatfactServiceService) {

  }
  ngOnInit(): void {
    this.fetchCatFact();
  }

  fetchCatFact(): void {
    this.loading = true;
    this.catFactService.getCatFact().subscribe(
      data => {
        setTimeout(() => {                   
          this.catFact = data.fact;
          this.catFacts.unshift(this.catFact);
          this.loading = false;
          console.log(this.catFacts);
        }, 1500);

      },
      error => {
        this.error = 'Failed to load cat fact. Please try again later.';
        this.loading = false;
      }
    );
  }
}
