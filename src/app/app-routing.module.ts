import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'


const redirectUnauthorizedToLogin=()=> redirectUnauthorizedTo(['']);
const redirectLoggednInToHome=()=>redirectLoggedInTo(['home']);
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggednInToHome)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)

  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'collect-data',
    loadChildren: () => import('./Components/collect-data/collect-data.module').then( m => m.CollectDataPageModule)
  },
  {
    path: 'display-data',
    loadChildren: () => import('./Components/display-data/display-data.module').then( m => m.DisplayDataPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./Components/info/info.module').then( m => m.InfoPageModule)
  },

  {
    path: 'navbar',
    loadChildren: () => import('./Components/navbar/navbar.module').then( m => m.NavbarPageModule)
  },

  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
