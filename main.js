function crazyCase(str) {
  let kase = '';
  for (let i = 0; i < str.length; i++) {
    
    if (i % 2 === 1){
      kase += str[i].toUpperCase()
    } else {
      kase += str[i].toLowerCase()
    }
    
  }
  return kase;
}

function ciEmailify(str) {
  let newStr= ''
str = str.toLowerCase()
for (i=0; i<str.length; i++) {
 if (str[i] === " ") {
 newStr = newStr + '.'
 } else {
 newStr = newStr + str[i]
 }
 }
 return newStr + '@codeimmersives.com'
  // let email = '';
  // for (let i = 0; i < str.length; i++) {
  //   while (str.includes('')) {
  //    str.replace('', '.');
  //   } 
  //   // email = name.replace(' ', '.');
  //   // if (differentStr !== differentStr.toLowerCase) {
  //   // }
  // }
  // return email + '@codeimmersives.com';
  // return differentStr.toLowerCase
}

function exclaim(str) {
  let newStr= ''
 for (i = 0; i < str.length;i++) {
   if (str[i] === '?') {
   newStr = newStr + '!'
   } else if(str[i] === '.') {
   newStr = newStr + '!'
   } else {
   newStr = newStr + str[i]
   }
 }
   return newStr;
}

function reverse(str) {newStr= ''
for (i = 1; i <= str.length; i++){
  if(str[i] !== ' ' ){
  newStr =  newStr +  str[str.length - i]
  }
}
  return newStr;
}

function crazyCase2ReturnOfCrazyCase(str) {
}

function titleCase(str) {
  let newStr= ''
for (i = 0; i <str.length; i++){
 if(i === 0){
   newStr = newStr + str[0].toUpperCase()
 } else{
 if (str[i - 1] === ' ') {
 newStr = newStr + str[i].toUpperCase()}
 else {
 newStr = newStr + str[i].toLowerCase()
   }
   }
 }
   return newStr;
}

function onlyVowels(str) {
  let newStr= ''
  for (i=0;i<str.length;i++){
    if('aeiou'.includes(str[i]) || 'AEIOU'.includes(str[i])) {
      newStr = newStr + str[i]
  }
 }
  return newStr;
  
  
  // let vowels = '';
  // for (let i = 0; i < str.length; i++) {
  //   if ( str[i].includes('a')
  //   ||str[i].includes('e')
  //   ||str[i].includes('i')
  //   ||str[i].includes('o')
  //   ||str[i].includes('u')
  //   vowels = vowels + str[i]);
  // }
  // return vowels;
}

function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}