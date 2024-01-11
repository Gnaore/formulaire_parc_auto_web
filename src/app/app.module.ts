import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { WebcamModule } from 'ngx-webcam';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AdminComponent } from './admin/admin.component';
import { TableModule } from 'primeng/table';
import {ImageModule} from 'primeng/image';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        FormulaireComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgSelectModule, 
        FormsModule,
        WebcamModule,
        TableModule,
        ImageModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.5)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff',
            fullScreenBackdrop: false,
          }),
          
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
