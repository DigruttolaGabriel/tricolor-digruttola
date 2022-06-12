const data = [
    {
        id: 1,
        name: "Producto 1",
        price: 10,
        stock: 20,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        id: 2,
        name: "Producto 2",
        price: 15,
        stock: 5,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        id: 3,
        name: "Producto 3",
        price: 25,
        stock: 15,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        id: 4,
        name: "Producto 4",
        price: 5,
        stock: 50,
        photo: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
]

export const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(resolve(data), 2000);
    });
}

export const findById = (id) => {
    const parsedId = parseInt(id);
    return new Promise(resolve => {
        setTimeout(resolve(data.find(item => item.id === parsedId)), 2000);
    })
}