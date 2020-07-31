import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {Actions, EffectsModule, USER_PROVIDED_EFFECTS} from '@ngrx/effects';
import {combineReducers, ReducerManager, Store} from '@ngrx/store';
import {createReducer} from './store.factory';
import {StoreActionAbstract} from './store.action';
import {StoreSelectorsAbstract} from './store.selectors';
import {StoreEffectAbstract} from './store.effect';
import {StoreFacadeAbstract} from './store.facade';
import {StoreReducerAbstract} from './store.reducer';

// TODO: guard to not register 2 time same modules
@NgModule({
  imports: [
    EffectsModule.forFeature()
  ]
})
export class StoreFactoryModule {
  static getFacade<S extends object>(
    name: string,
    StoreFacade: Type<StoreFacadeAbstract<S>>,
    ActionType: Type<StoreActionAbstract>,
    SelectorsType: Type<StoreSelectorsAbstract<S>>,
    ReducerType: Type<StoreReducerAbstract<S>>,
    effects?: Type<StoreEffectAbstract>[]
  ): ModuleWithProviders<StoreFactoryModule> {
    return {
      ngModule: StoreFactoryModule,
      providers: [
        {
          provide: StoreFacade,
          deps: [ReducerManager, Store, Actions],
          useFactory: (reducerManager: ReducerManager, store: Store) => {
            // create actions
            const actions = new ActionType();
            // instanciate selectors
            const selectors = new SelectorsType(name);

            const reducerClass = new ReducerType(actions);
            // create reducers
            const reducers = createReducer(actions, reducerClass);
            // create feature store
            reducerManager.addFeature({ key: name, reducers, reducerFactory: combineReducers});
            // provide store feature facade instance
            return new StoreFacade(store, selectors, actions);
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