import api from "./api.js";
// import editFunction from "./edit.js";

    const root = document.getElementById('root');
    localStorage.setItem("products", JSON.stringify(api));

    const products = JSON.parse(localStorage.getItem("products"));

    function makeList(products) {
        const items = [...products];
        const result = items.map((item) => (
            `
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.productName}</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.price}</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.priceSale}</td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="./edit.html?product=${item.id}" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
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