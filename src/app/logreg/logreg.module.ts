import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {LogregPage} from './logreg.page';
import {LogComponent} from '../log/log.component';
import {RegComponent} from '../reg/reg.component';

const routes: Routes = [
    {
        path: '',
        component: LogregPage, children: [
            {path: 'log', component: LogComponent},
            {path: 'reg', component: RegComponent}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LogregPage, LogComponent, RegComponent]
})
export class LogregPageModule {
}
