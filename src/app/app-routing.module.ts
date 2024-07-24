import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFactComponentComponent } from './cat-fact-component/cat-fact-component.component';
const routes: Routes = [
  { path: '', component: CatFactComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
