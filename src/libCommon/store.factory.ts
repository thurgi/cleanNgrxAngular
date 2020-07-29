import {ModuleWithProviders} from '@angular/core';
import {StoreFeatureModule} from '@ngrx/store/src/store_module';
import {EffectsFeatureModule} from '@ngrx/effects/src/effects_feature_module';
import {StoreInterface} from './store.interface';
import {EffectsModule} from '@ngrx/effects';
import {on, createReducer as cr, StoreModule, On} from '@ngrx/store';

import {OverloadedReturnType} from './overloaded.return.type';
import {createActionReturnType} from './store.action.interface';

type Action = {
  action: createActionReturnType,
  reducer: any
};
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

export function createReducer(initialState: any, actions: Action[]): createreducerReturnType {
  const actionsReduce: On<any>[] = [];
  actions.forEach(action => actionsReduce.push(on(action.action, action.reducer)));

  return cr(initialState, ...actionsReduce);
}
