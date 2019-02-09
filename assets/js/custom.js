//variable functions begin
function isNew(product) {
  if (product.params.isNew) {
    return `<div class="isNew">NEU</div>`;
  }
  return "";
}

function likeCount(product) {
  if (product.params.likeCount) {
    return `<div class="likeCount">&#x2661;${product.params.likeCount}</div>`;
  }
  return "";
}

function landRegionArt(product) {
  let segments = "";
  if (product.params.land) {
    segments += `${product.params.land} | `;
  }

  if (product.params.region) {
    segments += `${product.params.region} | `;
  }

  if (product.params.art) {
    segments += `${product.params.art} `;
  }

  return `<div class="land-region-art">${segments}</div>`;
}

function getPrices(product) {
  if (product.price) {
    return `<div class="price">${product.price} € *</div>`;
  }
  return "";
}

function getOldPrices(product) {
  if (product.oldPrice) {
    return `<div class="price-old-price">${product.oldPrice} € *
    </div>`;
  }
  return "";
}
function getbasePrice(product) {
  if (product.params.basePrice) {
    return `<div class="basePrice">${product.params.basePrice}</div>`;
  }
  return "";
}
//variable functions end

//DOM begin
products.forEach(function (product) {
  $('.products').append(`
  <div class="product">
    <div class="top">
       <div class="discount">
          ${isNew(product)}
          ${likeCount(product)}
        </div>
        <div class="imageS">
            <img src="${product.imageS}" alt="champaigne" style="width: 60px; height:200px;">
        </div>
    </div>

    <div class="bottom">
      <div class="name">${product.name}</div>
        ${landRegionArt(product)}
      <div class="prices">
        <div class="price">${product.price} € *</div>  
        ${getOldPrices(product)}
        ${getbasePrice(product)}
      </div>
    </div>
</div>`);
});
//DOM end

// Responsive lib codes begin
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
//Responsive lib codes end
