import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"**",component:ErrorComponent}
];
