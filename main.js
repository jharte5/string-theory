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
  let email = '@codeimmersives.com';

  for (let i = 0; i < str.length; i++) {
    if (str.includes('')) {
     str.replace('', '.');
     email = differentStr + email;
    } 
    if (differentStr !== differentStr.toLowerCase) {
    }
  }
  return email
  return differentStr.toLowerCase
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

function reverse() {
}

function crazyCase2ReturnOfCrazyCase() {
}

function titleCase() {
}

function onlyVowels() {
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