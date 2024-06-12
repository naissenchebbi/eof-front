import { Routes } from '@angular/router'
import { AdminChatComponent } from './admin-chat/admin-chat.component'
import { TestComponent } from './test/test.component'
import { CollaboratorChatComponent } from './collaborateur-chat/collaborator.component'
import { ConversationComponent } from './conversation/conversation.component'
import { SidenavComponent } from './admin/sidenav/sidenav.component'
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component'
import { AjoutbonComponent } from './admin/ajoutbon/ajoutbon.component'
import { ListemedecinComponent } from './admin/listemedecin/listemedecin.component'
import { ListecollComponent } from './admin/listecoll/listecoll.component'
import { CalendrierComponent } from './shared/calendrier/calendrier.component'
import { CollComponent } from './admin/coll/coll.component'
import { SahsahComponent } from './admin/sahsah/sahsah.component'
import { MsidenavComponent } from './medecin/msidenav/msidenav.component'
import { AcceuilmComponent } from './medecin/acceuilm/acceuilm.component'
import { RegistrationComponent } from './shared/registration/registration.component'
import { LoginComponent } from './shared/login/login.component'
import { AcceuilcComponent } from './collaborateur/acceuilc/acceuilc.component'
import { CsidenavComponent } from './collaborateur/csidenav/csidenav.component'
import { BonComponent } from './bon/bon.component'

export const routes: Routes = [
  {
    path: 'admin',
    component: SidenavComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'ajoutbon', component: AjoutbonComponent },
      { path: 'liste medecin', component: ListemedecinComponent },
      { path: 'liste collaborateur', component: ListecollComponent },
      { path: 'calendrier', component: CalendrierComponent },
      { path: 'infocoll', component: CollComponent },
      { path: 'test', component: SahsahComponent },//test
      { path: 'chat', component: AdminChatComponent },
      { path: 'bon', component: BonComponent },



      { path: 'chat/conversation/:id', component: ConversationComponent },
    ],
  },

  // {
  //   path: 'test',
  //   component: TestComponent,
  // },
  // {
  //   path: 'collaborator',
  //   component: CollaboratorChatComponent,
  // },

  //------------------  medecin -------------------------------

  {
    path: 'medecin',
    component: MsidenavComponent,
    children: [
      { path: 'acceuil', component: AcceuilmComponent },
      { path: 'calendrier', component: CalendrierComponent },
      { path: 'test', component: SahsahComponent },//test
      { path: 'bon', component: BonComponent },

    ],
  },

  //register medecin et coll
  { path: 'register', component: RegistrationComponent },

  //--------------------- collborateur-----------------
  {
    path: 'collaborateur',
    component: CsidenavComponent,
    children: [
      { path: 'acceuil', component: AcceuilcComponent },
      { path: 'calendrier', component: CalendrierComponent },
      {path: 'chat',component: CollaboratorChatComponent,},
    ],
  },
  //------------------- shared ------------------------
  { path: 'connexion', component: LoginComponent },
  { path: 'calendrier', component: CalendrierComponent },
  // { path:'chat',component:ChatComponent} ,//a modifier

  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
]
