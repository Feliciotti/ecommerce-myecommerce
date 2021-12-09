const products = [
    {
        id: 1,
        img: 'https://www.arauco.cl/chile/wp-content/uploads/sites/14/2017/07/400x400.png',
        product: 'gorra',
        material: 'lana',
        color: 'negro',
        price: 200
    },

    {
        id: 2,
        img: 'https://www.arauco.cl/chile/wp-content/uploads/sites/14/2017/07/400x400.png',
        product: 'remera',
        material: 'algodón',
        color: 'negro',
        price: 500
    },

    {
        id:3,
        img: 'https://www.arauco.cl/chile/wp-content/uploads/sites/14/2017/07/400x400.png',
        product: 'pantalón',
        material: 'jean',
        color: 'azul',
        price: 700
    },

    {
        id:4,
        img: 'https://www.arauco.cl/chile/wp-content/uploads/sites/14/2017/07/400x400.png',
        product: 'medias',
        material: 'algodón',
        color: 'varios',
        price: 200
    }
]

export const ItemList = new Promise ((resolve)=> {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})