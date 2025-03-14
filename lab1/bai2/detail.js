import api from "./api.js";

// function change_image(image){
//     var container = document.getElementById("main-image");
//     container.src = image.src;
// }

document.addEventListener("DOMContentLoaded", function() {
    const imagePart = document.getElementById("image");
    const viewProduct = document.getElementById("view-product");
    console.log(imagePart);
    console.log(viewProduct);
    const params = new URLSearchParams(document.location.search);
    const idProduct = params.get('product');
    const product = api.find((item) => item.id == idProduct);
    viewProduct.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="images p-3" id="image">
                    <div class="text-center p-4">
                        <img id="main-image" src=${product.image} width="250" alt=""/>
                    </div>
                    <div class="thumbnail text-center">
                        <img src=${product.image} width="70" alt=""> 
                        <img src=${product.image} width="70" alt="">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="product p-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Orianz</span>
                        <h5 class="text-uppercase">${product.productName}</h5>
                        <div class="price d-flex flex-row align-items-center"> <span class="act-price">${product.price} d</span>
                            <div class="ml-2"> <small class="dis-price">${product.priceSale} d</small> <span>${Math.round((product.price - product.priceSale)/(product.price) * 100)} % OFF</span> </div>
                        </div>
                    </div>
                    <p class="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                    <div class="sizes mt-5">
                        <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" checked> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M"> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L"> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL"> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"> <span>XXL</span> </label>
                    </div>
                    <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                </div>
            </div>
        </div>
    `
});
