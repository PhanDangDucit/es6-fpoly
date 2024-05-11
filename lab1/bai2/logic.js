import api from "./api.js";
const root = document.getElementById('root');

function makeList(arr) {
    const items = [...arr];
    const result = items.map((item) => (
        `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="single-product">
                    <div class="part-1">
                        <img width="100%" hieght="100%" src=${item.image} alt=""/>
                        <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                        </ul>
                    </div>
                    <div class="part-2" style="position:relative;">
                        <h3 class="product-title">${item.productName}</h3>
                        <h4 class="product-old-price">${item.price}</h4>
                        <h4 class="product-price">${item.priceSale}</h4>
                        <a href="./detail.html?product=${item.id}" style="position: absolute; height: 100%; width: 100%; top: 0; left:0;"></a>
                    </div>
                </div>
            </div>
        `
    ))
    return result;
}
const products = makeList(api);
root.innerHTML = products.join("");

