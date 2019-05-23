(function ($, Drupal) {
  Drupal.behaviors.mtHeadroomGlobal = {
    attach: function (context, settings) {
      $(context).find("body").once('mtHeadroomGlobalInit').each(function(index, item) {
        $(item).headroom({
          classes : {
            // when element is initialised
            initial : "headroom",
            // when scrolling up
            pinned : "headroom--scroll-up",
            // when scrolling down
            unpinned : "headroom--scroll-down",
            // when above offset
            top : "headroom--top",
            // when below offset
            notTop : "headroom--not-top",
            // when at bottom of scoll area
            bottom : "headroom--bottom",
            // when not at bottom of scroll area
            notBottom : "headroom--not-bottom"
          }
        });
      });
    }
  };
})(jQuery, Drupal);
