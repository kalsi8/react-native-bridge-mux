import BridgeMux from './NativeBridgeMux';

export function multiply(a: number, b: number): number {
  return BridgeMux.multiply(a, b);
}
