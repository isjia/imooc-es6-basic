{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=', arr);

  let empty = Array.of();
  console.log('empty=', empty);
}

{
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5], function(item){
    return item*2
  }));
}

{
  console.log('fill', [1, 'a', undefined].fill(7));
  console.log('fill, pos', ['a','b','c'].fill(7,1,3));
}

{
  for(let index of ['1','c','lv'].keys()){
    console.log('keys',index);
  }

  for(let value of ['1','c','lv'].values()){
    console.log('values',value);
  }

  for(let [index, value] of ['1','c','lv'].entries()){
    console.log('[index, value]',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
  // 找到第一个符合条件的元素，返回值
  console.log([1,2,3,4,5,6].find(function(item){
    return item>3;
  }))

  // 找到第一个符合条件的元素，返回index
  console.log([1,2,3,4,5,6].findIndex(function(item){
    return item>3;
  }))
}

{
  console.log('number', [1,2,3,NaN].includes(1));
  console.log('number', [1,2,3,NaN].includes(NaN));
}
