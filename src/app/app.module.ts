import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './home/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatChipsModule, MatSelect, MatSelectModule, MatTabsModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatRadioModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { CollaborateurComponent } from './home/collaborateur/collaborateur.component';
import { ProjetComponent } from './home/projet/projet.component';
import { ClientUpdateComponent } from './home/client/client-update/client-update.component';
import { CollaborateurUpdateComponent } from './home/collaborateur/collaborateur-update/collaborateur-update.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './home/parametrage/parametrage.component';
import { ParamDeviseComponent, AddDeviseDialogComponent } from './home/parametrage/param-devise/param-devise.component';
import { DeviseUpdateDialogComponent } from './home/parametrage/param-devise/devise-update-dialog/devise-update-dialog.component';
import { ParamEntiteComponent } from './home/parametrage/param-entite/param-entite.component';
import { AddEntiteDialogComponent } from './home/parametrage/param-entite/add-entite-dialog/add-entite-dialog.component';
import { UpdateEntiteDialogComponent } from './home/parametrage/param-entite/update-entite-dialog/update-entite-dialog.component';
import { ParamSecteursComponent } from './home/parametrage/param-secteurs/param-secteurs.component';
import { AddSecteurDialogComponent } from './home/parametrage/param-secteurs/add-secteur-dialog/add-secteur-dialog.component';
import { UpdateSecteurDialogComponent } from './home/parametrage/param-secteurs/update-secteur-dialog/update-secteur-dialog.component';
import { ParamTypeEnvComponent } from './home/parametrage/param-type-env/param-type-env.component';
import { UpdateTypeEnvDialogComponent } from './home/parametrage/param-type-env/update-type-env-dialog/update-type-env-dialog.component';
import { AddTypeEnvDialogComponent } from './home/parametrage/param-type-env/add-type-env-dialog/add-type-env-dialog.component';
import { ParamTypeExecComponent } from './home/parametrage/param-type-exec/param-type-exec.component';
import { AddTypeExecDialogComponent } from './home/parametrage/param-type-exec/add-type-exec-dialog/add-type-exec-dialog.component';
import { UpdateTypeExecDialogComponent } from './home/parametrage/param-type-exec/update-type-exec-dialog/update-type-exec-dialog.component';
import { FamilleEnvComponent } from './home/parametrage/famille-env/famille-env.component';
import { AddFamilleDialogComponent } from './home/parametrage/famille-env/add-famille-dialog/add-famille-dialog.component';
import { UpdateFamilleDialogComponent } from './home/parametrage/famille-env/update-famille-dialog/update-famille-dialog.component';
import { ParamSituationFamilialeComponent } from './home/parametrage/param-situation-familiale/param-situation-familiale.component';
import { ParamSexeComponent } from './home/parametrage/param-sexe/param-sexe.component';
import { StatutCollaborateurComponent } from './home/parametrage/statut-collaborateur/statut-collaborateur.component';
import { StatutProjetComponent } from './home/parametrage/statut-projet/statut-projet.component';
import { AddSexeDialogComponent } from './home/parametrage/param-sexe/add-sexe-dialog/add-sexe-dialog.component';
import { UpdateSexeDialogComponent } from './home/parametrage/param-sexe/update-sexe-dialog/update-sexe-dialog.component';
import { UpdateSituationFamDialogComponent } from './home/parametrage/param-situation-familiale/update-situation-fam-dialog/update-situation-fam-dialog.component';
import { AddSituationFamDialogComponent } from './home/parametrage/param-situation-familiale/add-situation-fam-dialog/add-situation-fam-dialog.component';
import { AddStatutCollaborateurDialogComponent } from './home/parametrage/statut-collaborateur/add-statut-collaborateur-dialog/add-statut-collaborateur-dialog.component';
import { UpdateStatutCollaborateurDialogComponent } from './home/parametrage/statut-collaborateur/update-statut-collaborateur-dialog/update-statut-collaborateur-dialog.component';
import { AddStatutProjetDialogComponent } from './home/parametrage/statut-projet/add-statut-projet-dialog/add-statut-projet-dialog.component';
import { UpdateStatutProjetDialogComponent } from './home/parametrage/statut-projet/update-statut-projet-dialog/update-statut-projet-dialog.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'collaborateur', component: CollaborateurComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'param', component: ParametrageComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    AdminComponent,
    CollaborateurComponent,
    ProjetComponent,
    ClientUpdateComponent,
    CollaborateurUpdateComponent,
    NavBarComponent,
    ParametrageComponent,
    ParamDeviseComponent,
    AddDeviseDialogComponent,
    DeviseUpdateDialogComponent,
    ParamEntiteComponent,
    AddEntiteDialogComponent,
    UpdateEntiteDialogComponent,
    ParamSecteursComponent,
    AddSecteurDialogComponent,
    UpdateSecteurDialogComponent,
    ParamTypeEnvComponent,
    UpdateTypeEnvDialogComponent,
    AddTypeEnvDialogComponent,
    ParamTypeExecComponent,
    AddTypeExecDialogComponent,
    UpdateTypeExecDialogComponent,
    FamilleEnvComponent,
    AddFamilleDialogComponent,
    UpdateFamilleDialogComponent,
    ParamSituationFamilialeComponent,
    ParamSexeComponent,
    StatutCollaborateurComponent,
    StatutProjetComponent,
    AddSexeDialogComponent,
    UpdateSexeDialogComponent,
    UpdateSituationFamDialogComponent,
    AddSituationFamDialogComponent,
    AddStatutCollaborateurDialogComponent,
    UpdateStatutCollaborateurDialogComponent,
    AddStatutProjetDialogComponent,
    UpdateStatutProjetDialogComponent
  ],
  entryComponents: [AddDeviseDialogComponent, DeviseUpdateDialogComponent, AddEntiteDialogComponent, UpdateEntiteDialogComponent, AddSecteurDialogComponent,
    UpdateSecteurDialogComponent, AddTypeEnvDialogComponent, UpdateTypeEnvDialogComponent, AddTypeExecDialogComponent,
    UpdateTypeExecDialogComponent, AddFamilleDialogComponent, UpdateFamilleDialogComponent, AddSexeDialogComponent,
    UpdateSexeDialogComponent, AddSituationFamDialogComponent, UpdateSituationFamDialogComponent,
    AddStatutCollaborateurDialogComponent, UpdateStatutCollaborateurDialogComponent, AddStatutProjetDialogComponent,
    UpdateStatutProjetDialogComponent],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatExpansionModule,
    MatSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
