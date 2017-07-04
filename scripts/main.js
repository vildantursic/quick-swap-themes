function scrollFooter(a, b) {
    console.log(a);
    console.log(b);
    if (a >= b) {
        $("footer").css({
            bottom: "0px"
        })
    } else {
        $("footer").css({
            bottom: "-" + b + "px"
        })
    }
}
$(window).load(function () {
    var c = $(window).height(),
        b = $("footer").height(),
        a = (c) + ($(".content").height()) + ($("footer").height()) - 20;
    $("#scroll-animate, #scroll-animate-main").css({
        height: a + "px"
    });
    $("header").css({
        height: c + "px",
        "line-height": c + "px"
    });
    $(".wrapper-parallax").css({
        "margin-top": c + "px"
    });
    scrollFooter(window.scrollY, b);
    window.onscroll = function () {
        var d = window.scrollY;
        $("#scroll-animate-main").css({
            top: "-" + d + "px"
        });
        $("header").css({
            "background-position-y": 50 - (d * 100 / a) + "%"
        });
        scrollFooter(d, b)
    }
    // Grade(document.querySelectorAll('.gradient-wrap'))

    var images = [];
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }

    //-- usage --//
    preload(
        "../images/1.jpg",
        "../images/2.jpg",
        "../images/3.jpg",
    )
});

$("#night").on("click", function () {
  document.getElementById("scroll-animate").className = "night"
})
$("#iris").on("click", function () {
  document.getElementById("scroll-animate").className = "iris"
})
$("#sunflower").on("click", function () {
  document.getElementById("scroll-animate").className = "sunflower"
})


var app = angular.module("app", []);
app.controller("mainCtrl", function ($scope) {
  $scope.name = "NIGHT";
  $scope.quote = "I feel that there is nothing more truly artistic than to love people";

  $scope.night = function() {
    $scope.name = "NIGHT";
    $scope.quote = "I feel that there is nothing more truly artistic than to love people";
  }
  $scope.iris = function() {
    $scope.name = "IRIS";
    $scope.quote = "I dream of painting and then I paint my dream"
  }
  $scope.sunflower = function() {
    $scope.name = "SUNFLOWER";
    $scope.quote = "I put my heart and my soul into my work, and have lost my mind in the process"
  }
})
