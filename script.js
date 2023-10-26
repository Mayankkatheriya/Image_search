let btn = document.querySelector("button");
let input = document.querySelector("input");
let images = document.querySelector(".images");
let loading = document.querySelector(".loading");
let dialog = document.querySelector("#myDialog");
btn.addEventListener("click", (e) => {
  images.innerHTML = "";
  let search = input.value;
  loading.style.display = "flex";
  setTimeout(async () => {
    let data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`
    );
    let res = await data.json();

    //todo ---------- to crate element ----------
    res.results.forEach((elem) => {
      let div = document.createElement("div");
      div.innerHTML = `
                <img src="${elem.urls.full}" onclick="fullImage('${elem.urls.full}')" alt="Error" class="fetchingImage">
                <a href="${elem.links.html}">${elem.alt_description}</a>
            `;
      images.appendChild(div);
    });
    input.value = "";
    loading.style.display = "none";
  }, 2000);
});

function fullImage(img) {
  dialog.innerHTML = `
    <img src="${img}" alt="">
    <button id = "close" onclick = "dialog.close()">close</button>
    `;
  dialog.show();
}