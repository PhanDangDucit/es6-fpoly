
const root = document.getElementById('root');
console.log(root);

async function makeList() {
    // const items = [...arr];
    const result = products.map((item) => (
        `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="single-product">
                    <div class="part-1">
                        <img src=${item.image} alt=""/>
                        <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                        </ul>
                    </div>
                    <div class="part-2">
                        <h3 class="product-title">${item.productName}</h3>
                        <h4 class="product-old-price">${item.price}</h4>
                        <h4 class="product-price">${item.priceSale}</h4>
                    </div>
                </div>
            </div>
        `
    ))
    return result;
}

const products = makeList();
root.innerHTML = products.join("");