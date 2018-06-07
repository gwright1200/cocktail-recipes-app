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
				$('active').toggleClass('t-mobileicon');

      
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLEdBQUE7O0VBRUEsSUFBQSxNQUFBO0lBQ0EsS0FBQSxVQUFBO01BQ0EsRUFBQSxRQUFBLE9BQUE7TUFDQSxFQUFBLFFBQUEsT0FBQTs7SUFFQSxxQkFBQSxVQUFBO01BQ0EsSUFBQSxnQkFBQSxPQUFBO01BQ0EsSUFBQSxpQkFBQSxPQUFBO01BQ0EsRUFBQSxxQkFBQSxLQUFBO01BQ0EsRUFBQSxzQkFBQSxLQUFBOztJQUVBLE1BQUEsV0FBQTtNQUNBLElBQUE7TUFDQSxJQUFBO01BQ0EsSUFBQTs7SUFFQSxjQUFBLFdBQUE7TUFDQSxFQUFBLFVBQUEsR0FBQSxTQUFBLGlCQUFBLFdBQUE7SUFDQSxFQUFBLFVBQUEsWUFBQTs7Ozs7SUFLQSxPQUFBLFdBQUE7TUFDQSxJQUFBO01BQ0EsSUFBQTs7SUFFQSxXQUFBLFVBQUE7TUFDQSxFQUFBLGFBQUEsTUFBQSxVQUFBO1FBQ0EsRUFBQSxNQUFBLFlBQUE7Ozs7O0VBS0EsRUFBQSxRQUFBLEdBQUEsUUFBQTs7OztFQUlBLEVBQUEsUUFBQSxHQUFBLFVBQUE7Ozs7R0FJQSxPQUFBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcblxuICB2YXIgYXBwID0ge1xuICAgIGJveDogZnVuY3Rpb24oKXtcbiAgICAgICQoJ2hlYWQnKS5hcHBlbmQoJzxzdHlsZT4udmlld3BvcnR7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNyk7Ym90dG9tOjA7Y29sb3I6d2hpdGU7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjEwcHg7Zm9udC1mYW1pbHk6XCJMdWNpZGFHcmFuZGVcIixcIkhlbHZldGljYVwiLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MTRweDtwYWRkaW5nLWJvdHRvbTo0cHg7cGFkZGluZy1sZWZ0OjZweDtwYWRkaW5nLXJpZ2h0OjZweDtwYWRkaW5nLXRvcDo0cHg7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt6LWluZGV4Ojk5OX0udmlld3BvcnQuaW5hY3RpdmV7b3BhY2l0eTowfSNyZXNwb25zaXZlLXdpZHRoLCNyZXNwb25zaXZlLWhlaWdodHtkaXNwbGF5OmlubGluZS1ibG9ja308L3N0eWxlPicpO1xuICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInZpZXdwb3J0XCI+PGRpdiBpZD1cInJlc3BvbnNpdmUtd2lkdGhcIj48L2Rpdj4geCA8ZGl2IGlkPVwicmVzcG9uc2l2ZS1oZWlnaHRcIj48L2Rpdj48L2Rpdj4nKTtcbiAgICB9LFxuICAgIGNhbGN1bGF0ZURpbWVuc2lvbnM6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgJChcIiNyZXNwb25zaXZlLXdpZHRoXCIpLmh0bWwodmlld3BvcnRXaWR0aCk7XG4gICAgICAkKFwiI3Jlc3BvbnNpdmUtaGVpZ2h0XCIpLmh0bWwodmlld3BvcnRIZWlnaHQpO1xuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICBhcHAuYm94KCk7XG4gICAgICBhcHAubW9iaWxlVG9nZ2xlKCk7XG4gICAgICBhcHAuc2l6ZXIoKTtcbiAgICB9LFxuICAgIG1vYmlsZVRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3QtbW9iaWxlaWNvbicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCdhY3RpdmUnKS50b2dnbGVDbGFzcygndC1tb2JpbGVpY29uJyk7XG5cbiAgICAgIFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaXplcjogZnVuY3Rpb24oKSB7XG4gICAgICBhcHAuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xuICAgICAgYXBwLnRvZ2dsZUJveCgpO1xuICAgIH0sXG4gICAgdG9nZ2xlQm94OiBmdW5jdGlvbigpe1xuICAgICAgJCgnLnZpZXdwb3J0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaW5hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgYXBwLmluaXQoKTtcbiAgfSk7XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgYXBwLnNpemVyKCk7XG4gIH0pO1xuXG59KSh3aW5kb3cualF1ZXJ5KTtcbiJdfQ==
