import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then((m) => m.ResumeModule),
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
