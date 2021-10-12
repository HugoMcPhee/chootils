export function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}

export function toDegrees(radians: number) {
  return (radians * 180) / Math.PI;
}

export function getAverageSpeed(speedsArray: number[]) {
  let combinedSpeeds = 0;
  let averageSpeed = 0;
  let speedsAmount = speedsArray.length;

  const lastSpeed = speedsArray[speedsAmount - 1];
  if (lastSpeed && lastSpeed === 0) {
    speedsArray.pop();
    speedsAmount = speedsArray.length;
  }
  const firstSpeed = speedsArray[0];
  if (firstSpeed && firstSpeed === 0) {
    speedsArray.shift();
    speedsAmount = speedsArray.length;
  }

  for (var i = 0; i < speedsAmount; i++) {
    combinedSpeeds += speedsArray[i];
  }
  if (speedsAmount > 0) {
    averageSpeed = combinedSpeeds / speedsAmount;
  }
  return averageSpeed;
}
