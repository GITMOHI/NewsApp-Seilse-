import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SearchComponent } from './components/search/search.component'; // Import the SearchComponent

const routes: Routes = [
  { path: '', component: NewsListComponent }, // Home route
  { path: 'article/:id', component: ArticleDetailComponent }, // Article detail route
  { path: 'search', component: SearchComponent }, // Search route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
