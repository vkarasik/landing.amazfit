$(function () {
    $('a[href^="#"]').click(function () {
        var $linkHref = $(this).attr("href");
        var $ancorName = $('a[name="' + $linkHref.slice(1) + '"]');
        var ancorPosition = $ancorName.offset();
        $('body, html').animate({
            scrollTop: ancorPosition.top
        }, 500);
    })

    $('.menu-icon').on('click', function(){
        $('.menu').slideToggle();
    })


    // Слайдер
    $('#right').on('click', function (e) {
        var curSlide = $('.slide:visible'); // текущий сдайд
        var clientWidth = curSlide[0].clientWidth // текущая ширина окна

        $(curSlide).prev().css({
            right: clientWidth,
            display: 'block'
        });
        $(curSlide).animate({
            'right': -clientWidth
        }, {
            duration: 300,
            start: function () {
                $(curSlide).prev().animate({
                    right: 0
                }, 300)
            },
            done: function () {
                $(curSlide).hide();
                var doneSlide = $(curSlide).detach();
                $('.slider-wrap').prepend(doneSlide);
            }
        });
    });

    $('#left').on('click', function (e) {
        var curSlide = $('.slide:visible'); // текущий сдайд
        var clientWidth = curSlide[0].clientWidth // текущая ширина окна

        $(".slide").first().css({
            right: -clientWidth,
            display: 'block'
        });
        $(curSlide).animate({
            'right': clientWidth
        }, {
            duration: 300,
            start: function () {
                $(".slide").first().animate({
                    right: 0
                }, 300)
            },
            done: function () {
                $(curSlide).hide();
                var doneSlide = $('.slide').first().detach();
                $('.slider-wrap').append(doneSlide);
            }
        });
    });


    $(".prew").on('click', function () {
        var curImgSrc = $(this).find('img').attr('src');
        $('.large-photo').attr('src', curImgSrc)
    })

    var price = {
        cor: {
            name: 'COR',
            price: '159',
        },
        bip: {
            name: 'BIP',
            price: '199',
        },
        stratos: {
            name: 'STRATOS',
            price: '559',
        }
    }
    var url = document.location.pathname;
    var productName = url.slice(1, url.length - 1);

    $('.rrp').html('Рекомендованная розничная цена на Amazfit ' + price[productName].name + ' в Беларуси ' + price[productName].price + ' BYN');
});

// Я зрабіў усё што змог, хто зможа, хай зробіць лепш!