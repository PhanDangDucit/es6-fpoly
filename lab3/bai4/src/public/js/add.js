import api from "./api.js";
(function(){
    const root = document.getElementById('root');
    console.log(root);
    localStorage.setItem("products", JSON.stringify(api));

    const products = JSON.parse(localStorage.getItem("products"));

    function makeList(products) {
        const items = [...products];
        const result = items.map((item) => (
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
                            <a href="./detail.html?product=${item.id}" style="position: absolute; height: 100%; width: 100%; top: 0; left:0;"></a>
                        </div>
                    </div>
                </div>
            `
        ))
        return result;
    }

    const productsList = makeList(products);
    root.innerHTML = productsList.join("");

    let modal = document.getElementById('modal');
    console.log(modal);
    let btn = document.getElementById('open-btn');
    console.log(btn);
    let buttonClose = document.getElementById('close-btn');
    let btnSave = document.getElementById('ok-btn');
    console.log(buttonClose);

    btn.onclick = function () {
        modal.className="fixed top-0 left-0 right-0 bottom-0 mx-auto p-5 border w-96 h-96 mt-[100px] shadow-lg rounded-md bg-gray-400";
        console.log("What?");
    };

    buttonClose.onclick = function () {
        modal.className="fixed hidden top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-gray-400";
    };

    btnSave.onclick = function () {
        const productNameNode = document.getElementById('name');
        const productName = productNameNode.value;
        const priceNode = document.getElementById('price');
        const price = priceNode.value;
        const priceSaleNode = document.getElementById('priceSale');
        const priceSale = priceSaleNode.value;
        const id = Math.round(Math.random());
        const newProduct = {
            id,
            productName,
            price,
            priceSale,
            image: './public/images/skin.jpg'
        }
        productNameNode.value = '';
        priceNode.value = '';
        priceSaleNode.value = '';
        
        const oldProducts = JSON.parse(localStorage.getItem("products"));
        const products = [...oldProducts, newProduct];
        console.log(products);
        console.log(oldProducts);
        localStorage.setItem("products", JSON.stringify(products));
        const newProductList = JSON.parse(localStorage.getItem("products"));
        const productsList = makeList(newProductList);
        modal.className="fixed hidden top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-gray-400";
        root.innerHTML = productsList.join("");
    };
})()