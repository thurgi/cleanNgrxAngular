import {ActionCreator, ActionType, on, On} from '@ngrx/store';
import {StoreActionAbstract} from './store.action';

export type OnReducer<S, C extends ActionCreator[]> = (state: S, action: ActionType<C[number]>) => S;

export abstract class StoreReducerAbstract<S extends object> {
  // readonly [key: string]: On<S>|StoreActionAbstract|S;
  public readonly abstract initialState: any;
  public readonly abstract actionReducers: On<S>[];
  constructor(protected actions: StoreActionAbstract) {
  }

  protected on<C1 extends ActionCreator>(action: C1, reducer: OnReducer<S, [C1]>): On<S> {
    return on(action, reducer);
  }
}