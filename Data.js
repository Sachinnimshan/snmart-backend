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
            Title: 'T-Shirt1',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q2',
            Title: 'T-Shirt2',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q3',
            Title: 'T-Shirt3',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 1
        },
        {
            //_id: 'q4',
            Title: 'T-Shirt4',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 4.5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q5',
            Title: 'T-Shirt5',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q6',
            Title: 'T-Shirt6',
            Image: '/Images/t6.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 4.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q7',
            Title: 'T-Shirt7',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1.5,
            NumReviews: 20,
            CountInStock: 10
        },
        {
            //_id: 'q8',
            Title: 'T-Shirt8',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 4.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q9',
            Title: 'T-Shirt9',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q10',
            Title: 'T-Shirt10',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 12
        },
        {
            //_id: 'q11',
            Title: 'T-Shirt11',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q12',
            Title: 'T-Shirt12',
            Image: '/Images/t6.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            // _id: 'q1',
            Title: 'T-Shirt13',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q2',
            Title: 'T-Shirt14',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q3',
            Title: 'T-Shirt15',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 1
        },
        {
            //_id: 'q4',
            Title: 'T-Shirt16',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q5',
            Title: 'T-Shirt17',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q6',
            Title: 'T-Shirt18',
            Image: '/Images/t6.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q7',
            Title: 'T-Shirt19',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1.5,
            NumReviews: 20,
            CountInStock: 10
        },
        {
            //_id: 'q8',
            Title: 'T-Shirt20',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q9',
            Title: 'T-Shirt21',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q10',
            Title: 'T-Shirt22',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 12
        },
        {
            //_id: 'q11',
            Title: 'T-Shirt23',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q12',
            Title: 'T-Shirt24',
            Image: '/Images/t6.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            // _id: 'q1',
            Title: 'T-Shirt25',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q2',
            Title: 'T-Shirt26',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q3',
            Title: 'T-Shirt27',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1.5,
            NumReviews: 20,
            CountInStock: 1
        },
        {
            //_id: 'q4',
            Title: 'T-Shirt28',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 2.5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q5',
            Title: 'T-Shirt29',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q6',
            Title: 'T-Shirt30',
            Image: '/Images/t6.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 3.5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q7',
            Title: 'T-Shirt31',
            Image: '/Images/t1.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 1.5,
            NumReviews: 20,
            CountInStock: 10
        },
        {
            //_id: 'q8',
            Title: 'T-Shirt32',
            Image: '/Images/t2.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q9',
            Title: 'T-Shirt33',
            Image: '/Images/t3.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 0
        },
        {
            //_id: 'q10',
            Title: 'T-Shirt34',
            Image: '/Images/t4.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 12
        },
        {
            //_id: 'q11',
            Title: 'T-Shirt35',
            Image: '/Images/t5.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 5
        },
        {
            //_id: 'q12',
            Title: 'T-Shirt36',
            Image: '/Images/t6.jpg',
            Description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.',
            Category: 'T-Shirt',
            Price: 2500,
            AvailableSize: ['S','M','L'],
            Rating: 5,
            NumReviews: 20,
            CountInStock: 0
        }
    ]
    
}

export default Data;