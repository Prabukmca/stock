export interface CommonFun {
  sum(a: number, b: number): number;
}

export abstract class CommonLogics {
  abstract findFirst(marks: number[]): number;

  average(a: number, b: number, c: number): number {
    return a + b + c / 3;
  }
}

export interface PgMethods {
  PgMethodOne(): void;
}

export interface LayerMethods {
  LayerMethodOne(): void;
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== "constructor") {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}
