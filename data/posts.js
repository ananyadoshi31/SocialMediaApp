import {Users } from './Users'

export const posts=[
    {
        imageurl:'https://assets.vogue.in/photos/645c78e61c0fce8c1a5ba2b9/2:3/w_2560%2Cc_limit/Alia%2520Gucci.png',
        user:Users[0].user,
        likes:9856,
        caption:'Hey folks how have you all been',
        profile_picture:Users[0].image,
        comments:[
            {
                user:'ananyadoshi',
                comment:'Beautiful Picture, WOW!'
            },
            {
                user:'vanshkd17',
                comment:'YOY SLAYYY!!!'
            },

        ],
        },
        {
            imageurl:'https://people.com/thmb/G3DBTzX9inWhqV4K-GrPC8Yb6Kw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/tom-cruise-1d498f280e8a49448c993e9a92eaf471.jpg',
            user:Users[2].user,
            likes:526,
            caption:'Loving the vibe',
            profile_picture:Users[2].image,
            comments:[
                {
                    user:'ananyadoshi',
                    comment:'Amazing'
                },
                {
                    user:'vanshkd17',
                    comment:'That so cool!'
                },

            ],
        }
        
]