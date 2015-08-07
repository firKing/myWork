(function($){
    $.fn.extend({
        myPlaceholder: function() {
            if (!('placeholder' in document.createElement('input'))) {//测试浏览器是否支持placeholder属性
                $('form').css('margin-top',"-18px");
                return this.each(function() {
                    var that = $(this);
                    var placeholderTxt = that.attr('placeholder');
                    /* 创建span */
                    var _span = $('<span>');
                    _span.attr('class', 'placeholder');
                    _span.text(placeholderTxt);
                    that.before(_span);
                    if(that.val()){
                        _span.addClass('placeholder-hide');
                    }
                    /* 绑定事件 */
                    _span.bind('click', function(){
                        _span.addClass('placeholder-hide');
                        that.focus();
                    });
                    that.bind('focus', function(){
                        _span.addClass('placeholder-hide');
                    }).bind('blur', function(){
                        if(!that.val().length){
                            _span.removeClass('placeholder-hide');
                        }
                    });
                });
            }
        }
    })
})(jQuery);

$('.info').myPlaceholder();