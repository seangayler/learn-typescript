type Point = {
  x: number,
  y: number
}

function printCoord(pt: Point) {
  console.log(`x-coord: ${pt.x}, y-coord: ${pt.y}.`);
}

printCoord({ x: 2, y: 3 });