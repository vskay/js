function countBs (strnig, char){
  let chisloSmvolov = 0;
  for (var i = 0; i < strnig.length; i++){
  if (char === strnig.charAt(i))
    chisloSmvolov++;
  }
}
console.log(countBs('qwerftgyuoptttwwweeqr','t'));
