import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatefixturesComponent } from './components/createfixtures/createfixtures.component';
import { AdfixtureService } from './adfixture.service';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatesquadComponent } from './components/createsquad/createsquad.component';




const routes: Routes = [
  {
    path: 'fixture',
    component: CreatefixturesComponent
  },{
    path: 'squad',
    component: CreatesquadComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CreatefixturesComponent,
    CreatesquadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
  ],
  providers: [
    AdfixtureService],
  bootstrap: [AppComponent]
})

export class AppModule { }
