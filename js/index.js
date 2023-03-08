document.querySelector(`#username`).addEventListener(`input`, function (evt) {
  document.querySelector(".username-container").innerHTML = evt.target.value;
});

document
  .querySelector(`#frame-picker`)
  .addEventListener(`input`, function (evt) {
    document.querySelector(".frame").style.backgroundColor = evt.target.value;
  });

document
  .querySelector(`#tshirt-picker`)
  .addEventListener(`input`, function (evt) {
    document.querySelector(".tshirt-color").style.fill = evt.target.value;
  });

document.querySelector(`#frame-select`).addEventListener(`input`, function (e) {
  value = e.target.value;
  document.querySelector(`.frame`).classList = `frame frame-${value}`;
});

document.querySelector(".form-range").addEventListener(`input`, function (evt) {
  document.querySelector(`.hair`).src = `/assets/hair-${evt.target.value}.svg`;
});

function hatRange() {
  document.querySelector(`#hat-range`).addEventListener(`input`, function (e) {
    document.querySelector(`.hat`).src = `/assets/hat-${e.target.value}.svg`;
  });
}

document.querySelector(`#hat-check`).addEventListener(`input`, function (e) {
  if (e.target.checked) {
    document.querySelector(`#hat-range`).disabled = false;
    document.querySelector(`.hat`).classList.toggle(`hidden`);
    hatRange();
  } else {
    document.querySelector(`#hat-range`).disabled = true;
    document.querySelector(`.hat`).classList.toggle(`hidden`);
  }
});

function glassesRange() {
  document
    .querySelector(`#glasses-range`)
    .addEventListener(`input`, function (e) {
      document.querySelector(
        `.glasses`
      ).src = `/assets/glasses-${e.target.value}.svg`;
    });
}

document
  .querySelector(`#glasses-check`)
  .addEventListener(`input`, function (e) {
    if (e.target.checked) {
      document.querySelector(`#glasses-range`).disabled = false;
      document.querySelector(`.glasses`).classList.toggle(`hidden`);
      glassesRange();
    } else {
      document.querySelector(`#glasses-range`).disabled = true;
      document.querySelector(`.glasses`).classList.toggle(`hidden`);
    }
  });

function earingsRange() {
  document
    .querySelector(`#earings-range`)
    .addEventListener(`input`, function (e) {
      document.querySelector(
        `.earings`
      ).src = `/assets/earings-${e.target.value}.svg`;
    });
}

document
  .querySelector(`#earings-check`)
  .addEventListener(`input`, function (e) {
    if (e.target.checked) {
      document.querySelector(`#earings-range`).disabled = false;
      document.querySelector(`.earings`).classList.toggle(`hidden`);
      earingsRange();
    } else {
      document.querySelector(`#earings-range`).disabled = true;
      document.querySelector(`.earings`).classList.toggle(`hidden`);
    }
  });
