const map = (src, callback) => {
  let new_array = [];
  for (let i = 0; i < src.length; i++) {
    new_array.push(callback(src[i]));    
  }
  return new_array;
}

const reduce = (src, callback, start = 0) => {
  let result = (start) ? start : src[0];
  let i = (start) ? 0 : 1;
  for (i; i < src.length; i++) {
    result = callback(src[i], result);
  }
  return result;
}
