const root = document.getElementById('root');

fetch('http://localhost:5500')
    .then(res => res.json())
    .then((data) => {
        const productsList =[];
        const newData = [...productsList, ...data];
        const products = makeList(newData);
        console.log(products);
        root.innerHTML = products.join("");
    })
function makeList(productsList) {
    console.log(productsList);
    const result = productsList.map((item) => (
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
    // console.log(result);
    return result;
}
