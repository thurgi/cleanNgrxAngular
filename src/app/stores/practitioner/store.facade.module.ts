import {NgModule, ModuleWithProviders, Type, Injector} from '@angular/core';
import {PractitionerEffects} from './practitioner.effects';
import {_FEATURE_EFFECTS, FEATURE_EFFECTS, USER_PROVIDED_EFFECTS} from '@ngrx/effects/src/tokens';
import {createEffects} from '@ngrx/effects/src/effects_module';
import {StoreEffectInterface} from '../../../libCommon/store.effect.interface';
import {PractitionerActions} from './practitioner.actions';
import {combineReducers, ReducerManager, Store} from '@ngrx/store';
import {PractitionerStore} from './practitioner.store';
import {Actions} from '@ngrx/effects';
import {PractitionerService} from '../../services/practitioner.service';

@NgModule({
})
export class StoreFacadeModule {
  static forRoot(name: string, storeType: typeof PractitionerStore): ModuleWithProviders<StoreFacadeModule> {
    return {
      ngModule: StoreFacadeModule,
      providers: [
        Store,
        {
          provide: PractitionerStore,
          deps: [Store, Actions, PractitionerService, PractitionerEffects, ReducerManager],
          useFactory: (reducerManager: ReducerManager, store: Store, actions$: Actions, practitionerService: PractitionerService, effects: PractitionerEffects) => {
            reducerManager.addFeature({ key: name, reducers: storeType.reducer, reducerFactory: combineReducers});
            return new storeType(name, store, actions$, practitionerService);
          }
        },
        storeType.effects,
        {
          provide: _FEATURE_EFFECTS,
          multi: true,
          useValue: [storeType.effects],
        },
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: [],
        },
        {
          provide: FEATURE_EFFECTS,
          multi: true,
          useFactory: createEffects,
          deps: [Injector, _FEATURE_EFFECTS, USER_PROVIDED_EFFECTS],
        },
      ]
    };
  }
}