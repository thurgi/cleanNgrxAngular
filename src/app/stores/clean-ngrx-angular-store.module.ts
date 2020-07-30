
// import {StoreModuleInterface} from '../../libCommon/store.module';
// import { NgModule } from '@angular/core';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { PRACTITIONER_FEATURE_KEY, reducer } from './practitioner/practitioner.reducer';
// import { PractitionerEffects } from './practitioner/practitioner.effects';
//
// @NgModule({
//   declarations: [],
//   imports: [StoreModule.forFeature(PRACTITIONER_FEATURE_KEY, reducer), EffectsModule.forFeature([PractitionerEffects])]
// })
// export class CleanNgrxAngularStoreModule implements StoreModuleInterface{
//   moduleName = 'CleanNgrxAngularStoreModule';
//
//   constructor() {
//     this.constructor.name;
//   }
//
// }

import {StoreModuleInterface} from '../../libCommon/store.module';
import { NgModule } from '@angular/core';
import {PractitionerStore} from './practitioner/practitioner.store';
import {StoreFacadeModule} from './practitioner/store.facade.module';

@NgModule({
  declarations: [],
  imports: [
    StoreFacadeModule.forRoot(CleanNgrxAngularStoreModule.name, PractitionerStore)
  ],
  providers: [
  ]
})
export class CleanNgrxAngularStoreModule implements StoreModuleInterface{
  moduleName = 'CleanNgrxAngularStoreModule';

  constructor() {
    this.constructor.name;
  }

}
