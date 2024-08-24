'use strict';
/*$('.modal')
$('.overlay')
$(".Closemodal")*/
function addhidden()
{
    $(".modal").addClass('hidden');
$(".overlay").addClass('hidden');
}
function removehidden()
{
    $(".modal").removeClass('hidden');
    $(".overlay").removeClass('hidden');
}
$(".show-modal").click(removehidden);
$('.close-modal').click(addhidden);
$('.overlay').click(addhidden);
 $(document).keydown(function(e) {
        // console.log(e.key);
    
        if (e.key === 'Escape' && !$('.modal').hasClass('hidden')) {
            addhidden();
        }
    });
    