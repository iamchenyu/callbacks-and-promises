// const BASE_URL = "http://numbersapi.com";
// Part 1
// axios.get(`${BASE_URL}/random/year?json`).then((res) => console.log(res));

// Part 2
// let factsPromises = [];

// for (let i = 0; i < 4; i++) {
//   factsPromises.push(axios.get(`${BASE_URL}/${i}?json`));
// }

// Promise.all(factsPromises)
//   .then((factsArr) => {
//     factsArr.forEach((fact) => {
//       const factLi = $(`<li>${fact.data.text}</li>`);
//       factLi.appendTo($("#facts"));
//     });
//   })
//   .catch((err) => console.log(err));

// Part 3
// const NUM = 7;

// axios
//   .get(`${BASE_URL}/${NUM}/math?json`)
//   .then((res) => {
//     const li = $(`<li>${res.data.text}</li>`);
//     li.appendTo($("#facts"));
//     return axios.get(`${BASE_URL}/${NUM}/trivia?json`);
//   })
//   .then((res) => {
//     const li = $(`<li>${res.data.text}</li>`);
//     li.appendTo($("#facts"));
//     return axios.get(`${BASE_URL}/${NUM}/math?json`);
//   })
//   .then((res) => {
//     const li = $(`<li>${res.data.text}</li>`);
//     li.appendTo($("#facts"));
//     return axios.get(`${BASE_URL}/${NUM}/year?json`);
//   })
//   .then((res) => {
//     const li = $(`<li>${res.data.text}</li>`);
//     li.appendTo($("#facts"));
//   })
//   .catch((err) => console.log(err));

// const BASE_URL = "https://deckofcardsapi.com/api/deck/";

// PART 1
// axios
//   .get(`${BASE_URL}/new/draw/?count=1`)
//   .then((res) =>
//     console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//   )
//   .catch((err) => console.log(err));

// PART 2
// axios
//   .get(`${BASE_URL}/new/draw/?count=1`)
//   .then((res) => {
//     const deckId = res.data.deck_id;
//     console.log(
//       `card1: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`
//     );
//     return axios.get(`${BASE_URL}/${deckId}/draw?count=1`);
//   })
//   .then((res) => {
//     console.log(
//       `card2: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`
//     );
//   })
//   .catch((err) => console.log(err));

// Part 3
// let deckID;
// let remaining;

// const handleButtonClick = () => {
//   if (remaining > 0) {
//     axios
//       .get(`${BASE_URL}/${deckId}/draw`)
//       .then((res) => {
//         const card = res.data.cards[0];
//         $("#showcase").append($(`<img src=${card.image} />`));
//         console.log(res.data.remaining);
//         remaining = res.data.remaining;
//       })
//       .catch((err) => console.log(err));
//   } else {
//     alert(
//       "You've drawed every card in this deck. Please refresh the page for a new deck."
//     );
//     cardButton.remove();
//   }
// };

// axios
//   .get(`${BASE_URL}/new`)
//   .then((res) => {
//     deckId = res.data.deck_id;
//     remaining = res.data.remaining;
//     console.log(remaining);
//   })
//   .catch((err) => console.log(err));

// const cardButton = $("<button>DRAW A CARD!</button>");
// $("#showcase").append(cardButton);

// cardButton.on("click", handleButtonClick);

const BASE_URL = "https://pokeapi.co/api/v2";
let threePokemonPromises = [];
let threeSpeciesPromises = [];

// Option 1
// Part 1
// axios
//   .get(`${BASE_URL}/pokemon?limit=100000&offset=0`)
//   .then((res) => {
//     const pokemonPromises = res.data.results;
//     const pokemonCounts = res.data.results.length;
//     // Part 2
//     for (let i = 0; i < 3; i++) {
//       let rand = Math.floor(Math.random() * pokemonCounts);
//       threePokemonPromises.push(axios.get(pokemonPromises[rand].url));
//     }
//     // Part 3
//     return Promise.all(threePokemonPromises);
//   })
//   .then((res) => {
//     res.forEach((pokemon) => {
//       const name = pokemon.data.name;
//       console.log(name);
//       threeSpeciesPromises.push(axios.get(pokemon.data.species.url));
//     });
//     return Promise.all(threeSpeciesPromises);
//   })
//   .then((res) => {
//     res.forEach((el) => {
//       const des = el.data.flavor_text_entries.find(
//         (entry) => entry.language.name === "en"
//       );
//       console.log(des.flavor_text);
//     });
//   })
//   .catch((err) => console.log(err));

// Option 2
// Part 1
axios
  .get(`${BASE_URL}/pokemon?limit=100000&offset=0`)
  .then((res) => {
    const pokemonPromises = res.data.results;
    const pokemonCounts = res.data.results.length;
    // Part 2
    for (let i = 0; i < 3; i++) {
      let rand = Math.floor(Math.random() * pokemonCounts);
      threePokemonPromises.push(axios.get(pokemonPromises[rand].url));
    }
    // Part 3
    Promise.all(threePokemonPromises)
      .then((res) => {
        res.forEach((pokemon) => {
          axios.get(pokemon.data.species.url).then((res) => {
            let flavor_entry = res.data.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            );
            let name = res.data.name;
            console.log(`${name}: ${flavor_entry.flavor_text}`);
          });
        });
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
