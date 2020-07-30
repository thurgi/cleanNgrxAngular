import {createAction as ca} from '@ngrx/store';
import {Props} from '@ngrx/store/src/models';
import {OverloadedReturnType} from './overloaded.return.type';

export interface StoreActionInterface {
  moduleName: string;
  storeName: string;
}

export type createActionReturnType = OverloadedReturnType<typeof ca>;

export abstract class StoreActionAbstract implements StoreActionInterface {

  constructor(public moduleName: string, public storeName: string) {
  }

  createAction<T>(
    name: string,
    config?: Props<any>
  ): createActionReturnType {
    return ca(this.moduleName + this.storeName + name, config);
  }

}
