function displayCart() 
{
    let items = JSON.parse(localStorage.getItem('cartItems')) || [];

    let cartDetails = '';
    items.forEach(item => {
        cartDetails += `Item: ${item.name}, Price: ${item.price}\n`;
    });

    document.getElementById('cartDetails').value = cartDetails;
}

function clearCart() 
{
    document.getElementById('cartDetails').value = '';
    localStorage.removeItem('cartItems');
}

function checkOut() 
{
    document.getElementById('checkoutForm').style.display = 'block';
}

function placeOrder() 
{
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    document.getElementById('orderDetails').value = `Name: ${name}\nAddress: ${address}\nContact: ${contact}\n\nOrder Placed!`;
}

function clearDetails() 
{
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('contact').value = '';
}

document.addEventListener('DOMContentLoaded', (event) => 
{
    displayCart();
});