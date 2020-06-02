function ransomNote(noteString, magazineString){
  var noteArr = noteString.split(" ");
  var magazineArr = magazineString.split(" ");
  var magazineObj = {};
  var possible = true;

  magazineArr.forEach(word =>{ 
  if(!magazineObj[word]){
    magazineObj = 0};
    magazineObj[word]++;
  });

  noteArr.forEach(word =>{
  if(magazineObj[word]){
    magazineObj[word]--;
    if(magazineObj[word] < 0){
      possible = false;
    }
  }else{
    possible = false;
  }
  });
  
  return possible;
}

var answer = ransomNote("give one grand today", "give me one grand today night");

console.log(answer);