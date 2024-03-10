async function getProducts(){
    let response=await fetch("https://dummyjson.com/products");
    let data = await response.json();
    console.log(data);
    let products=data.products;
    console.log(products);
    const result =products.map(function(product){
        return `
        <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}"/>
        <h4>The Price: ${product.price}</h4>
        </div>
        `;
    }).join("");
    console.log(result);
    document.querySelector(".products").innerHTML=result;
}
getProducts();
