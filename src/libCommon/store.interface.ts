import {ActionReducer} from '@ngrx/store/src/models';
import {StoreActionInterface} from './store.action.interface';
import {StoreReducerInterface} from './store.reducer.interface';
import {StoreEffectInterface} from './store.effect.interface';

export interface StoreInterface {
  action: StoreActionInterface;
  reducer: StoreReducerInterface;
  getReducer(): ActionReducer<any>;
  getEffect(): any[];
}
