function getJoke() {
  const jokeContainer = document.getElementsByClassName("jokes")[0];
  const p = document.createElement("p");
  const image = document.createElement("img");
  const fetchPromise = fetchChuck();
  const hiden = document.body;
  fetchPromise
    .then(response => {
      // console.log(response);
      return response.json();
      
    })
    .then(random => {
      // console.log(random);
      p.innerText = random.value;
      image.src = random.icon_url;
  jokeContainer.innerHTML = '';

      jokeContainer.appendChild(p);
      jokeContainer.appendChild(image);

      
      
    });

    
    
    
    
}


function initBtnFunctionality() {
  const btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    console.log("Hello");
    getJoke();
   
    
  });
}

initBtnFunctionality();
getJoke();


function fetchChuck() {
  return fetch("https://api.chucknorris.io/jokes/random");

}

