import { getRandomInt } from "./numbers";

export function randomColor({
  brighter,
  opacity,
}: {
  brighter?: boolean;
  opacity?: number;
} = {}) {
  return `hsla(${getRandomInt(0, 357)},${brighter ? 94 : 86}%, ${
    brighter ? 98.5 : 87
  }%, ${opacity || 1}) `;
  // TODO: Change to ??
}
