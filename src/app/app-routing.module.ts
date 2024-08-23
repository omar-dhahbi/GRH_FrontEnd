import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin/admin.guard';
import { ClientsComponent } from './pages/admin/clients/clients.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DepartementsComponent } from './pages/admin/departements/departements.component';
import { ProfilComponent } from './pages/admin/profil/profil.component';
import { StagiaireComponent } from './pages/admin/stagiaire/stagiaire.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { AddDepartementComponent } from './pages/admin/add-departement/add-departement.component';
import { UpdateDepartementComponent } from './pages/admin/update-departement/update-departement.component';
import { AddClientComponent } from './pages/admin/add-client/add-client.component';
import { AddprojetComponent } from './pages/admin/addprojet/addprojet.component';
import { ProjetComponent } from './pages/admin/projet/projet.component';
import { AddStagiaresComponent } from './pages/admin/add-stagiares/add-stagiares.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { UpdateClientComponent } from './pages/admin/update-client/update-client.component';
import { UpdateProjetComponent } from './pages/admin/update-projet/update-projet.component';
import { UpdateStagiareComponent } from './pages/admin/update-stagiare/update-stagiare.component';
import { UpdateProfilComponent } from './pages/admin/update-profil/update-profil.component';
import { AddReunionComponent } from './pages/admin/add-reunion/add-reunion.component';
import { ReunionsComponent } from './pages/admin/reunions/reunions.component';
import { CongeComponent } from './pages/admin/conge/conge.component';
import { DashboardEmployeeComponent } from './pages/employee/dashboard-employee/dashboard-employee.component';
import { EmployeGuard } from './guard/employe/employe.guard';
import { WelcomeEmployeeComponent } from './pages/employee/welcome-employee/welcome-employee.component';
import { ResultatCongeComponent } from './pages/employee/resultat-conge/resultat-conge.component';
import { DemandeCongeComponent } from './pages/employee/demande-conge/demande-conge.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { UserComponent } from './pages/admin/user/user.component';
import { PasswordComponent } from './pages/admin/password/password.component';
import { DetailsStagiaireComponent } from './pages/admin/details-stagiaire/details-stagiaire.component';
import { UpdatePassword1Component } from './pages/employee/update-password1/update-password1.component';
import { UpdateProfilEmployeeComponent } from './pages/employee/update-profil-employee/update-profil-employee.component';
import { ProfilEmployeeComponent } from './pages/employee/profil-employee/profil-employee.component';
import { ContratsComponent } from './pages/admin/contrats/contrats.component';
import { AddContratComponent } from './pages/admin/add-contrat/add-contrat.component';
import { UpdateContratComponent } from './pages/admin/update-contrat/update-contrat.component';
import { DetailsUserComponent } from './pages/admin/details-user/details-user.component';
import { VerifEmailComponent } from './pages/verif-email/verif-email.component';
import { UpdateReunionComponent } from './pages/admin/update-reunion/update-reunion.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { DetailsReunionsComponent } from './pages/admin/details-reunions/details-reunions.component';

const routes: Routes = [

  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'updatepassword/:id', component: UpdatePasswordComponent },
  { path: 'Verif/:id', component: VerifEmailComponent },
  {
    path: 'admin', component: DashboardComponent, canActivate: [AdminGuard], children: [
      { path: '', component: WelcomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'updateProfil/:id', component: UpdateProfilComponent },
      { path: 'reunions', component: ReunionsComponent },
      { path: 'departements', component: DepartementsComponent },
      { path: 'UpdatePassword/:id', component: PasswordComponent },
      { path: 'Clients', component: ClientsComponent },
      { path: 'Stagiaire', component: StagiaireComponent },
      { path: 'Add-Departement', component: AddDepartementComponent },
      { path: 'updateDepartement/:id', component: UpdateDepartementComponent },
      { path: 'updateClient/:id', component: UpdateClientComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'AddClient', component: AddClientComponent },
      { path: 'AddProjet', component: AddprojetComponent },
      { path: 'AddReunion', component: AddReunionComponent },
      { path: 'projet', component: ProjetComponent },
      { path: 'updateProjet/:id', component: UpdateProjetComponent },
      { path: 'stagiaires', component: StagiaireComponent },
      { path: 'AddStagiaire', component: AddStagiaresComponent },
      { path: 'Stagiaire/:id', component: DetailsStagiaireComponent },
      { path: 'updateStagiare/:id', component: UpdateStagiareComponent },
      { path: 'congé', component: CongeComponent },
      { path: 'Contrats', component: ContratsComponent },
      { path: 'AddContrat', component: AddContratComponent },
      { path: 'updateReunion/:id', component: UpdateReunionComponent },
      { path: 'updateUser/:id', component: UpdateUserComponent },
      { path: 'reunion/:id', component:DetailsReunionsComponent },
      { path: 'updateContrat/:id', component: UpdateContratComponent },
      { path: 'Users/:id', component: DetailsUserComponent }
    ]
  },
  {
    path: 'employee', component: DashboardEmployeeComponent, canActivate: [EmployeGuard], children: [
      { path: '', component: WelcomeEmployeeComponent },
      { path: 'resultat', component: ResultatCongeComponent },
      { path: 'DemandeCongé', component: DemandeCongeComponent },
      { path: 'UpdatePassword/:id', component: UpdatePassword1Component },
      { path: 'updateProfil/:id', component: UpdateProfilEmployeeComponent },
      { path: 'profil', component: ProfilEmployeeComponent },
    ]
  }, { path: '**', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
