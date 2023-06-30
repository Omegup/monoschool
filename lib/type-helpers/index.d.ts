/// <reference path="./hkt.d.ts" />
/// <reference path="./common-types.d.ts" />


type Entry<T, F extends HKT<string & keyof T, string> = IdHKT<string & keyof T>> = {
  readonly [k in string & keyof T]: readonly [App<F, k>, T[k]];
}[string & keyof T];

interface ObjectConstructor {
  entries<T, _ = 0>(object?: T): Entry<T>[];
  fromEntries<T = unknown, _ = 1>(entries: Entry<T>[]): T;
  fromEntries<K extends string, U extends Record<K, readonly [string, unknown]>>(
    entries: readonly U[K][]
  ): { [k in K as U[k][0]]: U[k][1] };
  fromEntries(entries: Iterable<readonly unknown[]>): unknown;
}
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  map<T, U extends Record<keyof T, unknown>>(
    this: Entry<T>[],
    callbackfn: <k extends keyof T>(
      kv: readonly [k, T[k]],
      index: number,
      array: Entry<T>[]
    ) => readonly [k, U[k]],
    thisArg?: any
  ): Entry<U>[];
  flatMap<U, This = undefined> (
    callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[]
  flatMap<Dom extends keyof any, F extends HKT<Dom>, G extends HKT<Dom>>(
    this: readonly { readonly [k in Dom]: App<F, k> }[Dom][],
    callbackfn: <X extends Dom>(
      v: App<F, X>,
      index: number,
    ) => App<G, X>[],
    thisArg?: any
  ): { readonly [k in Dom]: App<G, k> }[Dom][];
  map<Dom extends keyof any, F extends HKT<Dom>, G extends HKT<Dom>>(
    this: readonly { readonly [k in Dom]: App<F, k> }[Dom][],
    callback: <X extends Dom>(v: App<F, X>) => App<G, X>
  ): { readonly [k in Dom]: App<G, k> }[Dom][];
}
