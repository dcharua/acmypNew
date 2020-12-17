import {Route} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {ContactoComponent} from './contacto/contacto.component';
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


export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'civil', component: CivilComponent},
  {path: 'penal', component: PenalComponent},
  {path: 'propiedad', component: PropiedadComponent},
  {path: 'privacidad', component: PrivacidadComponent},
  {path: 'telecomunicaciones', component: TelecomunicacionesComponent},
  {path: 'farmaceutico', component: FarmaceuticoComponent},
  {path: 'tecnologia', component: TecnologiaComponent},
  {path: 'litigio', component: LitigioComponent},
  {path: 'corporativo', component: CorporativoComponent},
  {path: 'administrativo', component: AdministrativoComponent},
  {path: 'comercio', component: ComercioComponent},
  {path: 'fusion', component: FusionComponent},
  {path: 'inmobiliario', component: InmobiliarioComponent},
  {path: 'charua', component: CharuaComponent},
  {path: 'arias', component: AriasComponent},
  {path: 'macias', component: MaciasComponent},
  {path: 'prum', component: PrumComponent},
  {path: 'abogados', component: CharuaComponent},

  {path: 'home', component: HomeenComponent},
  {path: 'about', component: NosotrosenComponent},
  {path: 'contact', component: ContactoenComponent},
  {path: 'civil-en', component: CivilenComponent},
  {path: 'criminal', component: PenalenComponent},
  {path: 'property', component: PropiedadenComponent},
  {path: 'privacy', component: PrivacidadenComponent},
  {path: 'telecomunications', component: TelecomunicacionesenComponent},
  {path: 'pharmaceutical', component: FarmaceuticoenComponent},
  {path: 'technology', component: TecnologiaenComponent},
  {path: 'litigation', component: LitigioenComponent},
  {path: 'corporative', component: CorporativoenComponent},
  {path: 'administrative', component: AdministrativoenComponent},
  {path: 'trade', component: ComercioenComponent},
  {path: 'merge', component: FusionenComponent},
  {path: 'realestate', component: InmobiliarioenComponent},
  {path: 'charua-en', component: CharuaenComponent},
  {path: 'arias-en', component: AriasenComponent},
  {path: 'macias-en', component: MaciasenComponent},
  {path: 'prum-en', component: PrumenComponent},
  {path: 'attorneys', component: CharuaenComponent},

  {path: '**', component: HomeComponent}
];