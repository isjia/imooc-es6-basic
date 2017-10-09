{
  // 数据结构的横向对比 Map vs Array ：增删改查
  let map = new Map();
  let array = [];

  // 增
  map.set('t', 1);
  array.push ({t:1});

  console.info('map vs array: add ', map, array);

  // 查
  let map_exist = map.has('t');
  let array_exist= array.find(item => item.t); //returns the value of the first element in the array that satisfies the provided testing function

  console.info('map vs array: search ', map_exist, array_exist);

  // 改
  map.set('t', 2);
  array.forEach(item=>item.t? item.t=2: '');

  console.info('map vs array: change: ', map, array);

  // 删
  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);

  console.info('map vs array: delete ', map, array);
}

{
  // 数据结构的横向对比 Set vs Array
  let set = new Set();
  let array = [];

  // add
  set.add({t:1});
  array.push({t:1});

  console.info('set vs array: add ', set, array);

  // search
  let o = {b:2};
  set.add(o);
  let set_exist = set.has(o); // 注意这里是指数引用
  let array_exist= array.find(item => item.t); //returns the value of the first element in the array that satisfies the provided testing function

  console.info('set vs array: search ', set_exist, array_exist);

  // change
  set.forEach(item=>item.t ? item.t = 2: '');
  array.forEach(item=>item.t? item.t=2: '');

  console.info('set vs array: change ', set, array);

  // delete
  set.forEach(item=>item.t?set.delete(item):'');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.info('set vs array: delete ', set, array);
}

{
  // Map vs Set vs Object
  let item={t:1};
  let map = new Map();
  let set = new Set();
  let obj = new Object();

  // add
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;

  console.info('map-set-object-add ', map, set, obj);

  // search
  console.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  })

  // modify
  map.set('t', 2);
  item.t = 2; //直接修改被引用的对象
  obj['t'] = 2;
  console.info('map-set-object-modify ', map, set, obj);

  // delete
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-object-delete ', map, set, obj);
}
