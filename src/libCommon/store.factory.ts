import {ModuleWithProviders} from '@angular/core';
import {StoreFeatureModule} from '@ngrx/store/src/store_module';
import {EffectsFeatureModule} from '@ngrx/effects/src/effects_feature_module';
import {StoreInterface} from './store.interface';
import {EffectsModule} from '@ngrx/effects';
import {on, createReducer as cr, StoreModule, On} from '@ngrx/store';

import {OverloadedReturnType} from './overloaded.return.type';
import {StoreActionAbstract} from './store.action.interface';
import {StoreReducerInterface} from './store.reducer.interface';

type createreducerReturnType = OverloadedReturnType<typeof cr>;

export function generateStoreImport(
  moduleName: string,
  storeAbstract: StoreInterface
): ModuleWithProviders<StoreFeatureModule | EffectsFeatureModule>[] {
  const reducer = storeAbstract.getReducer();
  const moduleWithProviders = storeAbstract.getEffect().map(effect => EffectsModule.forFeature(effect));
  moduleWithProviders.push(StoreModule.forFeature(
    moduleName + storeAbstract.constructor.name,
    reducer
  ));
  return moduleWithProviders;
}

export function createReducer(
  storeAction: StoreActionAbstract,
  storeReducer: StoreReducerInterface
): createreducerReturnType {
  const actionsReduce: On<any>[] = [];

  for (const member in storeReducer) { // For each member of the dictionary
    if (
      storeReducer.hasOwnProperty(member) && // Not inherited
      typeof storeReducer[member] === 'function' && // Is it a function?
      storeAction.hasOwnProperty(member) && // Not inherited
      typeof storeAction[member] === 'function'// Is it a function?
    ) {
      actionsReduce.push(on(storeAction[member], storeReducer[member]));
    }
  }
  return cr(storeReducer.initialState, ...actionsReduce);
}
