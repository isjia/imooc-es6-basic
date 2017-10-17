// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class function test');
//   }
// }

let A=123;

function test(){
  console.log('test');
}

class Hello{
  test(){
    console.log('class function test');
  }
}

export default {
  A,
  Hello,
  test
}
