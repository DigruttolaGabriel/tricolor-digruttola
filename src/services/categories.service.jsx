const categories = [
    {
        id: "1",
        name: "1"
    },
    {
        id: "2",
        name: "2"
    },
    {
        id: "3",
        name: "3"
    }
]

export const fetchCategories = () => {
    return new Promise(resolve => {
        setTimeout(resolve(categories), 2000);
    });
}