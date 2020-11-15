import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './institutional/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'produtos', component: ProdutosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
