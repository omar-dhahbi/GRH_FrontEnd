import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { SidbarComponent } from './pages/admin/sidbar/sidbar.component';
import { MatTableModule } from '@angular/material/table';
import { RecaptchaModule } from "ng-recaptcha";
import { MatListModule } from '@angular/material/list';

import { ProfilComponent } from './pages/admin/profil/profil.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { DepartementsComponent } from './pages/admin/departements/departements.component';
import { AuthInterceptorProviders } from './services/admin/user.interceptor';
import { AdminGuard } from './guard/admin/admin.guard';
import { UserService } from './services/admin/user.service';
import { ClientsComponent } from './pages/admin/clients/clients.component';
import { StagiaireComponent } from './pages/admin/stagiaire/stagiaire.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddDepartementComponent } from './pages/admin/add-departement/add-departement.component';
import { UpdateDepartementComponent } from './pages/admin/update-departement/update-departement.component';
import { DepartementsService } from './services/departements/departements.service';
import { AddClientComponent } from './pages/admin/add-client/add-client.component';
import { ProjetComponent } from './pages/admin/projet/projet.component';
import { AddprojetComponent } from './pages/admin/addprojet/addprojet.component';
import { ClientsService } from './services/clients/clients.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmployeGuard } from './guard/employe/employe.guard';
import { ProjetsService } from './services/projets/projets.service';
import { AddStagiaresComponent } from './pages/admin/add-stagiares/add-stagiares.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { StagiairesService } from './services/stagiaires/stagiaires.service';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { UpdateClientComponent } from './pages/admin/update-client/update-client.component';
import { UpdateProjetComponent } from './pages/admin/update-projet/update-projet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateStagiareComponent } from './pages/admin/update-stagiare/update-stagiare.component';
import { UpdateProfilComponent } from './pages/admin/update-profil/update-profil.component';
import { AddReunionComponent } from './pages/admin/add-reunion/add-reunion.component';
import { ReunionsComponent } from './pages/admin/reunions/reunions.component';

import { CongeComponent } from './pages/admin/conge/conge.component';
import { DashboardEmployeeComponent } from './pages/employee/dashboard-employee/dashboard-employee.component';
import { WelcomeEmployeeComponent } from './pages/employee/welcome-employee/welcome-employee.component';
import { ResultatCongeComponent } from './pages/employee/resultat-conge/resultat-conge.component';
import { SidbarEmployeesComponent } from './pages/employee/sidbar-employees/sidbar-employees.component';
import { DemandeCongeComponent } from './pages/employee/demande-conge/demande-conge.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { UserComponent } from './pages/admin/user/user.component';
import { PasswordComponent } from './pages/admin/password/password.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DetailsStagiaireComponent } from './pages/admin/details-stagiaire/details-stagiaire.component';
import { UpdatePassword1Component } from './pages/employee/update-password1/update-password1.component';
import { UpdateProfilEmployeeComponent } from './pages/employee/update-profil-employee/update-profil-employee.component';
import { ProfilEmployeeComponent } from './pages/employee/profil-employee/profil-employee.component';
import { AddContratComponent } from './pages/admin/add-contrat/add-contrat.component';
import { ContratsComponent } from './pages/admin/contrats/contrats.component';
import { CongéService } from './services/congé/congé.service';
import { ContratsService } from './services/Contrats/contrats.service';
import { UpdateContratComponent } from './pages/admin/update-contrat/update-contrat.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DetailsUserComponent } from './pages/admin/details-user/details-user.component';
import { VerifEmailComponent } from './pages/verif-email/verif-email.component';
import { UpdateReunionComponent } from './pages/admin/update-reunion/update-reunion.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { DetailsReunionsComponent } from './pages/admin/details-reunions/details-reunions.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SidbarComponent,
    ProfilComponent,
    WelcomeComponent,
    DepartementsComponent,
    ClientsComponent,
    StagiaireComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    AddClientComponent,
    ProjetComponent,
    AddprojetComponent,
    AddStagiaresComponent,
    ForgetPasswordComponent,
    UpdateClientComponent,
    UpdateProjetComponent,
    UpdateStagiareComponent,
    UpdateProfilComponent,
    AddReunionComponent,
    ReunionsComponent,
    CongeComponent,
    DashboardEmployeeComponent,
    WelcomeEmployeeComponent,
    ResultatCongeComponent,
    SidbarEmployeesComponent,
    DemandeCongeComponent,
    UpdatePasswordComponent,
    UserComponent,
    PasswordComponent,
    DetailsStagiaireComponent,
    UpdatePassword1Component,
    UpdateProfilEmployeeComponent,
    ProfilEmployeeComponent,
    AddContratComponent,
    ContratsComponent,
    UpdateContratComponent,
    DetailsUserComponent,
    VerifEmailComponent,
    UpdateReunionComponent,
    UpdateUserComponent,
    DetailsReunionsComponent,
  ],
  imports: [
    NgxExtendedPdfViewerModule,
    FullCalendarModule,
    RecaptchaModule,
    FontAwesomeModule,
    MatRadioModule,
    DatePipe,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    DataTablesModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [AuthInterceptorProviders,
    AdminGuard,
    UserService,
    DepartementsService,
    ClientsService,
    EmployeGuard,
    ProjetsService,
    { provide: 'HEADERS', useValue: new HttpHeaders({ 'Content-Type': 'application/json' }) },
    StagiairesService,
    EmployeGuard,
    CongéService,
    ContratsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
