declare module 'omegup-school' {
  export type Record<K extends keyof any, T> = {
    readonly [Prop in K]: T;
  };
  export type Either<R, E> =
    | { ok: true; result: R }
    | { ok: false; error: E }
    | (R extends void ? { ok: true } : never);
}
