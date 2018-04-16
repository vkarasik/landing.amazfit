$(function(){
    $('a[href^="#"]').click(function(){
        var $linkHref = $(this).attr("href");
        var $ancorName = $('a[name="' + $linkHref.slice(1) + '"]');
        var ancorPosition = $ancorName.offset();
        $('body, html').animate({scrollTop: ancorPosition.top}, 500); 
    })

    $(".prew").on('click', function(){
        var curImgSrc = $(this).find('img').attr('src');
        $('.large-photo').attr('src', curImgSrc)
    })
});

// Я зрабіў усё што змог, хто зможа, хай зробіць лепш!
