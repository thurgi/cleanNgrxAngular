import {ActionReducer} from '@ngrx/store/src/models';
import {StoreActionInterface} from './store.action.interface';

export interface StoreInterface {
  action: StoreActionInterface;
  getReducer(): ActionReducer<any>;
  getEffect(): any[];
}
