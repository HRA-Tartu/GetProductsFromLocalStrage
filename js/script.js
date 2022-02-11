var product_slider = document.querySelectorAll(".products .tumbnail>span")

var products = document.querySelector(".products-wrapper")

product_slider[0].addEventListener("click", function() {

    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("first_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[0].classList.add("active")

})
product_slider[1].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("second_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[1].classList.add("active")

})
product_slider[2].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("third_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[2].classList.add("active")

})
product_slider[3].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("forth_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[3].classList.add("active")

})
product_slider[4].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }

    products.classList.add("fifth_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[4].classList.add("active")

})


let productsInLocalStorage = JSON.parse(localStorage.products)

for(let i = 0;i<productsInLocalStorage.length;i++ ){
    let productElement = `<div class="products-item" data-id=${productsInLocalStorage[i].id}>
    <a href="product.html">
        <img src=${productsInLocalStorage[i].pictures[0]}
            alt="">
        <img src=${productsInLocalStorage[i].pictures[1]}
            alt="">
    </a>
    <button type="button" class="btn add-card"><img src="icons/shopping-bag-512.png"
            alt=""></button>
    <button type="button" class="btn quick-view"><img src="icons/eye-512.png" alt=""></button>
    <div class="product-info">
        <a target="_blank" href="product.html">${productsInLocalStorage[i].name}</a>
        <span>${productsInLocalStorage[i].price}</span>
    </div>
</div>`

    $("#products").append($(productElement))
}
