/*!
    Rigeup - Parallax
    
!*/

!(function (n) {
  var t = n(window),
    o = t.height();
  t.resize(function () {
    o = t.height();
  }),
    (n.fn.parallax = function (i, e, l) {
      var r,
        u = n(this);
      function c() {
        var l = t.scrollTop();
        u.each(function () {
          var t = n(this),
            c = t.offset().top;
          c + r(t) < l ||
            c > l + o ||
            (n(window).width() > 1050
              ? u.css("backgroundPosition", i + " " + (c - l) * e + "px")
              : u.css("backgroundPosition", ""));
        });
      }
      u.each(function (n) {
        u.offset().top;
      }),
        (arguments.length < 1 || null === i) && (i = "50%"),
        (arguments.length < 2 || null === e) && (e = 0.5),
        (arguments.length < 3 || null === l) && (l = !0),
        (arguments.length < 4 || null === pos) && (pos = 0),
        (r = l
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        t.bind("scroll", c).resize(c),
        c();
    }),
    (n.fn.parallaxImg = function (i, e) {
      var l,
        r = n(this);
      function u() {
        var e = t.scrollTop();
        r.each(function () {
          var t = n(this),
            u = t.offset().top;
          u + l(t) < e ||
            u > e + o ||
            (n(window).width() > 1050
              ? r.css("bottom", (i / 10) * -(u - e) + "px")
              : r.css("bottom", ""));
        });
      }
      (arguments.length < 1 || null === i) && (i = 1),
        (arguments.length < 2 || null === e) && (e = !0),
        (l = e
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        t.bind("scroll", u).resize(u),
        u();
    });
})(jQuery);
