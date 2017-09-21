{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log('es5', es5);
  console.log('es6', es6);

  let es5_method = {
    hello: function(){
      return 'hello es5';
    }
  };

  let es6_method = {
    hello(){
      return 'hello es6'
    }
  };

  console.log(es5_method.hello(), es6_method.hello());
}

{
  // 属性表达式
  let a = 'b';

  let es5_obj = {
    a: 'c'
  };

  let es6_obj = {
    [a]: 'c'
  };

  console.log(es5_obj, es6_obj);
  console.log(es5_obj.a, es6_obj.b);
}

{
  // 新增API
  console.log('String equal: ', Object.is('abc','abc'), 'abc' === 'abc');
  console.log('Array equal: ', Object.is([],[]), [] === []);

  console.log('Copy', Object.assign({a:'a'},{b:'b'}));

  let test = {k: 123, o:456};
  for(let [key, value] of Object.entries(test)){
    console.log([key, value]);
  }
}

{
  // 扩展运算符
  // let {a, b, ...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'};
  // console.log(c);
}
