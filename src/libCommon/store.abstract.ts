import {ActionReducer} from '@ngrx/store/src/models';

export interface StoreAbstract {
  getReducer(): ActionReducer<any>;
  getEffect(): any[];
}
