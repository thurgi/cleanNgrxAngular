import {Actions, createEffect as ce, ofType} from '@ngrx/effects';
import {OverloadedArguments} from './overloaded.params.type';
import {OverloadedReturnType} from './overloaded.return.type';
import {Observable} from 'rxjs/src/internal/Observable';
import {OperatorFunction} from 'rxjs/src/internal/types';

export type createEffectParamsType = OverloadedArguments<typeof ce>;
export type createEffectReturnType = OverloadedReturnType<typeof ce>;

export type OfTypeEffectParamsType = OverloadedArguments<typeof ofType>;


export interface StoreEffectInterface {

}

function test<A,B>(type: OfTypeEffectParamsType, ...operations: OperatorFunction<A, B>[])

export abstract class StoreEffectAbstract implements StoreEffectInterface {
  constructor(private actions$: Actions) {}

  private createEffect<T, service extends T>(type: OfTypeEffectParamsType, ...args: createEffectParamsType): createEffectReturnType {
    // @ts-ignore
    return ce(...args);
  }
}
