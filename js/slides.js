$(function(){
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode:false,
        slidesToShow:6,
        arrows:false,
        responsive:[

            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:3
                }
            }, 

            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    slidesToShow:2,
                    centerMode:true
                }

            },

            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    slidesToShow:1,
                    centerMode:true
                }

            }
        ]
    });

    $('.tratamento .container').slick({
        centerMode:false,
        slidesToShow:3,
        arrow:false,
        Infinity:false,
        responsive:[

            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    dots:true,
                    Infinity:false,
                    centerMode:false,
                    slidesToShow:2
                }
            }, 

            {
                breakpoint:480,
                settings:{
                    arrows:false,
                    dots:true,
                    Infinity:false,
                    centerMode:false,
                    slidesToShow:1
                }
            }

        ]
    });

    $('.depoimentos .container').slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        Infinity:false,
        dots:true
    });
    
})