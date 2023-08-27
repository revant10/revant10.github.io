window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);

  if (platform['name'].includes("Safari"))
  {
    document.getElementById('home').style.backgroundAttachment='scroll';
  }
};

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};


// When the user scrolls the page, execute function 
// window.onscroll = function() {progress()};

// function progress()
// {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }


// ;(function()
// {
//   function id(v){ return document.getElementById(v); }
//   function loadbar()
//   {
//     var ovrl = id("overlay"),
//     prog = id("progress"),
//     stat = id("progstat"),
//     img = document.images,
//     c = 0;
//     tot = img.length;

//     function imgLoaded()
//     {
//       c += 1;
//       var perc = ((100/tot*c) << 0) +"%";
//       prog.style.width = perc;
//       stat.innerHTML = perc;
//       if(c===tot) return doneLoading();
//     }

    function doneLoading()
    {
      ovrl.style.opacity = 0;
      setTimeout(function()
      { 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++)
    {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());

// AngularJS Part
var myApp = angular.module("myApp", []);

// Controller for Tech
myApp.controller("techController", function ($scope) {
  $scope.technologies = [
    {name: "HTML", link: "https://www.google.com/search?q=HTML", img: "tech/HTML.png"},
    {name: "CSS", link: "https://www.google.com/search?q=CSS", img: "tech/CSS.png" },
    {name: "JavaScript", link: "https://www.google.com/search?q=JavaScript", img: "tech/JavaScript.png"},
    {name: "Python", link: "https://www.google.com/search?q=Python", img: "tech/Python.png"},
    {name: "Ubuntu", link: "https://www.google.com/search?q=Ubuntu", img: "tech/Ubuntu.png"},
    {name: "Linux", link: "https://www.google.com/search?q=Linux", img: "tech/Linux.png"},
    {name: "Git", link: "https://www.google.com/search?q=Git",img: "tech/Git.png"},
    {name: "GitHub", link: "https://www.google.com/search?q=GitHub", img: "tech/GitHub.png"},
    {name: "MySQL", link: "https://www.google.com/search?q=MySQL", img: "tech/mySQL.png"},
    {name: "Adobe Photoshop", link: "https://www.google.com/search?q=Adobe+Photoshop", img: "tech/PS.png"},
    {name: "C - Computer Programming Language", link: "https://www.google.com/search?q=C", img: "tech/C.png"},
    {name: "Raspberry Pi", link: "https://www.google.com/search?q=Raspberry+Pi", img: "tech/rPi.png"}
  ];
});

myApp.controller("socialController", function ($scope) {
  $scope.socialMedia = [
    { link: "https://www.instagram.com/revant.10/", class: "fab fa-instagram insta"},
    { link: "https://www.linkedin.com/in/revantkansara/", class: "fab fa-linkedin linkedin"},
    { link: "https://www.github.com/revant10/", class: "fab fa-github github"}
  ];
});