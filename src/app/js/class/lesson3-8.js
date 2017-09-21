{
  // 默认值的后面不能再带有没有默认值的变量
  function test(x, y='world'){
    console.log('default: ', x, y);
  }
  test('hello');
  test('hello', 'Jenny');
}

{
  let x = 'test';
  function test2(x, y=x){
    console.log('test2: ', x, y);
  }
  test2('kill');
}

{
  // rest 参数
  function test3(...arg){
    for(let v of arg){
      console.log('rest: ', v);
    }
  }
  test3(1,3,5,7,'a','c');
}

{
  console.log(...[2,4,6]);
  console.log('a',...[2,4,6]);
}

{
  let arrow = v => v*2;
  let arrow2 = ()=> 5;
  console.log('arrow: ', arrow(3));
  console.log('arrow2: ', arrow2());
}

{
  function tail(x){
    console.log('tail', x);
  }
  function fx(x){
    // 尾调用可以提升性能
    return tail(x);
  }
  fx(123);
}
