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
import { ParamDeviseComponent, AddDeviseDialogComponent } from './home/parametrage/projects/param-devise/param-devise.component';
import { DeviseUpdateDialogComponent } from './home/parametrage/projects/param-devise/devise-update-dialog/devise-update-dialog.component';
import { ParamEntiteComponent } from './home/parametrage/collaborateur/param-entite/param-entite.component';
import { AddEntiteDialogComponent } from './home/parametrage/collaborateur/param-entite/add-entite-dialog/add-entite-dialog.component';
import { UpdateEntiteDialogComponent } from './home/parametrage/collaborateur/param-entite/update-entite-dialog/update-entite-dialog.component';
import { ParamSecteursComponent } from './home/parametrage/autres/param-secteurs/param-secteurs.component';
import { AddSecteurDialogComponent } from './home/parametrage/autres/param-secteurs/add-secteur-dialog/add-secteur-dialog.component';
import { UpdateSecteurDialogComponent } from './home/parametrage/autres/param-secteurs/update-secteur-dialog/update-secteur-dialog.component';
import { ParamTypeEnvComponent } from './home/parametrage/projects/param-type-env/param-type-env.component';
import { UpdateTypeEnvDialogComponent } from './home/parametrage/projects/param-type-env/update-type-env-dialog/update-type-env-dialog.component';
import { AddTypeEnvDialogComponent } from './home/parametrage/projects/param-type-env/add-type-env-dialog/add-type-env-dialog.component';
import { ParamTypeExecComponent } from './home/parametrage/projects/param-type-exec/param-type-exec.component';
import { AddTypeExecDialogComponent } from './home/parametrage/projects/param-type-exec/add-type-exec-dialog/add-type-exec-dialog.component';
import { UpdateTypeExecDialogComponent } from './home/parametrage/projects/param-type-exec/update-type-exec-dialog/update-type-exec-dialog.component';
import { FamilleEnvComponent } from './home/parametrage/projects/famille-env/famille-env.component';
import { AddFamilleDialogComponent } from './home/parametrage/projects/famille-env/add-famille-dialog/add-famille-dialog.component';
import { UpdateFamilleDialogComponent } from './home/parametrage/projects/famille-env/update-famille-dialog/update-famille-dialog.component';
import { ParamSituationFamilialeComponent } from './home/parametrage/collaborateur/param-situation-familiale/param-situation-familiale.component';
import { ParamSexeComponent } from './home/parametrage/collaborateur/param-sexe/param-sexe.component';
import { StatutCollaborateurComponent } from './home/parametrage/collaborateur/statut-collaborateur/statut-collaborateur.component';
import { StatutProjetComponent } from './home/parametrage/projects/statut-projet/statut-projet.component';
import { AddSexeDialogComponent } from './home/parametrage/collaborateur/param-sexe/add-sexe-dialog/add-sexe-dialog.component';
import { UpdateSexeDialogComponent } from './home/parametrage/collaborateur/param-sexe/update-sexe-dialog/update-sexe-dialog.component';
import { UpdateSituationFamDialogComponent } from './home/parametrage/collaborateur/param-situation-familiale/update-situation-fam-dialog/update-situation-fam-dialog.component';
import { AddSituationFamDialogComponent } from './home/parametrage/collaborateur/param-situation-familiale/add-situation-fam-dialog/add-situation-fam-dialog.component';
import { AddStatutCollaborateurDialogComponent } from './home/parametrage/collaborateur/statut-collaborateur/add-statut-collaborateur-dialog/add-statut-collaborateur-dialog.component';
import { UpdateStatutCollaborateurDialogComponent } from './home/parametrage/collaborateur/statut-collaborateur/update-statut-collaborateur-dialog/update-statut-collaborateur-dialog.component';
import { AddStatutProjetDialogComponent } from './home/parametrage/projects/statut-projet/add-statut-projet-dialog/add-statut-projet-dialog.component';
import { UpdateStatutProjetDialogComponent } from './home/parametrage/projects/statut-projet/update-statut-projet-dialog/update-statut-projet-dialog.component';
import { ParamEnvironnementComponent } from './home/parametrage/projects/param-environnement/param-environnement.component';
import { ParamRealisationComponent } from './home/parametrage/projects/param-realisation/param-realisation.component';
import { AddEnvDialogComponent } from './home/parametrage/projects/param-environnement/add-env-dialog/add-env-dialog.component';
import { UpdateEnvDialogComponent } from './home/parametrage/projects/param-environnement/update-env-dialog/update-env-dialog.component';
import { AddRealisationDialogComponent } from './home/parametrage/projects/param-realisation/add-realisation-dialog/add-realisation-dialog.component';
import { UpdateRealisationDialogComponent } from './home/parametrage/projects/param-realisation/update-realisation-dialog/update-realisation-dialog.component';
import { ParamFamilleDocumentationComponent } from './home/parametrage/projects/param-famille-documentation/param-famille-documentation.component';
import { ParamFamillePjComponent } from './home/parametrage/projects/param-famille-pj/param-famille-pj.component';
import { ParamRoleComponent } from './home/parametrage/projects/param-role/param-role.component';
import { AddFamillePjDialogComponent } from './home/parametrage/projects/param-famille-pj/add-famille-pj-dialog/add-famille-pj-dialog.component';
import { UpdateFamillePjDialogComponent } from './home/parametrage/projects/param-famille-pj/update-famille-pj-dialog/update-famille-pj-dialog.component';
import { AddFamilleDocsDialogComponent } from './home/parametrage/projects/param-famille-documentation/add-famille-docs-dialog/add-famille-docs-dialog.component';
import { UpdateFamilleDocsDialogComponent } from './home/parametrage/projects/param-famille-documentation/update-famille-docs-dialog/update-famille-docs-dialog.component';
import { AddRoleDialogComponent } from './home/parametrage/projects/param-role/add-role-dialog/add-role-dialog.component';
import { UpdateRoleDialogComponent } from './home/parametrage/projects/param-role/update-role-dialog/update-role-dialog.component';
import { TagsComponent } from './home/parametrage/projects/tags/tags.component';
import { AddTagDialogComponent } from './home/parametrage/projects/tags/add-tag-dialog/add-tag-dialog.component';
import { UpdateTagDialogComponent } from './home/parametrage/projects/tags/update-tag-dialog/update-tag-dialog.component';
import { RoleTachesComponent } from './home/parametrage/projects/role-taches/role-taches.component';
import { TachesComponent } from './home/parametrage/projects/taches/taches.component';
import { AddTacheDialogComponent } from './home/parametrage/projects/taches/add-tache-dialog/add-tache-dialog.component';
import { UpdateTacheDialogComponent } from './home/parametrage/projects/taches/update-tache-dialog/update-tache-dialog.component';
import { AddRoleTaskDialogComponent } from './home/parametrage/projects/role-taches/add-role-task-dialog/add-role-task-dialog.component';
import { UpdateRoleTaskDialogComponent } from './home/parametrage/projects/role-taches/update-role-task-dialog/update-role-task-dialog.component';

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
    UpdateStatutProjetDialogComponent,
    ParamEnvironnementComponent,
    ParamRealisationComponent,
    AddEnvDialogComponent,
    UpdateEnvDialogComponent,
    AddRealisationDialogComponent,
    UpdateRealisationDialogComponent,
    ParamFamilleDocumentationComponent,
    ParamFamillePjComponent,
    ParamRoleComponent,
    AddFamillePjDialogComponent,
    UpdateFamillePjDialogComponent,
    AddFamilleDocsDialogComponent,
    UpdateFamilleDocsDialogComponent,
    AddRoleDialogComponent,
    UpdateRoleDialogComponent,
    TagsComponent,
    AddTagDialogComponent,
    UpdateTagDialogComponent,
    RoleTachesComponent,
    TachesComponent,
    AddTacheDialogComponent,
    UpdateTacheDialogComponent,
    AddRoleTaskDialogComponent,
    UpdateRoleTaskDialogComponent
  ],
  entryComponents: [AddDeviseDialogComponent, DeviseUpdateDialogComponent, AddEntiteDialogComponent, UpdateEntiteDialogComponent, AddSecteurDialogComponent,
    UpdateSecteurDialogComponent, AddTypeEnvDialogComponent, UpdateTypeEnvDialogComponent, AddTypeExecDialogComponent,
    UpdateTypeExecDialogComponent, AddFamilleDialogComponent, UpdateFamilleDialogComponent, AddSexeDialogComponent,
    UpdateSexeDialogComponent, AddSituationFamDialogComponent, UpdateSituationFamDialogComponent,
    AddStatutCollaborateurDialogComponent, UpdateStatutCollaborateurDialogComponent, AddStatutProjetDialogComponent,
    UpdateStatutProjetDialogComponent, AddEnvDialogComponent, UpdateEnvDialogComponent, AddRealisationDialogComponent,
    UpdateRealisationDialogComponent, AddFamillePjDialogComponent, UpdateFamillePjDialogComponent, AddFamilleDocsDialogComponent,
    UpdateFamilleDocsDialogComponent, AddRoleDialogComponent, UpdateRoleDialogComponent, AddTagDialogComponent,
    UpdateTagDialogComponent, AddTacheDialogComponent, UpdateTacheDialogComponent, AddRoleTaskDialogComponent,
    UpdateRoleTaskDialogComponent],
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
