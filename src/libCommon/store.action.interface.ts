import {createAction as ca} from '@ngrx/store';

export interface StoreActionInterface {
  actions: { [key: string]: string };
  moduleName: string;
  storeName: string;
}

type OverloadedParametersType2<T> =
  T extends { (args: infer R): any; (args: infer R): any; (args: infer R): any; (args: infer R): any } ? R :
    T extends { (args: infer R): any; (args: infer R): any; (args: infer R): any } ? R :
      T extends { (args: infer R): any; (args: infer R): any } ? R :
        T extends (args: infer R) => any ? R : any;
type param = Parameters<typeof ca>;

type OverloadedReturnType<T> =
  T extends { (...args: any[]): infer R; (...args: any[]): infer R; (...args: any[]): infer R; (...args: any[]): infer R } ? R :
    T extends { (...args: any[]): infer R; (...args: any[]): infer R; (...args: any[]): infer R } ? R :
      T extends { (...args: any[]): infer R; (...args: any[]): infer R } ? R :
        T extends (...args: any[]) => infer R ? R : any;
type createActionReturnType = OverloadedReturnType<typeof ca>;

export abstract class StoreActionAbstract implements StoreActionInterface {
  actions = {};

  constructor(public storeName: string, public moduleName: string) {
  }

  createAction(...args: param): createActionReturnType {
    return ca(...args);
  }

}
