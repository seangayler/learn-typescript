// basic object type for a point
function printCoord(pt: { x: number, y: number }) {
  console.log(`x-coord: ${pt.x}, y-coord: ${pt.y}`);
}

// optional properties
function printName(name: { firstName: string, lastName?: string }) {
  if (name.firstName && name.lastName) {
    console.log(`Hello ${name.firstName} ${name.lastName}.`);
  } else {
    console.log(`Hello ${name.firstName}.`);
  }
}

printName({ firstName: 'Sean' });
printName({ firstName: 'Sean', lastName: 'Gayler' });
