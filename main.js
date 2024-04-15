async function getproducts(){
const response = await axios.get("https://dummyjson.com/products");

const {products} = response.data;  //to get the prodducts i need t odo response.data , i dont need to do response.json to get the data
//console.log(products);
const result = products.map(product =>
{return `<div class="product"><h2 class="product-title">${product.title}</h2>
<img src="${product.thumbnail}" />
<a href="details.html?Id=${product.id}">Details</a>
</div>`;
}).join("");
document.querySelector(".menu").innerHTML = result;
}
 getproducts();
