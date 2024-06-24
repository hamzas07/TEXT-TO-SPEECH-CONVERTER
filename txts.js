function voice(){
  const text=document.getElementById('txt');
  const btn=document.getElementById('btn');
  
  let speech=new SpeechSynthesisUtterance();
  speech.lang='en-US';
  speech.volume=1;
  speech.text=txt.value;
  speechSynthesis.speak(speech);
}