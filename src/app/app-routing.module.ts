import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RepoDetailComponent} from './repo-detail/repo-detail.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repo-details/:id', component: RepoDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
