let skins, backblings, loadingScreens, pickaxes, gliders, emotes;
let randomitems;
let lockeditems = {
  skin: false,
  pickaxe: false,
  glider: false,
  emote: false,
  backbling: false,
  loadingScreen: false,
};

fetch("https://fortnite-api.com/v2/cosmetics/br")
  .then((response) => response.json())
  .then((data) => {
    const cosmetics = data.data;

    const filterWithShopHistory = (item) =>
      item.shopHistory && item.shopHistory.length > 0;

    skins = cosmetics.filter(
      (item) => item.type.value === "outfit" && filterWithShopHistory(item)
    );
    pickaxes = cosmetics.filter(
      (item) => item.type.value === "pickaxe" && filterWithShopHistory(item)
    );
    gliders = cosmetics.filter(
      (item) => item.type.value === "glider" && filterWithShopHistory(item)
    );
    emotes = cosmetics.filter(
      (item) => item.type.value === "emote" && filterWithShopHistory(item)
    );
    backblings = cosmetics.filter(
      (item) => item.type.value === "backpack" && filterWithShopHistory(item)
    );
    loadingScreens = cosmetics.filter(
      (item) =>
        item.type.value === "loadingscreen" && filterWithShopHistory(item)
    );
    setup();
  })
  .catch((error) => console.error("Error fetching data:", error));

const calculateDaysSince = (lastSeenDate) => {
  const lastSeen = new Date(lastSeenDate);
  const today = new Date();
  const diffTime = Math.abs(today - lastSeen);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

function setup() {
  randomitems = [
    skins[Math.floor(Math.random() * skins.length)],
    pickaxes[Math.floor(Math.random() * pickaxes.length)],
    gliders[Math.floor(Math.random() * gliders.length)],
    emotes[Math.floor(Math.random() * emotes.length)],
    loadingScreens[Math.floor(Math.random() * loadingScreens.length)],
    backblings[Math.floor(Math.random() * backblings.length)],
  ];
  console.log(randomitems);
  document.getElementById(
    "skin"
  ).innerHTML = `<div class="card ${randomitems[0].rarity.value}">
    <div class="index" id="daysskin"></div>
    <img src="${randomitems[0].images.icon}" class="outfit">
    <div class="name">${randomitems[0].name}</div>
    <div class="type">Outfit</div>
</div>`;
  document.getElementById(
    "pickaxe"
  ).innerHTML = `<div class="card ${randomitems[1].rarity.value}">
<div class="index" id="dayspickaxe"></div>
<img src="${randomitems[1].images.icon}" class="outfit">
<div class="name">${randomitems[1].name}</div>
<div class="type">Pickaxe</div>
</div>`;
  document.getElementById(
    "glider"
  ).innerHTML = `<div class="card ${randomitems[2].rarity.value}">
<div class="index" id="daysglider"></div>
<img src="${randomitems[2].images.icon}" class="outfit">
<div class="name">${randomitems[2].name}</div>
<div class="type">Glider</div>
</div>`;
  document.getElementById(
    "emote"
  ).innerHTML = `<div class="card ${randomitems[3].rarity.value}">
<div class="index" id="daysemote"></div>
<img src="${randomitems[3].images.icon}" class="outfit">
<div class="name">${randomitems[3].name}</div>
<div class="type">Outfit</div>
</div>`;
  document.getElementById(
    "loadingscreen"
  ).innerHTML = `<div class="card ${randomitems[4].rarity.value}">
<div class="index" id="daysloadingscreen"></div>
<img src="${randomitems[4].images.icon}" class="outfit">
<div class="name">${randomitems[4].name}</div>
<div class="type">Loading Screen</div>
</div>`;
  document.getElementById(
    "backbling"
  ).innerHTML = `<div class="card ${randomitems[5].rarity.value}">
<div class="index" id="daysbackbling"></div>
<img src="${randomitems[5].images.icon}" class="outfit">
<div class="name">${randomitems[5].name}</div>
<div class="type">Back Bling</div>
</div>`;
  document.getElementById("skin").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.skin) {
      lockeditems.skin = true;
      document.getElementById("daysskin").innerHTML = calculateDaysSince(
        randomitems[0].shopHistory[randomitems[0].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[0].shopHistory[randomitems[0].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("pickaxe").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.pickaxe) {
      lockeditems.pickaxe = true;
      document.getElementById("dayspickaxe").innerHTML = calculateDaysSince(
        randomitems[1].shopHistory[randomitems[11].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[1].shopHistory[randomitems[1].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("glider").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.glider) {
      lockeditems.glider = true;
      document.getElementById("daysglider").innerHTML = calculateDaysSince(
        randomitems[2].shopHistory[randomitems[2].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[2].shopHistory[randomitems[2].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("emote").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.emote) {
      lockeditems.emote = true;
      document.getElementById("daysemote").innerHTML = calculateDaysSince(
        randomitems[3].shopHistory[randomitems[3].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[3].shopHistory[randomitems[3].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("loadingscreen").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.loadingScreen) {
      lockeditems.loadingScreen = true;
      document.getElementById("daysloadingscreen").innerHTML = calculateDaysSince(
        randomitems[4].shopHistory[randomitems[4].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[4].shopHistory[randomitems[4].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("backbling").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.backbling) {
      lockeditems.backbling = true;
      document.getElementById("daysbackbling").innerHTML = calculateDaysSince(
        randomitems[5].shopHistory[randomitems[5].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[5].shopHistory[randomitems[5].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
}

function update() {
  document.getElementById("skin").innerHTML = `<div class="card ${
    randomitems[0].rarity.value
  }">
    <div class="index" id="daysskin">${
      lockeditems.skin
        ? calculateDaysSince(
            randomitems[0].shopHistory[randomitems[0].shopHistory.length - 1]
          )
        : ""
    }</div>
    <img src="${randomitems[0].images.icon}" class="outfit">
    <div class="name">${randomitems[0].name}</div>
    <div class="type">Outfit</div>
</div>`;
  document.getElementById("pickaxe").innerHTML = `<div class="card ${
    randomitems[1].rarity.value
  }">
<div class="index" id="dayspickaxe">${
    lockeditems.pickaxe
      ? calculateDaysSince(
          randomitems[1].shopHistory[randomitems[1].shopHistory.length - 1]
        )
      : ""
  }</div>
<img src="${randomitems[1].images.icon}" class="outfit">
<div class="name">${randomitems[1].name}</div>
<div class="type">Pickaxe</div>
</div>`;
  document.getElementById("glider").innerHTML = `<div class="card ${
    randomitems[2].rarity.value
  }">
<div class="index" id="daysglider">${
    lockeditems.glider
      ? calculateDaysSince(
          randomitems[2].shopHistory[randomitems[2].shopHistory.length - 1]
        )
      : ""
  }</div>
<img src="${randomitems[2].images.icon}" class="outfit">
<div class="name">${randomitems[2].name}</div>
<div class="type">Glider</div>
</div>`;
  document.getElementById("emote").innerHTML = `<div class="card ${
    randomitems[3].rarity.value
  }">
<div class="index" id="daysemote">${
    lockeditems.emote
      ? calculateDaysSince(
          randomitems[3].shopHistory[randomitems[3].shopHistory.length - 1]
        )
      : ""
  }</div>
<img src="${randomitems[3].images.icon}" class="outfit">
<div class="name">${randomitems[3].name}</div>
<div class="type">Emote</div>
</div>`;
  document.getElementById("loadingscreen").innerHTML = `<div class="card ${
    randomitems[4].rarity.value
  }">
<div class="index" id="daysloadingscreen">${
    lockeditems.loadingScreen
      ? calculateDaysSince(
          randomitems[4].shopHistory[randomitems[4].shopHistory.length - 1]
        )
      : ""
  }</div>
<img src="${randomitems[4].images.icon}" class="outfit">
<div class="name">${randomitems[4].name}</div>
<div class="type">Loading Screen</div>
</div>`;
  document.getElementById("backbling").innerHTML = `<div class="card ${
    randomitems[5].rarity.value
  }">
<div class="index" id="daysbackbling">${
    lockeditems.backbling
      ? calculateDaysSince(
          randomitems[5].shopHistory[randomitems[5].shopHistory.length - 1]
        )
      : ""
  }</div>
<img src="${randomitems[5].images.icon}" class="outfit">
<div class="name">${randomitems[5].name}</div>
<div class="type">Back Bling</div>
</div>`;
  document.getElementById("skin").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.skin) {
      lockeditems.skin = true;
      document.getElementById("daysskin").innerHTML = calculateDaysSince(
        randomitems[0].shopHistory[randomitems[0].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[0].shopHistory[randomitems[0].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("pickaxe").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.pickaxe) {
      lockeditems.pickaxe = true;
      document.getElementById("dayspickaxe").innerHTML = calculateDaysSince(
        randomitems[1].shopHistory[randomitems[1].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[1].shopHistory[randomitems[1].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("glider").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.glider) {
      lockeditems.glider = true;
      document.getElementById("dayglider").innerHTML = calculateDaysSince(
        randomitems[2].shopHistory[randomitems[2].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[2].shopHistory[randomitems[2].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document.getElementById("emote").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!lockeditems.emote) {
      lockeditems.emote = true;
      document.getElementById("daysemote").innerHTML = calculateDaysSince(
        randomitems[3].shopHistory[randomitems[3].shopHistory.length - 1]
      );
      document.getElementById("totaldays").innerHTML =
        Number(document.getElementById("totaldays").innerHTML) +
        calculateDaysSince(
          randomitems[3].shopHistory[randomitems[3].shopHistory.length - 1]
        );
      for (let index = 0; index < Object.keys(lockeditems).length; index++) {
        if (
          !(index === 0
            ? lockeditems.skin
            : index === 1
            ? lockeditems.pickaxe
            : index === 2
            ? lockeditems.glider
            : index === 3
            ? lockeditems.emote
            : index === 4
            ? lockeditems.loadingScreen
            : lockeditems.backbling)
        ) {
          randomitems[index] =
            index === 0
              ? skins[Math.floor(Math.random() * skins.length)]
              : index === 1
              ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
              : index === 2
              ? gliders[Math.floor(Math.random() * gliders.length)]
              : index === 3
              ? emotes[Math.floor(Math.random() * emotes.length)]
              : index === 4
              ? loadingScreens[
                  Math.floor(Math.random() * loadingScreens.length)
                ]
              : backblings[Math.floor(Math.random() * backblings.length)];
        }
      }

      update();
    }
  });
  document
    .getElementById("loadingscreen")
    .addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (!lockeditems.loadingScreen) {
        lockeditems.loadingScreen = true;
        document.getElementById("daysloadingscreen").innerHTML = calculateDaysSince(
            randomitems[4].shopHistory[randomitems[4].shopHistory.length - 1]
          );
          document.getElementById("totaldays").innerHTML =
            Number(document.getElementById("totaldays").innerHTML) +
            calculateDaysSince(
              randomitems[4].shopHistory[randomitems[4].shopHistory.length - 1]
            );
        for (let index = 0; index < Object.keys(lockeditems).length; index++) {
          if (
            !(index === 0
              ? lockeditems.skin
              : index === 1
              ? lockeditems.pickaxe
              : index === 2
              ? lockeditems.glider
              : index === 3
              ? lockeditems.emote
              : index === 4
              ? lockeditems.loadingScreen
              : lockeditems.backbling)
          ) {
            randomitems[index] =
              index === 0
                ? skins[Math.floor(Math.random() * skins.length)]
                : index === 1
                ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
                : index === 2
                ? gliders[Math.floor(Math.random() * gliders.length)]
                : index === 3
                ? emotes[Math.floor(Math.random() * emotes.length)]
                : index === 4
                ? loadingScreens[
                    Math.floor(Math.random() * loadingScreens.length)
                  ]
                : backblings[Math.floor(Math.random() * backblings.length)];
          }
        }

        update();
      }
    });
    document
    .getElementById("backbling")
    .addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (!lockeditems.backbling) {
        lockeditems.backbling = true;
        document.getElementById("daysbackbling").innerHTML = calculateDaysSince(
            randomitems[5].shopHistory[randomitems[5].shopHistory.length - 1]
          );
          document.getElementById("totaldays").innerHTML =
            Number(document.getElementById("totaldays").innerHTML) +
            calculateDaysSince(
              randomitems[5].shopHistory[randomitems[5].shopHistory.length - 1]
            );
        for (let index = 0; index < Object.keys(lockeditems).length; index++) {
          if (
            !(index === 0
              ? lockeditems.skin
              : index === 1
              ? lockeditems.pickaxe
              : index === 2
              ? lockeditems.glider
              : index === 3
              ? lockeditems.emote
              : index === 4
              ? lockeditems.loadingScreen
              : lockeditems.backbling)
          ) {
            randomitems[index] =
              index === 0
                ? skins[Math.floor(Math.random() * skins.length)]
                : index === 1
                ? pickaxes[Math.floor(Math.random() * pickaxes.length)]
                : index === 2
                ? gliders[Math.floor(Math.random() * gliders.length)]
                : index === 3
                ? emotes[Math.floor(Math.random() * emotes.length)]
                : index === 4
                ? loadingScreens[
                    Math.floor(Math.random() * loadingScreens.length)
                  ]
                : backblings[Math.floor(Math.random() * backblings.length)];
          }
        }
        
        update();
      }
    });
}
