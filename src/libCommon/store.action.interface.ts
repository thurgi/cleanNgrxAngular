import {createAction as ca} from '@ngrx/store';
import {OverloadedReturnType} from './overloaded.return.type';
import {OverloadedArguments} from './overloaded.params.type';

export interface StoreActionInterface {
  moduleName: string;
  storeName: string;
}

export type createActionReturnType = OverloadedReturnType<typeof ca>;
export type  createActionParamsType = OverloadedArguments<typeof ca>;

export abstract class StoreActionAbstract implements StoreActionInterface {

  constructor(public moduleName: string, public storeName: string) {
  }

  createAction<T>(
    ...args: createActionParamsType
  ): createActionReturnType {
    // @ts-ignore
    return ca(...args);
  }

}
