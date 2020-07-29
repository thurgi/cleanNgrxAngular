import {ActionReducer} from '@ngrx/store/src/models';

export interface StoreInterface {
  getReducer(): ActionReducer<any>;
  getEffect(): any[];
}
