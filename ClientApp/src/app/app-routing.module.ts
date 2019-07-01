import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PjpkComponent } from './pjpk/pjpk.component';
import { InvestorComponent } from './investor/investor.component';
import { BeritaComponent } from './berita/berita.component';
import { DukunganComponent } from './dukungan/dukungan.component';
import { PeraturanComponent } from './peraturan/peraturan.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BeritaDetailComponent } from './berita-detail/berita-detail.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'landing', component: LandingPageComponent},
  { path: 'pjpk', component: PjpkComponent},
  { path: 'investor', component: InvestorComponent},
  { path: 'berita', component: BeritaComponent},
  { path: 'dukungan', component: DukunganComponent},
  { path: 'peraturan', component: PeraturanComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'project_detail', component: ProjectDetailComponent},
  { path: 'berita_detail', component: BeritaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
                                  LandingPageComponent,
                                  PjpkComponent,
                                  InvestorComponent,
                                  BeritaComponent,
                                  DukunganComponent,
                                  PeraturanComponent,
                                  ProjectComponent,
                                  ProjectDetailComponent,
                                  BeritaDetailComponent
                                 ];