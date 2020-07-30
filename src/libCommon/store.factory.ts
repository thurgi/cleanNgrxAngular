import {ModuleWithProviders} from '@angular/core';
import {StoreFeatureModule} from '@ngrx/store/src/store_module';
import {EffectsFeatureModule} from '@ngrx/effects/src/effects_feature_module';
import {StoreInterface} from './store.interface';
import {createEffect as ce, EffectsModule, ofType} from '@ngrx/effects';
import {createReducer as cr, on, On, StoreModule} from '@ngrx/store';

import {OverloadedReturnType} from './overloaded.return.type';
import {StoreActionAbstract} from './store.action.interface';
import {StoreReducerInterface} from './store.reducer.interface';
import {OverloadedArguments} from './overloaded.params.type';

type createreducerReturnType = OverloadedReturnType<typeof cr>;

export function generateStoreImport(
  moduleName: string,
  storeAbstract: StoreInterface
): ModuleWithProviders<StoreFeatureModule | EffectsFeatureModule>[] {
  const reducer = storeAbstract.getReducer();
  const moduleWithProviders = [EffectsModule.forFeature(storeAbstract.getEffect())];
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

// ----------------------------- EFFECT -----------------------------------------------//

export type createEffectParamsType = OverloadedArguments<typeof ce>;
export type createEffectReturnType = OverloadedReturnType<typeof ce>;

export function createEffect(...args: createEffectParamsType): createEffectReturnType {
  // @ts-ignore
  return ce(...args);
}
