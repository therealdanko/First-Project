const inventoryList = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

async function getproduct(){

const response = await fetch (inventoryList);

const data = await response.json ();

getproduct(); 

console.log(data)

}