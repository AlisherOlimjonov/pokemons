"use strict";

// {
//     "id": 1,
//     "name": "Bulbasaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//     "type": [
//     "Grass",
//     "Poison"
//     ],
//
// },

String.prototype.fn = function (arg) {
  return arg + 1;
  ozgaruvchi: () => {
    console.log(1);
  };
};

console.log([1, 2].join(""));

console.log(String.prototype.fn("salom"));

// const getData = async () => {
//   try {
//     const response = await fetch("https://google.com", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: {
//         id: 5,
//         title: "Change",
//       },
//     });
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

let wrapper = document.querySelector(".wrapper"),
  newPokemon = pokemons.slice(0, 5),
  searchInput = document.querySelector(".search"),
  searchBtn = document.querySelector(".searchBtn"),
  selectType = document.querySelector("#select"),
  alphabet = document.querySelector("#alphabet"),
  price = document.querySelector("#price"),
  uzunlik = document.querySelector(".uzunlik"),
  load = document.querySelector(".load");

let mapPoke = newPokemon.map((item) => {
  item.num = "0";
  if (!newPokemon.includes(newPokemon)) {
    return newPokemon;
  }
});
console.log(mapPoke);
// console.log(mapPoke);

// plusBtn.addEventListener("click",(e)=>{
//     console.log(e.target);
// })
// add = document.querySelector(".icon");
wrapper.addEventListener("click", (e) => {
  let plusBtn = document.querySelector(".plusbtn"),
    minusBtn = document.querySelector(".minusbtn"),
    add = document.querySelector(".add");
  // plusBtn.addEventListener("click",(e)=>{
  //     console.log(`+`);
  // });

  // minusBtn.addEventListener("click",(e)=>{
  //     console.log(`-`);
  // });
  // add.addEventListener("click",(e)=>{
  //     console.log(`Korzinkaga qoshuvchi icon bosildi`);
  // });

  if (e.target.matches(".plusbtn")) {
    console.log(plusBtn);
    plusBtn.addEventListener("click", (e) => {
      console.log(1);
    });
  }
  // if(e.target.matches(".minusbtn")){
  //     console.log(e.target);
  // }
  // if(e.target.matches(".add")){
  //     console.log(e.target);
  // }
});
// console.log(add);

function renderData(dataBase) {
  dataBase.forEach((item) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
        <div class="icon"><img src="addCircle.png" class="add"></div>
        <img src = "${item.img}">
        <p>Id : ${item.id}</p>
        <p>Name : ${item.name}</p>
        <p>Type : ${item.type.join(",")}</p>
        <p>Price : $${item.avg_spawns}</p>
        <div class="primediv">
        <button class = "minusbtn">-</button>
        <p class ="count" >0</p>
        <button class = "plusbtn">+</button>

        </div>
        `;

    wrapper.appendChild(card);
  });
  if (dataBase.length === 0) {
    uzunlik.textContent = `${0} ta element topildi`;
  } else {
    uzunlik.textContent = `${dataBase.length} ta element topildi`;
  }
}

renderData(newPokemon);

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newArrayByName = [];
  let resultInput = searchInput.value.trim();
  wrapper.innerHTML = null;
  newPokemon.forEach((item) => {
    if (item.name.toLowerCase().includes(`${resultInput.toLowerCase()}`)) {
      newArrayByName.push(item);
    }
  });
  renderData(newArrayByName);
  // console.log(newArrayByName);
});
searchInput.addEventListener("input", (e) => {
  e.preventDefault();
  // console.log(1);
  let newArrayByName = [];
  let resultInput = searchInput.value.trim();
  wrapper.innerHTML = null;
  newPokemon.forEach((item) => {
    if (item.name.toLowerCase().includes(`${resultInput.toLowerCase()}`)) {
      newArrayByName.push(item);
    }
  });
  renderData(newArrayByName);
});

// newPokemon.forEach((item)=>{
//     let newArray =[];
//     let option = document.createElement("option");
//     option.innerHTML = `salom`;
//     selectType.appendChild(option)
// })

function getPokeType(param) {
  let newArray = [];
  param.forEach((item) => {
    item.type.forEach((item) => {
      if (!newArray.includes(item)) {
        newArray.push(item);
      }
    });
  });
  //  console.log(newArray);
  newArray.forEach((item) => {
    let option = document.createElement("option");
    option.innerHTML = `${item}`;
    selectType.appendChild(option);
  });

  selectType.addEventListener("change", (e) => {
    let newArr = [];
    console.log(e.target.value);
    wrapper.innerHTML = null;

    param.forEach((item) => {
      if (item.type.includes(e.target.value)) {
        console.log(1);
        newArr.push(item);
      }
    });
    console.log(newArr);
    newPokemon = newArr;
    renderData(newArr);
  });
}
getPokeType(newPokemon);

// console.log(newPokemon.type);

selectType.addEventListener("change", (e) => {
  if (e.target.value === "all") {
    renderData(newPokemon);
  }
});

alphabet.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);

  let newArray = [];
  if (e.target.value === "a-z") {
    console.log(1);
    wrapper.innerHTML = null;
    let newElements = newPokemon.sort((item, value) => {
      if (item.name < value.name) {
        return -1;
      }
      if (item.name > value.name) {
        return 1;
      }
    });
    console.log(newElements);
    renderData(newElements);
  }
  if (e.target.value === "z-a") {
    console.log(1);
    wrapper.innerHTML = null;
    let newElements = newPokemon.sort((item, value) => {
      if (item.name < value.name) {
        return 1;
      }
      if (item.name > value.name) {
        return -1;
      }
    });
    console.log(newElements);
    renderData(newElements);
  }
});

price.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
  let newArr = [];

  if (e.target.value === "expensive") {
    wrapper.innerHTML = null;
    let sortByPrice = newPokemon.sort((a, b) => {
      if (a.avg_spawns < b.avg_spawns) {
        return 1;
      }
      if (a.avg_spawns > b.avg_spawns) {
        return -1;
      }
    });
    // console.log(sortByPrice);
    renderData(sortByPrice);
  }
  if (e.target.value === "cheep") {
    wrapper.innerHTML = null;
    let sortByPrice = newPokemon.sort((a, b) => {
      if (a.avg_spawns < b.avg_spawns) {
        return -1;
      }
      if (a.avg_spawns > b.avg_spawns) {
        return 1;
      }
    });
    // console.log(sortByPrice);
    renderData(sortByPrice);
  }
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});

// add.addEventListener("click",(e)=>{
//     console.log(e.target);
// })
