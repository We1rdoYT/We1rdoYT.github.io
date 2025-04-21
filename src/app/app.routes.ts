import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MediaComponent } from './media/media.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'directory',
    title: 'Directory',
    component: DirectoryComponent,
  },
  {
    path: 'media/:type/:file',
    title: 'Media',
    component: MediaComponent,
  },
  {
    path: 'roll',
    redirectTo: 'media/roll/rickroll.mp4',
  },
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent,
  },
];
