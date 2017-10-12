{
  // 类的定义和生成示例
  class Parent {
    constructor(name='Jenny') {
      this.name = name;
    }
  }

  let v_parent = new Parent('money');
  console.log('new class', v_parent);
}

{
  // 继承
  class Parent {
    constructor(name='Jenny') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name='baby') {
      super(name);
      this.type = 'child';
    }
  }
  console.log('extends', new Child('money'));
}

{
  // getter, setter 是属性不是方法
  class Parent {
    constructor(name='Jenny') {
      this.name = name;
    }
    // get是属性，不是方法
    get longName() {
      return 'hello ' + this.name;
    }

    set longName(value){
      this.name=value;
    }
  }

  let v = new Parent();
  console.log('long name', v.longName);
  v.longName='longlongName';
  console.log('long long name', v.longName);
}

{
  // 静态方法
  class Parent {
    constructor(name='Jenny') {
      this.name = name;
    }

    static tell(){
      console.log('tell');
    }
  }

  Parent.tell();
}

{
  // 静态属性
  class Parent {
    constructor(name='Jenny') {
      this.name = name;
    }

    static tell(){
      console.log('tell');
    }
  }

  Parent.type='test';

  console.log('静态属性', Parent.type);
}
