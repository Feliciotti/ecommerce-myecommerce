const products = [
    {
        id: 1,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorras',
        color: 'negro',
        price: 200
    },

    {
        id: 2,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorras',
        color: 'violeta',
        price: 500
    },

    {
        id:3,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorras',
        color: 'azul',
        price: 500
    },

    {
        id:4,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remeras',
        color: 'varios',
        price: 700
    },

    {
        id:5,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remeras',
        color: 'negro',
        price: 700
    },
    
    {
        id:6,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remeras',
        color: 'azul',
        price: 700
    }
]

export const getProductos = new Promise ((resolve)=> {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})