function test() {
  for(var i=1; i<3; i++) {
    console.log("inner i: " + i);
  }
  console.log("outer i: " + i);
}

function last() {
  const PI = 3.1415926;
  console.log(PI);
}

// test();
last();
