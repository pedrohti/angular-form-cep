import { CepService } from './cep.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
