const fetchPromise = fetch('https://api.chucknorris.io/jokes/random');
fetchPromise.then(response => {
  return response.json();
  
}).then(random => {
  console.log(random)
    const jokeContainer = document.getElementsByClassName('jokes')[0];
    const p = document.createElement('p');
    const image = document.createElement('img');
    p.innerText = random.value;
    image.src = random.icon_url;
    jokeContainer.appendChild(p);
    jokeContainer.appendChild(image);
    
   
    
});


const btn = document.querySelector('button');
console.log(btn);
 

btn.addEventListener('click', function() {
console.log('hello');



  



});