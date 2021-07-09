// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  let checkHaveName = false;
  let checkHaveProp = false;
  for (let value of contacts) {
    if (value["firstName"] === name) {
      checkHaveName = true;
      for (let key in value) {
        if (key === prop) {
          checkHaveProp = true;
        }
      }
      if (checkHaveName && checkHaveProp) return value[prop];
      return "No such property";
      break;
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Kristian", "lastName");