declare module 'omegup-school' {
  export type Record<K extends keyof any, T> = {
    readonly [Prop in K]: T;
  };
}
