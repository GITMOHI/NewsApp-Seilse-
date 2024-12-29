import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-news-app';
  searchKeyword: string = ''; // Stores the search keyword entered by the user

  constructor(private router: Router) {}

  // Method triggered when the search form is submitted
  onSearch(keyword: string): void {
    if (keyword.trim()) { // Ensure the search keyword is not empty or whitespace
      this.router.navigate(['/search'], { queryParams: { q: keyword.trim() } });
    }
  }
}
