(function ($, Drupal) {
  Drupal.behaviors.mtWaypointsStickyFooter = {
    attach: function (context, settings) {
      var stickyFooterEnable = new Waypoint.Inview({
        element: $('.header-container')[0],
        exit: function(direction) {
          if (direction = "down") {
            var stickyFooterHeight = $(".sticky-footer-container").outerHeight(true);
            $(".sticky-footer-container").addClass("slideToTop sticky-footer-container--fixed");
            $(".sticky-footer-container").removeClass("slideToBottom");
            $(".sticky-footer-placeholder").css("height", (stickyFooterHeight)+"px");
          }
        },
        entered: function(direction) {
          if (direction = "up") {
            $(".sticky-footer-container").removeClass("slideToTop");
            $(".sticky-footer-container").addClass("slideToBottom sticky-footer-container--fixed");
          }
        }
      });
      var stickyFooterDisable = new Waypoint.Inview({
        element: $('.sticky-footer-placeholder').next()[0],
        enter: function(direction) {
          if (direction = "down") {
            $(".sticky-footer-container").removeClass("sticky-footer-container--fixed");
            $(".sticky-footer-placeholder").css("height", "0px");
          }
        },
        exited: function(direction) {
          if (direction = "up") {
            var stickyFooterHeight = $(".sticky-footer-container").outerHeight(true);
            $(".sticky-footer-container").addClass("sticky-footer-container--fixed");
            $(".sticky-footer-placeholder").css("height", (stickyFooterHeight)+"px");
          }
        }
      });
    }
  };
})(jQuery, Drupal);
