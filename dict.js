const myDic = {
      hi:{
word:"hi", 
meaning:"greeting word among English and some parts of the world", 
synonyms:["hello", "hey"],
antonyms: null }, 
hello: {
word:"hello", 
meaning:" A common greeting used on phone as first word of communication", 
synonyms:["hi", "hey"], 
antonyms: null}
    } 
  var my_text = document.getElementById("myText") 
    function search(){
 var word = my_text.value.trim().toLowerCase()
 var text = document.getElementById("text")
var meaning = document.getElementById("meaning")
var synonyms = document.getElementById("synonyms")
var antonyms = document.getElementById("antonyms")
 if(word == "" || null ){
alert("Enter a word! ")}
 else if(myDic.hasOwnProperty(word)){
   document.getElementById("speakbtn").style.display = "block"
  text.innerHTML = myDic[word].word ;
  meaning.innerHTML = "<b>Meaning</b> ==> " +  myDic[word].meaning;
  synonyms.innerHTML= "<b>Synonyms ==></b>"
  for(var i of myDic[word].synonyms){
synonyms.innerHTML += i + ","}
antonyms.innerHTML= "<b>Antonyms ==> </b>"
  for(i of myDic[word].antonyms){
antonyms.innerHTML += i + ","}
}
else{text.innerHTML="Not available in the dictionary ! "}
}
const speak=()=>{
var word = document.getElementById("text").innerHTML;
speech = new SpeechSynthesisUtterance();
speech.lang="en-US"
speech.text= word
speech.rate=0.7
speech.pitch=1 
speech.volume=10
window.speechSynthesis.speak(speech);
} 
