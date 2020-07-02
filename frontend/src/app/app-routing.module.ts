import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'about-site',
    loadChildren: () =>
      import('./pages/about-site/about-site.module').then((m) => m.AboutSiteModule),
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
