const names: string[] = ['Sean', 'Daniel', 'Ray'];

names.forEach(function (name) {
  console.log(name.toUppercase()); // TypeScript tooling catches that toUppercase is not a string method
})