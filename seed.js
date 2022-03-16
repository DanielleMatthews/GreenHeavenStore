require('dotenv').config()
const Plant = require('./models/plants.js')
const db = require('./models/db')



const plantSeed = [
    {
        name: 'Lithops variety',
        type: 'succulent ',
        care: 'can tolerate direct sunlight, allow soil to dry between waterings ',
        img: 'https://www.sublimesucculents.com/wp-content/uploads/2017/07/gardenpicsandtips',
        price: 6.35,
        qty:  26,
        petFriendly: true 
    },
    {
        name: 'Rabbits Foot Fern',
        type: 'non-flowering',
        care: 'bright, indirect sunlight, keep soil damp',
        img: 'https://hearthandvine.com/wp-content/uploads/2021/02/Rabbits-foot-fern-terra-cotta-pot-1024x1024',
        price:4.98 ,
        qty:  12,
        petFriendly: true 
    },
    {
        name: 'Pincushion Cactus',
        type: 'flowering cactua',
        care: 'mix between bright, direct and indrect sunlight',
        img: 'https://succulentcity.com/wp-content/uploads/2019/05/pin-cushion-cactus-sc-1024x1024',
        price: 5.32,
        qty:  25,
        petFriendly: false
    },
    {
        name: 'Polka Dot Plant',
        type: 'flowering',
        care: 'bright indirect light, keep soil moist',
        img: 'https://havegarden.com/wp-content/uploads/2021/01/polka-dot-plant',
        price: 5.37,
        qty:  12,
        petFriendly: true
    },
    {
        name: 'Elephant Ear',
        type: 'tall, alocasia',
        care: 'partial shade, well draning soil',
        img: 'https://images.thdstatic.com/productImages/545fc023-5514-4678-9087-7df65e585fd4/svn/national-plant-network-indoor-plants-hd7754-64_1000',
        price:32.12,
        qty:  12,
        petFriendly: false 
    },
    {
        name: 'Orchid',
        type: 'flowering',
        care: 'bright indirect light, water weekly',
        img: 'https://www.extension.iastate.edu/news/files/eo-news/images/adobestock_238555745_moth_orchids_large',
        price:12.36,
        qty:  13,
        petFriendly: true
    },
    {
        name: '400 Year Old Bonsai',
        type: 'mini tree',
        care: 'direct sunlight, keep soil damp',
        img: 'https://www.lilblueboo.com/wp-content/uploads/2016/04/theyamakipine',
        price: 3000000 ,
        qty:  1,
        petFriendly: true
    },
    {
        name: 'Fireworks Rex Begonia',
        type: 'flowering',
        care: 'partial, to full shade, keep soil damp',
        img: 'https://www.terranovanurseries.com/wp-content/uploads/2019/07/Begonia-Fireworks-8',
        price: 15.37 ,
        qty:  27,
        petFriendly: fasle
    }
]
  
const seed = async () => {
    await Plant.insertMany(plantSeed)
}
  
seed().then(() => {
  db.close()
})




