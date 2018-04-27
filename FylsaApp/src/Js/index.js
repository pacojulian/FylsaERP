$(document).ready(function() {
  $('.rkmd-form').rkmd_form();
  $('.ripple-effect').rkmd_rippleEffect();
});

(function($) {
  $.fn.rkmd_form = function() {
    var self, formField, formInput;

    self = $(this);
    formField = self.find('.form-field');
    formInput = self.find('.field-input');

    formInput.on('focus', function() {
      $(this).parent().addClass('focused has-label');
    });
    formInput.on('blur', function() {
      if($(this).val() == '') {
        $(this).parent().removeClass('has-label');
      }
      $(this).parent().removeClass('focused');
    });
    formInput.each(function() {
      self = $(this);
      if(self.val().length > 0) {
        self.parent().addClass('has-label');
      }
    });
  };

  $.fn.rkmd_rippleEffect = function() {
    var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;

    btn = $(this).not('[disabled], .disabled');

    btn.on('mousedown', function(e) {
      self = $(this);
      if(e.button === 2) {
        return false;
      }
      if(self.find('.ripple').length === 0) {
        self.prepend('<span class="ripple"></span>');
      }
      ripple = self.find('.ripple');
      ripple.removeClass('animated');

      eWidth = self.outerWidth();
      eHeight = self.outerHeight();
      size = Math.max(eWidth, eHeight);
      ripple.css({'width': size, 'height': size});

      rippleX = e.clientX - self.offset().left - size / 2;
      rippleY = e.clientY - self.offset().top - size / 2;

      ripple.css({ 'top': rippleY +'px', 'left': rippleX +'px' });
      ripple.addClass('animated');
    });
  };
}(jQuery));

$('#submit').on('click', function() {
  var form = $('#login');
  var emailid = form.find('#emailid');
  var pass = form.find('#pass');

  if(emailid.val() == '') {
    emailid.parent().attr('error', '');
  } else {
    emailid.parent().removeAttr('error');
  }
  if(pass.val() == '') {
    pass.parent().attr('error', '');
  } else {
    pass.parent().removeAttr('error');
  }
});

$('#reset').on('click', function() {
  var form = $('#reset');
  var emailid = form.find('#emailid');

  if(emailid.val() == '') {
    emailid.parent().attr('error', '');
  } else {
    emailid.parent().removeAttr('error');
  }
});

$('.toggle').on('click', function() {
  var tab = $(this).data('tab');
  var parents = $(this).parents('.rkmd-form').hide();
  $('.' + tab).show();
});