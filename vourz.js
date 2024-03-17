var a = ["setTime", "getTime", "; expires=", "toGMTString", "cookie", "length", "charAt", "substring", "indexOf", ".navbar", "css", "fixed", "outerWidth", "outerHeight", "night", "#night-mode", "html", "<i class='fas fa-sun'/>", "click", "hasClass", "removeClass", "<i class='fas fa-moon'/>", "addClass", "#Label1 .btn-more", "preventDefault", "closest", "#Label1", "toggleClass", "querySelector", "footer .d-table .d-table-row .d-table-cell .container .row .col-12 .right", "Vourz Bootstrap Template by <a class='tata' href='https://moccatory.blogspot.com/' target='_blank'>Moccatory</a>", "createElement", "div", "right d-inline-block", "innerHTML", "Vourz Bootstrap Blogger Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel='nofollow noopener'>Moccatory</a>", "footer .d-table .d-table-row .d-table-cell .container .row .col-12", "appendChild", "includes", "Vourz Bootstrap Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel='nofollow noopener'>Moccatory</a>", ".aqshal", "querySelectorAll", ".post-body br, .post-body p", "from", "slice", "log", "insertBefore", "parentNode", "nextSibling"];
(function (b, c) {
  var d = function (e) {
    while (--e) {
      b.push(b.shift());
    }
  };
  d(++c);
})(a, f);
var m = function (f, g) {
  f = f - 0x0;
  var h = a[f];
  return h;
};
function createCookie(i, j, k) {
  if (k) {
    var l = new Date();
    l[m('0x0')](l[m('0x1')]() + k * 0x18 * 0x3c * 0x3c * 0x3e8);
    var n = m('0x2') + l[m('0x3')]();
  } else {
    var n = '';
  }
  document[m('0x4')] = i + "=" + j + n + "; path=/";
}
function readCookie(o) {
  var p = o + "=";
  var q = document[m('0x4')].split(";");
  for (var r = 0x0; r < q[m('0x5')]; r++) {
    var s = q[r];
    while (s[m('0x6')](0x0) == " ") {
      s = s[m('0x7')](0x1, s[m('0x5')]);
    }
    if (s[m('0x8')](p) == 0x0) {
      return s[m('0x7')](p[m('0x5')], s[m('0x5')]);
    }
  }
  return null;
}
function eraseCookie(t) {
  createCookie(t, '', -0x1);
}
$(document).ready(function () {
  var u = $(m('0x9'));
  var v = u.parent();
  $(window).on("resize load", function () {
    u[m('0xa')]({
      "position": m('0xb'),
      "width": v[m('0xc')]() + "px",
      "zIndex": "9999999"
    });
    v[m('0xa')]({
      "height": u[m('0xd')]() + "px"
    });
  });
  if (readCookie(m('0xe'))) {
    $("*").addClass(m('0xe'));
    $(m('0xf'))[m('0x10')](m('0x11'));
  }
  $("#night-mode")[m('0x12')](function () {
    if ($(this)[m('0x13')](m('0xe'))) {
      $("*")[m('0x14')](m('0xe'));
      $("#night-mode")[m('0x10')](m('0x15'));
      eraseCookie("night");
    } else {
      $("*")[m('0x16')](m('0xe'));
      $(m('0xf'))[m('0x10')](m('0x11'));
      createCookie(m('0xe'), null, 0x1b58);
    }
  });
});
$(m('0x17')).on("click", function (w) {
  w[m('0x18')]();
  $(this)[m('0x19')](m('0x1a'))[m('0x1b')]("open");
});
let footer = document[m('0x1c')](m('0x1d'));
let cr = m('0x1e');
if (!footer) {
  let a = document[m('0x1f')](m('0x20'));
  a.className = m('0x21');
  a[m('0x22')] = m('0x23');
  document.querySelector(m('0x24'))[m('0x25')](a);
} else {
  if (!footer[m('0x22')][m('0x26')](cr)) {
    footer.innerHTML = m('0x27');
  }
}
var w = [m('0x28'), m('0x29'), m('0x2a'), m('0x5'), m('0x2b'), m('0x2c'), m('0x2d'), "nodeName", "P", m('0x2e'), m('0x2f'), m('0x30')];
(function () {
  let x = document[w[0x1]](w[0x0]);
  if (x) {
    let y = document[w[0x1]](w[0x2]);
    let z = x[w[0x3]] + 0x1;
    let aa = y[w[0x3]] / z;
    c = Array[w[0x4]]({
      "length": z
    }, (ab, ac) => ac + 0x1);
    d = c[w[0x5]](0x0, -0x1);
    for (let ad = 0x0; ad < d[w[0x3]]; ad++) {
      let af = d[ad];
      let ag = parseInt(aa * af);
      console[w[0x6]](y[ag]);
      if (y[ag][w[0x7]] == w[0x8]) {
        y[ag][w[0xa]][w[0x9]](x[ad], y[ag]);
      } else {
        y[ag][w[0xa]][w[0x9]](x[ad], y[ag][w[0xb]]);
      }
    }
  }
})();
