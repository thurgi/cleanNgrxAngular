import {ActionCreator, createAction as ca, Creator} from '@ngrx/store';
import {OverloadedReturnType} from './overloaded.return.type';
import {OverloadedArguments} from './overloaded.params.type';
import {FunctionWithParametersType, NotAllowedCheck, Props, TypedAction} from '@ngrx/store/src/models';

export type createActionReturnType = OverloadedReturnType<typeof ca>;
export type  createActionParamsType = OverloadedArguments<typeof ca>;

//TODO: virer le any
export abstract class StoreActionAbstract {
  readonly [key: string]: any;
  constructor(private name: string) {}

  protected createAction<T extends string>(type: T): ActionCreator<T, () => TypedAction<T>>;
  protected createAction<T extends string, P extends object>(type: T, config: Props<P> & NotAllowedCheck<P>): ActionCreator<T, (props: P & NotAllowedCheck<P>) => P & TypedAction<T>>;
  protected createAction<T extends string, P extends any[], R extends object>(type: T, creator: Creator<P, R> & NotAllowedCheck<R>): FunctionWithParametersType<P, R & TypedAction<T>> & TypedAction<T>;
  protected createAction(
    ...args: createActionParamsType
  ): createActionReturnType {
    // @ts-ignore
    return ca(this.name + args[0], ...args.slice(1, args.length));
  }

}
