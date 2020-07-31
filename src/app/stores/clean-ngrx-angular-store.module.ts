import { NgModule } from '@angular/core';
import {PractitionerStore} from './practitioner/practitioner.store';
import {StoreFactoryModule} from '../../libCommon/store-factory.module';
import {PractitionerService} from '../services/practitioner.service';
import {PractitionerEffects} from './practitioner/practitioner.effects';
import {PractitionerActions} from './practitioner/practitioner.actions';
import {PractitionerSelectors} from './practitioner/practitioner.selectors';
import {PractitionerReducer} from './practitioner/practitioner.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreFactoryModule.getFacade(
      CleanNgrxAngularStoreModule.name,
      PractitionerStore,
      PractitionerActions,
      PractitionerSelectors,
      PractitionerReducer,
      [PractitionerEffects]
    )
  ],
  providers: [
    PractitionerService
  ]
})
export class CleanNgrxAngularStoreModule {
}
