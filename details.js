async function getdetails() {
  const parm = new URLSearchParams(window.location.search);
  const id = parm.get("Id");
  console.log(id);

  const response = await axios.get("https://dummyjson.com/products");
  console.log(response.data.products);
  const { products } = response.data;
  const productIndex = products.findIndex(findid);
  function findid(product) {
    return product.id == id;
  }
  console.log(productIndex);
  const result = ` <div class="detailsInfo">
    <h1 class="productTitle">${products[productIndex].title}</h1>
    <img class="productImg" src="${products[productIndex].thumbnail}" />
    <p class="productDescription">${products[productIndex].description}</p>
    <p class="productPrice">Price: ${products[productIndex].price}$</p>
    <div class="productParchuse">
    <p class="productStock">${products[productIndex].stock} left in stock</p>
    <input type="button" class="buyProduct" value="Parchuse" />
    </div>
    </div>
    `;

  const imgsresult = products[productIndex].images
    .map((img) => {
      return `<div class="swiper-slide"> <img class="productImg" src="${img}" /></div> `;
    })
    .join("");
  // console.log(imgsresult);
  document.querySelector(".productDetails").innerHTML = result;
  document.querySelector(".swiper-wrapper").innerHTML = imgsresult;

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 3,
    centerSlidex: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 10,
      },
      675: {
        slidesPerView: 1,
        loopedSlides: 1,
        spaceBetween: 20,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
getdetails();
