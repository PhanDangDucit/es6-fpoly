// export default function editFunction(id) {
//     const root = document.getElementById('root');
//     const editModalElement = document.createElement('div');
//     // console.log(btn);
//     // let id = 0;
//     // let btns = document.querySelectorAll('open-edit-btn');
//     // btns.forEach((btn, index) => {
//         // if(index == id) {
//             // btn.addEventListener('click', function () {
//                 const oldProducts = JSON.parse(localStorage.getItem("products"));
//                 console.log("oldProducts::", oldProducts);
//                 const product = oldProducts.find((product) => {
//                     return product.id == id;
//                 })
//                 // oldProducts
//                 console.log("product::", product);
                
//                 editModalElement.innerHTML = `<div class="w-80 mx-auto mt-5 p-7 relative">
//                     <div class="fixed hidden top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-gray-400" id="edit-modal">
//                         <div class="mt-3">
//                             <div>
//                                 <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name:</label>
//                                 <input value="${product.productName}" type="text" id="name-edit" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             </div>
//                             <div>
//                                 <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
//                                 <input value="${product.price}" type="text" id="price-edit" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             </div>
//                             <div>
//                                 <label for="priceSale" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price Sale</label>
//                                 <input value="${product.priceSale}" type="text" id="priceSale-edit" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             </div>
//                         </div>
//                         <button 
//                             id="save-edit-btn"
//                             class="mt-2 px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
//                         >
//                             Save
//                         </button>
//                         <button 
//                             id="close-edit-btn"
//                             class="mt-2 px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>`
//                 document.body.appendChild(editModalElement);
//                 let modal = document.getElementById('edit-modal');
//                 console.log(modal);
//                 oldProducts.splice(id - 1, 1);
//                 console.log("oldProducts::", oldProducts);
//                 modal.className="fixed top-0 left-0 right-0 bottom-0 mx-auto p-5 border w-96 h-96 mt-[100px] shadow-lg rounded-md bg-gray-400";
                
//                 let buttonClose = document.getElementById('close-edit-btn');
//                 let btnSave = document.getElementById('save-edit-btn');
//                 console.log(buttonClose);
                
//                 buttonClose.onclick = function () {
//                     modal.className="fixed hidden top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-gray-400";
//                 };
            
//                 btnSave.onclick = function () {
//                     const productNameNode = document.getElementById('name-edit');
//                     const productName = productNameNode.value;
//                     const priceNode = document.getElementById('price-edit');
//                     const price = priceNode.value;
//                     const priceSaleNode = document.getElementById('priceSale-edit');
//                     const priceSale = priceSaleNode.value;
//                     productNameNode.value = product.productName;
//                     priceNode.value = product.price;
//                     priceSaleNode.value = product.priceSale;

//                     const productEdited = {
//                         ...product,
//                         productName,
//                         price,
//                         priceSale
//                     }

//                     const products = [...oldProducts, productEdited];
//                     console.log(products);
//                     const productsList = makeList(products.sort((product1, product2) => product1.id - product2.id));
//                     root.innerHTML = productsList.join("");
//                     localStorage.setItem("products", JSON.stringify(products));
//                 };
//             }
//         // )
//         // }
//     // })
// // }

// function makeList(products) {
//     const items = [...products];
//     const result = items.map((item) => (
//         `
//             <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <td class="p-4 w-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
//                         <label for="checkbox-table-1" class="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.productName}</td>
//                 <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.price}</td>
//                 <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.priceSale}</td>
//                 <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//                     <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline" id="open-edit-btn" title="${item.id}">Edit</a>
//                 </td>
//             </tr>
//         `
//     ))
//     return result;
// }

import api from "./api.js";

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
