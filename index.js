



const products = []
for (var i = 0; i < product.length; i++) {

  var div = document.getElementById('items')
  products.push(div.innerHTML = ` 

  <div class="div">
  <div category="all" class="product">
    <img class="image" src="${product[i].image_link_mb}" alt="" width="500px"
      style="border-bottom: 1px solid light-grey">
    <div class="des">
      <p class="title"> ${product[i].title}</p>
    </div>
    <p data-price="${product[i].price}">
      <strike>${product[i].crossed_price}</strike><strong>${product[i].price}</strong>  <div id="myModal" class="modal">
      <div id="img01"> <div id
      ="modaltext"> ${product[i].description} </div><button class="buynow"> BUY NOW</button>
        <span class="close">&times;</span> </div> </p>
  </div>
 
    

  </div>

</div>
` )




}
div.innerHTML = products.join('')













var modal = document.getElementById('myModal');



var modaltext = document.getElementById('modaltext')


var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}





var showModal = function () {
  modal.style.display = "block";


}



function itemfilter () {
  const fil = document.getElementById('select-category2').value

  if (fil === 'gold') {
    console.log('yes, gold')

    const filteredpro = product.filter((g) => g.description.includes('gold'))
    const filterProd = []
    for (const pro of filteredpro) {
      var div = document.getElementById('items')
      filterProd.push(
        (div.innerHTML = ` 
  
    <div class="div">
    <div category="all" class="product">
      <img class="image" src="${pro.image_link_mb}" alt="" width="500px"
        style="border-bottom: 1px solid light-grey">
      <div class="des">
        <p class="title"> ${pro.title}</p>
      </div>
      <p data-price="${pro.price}">
        <strike>${pro.crossed_price}</strike><strong>${pro.price}</strong>
    </div>
    <div id="myModal" class="modal">
      <div id="img01"> ${pro.description} <button class="buynow"> BUY NOW</button>
        <span  id= "close" class="close">&times;</span> </div>
      </p>
  
    </div>
  
  </div>
  `)
      )
    }
    div.innerHTML = filterProd.join('')
    document.getElementById('result').innerHTML = filterProd.length


  } else if (fil === 'silver') {
    console.log('yes, silver')

    const filteredpro = product.filter((g) => g.description.includes('silver'))
    const filterProd = []
    for (const pro of filteredpro) {
      var div = document.getElementById('items')
      filterProd.push(
        (div.innerHTML = ` 
  
    <div class="div">
    <div category="all" class="product">
      <img class="image" src="${pro.image_link_mb}" alt="" width="500px"
        style="border-bottom: 1px solid light-grey">
      <div class="des">
        <p class="title"> ${pro.title}</p>
      </div>
      <p data-price="${pro.price}">
        <strike>${pro.crossed_price}</strike><strong>${pro.price}</strong>
    </div>
    <div id="myModal" class="modal">
      <div id="img01"> ${pro.description} <button class="buynow"> BUY NOW</button>
        <span id="close" class="close">&times;</span> </div>
      </p>
  
    </div>
  
  </div>
  `)
      )
    }
    div.innerHTML = filterProd.join('')
    document.getElementById('result').innerHTML = filterProd.length
  }


  var modal = document.getElementById('myModal');


  var modalImg = document.getElementById("img01");




  for (var i = 0; i < images.length; i++) {
    var img = images[i];

    img.onclick = function (evt) {
      modal.style.display = "block";
      modalImg.src = this.src;


    }
  }



  var span = document.getElementById("close");

  span.onclick = function () {
    modal.style.display = "none";
  }





  var showModal = function () {
    modal.style.display = "block";
    modalImg.textContent = `${products[i].description}`;

  }


  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
    modalImg.textContent = "`${products[i].description}`";
  }
}



function itemSort () {
  const sor = document.getElementById('select-category').value
  if (sor === 'highest') {
    const sorted = product.sort((b, a) =>
      a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    )
    var sortedProd = []
    for (const sort of product) {
      sortedProd.push(`<div class="div">
    <div category="all" class="product">
      <img class="image" src="${sort.image_link_mb}" alt="" width="500px"
        style="border-bottom: 1px solid light-grey">
      <div class="des">
        <p class="title"> ${sort.title}</p>
      </div>
      <p data-price="${sort.price}">
        <strike>${sort.crossed_price}</strike><strong>${sort.price}</strong>
    </div>
    <div id="myModal" class="modal">
      <div id="img01"> ${sort.description} <button class="buynow"> BUY NOW</button>
        <span class="close">&times;</span> </div>
      </p>
  
    </div>
  
  </div>`)
    }
    div.innerHTML = sortedProd.join('')
    document.getElementById('result').innerHTML = sortedProd.length
  } else if (sor === 'lowest') {
    const sorted = product.sort((a, b) =>
      a.price < b.price ? -1 : a.price > b.price ? 1 : 0
    )
    var sortedProd = []
    for (const sort of product) {
      sortedProd.push(`<div class="div">
    <div category="all" class="product">
      <img class="image" src="${sort.image_link_mb}" alt="" width="500px"
        style="border-bottom: 1px solid light-grey">
      <div class="des">
        <p class="title"> ${sort.title}</p>
      </div>
      <p data-price="${sort.price}">
        <strike>${sort.crossed_price}</strike><strong>${sort.price}</strong>
        <div id="myModal" class="modal">
        <div id="img01"> ${sort.description} <button class="buynow"> BUY NOW</button>
          <span class="close">&times;</span> </div>
        </p>
    
      </div>
    </div>

    
 
  
  </div>`)
    }
    div.innerHTML = sortedProd.join('')
    document.getElementById('result').innerHTML = sortedProd.length
  }

  // create references to the modal...
  var modal = document.getElementById('myModal');
  // to all images -- note I'm using a class!
  var images = document.getElementsByClassName('image');
  // the image in the modal
  var modalImg = document.getElementById("img01");



  // Go through all of the images with our custom class
  for (var i = 0; i < products.length; i++) {
    var img = images[i];

    img.onclick = function (evt) {
      modal.style.display = "block";
      modalImg.src = this.src;


    }
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  }





  var showModal = function () {
    modal.style.display = "block";
    modalImg.textContent = `${products[i].description}`;

  }


  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
    modalImg.textContent = "`${products[i].description}`";
  }
}






















var modal = document.getElementById('myModal')
var images = document.getElementsByClassName('image');
var modalImg = document.getElementById("img01");




for (var i = 0; i < products.length; i++) {
  var img = images[i];

  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;


  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}





var showModal = function () {
  modal.style.display = "block";
  modalImg.textContent = `${products[i].description}`;

}


for (var i = 0; i < img.length; i++) {
  img[i].addEventListener('click', showModal);
  modalImg.textContent = "`${products[i].description}`";
}
