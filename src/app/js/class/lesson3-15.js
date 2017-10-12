{
  let ajax = function(cb){
    console.log('i am ajax');
    setTimeout(function(){
      cb&&cb.call()
    }, 3000);
  };

  ajax(function(){
    console.log('i am cb');
  })
}

{
  let ajax = function(){
    console.log('i am ajax2');
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 4000);
    })
  };

  ajax().then(function(){
    console.log('Promise', 'i am then');
  })
}

{
  let ajax = function(){
    console.log('i am ajax3');
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 4000);
    })
  };

  ajax()
    .then(function(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve();
      }, 5000);
    });
  })
    .then(function(){
    console.log('time out 5000');
  })
}

{
  // 捕获异常

  let ajax = function(num){
    console.log('执行4');
    return new Promise(function(resolve, reject){
      if(num>5){
        resolve();
      } else {
        throw new Error('出错了');
      }
    })
  }

  ajax(6).then(function(){
    console.log('log', 6);
  }).catch(function(err){
    console.log('catch', err);
  })
}

{
  // Promise All
  function loadImg(src){
    return new Promise(function(resolve, reject){
      let img = document.createElement('img');

      img.src = src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
    loadImg('http://i2.buimg.com/567571/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)
}

{
  // Promise race
  function loadImg(src){
    return new Promise(function(resolve, reject){
      let img = document.createElement('img');

      img.src = src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImg(img){
    let p=document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
    loadImg('http://i2.buimg.com/567571/5eb8190d6b2a1c9c.png')
  ]).then(showImg)
}
