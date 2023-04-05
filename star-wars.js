// async function pobierz () {

// }

const pobierzDane = async () => {
      const wynik = await fetch("https://swapi.dev/api/people");
      const dane = await wynik.json();
      dane.results.forEach( (element) => {
         dodajPostac(element);
      } );
}

pobierzDane();


{/* <article class="card">
<h3>Luke Skywalker</h3>
<span>Rasa: człowiek</span>
<span>Kolor oczu: niebieski</span>
<span>Kolor skóry: biała</span>
<div>
    <span>Wzrost: 172cm</span>
    <span>Waga: 77kg</span>
</div>
</article> */}

const sekcjaKarty = document.querySelector("#wrapper");

const dodajPostac = (postac) => {
     console.log(postac,"123");
     const karta = document.createElement("article");
     karta.classList.add("card");
     console.log(12345);

     const nazwaPostaci = document.createElement("h3");
   
     nazwaPostaci.textContent = postac.name;

     const plecPostaci = document.createElement("span");
     plecPostaci.textContent = "Płeć: " + postac.gender;

     karta.append(nazwaPostaci);
     karta.append(plecPostaci);

     sekcjaKarty.append(karta);

}


