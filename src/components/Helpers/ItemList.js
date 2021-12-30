const products = [
    {
        id: 1,
        stock: 10,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorra',
        color: 'negro',
        price: 200,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id: 2,
        stock: 10,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorra',
        color: 'violeta',
        price: 500,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id:3,
        stock: 5,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorra',
        color: 'azul',
        price: 500,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id:4,
        stock: 20,
        stock: 15,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remera',
        color: 'varios',
        price: 700,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id:5,
        stock: 5,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remera',
        color: 'negro',
        price: 700,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },
    
    {
        id:6,
        stock: 10,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remera',
        color: 'azul',
        price: 700,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    }
]

export const getProductos = new Promise ((resolve)=> {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})