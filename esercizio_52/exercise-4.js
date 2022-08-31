const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function filter (key, value) {
  if (typeof value === "string") {
    return; 
  }
  return value;
}


console.log(JSON.stringify(person, filter)); 