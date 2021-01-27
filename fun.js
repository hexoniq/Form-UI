function eightQueens(strArr) { 
  let x =[], y =[];
  strArr.forEach((pos) => {
    x.push(Number(pos.replace('(','').replace(')','').split(',')[0]));
    y.push(Number(pos.replace('(','').replace(')','').split(',')[1]));
  });
  const setX = new Set(x);
  const setY = new Set(y);
  let flag = true;
  let resp = '';
  for(let i=0; i < strArr.length; i++) {
    for(let j=1; j < strArr.length; j++) {
      if(flag && (x[j]-x[i] === y[j]-y[i] || x[i]===x[j] || y[i]===y[j])) {
        resp = `(${x[i]},${y[i]})`;
        flag = false;
      }
    }
  }
  if(x.length === setX && x.length === setY && !resp.length) {
    return true;
  } else{
    return resp;
  }
}

console.log(eightQueens(readline()));