import bcrypt from 'bcryptjs';

const Data = 
{
    UserData: [
        {
            Name: 'Sachin',
            Email: 'sachinnimshan@gmail.com',
            Password: bcrypt.hashSync('1234', 8),
            IsAdmin: true
        },
        {
            Name: 'nimshan',
            Email: 'nimshan@gmail.com',
            Password: bcrypt.hashSync('1234', 8),
            IsAdmin: false
        }
    ],


    ProductData: [
        {
            // _id: 'q1',
            Title: 'SL Cricket 2016 T20 World Cup Jercey',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','L'],
            Rating: 1,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q2',
            Title: 'SL Cricket 2019 World Cup Jercey',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 3500,
            AvailableSize: ['M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q3',
            Title: 'AUS Cricket Official Jercey',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 3500,
            AvailableSize: ['S','M'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 1
        },
        {
            //_id: 'q4',
            Title: 'AUS Cricket 2019 World Cup Jercey',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 5500,
            AvailableSize: ['S'],
            Rating: 4.5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q5',
            Title: 'Addidas T-Shirt 2021 Edition',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 7500,
            AvailableSize: ['M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 5
        }
       
    ]
    
}

export default Data;