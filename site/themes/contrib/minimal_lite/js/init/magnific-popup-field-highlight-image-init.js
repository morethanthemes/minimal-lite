(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMagnificPopupHighlightImage = {
    attach: function (context, settings) {
      $(context).find('.field--name-field-mt-highlight-image a.image-popup').once('mtMagnificPopupHighlightImageInit').magnificPopup({
        type:"image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        image: {
          titleSrc: function(item) {
            return item.el.closest('.overlay-container').children()[1].title || '';
          }
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
