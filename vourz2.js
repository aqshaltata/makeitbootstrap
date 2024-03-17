(function (a, b) {
  var c = function (d) {
    while (--d) {
      a.push(a.shift());
    }
  };
  c(++b);
})(["setTime", "getTime", "; expires=", "toGMTString", "cookie", "length", "charAt", "substring", "indexOf", ".navbar", "css", "fixed", "outerWidth", "outerHeight", "night", "#night-mode", "html", "<i class='fas fa-sun'/>", "click", "hasClass", "removeClass", "<i class='fas fa-moon'/>", "addClass", "#Label1 .btn-more", "preventDefault", "closest", "#Label1", "toggleClass", "querySelector", "footer .d-table .d-table-row .d-table-cell .container .row .col-12 .right", "Vourz Bootstrap Template by <a class='tata' href='https://moccatory.blogspot.com/' target='_blank'>Moccatory</a>", "createElement", "div", "right d-inline-block", "innerHTML", "Vourz Bootstrap Blogger Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel='nofollow noopener'>Moccatory</a>", "footer .d-table .d-table-row .d-table-cell .container .row .col-12", "appendChild", "includes", "Vourz Bootstrap Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel='nofollow noopener'>Moccatory</a>", ".aqshal", "querySelectorAll", ".post-body br, .post-body p", "from", "slice", "log", "insertBefore", "parentNode", "nextSibling"], 0xf5);

function createCookie(name, value, expires) {
  if (expires) {
    var date = new Date();
    date.setTime(date.getTime() + expires * 1000 * 60 * 60 * 24);
    var expiresStr = "; expires=" + date.toGMTString();
  } else {
    var expiresStr = '';
  }
  document.cookie = name + "=" + value + expiresStr + "; path=/";
}

function readCookie(name) {
  var searchKey = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(searchKey) == 0) {
      return cookie.substring(searchKey.length, cookie.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, '', -1);
}

$(document).ready(function () {
  var navbar = $(".navbar");
  var parent = navbar.parent();
  
  $(window).on("resize load", function () {
    navbar.css({
      "position": "fixed",
      "width": parent.outerWidth() + "px",
      "zIndex": "9999999"
    });
    parent.css({
      "height": navbar.outerHeight() + "px"
    });
  });

  if (readCookie("night")) {
    $("*").addClass("night");
    $("#night-mode").html("<i class='fas fa-sun'/>");
  }

  $("#night-mode").click(function () {
    if ($(this).hasClass("night")) {
      $("*").removeClass("night");
      $("#night-mode").html("<i class='fas fa-moon'/>");
      eraseCookie("night");
    } else {
      $("*").addClass("night");
      $("#night-mode").html("<i class='fas fa-sun'/>");
      createCookie("night", null, 0x1b58);
    }
  });
});

$("#Label1 .btn-more").on("click", function (event) {
  event.preventDefault();
  $(this).closest("footer .d-table .d-table-row .d-table-cell .container .row .col-12").toggleClass("night");
});

let footer = document.querySelector("footer .d-table .d-table-row .d-table-cell .container .row .col-12");
let cr = "Vourz Bootstrap Template by <a class='tata' href='https://moccatory.blogspot.com/' target='_blank'>Moccatory</a>";

if (!footer) {
  let div = document.createElement("div");
  div.className = "right d-inline-block";
  div.innerHTML = "Vourz Bootstrap Blogger Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel='nofollow noopener'>Moccatory</a>";
  document.querySelector("footer .d-table .d-table-row .d-table-cell .container .row .col-12").appendChild(div);
} else {
  if (!footer.innerHTML.includes(cr)) {
    footer.innerHTML = cr;
  }
}

(function () {
  let paragraphs = document.querySelectorAll(".post-body br, .post-body p");
  if (paragraphs) {
    let brElements = document.querySelectorAll(".post-body br");
    let ratio = paragraphs.length + 0x1;
    let step = brElements.length / ratio;
    c = Array.from({
      "length": ratio
    }, (x, i) => i + 0x1);
    d = c.slice(0, -0x1);
    for (let i = 0x0; i < d.length; i++) {
      let index = d[i];
      let stepValue = parseInt(step * index);
      console.log(brElements[stepValue]);
      if (brElements[stepValue].nodeName == "P") {
        brElements[stepValue].parentNode.insertBefore(paragraphs[i], brElements[stepValue]);
      } else {
        brElements[stepValue].parentNode.insertBefore(paragraphs[i], brElements[stepValue].nextSibling);
      }
    }
  }
})();
