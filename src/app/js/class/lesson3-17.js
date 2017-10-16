{
  // generator 的基本定义
  let tell = function*(){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k = tell();
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  // iterator 的 generator 实现方式
  let obj = {};

  obj[Symbol.iterator] = function*(){
    yield 1;
    yield 2;
    yield 3;
  }

  for (let value of obj) {
    console.log('value', value);
  }
}

{
  // 状态机
  let state = function*(){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
//   // generator 的一种语法糖，需要babel的插件才可用
//   let state = async function(){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status = state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
  let draw = function(count) {
    // 抽奖逻辑
    console.log(`剩余${count}次`);
  }

  let residue = function*(count){
    while(count>0){
      count--;
      yield draw(count); //执行抽奖逻辑
    }
  }
  let start = residue(5);
  let btn = document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function(){
    start.next();
  }, false)
}

{
  // 长轮询
  let ajax = function*(){
    yield new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve({code: 0});
      }, 2000);
    })
  }

  let pull=function(){
    let generator=ajax();
    let step = generator.next();
    step.value.then(function(d){
      if(d.code!=0){
        setTimeout(function(){
          console.info('wait');
          pull();
        }, 1000);
      }else{
        console.info(d);
      }
    })
  }

  pull();
}
