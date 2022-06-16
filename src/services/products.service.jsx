const products = [
    {
        id: 1,
        name: "Producto 1",
        category: "1",
        description: "El producto perfecto para lo que necesitas.",
        price: 10,
        stock: 20,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        id: 2,
        name: "Producto 2",
        category: "2",
        description: "El producto perfecto para lo que necesitas.",
        price: 15,
        stock: 5,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        id: 3,
        name: "Producto 3",
        category: "2",
        description: "El producto perfecto para lo que necesitas.",
        price: 25,
        stock: 15,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        id: 4,
        name: "Producto 4",
        category: "3",
        description: "El producto perfecto para lo que necesitas.",
        price: 5,
        stock: 50,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
]

export const fetchProducts = () => {
    return new Promise(resolve => {
        setTimeout(resolve(products), 2000);
    });
}

export const findProductById = (id) => {
    const parsedId = parseInt(id);
    return new Promise(resolve => {
        setTimeout(resolve(products.find(item => item.id === parsedId)), 2000);
    })
}

export const findProductByCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(resolve(products.filter(item => item.category === category)), 2000);
    })
}