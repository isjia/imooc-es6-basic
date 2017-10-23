class Timer{
  countDown(end, update, handle){
    const now = new Date().getTime(); // 取当前时间
    const self = this; // 当前对象的指针
    if (now-end) { // 当前时间大于结束时间，倒计时结束
      // 倒计时结束，执行cb
      handle.call(self);
    } else {
      let last_time = end - now; // 倒计时剩余时间
      const px_d = 1000*60*60*24; // 1天的毫秒数
      const px_h = 1000*60*60; // 1 小时的毫秒数
      const px_m = 1000*60;
      const px_s = 1000;
      let d = Math.floor(last_time/px_d);
      let h = Math.floor((last_time-d*px_d)/px_h);
      let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);
      let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
      let r = [];
      if(d>0){
        r.push(`<em>${d}</em>天`);
      }
      if(r.length||(h>0)){
        r.push(`<em>${h}</em>时`);
      }
      if(r.length||(m>0)){
        r.push(`<em>${m}</em>分`);
      }
      if(r.length||(s>0)){
        r.push(`<em>${s}</em>秒`);
      }
      self.last_time=r.join('');
      update.call(self, r.join(''));
      setTimeout(function(){
        self.countDown(end, update, handle);
      }, 1000);
    }
  }
}

export default Timer;
