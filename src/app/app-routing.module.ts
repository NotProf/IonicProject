import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/logreg/log',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {path: 'top', loadChildren: './top/top.module#TopPageModule'},
    {path: 'movie/:id', loadChildren: './movie/movie.module#MoviePageModule'},

    {path: 'userpage/:id', loadChildren: './userpage/userpage.module#UserpagePageModule'},
    {path: 'logreg', loadChildren: './logreg/logreg.module#LogregPageModule'},  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' }


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
