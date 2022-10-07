//  custom events kurulumu
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "köpek",
  },
});
const birdFound = new CustomEvent("animalfound", {
  detail: {
    name: "kus",
  },
});

// uygun bir event listener eklenimi
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
obj.dispatchEvent(birdFound);
obj.dispatchEvent(dogFound);

//  "köpek" ve "kuş" consol'da loglandı.
