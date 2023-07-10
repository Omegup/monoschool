interface HKT<in Dom, out Im = unknown> {
  readonly in: (x: Dom) => void;
  readonly out: Im;
}

type App<F extends HKT<X>, X> = (F & {
  readonly in: (x: X) => void;
})['out'];


type Func<Dom, X extends Dom> = (x: X) => void

type I<Dom, F extends HKT<Dom>> = F['in'] extends Func<Dom, infer X>
  ? X
  : never;

interface ArrHKT<Dom> extends HKT<Dom> {
  readonly out: readonly I<Dom, this>[];
}

interface IdHKT<Dom> extends HKT<Dom> {
  readonly out: I<Dom, this>;
}

interface ConstHKT<Dom, Im> extends HKT<Dom, Im> {
  readonly out: Im;
}

type ApplyF<Dom, Im, T extends [Dom, HKT<Dom, Im>]> = App<T[1], T[0]>;

interface ApplyHKT<Dom, Im> extends HKT<[Dom, HKT<Dom, Im>], Im> {
  readonly out: ApplyF<Dom, Im, I<[Dom, HKT<Dom, Im>], this>>;
}

interface CombineF<A, B, C, X extends [HKT<A, B>, HKT<B, C>]> extends HKT<A, C> {
  readonly out: App<X[1], App<X[0], I<A, this>>>
}

interface CombineHKT<A, B, C> extends HKT<[HKT<A, B>, HKT<B, C>], HKT<A, C>> {
  readonly out: CombineF<A, B, C, I<[HKT<A, B>, HKT<B, C>], this>>;
}


type AppMap<Dom, F extends HKT<Dom>, X extends Dom[]> = App<F, Dom>[] & {
  [I in keyof X]: App<F, X[I]>;
};
