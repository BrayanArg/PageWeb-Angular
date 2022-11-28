import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AsideComponent } from './Components/aside/aside.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { QuienesSomosComponent } from './Components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { TestimoniosComponent } from './Components/testimonios/testimonios.component';
import { ContactanosComponent } from './Components/contactanos/contactanos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: 'contactanos', component: ContactanosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
