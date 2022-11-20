// const BASE_URL = "http://numbersapi.com";
// Part 1
// Promises
// axios.get(`${BASE_URL}/random/year?json`).then((res) => console.log(res));

// Async / Await
// const fetchApiData = async () => {
//   const { data } = await axios.get(`${BASE_URL}/random/trivia?json`);
//   console.log(data.text);
// };

// Part 2
// Promises
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

// Async/Await
// const MIN = 1;
// const MAX = 3;

// const fetchApiData = async () => {
//   const { data } = await axios.get(`${BASE_URL}/${MIN}..${MAX}`);
//   console.log(data);
// };

// Part 3
// const NUM = 7;
// Promises
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

// Async/ Await
// const fourPromises = Array(4).fill(axios.get(`${BASE_URL}/${NUM}?json`));
// const fetchApiData = async () => {
//   const res = await Promise.all(fourPromises);
//   for (let re of res) {
//     const li = $(`<li>${re.data.text}</li>`);
//     li.appendTo($("#facts"));
//   } // can also use array methods like forEach
// };

// const BASE_URL = "https://deckofcardsapi.com/api/deck/";

// PART 1
// Promises
// axios
//   .get(`${BASE_URL}/new/draw/?count=1`)
//   .then((res) =>
//     console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//   )
//   .catch((err) => console.log(err));

// Async/Await
// const fetchApiData = async () => {
//   const { data } = await axios.get(`${BASE_URL}/new/draw/?count=1`);
//   console.log(`${data.cards[0].value} of ${data.cards[0].suit}`);
// };

// PART 2
// Promises
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

// Async/Await
// const fetchApiData = async () => {
//   const res = await axios.get(`${BASE_URL}/new/draw/?count=1`);
//   const deckId = res.data.deck_id;
//   const { data } = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
//   console.log(
//     `Card 1: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`
//   );
//   console.log(`Card 2: ${data.cards[0].value} of ${data.cards[0].suit}`);
// };

// Part 3
// Promises
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

// Async/Await
// let deck_id;
// let remaining;

// const getNewDeck = async () => {
//   const { data } = await axios.get(`${BASE_URL}/new`);
//   deck_id = data.deck_id;
//   remaining = data.remaining;
//   // shuffle cards
//   await axios.get(`${BASE_URL}/${deck_id}/shuffle`);
// };

// const handleButtonClick = async () => {
//   if (remaining > 0) {
//     const { data } = await axios.get(`${BASE_URL}/${deck_id}/draw/?count=1`);
//     $("#showcase").append($(`<img src=${data.cards[0].image} />`));
//     remaining = data.remaining;
//   } else {
//     alert(
//       "You've drawed every card in this deck. Please refresh the page for a new deck."
//     );
//     cardButton.remove();
//   }
// };

// getNewDeck();

// const cardButton = $("<button>DRAW A CARD!</button>");
// $("#showcase").append(cardButton);
// cardButton.on("click", handleButtonClick);

const BASE_URL = "https://pokeapi.co/api/v2";
// let threePokemonPromises = [];
// let threeSpeciesPromises = [];

// Promises
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
//     Promise.all(threePokemonPromises)
//       .then((res) => {
//         res.forEach((pokemon) => {
//           axios.get(pokemon.data.species.url).then((res) => {
//             let flavor_entry = res.data.flavor_text_entries.find(
//               (entry) => entry.language.name === "en"
//             );
//             let name = res.data.name;
//             console.log(`${name}: ${flavor_entry.flavor_text}`);
//           });
//         });
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// Async/Await
const fetchApiData = async () => {
  const res = await axios.get(`${BASE_URL}/pokemon?limit=100000&offset=0`);
  const allPokemons = res.data.results;
  let threePokemonPromises = [];
  for (let i = 0; i < 3; i++) {
    const rand = Math.floor(Math.random() * allPokemons.length);
    threePokemonPromises.push(axios.get(allPokemons[rand].url));
  }
  const threePokemonRes = await Promise.all(threePokemonPromises);
  for (let res of threePokemonRes) {
    const name = res.data.name;
    const { data } = await axios.get(res.data.species.url);
    const entry = data.flavor_text_entries.find(
      (el) => el.language.name === "en"
    );
    console.log(`${name}: ${entry.flavor_text}`);
  }
};
