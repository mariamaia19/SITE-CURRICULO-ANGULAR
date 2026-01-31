import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './corpo/home/home.component';
import { QuemsomosComponent } from './corpo/quemsomos/quemsomos.component';
import { ProjetosComponent } from './corpo/projetos/projetos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quemsou', component: QuemsomosComponent},
  {path:'projetos', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
