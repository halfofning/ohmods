/* CALLING FUNCTIONS */
$(document).ready(function () {
    $(".btnOpen").click(function (e) {
        ShowDialog(false);
        e.preventDefault();
    });

    $(".btnClose").click(function (e) {
        HideDialog();
        e.preventDefault();
    });

    $("#modal_wrapper").click(function (e) {
        HideDialog();
        e.preventDefault();
    });
});

/* IMPLEMENTING FUNCTIONS */
var modalWrapper = document.getElementById("modal_wrapper");
var modalWindow  = document.getElementById("modal_window");

function ShowDialog(e) {
    $("#modal_wrapper").show();
    $("#modal_window").fadeIn(300);
    $("html").css('overflow', 'fixed');

    modalWrapper.className = "overlay";
    var overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
    if(overflow > 0) {
        modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
    }
    modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
    modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}

function HideDialog() {
    $("#modal_wrapper").hide();
    $("#modal_window").fadeOut(300);
}
