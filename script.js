


const btn = document.getElementById('decodeButton');


function decode(){
  let text = document.getElementById('encodedInput').value;

  if(text){
      text = text.replace("3", 'w')
      text = text.replace("7", "l")
    document.getElementById('decodedOutput').textContent = text
  }else{
    document.getElementById('decodedOutput').textContent= "Please type something"
  }

  
}
btn.addEventListener('click', decode)
