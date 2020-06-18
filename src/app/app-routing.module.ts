import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './counter/counter.component';
import { MyGridComponent } from './my-grid/my-grid.component';


const routes: Routes = [
  { path: '', component: MyCounterComponent },
  { path: 'grid', component: MyGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
