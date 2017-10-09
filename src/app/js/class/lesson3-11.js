{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size', list.size);
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  console.log('size',list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  // 利用 set 的特性去重
  let arr = [1,2,3,1,'2'];
  let list2 = new Set(arr);
  console.log('list2',list2);
}

{
  let arr=['add', 'del', 'clear', 'has'];
  let list = new Set(arr);

  console.log('has', list.has('add'));
  console.log('del', list.delete('add'), list);
  list.clear();
  console.log('clear', list);
}

{
  let arr=['add', 'del', 'clear', 'has'];
  let list = new Set(arr);

  for(let key of list.keys()){
    console.log('keys', key);
  }

  for(let value of list.values()){
    console.log('values', value);
  }

  for(let [key,value] of list.entries()){
    console.log('items', key, value);
  }

  list.forEach(function(item){
    console.log(item);
  })
}

{
  let weakList = new WeakSet();
  // 数据类型只能是对象，弱引用，无法使用垃圾回收机制
  // 没有 size 属性

  let arg = {};

  weakList.add(arg);
  // weakList.add(2); Invalid Value
  console.log('weakList', weakList);
}

{
  let map = new Map();
  let arr = ['123'];
  map.set(arr, 456);
  console.log('map', map, map.get(arr));
}

{
  let map = new Map([['a', 123],['b', 456],['c', 789]]);
  console.log('map2', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}

{
  let weakMap = new WeakMap();

  let o = {};
  weakMap.set(o, 123);
  console.log(weakMap.get(o));
}
