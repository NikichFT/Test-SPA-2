function loadFirst() {
    document.getElementByClassName('right-obj-load').style.display = 'block';
}
$(document).ready(function() {
    $('.obj').click(function(event) {
        $('.right-obj').removeClass('active')
        $('.right-obj-mid').removeClass('active')
        $('.lastobj').removeClass('active')
        $('.right-obj-right').removeClass('active')
        var num = $(this).attr('data-num');

        $('#right-obj' + num).addClass('active')
    });
    $('.obj').click(function(event) {
        $('.obj').removeClass('active')
        $('.obj').removeClass('objFirst')
        var num = $(this).attr('data-num');
        $('#obj' + num).addClass('active')
    });
});