import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './home/client/client.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatExpansionModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatChipsModule, MatSelect, MatSelectModule, MatTabsModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatSnackBarModule} from '@angular/material';
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
    AddDeviseDialogComponent
    ],
    entryComponents: [AddDeviseDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
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
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
