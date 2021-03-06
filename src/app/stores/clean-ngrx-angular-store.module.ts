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
import {generateStoreImport} from '../../libCommon/store.factory';

@NgModule({
  declarations: [],
  imports: [generateStoreImport(CleanNgrxAngularStoreModule.name, )]
})
export class CleanNgrxAngularStoreModule implements StoreModuleInterface{
  moduleName = 'CleanNgrxAngularStoreModule';

  constructor() {
    this.constructor.name;
  }

}
