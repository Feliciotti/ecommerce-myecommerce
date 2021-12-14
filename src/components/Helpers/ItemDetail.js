const description = [
    {
        product: 'Un muñeco del Bulbasaur',
        img: 'https://cdn2.myminifactory.com/assets/object-assets/5f8a412b76b37/images/720X720-bulbasaur-2.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta tempore. Animi, aspernatur. Hic eum, sint quas aut similique dolorum.',
        price: '100$'
    }

]

export const getDescription = new Promise ((resolve)=> {
    setTimeout(() => {
        resolve(description)
    }, 2000)
})