import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchKeyword: string = '';  
  articles: any[] = [];  
  apiUrl: string = 'https://newsapi.org/v2/everything';
  apiKey: string = 'b8504bb386304c0b8cc1161f3a8cc2d8';  
  loading: boolean = false;  // Add a loading flag

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchKeyword = params['q'];  
      if (this.searchKeyword) {
        this.fetchNews();  
      }
    });
  }

  fetchNews() {
    this.loading = true;  // Set loading to true when the request starts
    const url = `${this.apiUrl}?q=${this.searchKeyword}&apiKey=${this.apiKey}&sortBy=popularity`;
    this.http.get(url).subscribe((response: any) => {
      this.articles = response.articles;  
      console.log('Articles:', this.articles);
      this.loading = false;  // Set loading to false when the response is received
    }, error => {
      console.error('Error fetching news:', error);
      this.loading = false;  // Ensure loading is false even if there's an error
    });
  }
}
