(function () {
    while (1) {
        setTimeout(a, 10000)
    }
    function a() {
        var paragraphs = document.getElementsByClassName('claimable-bonus__icon');
        console.log('a');
        paragraphs[0].click();
    }
})();