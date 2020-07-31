import {createEffect as ce} from '@ngrx/effects';
import {createReducer as cr, on, On} from '@ngrx/store';

import {OverloadedReturnType} from './overloaded.return.type';
import {StoreActionAbstract} from './store.action';
import {OverloadedArguments} from './overloaded.params.type'
import {StoreReducerAbstract} from './store.reducer';

type createreducerReturnType = OverloadedReturnType<typeof cr>;

export function createReducer<S extends object>(
  storeAction: StoreActionAbstract,
  storeReducer: StoreReducerAbstract<S>
): createreducerReturnType {
  return cr(storeReducer.initialState, ...storeReducer.actionReducers);
}

// ----------------------------- EFFECT -----------------------------------------------//

export type createEffectParamsType = OverloadedArguments<typeof ce>;
export type createEffectReturnType = OverloadedReturnType<typeof ce>;

export function createEffect(...args: createEffectParamsType): createEffectReturnType {
  // @ts-ignore
  return ce(...args);
}
