function basicTeenager(age) {
  if (age >= 13 && <= 19) {
    console.log("You are a teenager!");
  }
}

function teenager(age) {
  if (age >= 13 && <= 19) {
    console.log("You are a teenager!");
  } else {
    console.log("you are not a teenager");
  }
}

function ageChecker(age) {
  if (age >= 13 && <= 19) {
    console.log("You are a teenager!");
  } else if (age === < 13) {
    console.log("You are a kid");
  } else {
    console.log("You are a grownup");
  }
}

function ternaryTeenager(age) {
  console.log("You are " + (age >= 13 && <= 19 ? "a teenager" : "not a teenager"));
}

function switchAge(age) {
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      console.log("You are a teenager");
      break;
    default:
      console.log("You are not a teenager");
  }
}
