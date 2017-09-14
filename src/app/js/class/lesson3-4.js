{
  console.log('a', `\u0061`);
  console.log('s', `\u20BB7`);

  console.log('s2', `\u{20BB7}`);

}

{
  let s = '𠮷';
  console.log('length', s.length);

  //es5
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  //ES6
  let s1 = '𠮷a';
  console.log('length s1', s1.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code2', s1.codePointAt(2));
  console.log('code2', s1.codePointAt(2).toString(16));
}

{
  //es5
  console.log(String.fromCharCode("0x20bb7"));
  //es6
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  // es5 字符串遍历
  let str = '\u{20bb7}abc';
  for(let i = 0; i<str.length; i++){
    console.log('es5', str[i]);
  }

  // es6 字符串遍历
  for(let code of str){
    console.log('es6', code);
  }
}

{
  let str = "string";
  console.log('icludes', str.includes('r'));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ing'));
}

{
  let str = 'abc';
  console.log(str.repeat(2));
}

{
  let name = "list";
  let info = 'hello world';

  let m = `i am ${name}, ${info}`;
  console.log("template", m);
}

{
  console.log('1'.padStart(2, '0'));
  console.log('1'.padEnd(2, '0'));
}

{
  // 标签模版
  let user = {
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name}, ${user.info}`);
  function abc(s, v1, v2){
    console.log(s, v1, v2);
    return s+v1+v2;
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
