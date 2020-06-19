



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
      <strike>${product[i].crossed_price}</strike><strong>${product[i].price}</strong>
  </div>
  <div id="myModal" class="modal">
    <div id="img01"> ${product[i].description} <button class="buynow"> BUY NOW</button>
      <span class="close">&times;</span> </div>
    </p>

  </div>

</div>
` )




}
div.innerHTML = products.join('')





function myFunction () {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction1 () {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
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




document.addEventListener('input', (e) => {
  const selectCategory = document.getElementById('select-category');
  if (e.target === selectCategory) {
    const productBoxes = div;
    const categoryVal = document.querySelectorAll('#select-category option');

    if (selectCategory.value === 'all') {
      show(productBoxes)
    } else {
      hide(productBoxes)
    }
    const matches = document.querySelectorAll(`[category*="${selectCategory.value}"]`)
    show(matches)
  }

})


const hide = (items) => {
  Array.prototype.forEach.call(items, prodItem => {
    prodItem.classList.add('hide')
  })
}
const show = (items) => {
  Array.prototype.forEach.call(items, prodItem => {
    prodItem.classList.remove('hide')
  })
}
