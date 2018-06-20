$(function () {
    $('a[href^="#"]').click(function () {
        var $linkHref = $(this).attr("href");
        var $ancorName = $('a[name="' + $linkHref.slice(1) + '"]');
        var ancorPosition = $ancorName.offset();
        $('body, html').animate({
            scrollTop: ancorPosition.top
        }, 500);
    })

    $(".prew").on('click', function () {
        var curImgSrc = $(this).find('img').attr('src');
        $('.large-photo').attr('src', curImgSrc)
    })

    var price = {
        cor: {
            name: 'COR',
            price: '149',
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