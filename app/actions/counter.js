import { DECREASE, INCREASE } from '../consts/counter';

export function increase() {
  return {
    type: INCREASE,
  };
}

export function decrease() {
  return {
    type: DECREASE,
  };
}
