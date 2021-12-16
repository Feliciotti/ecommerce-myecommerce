const products = [
    {
        id: 1,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorras',
        color: 'negro',
        price: 200,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id: 2,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorras',
        color: 'violeta',
        price: 500,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id:3,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'gorras',
        color: 'azul',
        price: 500,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id:4,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remeras',
        color: 'varios',
        price: 700,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },

    {
        id:5,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remeras',
        color: 'negro',
        price: 700,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.'
    },
    
    {
        id:6,
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        product: 'remeras',
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