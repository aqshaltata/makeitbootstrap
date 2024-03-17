var cookieFunctions = ["setTime", "getTime", "; expires=", "toGMTString", "cookie", "length", "charAt", "substring", "indexOf"];
var navbar = ".navbar";
var nightMode = "night";
var nightModeButton = "#night-mode";
var sunIcon = "<i class='fas fa-sun'/>";
var moonIcon = "<i class='fas fa-moon'/>";
var moreButton = "#Label1 .btn-more";
var footerSelector = "footer .d-table .d-table-row .d-table-cell .container .row .col-12 .right";
var templateCredit = "Vourz Bootstrap Template by <a class='tata' href='https://moccatory.blogspot.com/' target='_blank'>Moccatory</a>";
var templateCreditDiv = "<div class='right d-inline-block'>" + templateCredit + "</div>";
var bloggerTemplateCredit = "Vourz Bootstrap Blogger Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel='nofollow noopener'>Moccatory</a>";
var postContentSelector = ".post-body br, .post-body p";
var insertBefore = "insertBefore";
var parentNode = "parentNode";
var nextSibling = "nextSibling";

$(document).ready(function () {
  var darkModeCookie = document.cookie;
  if (darkModeCookie.indexOf("dark-mode=true") != -1) {
    $(navbar).css("background-color", "black");
  }
});

$(nightModeButton).on("click", function (event) {
  event.preventDefault();
  $(this).hasClass("open") ? $(this).removeClass("open") : $(this).addClass("open");
});

let footer = document.querySelector(footerSelector);
let cr = "aqshal";
if (!footer) {
  let divElement = document.createElement("div");
  divElement.className = "right d-inline-block";
  divElement.innerHTML = bloggerTemplateCredit;
  document.querySelector("#Label1").appendChild(divElement);
} else {
  if (!footer[parentNode][nextSibling].includes(cr)) {
    footer.innerHTML = templateCreditDiv;
  }
});

var nodeTypes = ["nodeName", "P", "br"];
(function () {
  let postContent = document[nodeTypes[1]](nodeTypes[0]);
});
