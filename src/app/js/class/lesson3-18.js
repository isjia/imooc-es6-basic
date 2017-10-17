{
  let readonly = function(target, name, descriptor){
    descriptor.writable = false;
    return descriptor;
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test = new Test();
  // test.time= function(){
  //   console.log('reset time');
  // }
  console.log(test.time);
}

{
  let typename=function(target, name, descriptor){
    target.myname='hello';
  }
  @typename
  class Test {

  }
  console.log('class name', Test.myname);
  // 第三方 decorator js库：core-decorators
}

{
  // 广告埋点实例
  let log=(type)=>{
    return function(target, name, descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.info(`log ${type}`);
      }
    }
  }

  class AD {
    @log('show')
    show(){
      console.log('show');
    }

    @log('click')
    click(){
      console.log('clicked');
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}
