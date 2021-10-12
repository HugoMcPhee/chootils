import { subtractPoints, Point3D } from "./points3d";
import { toRadians, toDegrees } from "./speedAngleDistance";
import { getVectorSpeed as getVectorSpeed2d } from "./speedAngleDistance2d";

// not correct but good for comparing distances
export function getVectorSpeedQuick(theVector: Point3D): number {
  return (
    theVector.x * theVector.x +
    theVector.y * theVector.y +
    theVector.z * theVector.z
  );
}

export function getVectorSpeed(theVector: Point3D): number {
  return Math.sqrt(getVectorSpeedQuick(theVector));
}

type AngleFor3D = {
  horizontal: number; //yaw
  vertical: number; // pitch
};

export function getVectorAngle(theVector: Point3D): AngleFor3D {
  return {
    horizontal: toDegrees(Math.atan2(theVector.y, theVector.x)),
    vertical: toDegrees(
      Math.atan2(
        theVector.z,
        getVectorSpeed2d({ x: theVector.x, y: theVector.y })
      )
    ),
  };
}

// maybe rename get point distance?
export function getVectorDistance(vectorA: Point3D, vectorB: Point3D): number {
  return Math.abs(getVectorSpeed(subtractPoints(vectorA, vectorB)));
}

export function getPointDistanceQuick(
  vectorA: Point3D,
  vectorB: Point3D
): number {
  return Math.abs(getVectorSpeedQuick(subtractPoints(vectorA, vectorB)));
}

export function getVectorFromSpeedAndAngle(
  speed: number,
  angle: AngleFor3D
): Point3D {
  const yaw = toRadians(angle.horizontal);
  const pitch = toRadians(angle.vertical);

  return {
    x: Math.cos(yaw) * Math.cos(pitch) * speed,
    y: Math.sin(yaw) * Math.cos(pitch) * speed,
    z: Math.sin(pitch) * speed,
  };
}

type SpeedAndAngle = {
  speed: number;
  angle: AngleFor3D;
};

export function getSpeedAndAngleFromVector(
  theSpeedVector: Point3D
): SpeedAndAngle {
  return {
    speed: getVectorSpeed(theSpeedVector),
    angle: getVectorAngle(theSpeedVector),
  };
}
