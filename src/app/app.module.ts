import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {CivilComponent} from './civil/civil.component';
import {PenalComponent} from './penal/penal.component';
import {PropiedadComponent} from './propiedad/propiedad.component';
import {PrivacidadComponent} from './privacidad/privacidad.component';
import {TelecomunicacionesComponent} from './telecomunicaciones/telecomunicaciones.component';
import {FarmaceuticoComponent} from './farmaceutico/farmaceutico.component';
import {TecnologiaComponent} from './tecnologia/tecnologia.component';
import {LitigioComponent} from './litigio/litigio.component';
import {CorporativoComponent} from './corporativo/corporativo.component';
import {AdministrativoComponent} from './administrativo/administrativo.component';
import {ComercioComponent} from './comercio/comercio.component';
import {FusionComponent} from './fusion/fusion.component';
import {InmobiliarioComponent} from './inmobiliario/inmobiliario.component';
import {CharuaComponent} from './charua/charua.component';
import {AriasComponent} from './arias/arias.component';
import {MaciasComponent} from './macias/macias.component';
import {PrumComponent} from './prum/prum.component';
import {ContactoComponent} from './contacto/contacto.component';
import {FooterComponent} from './footer/footer.component';

import {HomeenComponent} from './homeen/home.component';
import {NosotrosenComponent} from './nosotrosen/nosotros.component';
import {CivilenComponent} from './civilen/civil.component';
import {PenalenComponent} from './penalen/penal.component';
import {PropiedadenComponent} from './propiedaden/propiedad.component';
import {PrivacidadenComponent} from './privacidaden/privacidad.component';
import {TelecomunicacionesenComponent} from './telecomunicacionesen/telecomunicaciones.component';
import {FarmaceuticoenComponent} from './farmaceuticoen/farmaceutico.component';
import {TecnologiaenComponent} from './tecnologiaen/tecnologia.component';
import {LitigioenComponent} from './litigioen/litigio.component';
import {CorporativoenComponent} from './corporativoen/corporativo.component';
import {AdministrativoenComponent} from './administrativoen/administrativo.component';
import {ComercioenComponent} from './comercioen/comercio.component';
import {FusionenComponent} from './fusionen/fusion.component';
import {InmobiliarioenComponent} from './inmobiliarioen/inmobiliario.component';
import {CharuaenComponent} from './charuaen/charua.component';
import {AriasenComponent} from './ariasen/arias.component';
import {MaciasenComponent} from './maciasen/macias.component';
import {PrumenComponent} from './prumen/prum.component';
import {ContactoenComponent} from './contactoen/contacto.component';


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    CivilComponent,
    PenalComponent,
    PropiedadComponent,
    PrivacidadComponent,
    TelecomunicacionesComponent,
    FarmaceuticoComponent,
    TecnologiaComponent,
    LitigioComponent,
    CorporativoComponent,
    AdministrativoComponent,
    ComercioComponent,
    FusionComponent,
    InmobiliarioComponent,
    CharuaComponent,
    AriasComponent,
    MaciasComponent,
    PrumComponent,
    FooterComponent,
    HomeenComponent,
    HomeComponent,
    NosotrosenComponent,
    ContactoenComponent,
    CivilenComponent,
    PenalenComponent,
    PropiedadenComponent,
    PrivacidadenComponent,
    TelecomunicacionesenComponent,
    FarmaceuticoenComponent,
    TecnologiaenComponent,
    LitigioenComponent,
    CorporativoenComponent,
    AdministrativoenComponent,
    ComercioenComponent,
    FusionenComponent,
    InmobiliarioenComponent,
    CharuaenComponent,
    AriasenComponent,
    MaciasenComponent,
    PrumenComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [],
  // Modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
