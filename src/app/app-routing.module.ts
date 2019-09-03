import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: 'activity', loadChildren: () => import('./pages/activity/activity.module').then(m => m.WelcomeModule) },
  { path: 'food', loadChildren: () => import('./pages/food/food.module').then(m => m.FoodModule) },
  // { path: 'food', loadChildren: () => import('./pages/food/food.routing').then(m => m.FoodRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
