import {ModuleWithProviders} from '@angular/core';
import {StoreFeatureModule} from '@ngrx/store/src/store_module';
import {EffectsFeatureModule} from '@ngrx/effects/src/effects_feature_module';
import {StoreInterface} from './storeInterface';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';


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
