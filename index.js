// Create the header element
const header = document.createElement('div');
header.classList.add('header');
header.innerHTML = '<h1>Shoe Factory</h1>';
document.body.appendChild(header);

// Create the container element
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create the template element
const template = document.createElement('div');
template.classList.add('template', 'fade-in');
template.innerHTML = `
    <h2>Welcome to Shoe Factory</h2>
    <p>Discover the latest trends and styles in footwear.</p>
`;
container.appendChild(template);

// Create the product elements
const products = [
    {
        id: 1,
        name: 'Shoe 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 50,
        image: 'shoe1.jpg'
    },
    {
        id: 2,
        name: 'Shoe 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 70,
        image: 'shoe2.jpg'
    }
];

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product', 'fade-in');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
    `;
    container.appendChild(productElement);
});
