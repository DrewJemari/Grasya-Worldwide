function addToCart(itemName, itemPrice) 
{
    let items = JSON.parse(localStorage.getItem('cartItems')) || [];

    items.push({name: itemName, price: itemPrice});

    localStorage.setItem('cartItems', JSON.stringify(items));
}

function showAlert() 
{
    alert("Item Added to Cart");
}