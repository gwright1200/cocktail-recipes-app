(function($) {

  var app = {
    box: function(){
      $('head').append('<style>.viewport{background:rgba(0,0,0,0.7);bottom:0;color:white;cursor:pointer;font-size:10px;font-family:"LucidaGrande","Helvetica",sans-serif;line-height:14px;padding-bottom:4px;padding-left:6px;padding-right:6px;padding-top:4px;position:fixed;right:0;z-index:999}.viewport.inactive{opacity:0}#responsive-width,#responsive-height{display:inline-block}</style>');
      $('body').append('<div class="viewport"><div id="responsive-width"></div> x <div id="responsive-height"></div></div>');
    },
    calculateDimensions: function(){
      var viewportWidth = window.innerWidth;
      var viewportHeight = window.innerHeight;
      $("#responsive-width").html(viewportWidth);
      $("#responsive-height").html(viewportHeight);
    },
    init: function() {
      app.box();
      app.mobileToggle();
      app.sizer();
    },
    mobileToggle: function() {
      $(document).on('click', '#t-mobileicon', function() {
				// toggle class to the element
				// $('someslector').someMethod
      });
    },
    sizer: function() {
      app.calculateDimensions();
      app.toggleBox();
    },
    toggleBox: function(){
      $('.viewport').click(function(){
        $(this).toggleClass('inactive');
      });
    }
  };

  $(window).on('load', () => {
    app.init();
  });

  $(window).on('resize', () => {
    app.sizer();
  });

})(window.jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLEdBQUE7O0VBRUEsSUFBQSxNQUFBO0lBQ0EsS0FBQSxVQUFBO01BQ0EsRUFBQSxRQUFBLE9BQUE7TUFDQSxFQUFBLFFBQUEsT0FBQTs7SUFFQSxxQkFBQSxVQUFBO01BQ0EsSUFBQSxnQkFBQSxPQUFBO01BQ0EsSUFBQSxpQkFBQSxPQUFBO01BQ0EsRUFBQSxxQkFBQSxLQUFBO01BQ0EsRUFBQSxzQkFBQSxLQUFBOztJQUVBLE1BQUEsV0FBQTtNQUNBLElBQUE7TUFDQSxJQUFBO01BQ0EsSUFBQTs7SUFFQSxjQUFBLFdBQUE7TUFDQSxFQUFBLFVBQUEsR0FBQSxTQUFBLGlCQUFBLFdBQUE7Ozs7O0lBS0EsT0FBQSxXQUFBO01BQ0EsSUFBQTtNQUNBLElBQUE7O0lBRUEsV0FBQSxVQUFBO01BQ0EsRUFBQSxhQUFBLE1BQUEsVUFBQTtRQUNBLEVBQUEsTUFBQSxZQUFBOzs7OztFQUtBLEVBQUEsUUFBQSxHQUFBLFFBQUE7Ozs7RUFJQSxFQUFBLFFBQUEsR0FBQSxVQUFBOzs7O0dBSUEsT0FBQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG5cbiAgdmFyIGFwcCA9IHtcbiAgICBib3g6IGZ1bmN0aW9uKCl7XG4gICAgICAkKCdoZWFkJykuYXBwZW5kKCc8c3R5bGU+LnZpZXdwb3J0e2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjcpO2JvdHRvbTowO2NvbG9yOndoaXRlO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxMHB4O2ZvbnQtZmFtaWx5OlwiTHVjaWRhR3JhbmRlXCIsXCJIZWx2ZXRpY2FcIixzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjE0cHg7cGFkZGluZy1ib3R0b206NHB4O3BhZGRpbmctbGVmdDo2cHg7cGFkZGluZy1yaWdodDo2cHg7cGFkZGluZy10b3A6NHB4O3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7ei1pbmRleDo5OTl9LnZpZXdwb3J0LmluYWN0aXZle29wYWNpdHk6MH0jcmVzcG9uc2l2ZS13aWR0aCwjcmVzcG9uc2l2ZS1oZWlnaHR7ZGlzcGxheTppbmxpbmUtYmxvY2t9PC9zdHlsZT4nKTtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ2aWV3cG9ydFwiPjxkaXYgaWQ9XCJyZXNwb25zaXZlLXdpZHRoXCI+PC9kaXY+IHggPGRpdiBpZD1cInJlc3BvbnNpdmUtaGVpZ2h0XCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgfSxcbiAgICBjYWxjdWxhdGVEaW1lbnNpb25zOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIHZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHZhciB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICQoXCIjcmVzcG9uc2l2ZS13aWR0aFwiKS5odG1sKHZpZXdwb3J0V2lkdGgpO1xuICAgICAgJChcIiNyZXNwb25zaXZlLWhlaWdodFwiKS5odG1sKHZpZXdwb3J0SGVpZ2h0KTtcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLmJveCgpO1xuICAgICAgYXBwLm1vYmlsZVRvZ2dsZSgpO1xuICAgICAgYXBwLnNpemVyKCk7XG4gICAgfSxcbiAgICBtb2JpbGVUb2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN0LW1vYmlsZWljb24nLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gdG9nZ2xlIGNsYXNzIHRvIHRoZSBlbGVtZW50XG5cdFx0XHRcdC8vICQoJ3NvbWVzbGVjdG9yJykuc29tZU1ldGhvZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaXplcjogZnVuY3Rpb24oKSB7XG4gICAgICBhcHAuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xuICAgICAgYXBwLnRvZ2dsZUJveCgpO1xuICAgIH0sXG4gICAgdG9nZ2xlQm94OiBmdW5jdGlvbigpe1xuICAgICAgJCgnLnZpZXdwb3J0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaW5hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgYXBwLmluaXQoKTtcbiAgfSk7XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgYXBwLnNpemVyKCk7XG4gIH0pO1xuXG59KSh3aW5kb3cualF1ZXJ5KTtcbiJdfQ==
