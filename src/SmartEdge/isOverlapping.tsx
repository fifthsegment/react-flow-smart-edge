import { Grid } from 'pathfinding';

export function isOverlapping(grid:Grid, sourceX:Number, sourceY:Number, targetX:Number, targetY:Number) {
  for (let indexX = 0; sourceX < targetX; indexX++) {
    for (let indexY = 0; sourceY < targetY; indexY++) {
      if (grid.getNodeAt(indexX, indexY).walkable) {
        return true;
      }
    }
  }
  return false
}