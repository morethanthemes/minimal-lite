(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtTeamMembersMasonry = {
    attach: function (context, settings) {

      //Masonry Layout Style 2
      $(context).find('.team-members-masonry-container').once('mtTeamMembersMasonryInit').each(function() {
        var $this = $(this);
        $this.fadeIn("slow");

        // load images first
        $this.imagesLoaded(function() {
          var blockId = $this.closest(".block").attr('id'),
          masonryItem = "#" + blockId + " .masonry-grid-item";
          $this.isotope({
            itemSelector: masonryItem,
            layoutMode: "masonry"
          });
          $this.isotope("layout");
        });

        // initialise inside bootstrap tab
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          $this.isotope('layout');
        });
      });

    }
  };
})(jQuery, Drupal, drupalSettings);
