class Formatter {
  //add static methods here
  static capitalize(string){
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
   return string.replace(/[^A-Za-z0-9\-\'\ ]/g,"")
  }
  static titleize(string){
    const excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'] ;
    const words = string.toLowerCase().split(' ');

    for (let i =0; i < words.length; i++){
    if (i === 0  || !excludeWords.includes(words[i])) {
       words[i]=words[i].charAt(0).toUpperCase()+ words[i].slice(1);
    }
  }
  return words.join(' ')
  }
}
console.log(Formatter.titleize('Maurice a an but of and for at by from end'));


