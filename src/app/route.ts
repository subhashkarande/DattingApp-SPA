import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoute: Routes = [
    { path: '', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers: 'always',
        canActivate:[AuthGuard],
        children:[
            { path: 'member', component: MemberListComponent },
            { path: 'list', component: ListComponent },
            { path: 'messages', component: MessagesComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]   