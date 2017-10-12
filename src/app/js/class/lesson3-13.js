{
  // 一个原始对象，用来存储真是的数据
  let obj = {
    time: '2017-10-10',
    name: 'wiz',
    _r: 123
  };

  // 代理商
  let monitor = new Proxy(obj, {
    // 拦截（代理）对象属性的读取
    get(target, key){
      return target[key].replace('2017', '2018')
    },

    // 拦截（代理）对象属性的设置
    set(target,key,value) {
      if (key === 'name'){
        return target[key] = value;
      }
      else {
        return target[key];
      }
    },

    // 拦截（代理） key in object 操作
    has(target, key) {
      if(key === 'name'){
        return target[key]
      }
      else {
        return false;
      }
    },
    // 拦截 delete
    deleteProperty(target, key) {
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }
      else {
        return target[key];
      }
    },
    // 拦截 Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time');
    }
  });

  // 用户操作monitor中的方法
  console.log('get', monitor.time);

  monitor.time='2018';
  console.log('set', monitor.time);

  monitor.name = 'wizDigital';
  console.log('set', monitor.name);

  console.log('has name property', 'name' in monitor);
  console.log('has time property', 'time' in monitor);

  // delete monitor.time;
  // console.log('delete time property ', monitor);
  //
  // delete monitor._r;
  // console.log('delete _r property ', monitor);
  console.log('ownKeys', Object.keys(monitor));
}

{
  // 一个原始对象，用来存储真是的数据
  let obj = {
    time: '2017-10-10',
    name: 'wiz',
    _r: 123
  };

  console.log('reflect-get', Reflect.get(obj, 'time'));
  Reflect.set(obj, 'name', 'mooc')
  console.log('reflect-set', obj);
  console.log('reflect-has', Reflect.has(obj, 'name'));
}

// 使用场景举例
{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy){
        if(target.hasOwnProperty[key]){
          let va = this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key, value, proxy);
          } else {
            throw Error(`不能设置${key}到${value}`);
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string';
    },
    age(val) {
      return typeof val === 'number' && val > 18;
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators);
    }
  }

  const person = new Person('lilie', 30);

  console.info('person', person);

  // person.name = 48;
  person.name = "LeiLei"
  console.info('person-leilei', person);
}
