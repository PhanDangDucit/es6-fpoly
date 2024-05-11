const root = document.getElementById('root');
console.log(root);

const api = [
    {
        id: 1,
        productName: "Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Pond's Age Miracle giúp mờ đốm nâu, nếp nhăn với 50X Hexyl-Retinol 45g x 2",
        image: './skin.jpg',
        price: 800000,
        priceSale: 505000,  
    },
    {
        id: 2,
        productName: "Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Pond's Age Miracle giúp mờ đốm nâu, nếp nhăn với 50X Hexyl-Retinol 45g x 2",
        image: './skin.jpg',
        price: 800000,
        priceSale: 505000,  
    },
    {
        id: 3,
        productName: "Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Pond's Age Miracle giúp mờ đốm nâu, nếp nhăn với 50X Hexyl-Retinol 45g x 2",
        image: './skin.jpg',
        price: 800000,
        priceSale: 505000,  
    },
    {
        id: 4,
        productName: "Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Pond's Age Miracle giúp mờ đốm nâu, nếp nhăn với 50X Hexyl-Retinol 45g x 2",
        image: './skin.jpg',
        price: 800000,
        priceSale: 505000,  
    },
]

function makeList(arr) {
    const items = [...arr];
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
                    </div>
                </div>
            </div>
        `
    ))
    return result;
}

const products = makeList(api);
root.innerHTML = products.join("");