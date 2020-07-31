import {ModuleWithProviders, NgModule} from '@angular/core';
import {EffectsModule, Actions, USER_PROVIDED_EFFECTS} from '@ngrx/effects';
import {combineReducers, ReducerManager, Store} from '@ngrx/store';
import {PractitionerStore} from './practitioner.store';
import {PractitionerService} from '../../services/practitioner.service';
import {createReducer} from '../../../libCommon/store.factory';

// TODO: guard to not register 2 time same modules
@NgModule({
  imports: [
    EffectsModule.forFeature()
  ]
})
export class StoreFacadeModule {
  static forRoot(name: string, storeType: typeof PractitionerStore, effects?: any[]): ModuleWithProviders<StoreFacadeModule> {
    return {
      ngModule: StoreFacadeModule,
      providers: [
        {
          provide: storeType,
          deps: [ReducerManager, Store, Actions, PractitionerService],
          useFactory: (reducerManager: ReducerManager, store: Store, actions$: Actions, practitionerService: PractitionerService) => {
            // create actions
            const actions = new storeType.actions(storeType.name, PractitionerStore.name);
            // create reducers
            const reducers = createReducer(actions, storeType.reducer);
            reducerManager.addFeature({ key: name, reducers, reducerFactory: combineReducers});
            return new storeType(name, store, actions$, practitionerService, actions);
          }
        },
        effects ? effects : undefined,
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: effects ?? [],
        }
      ]
    };
  }
}