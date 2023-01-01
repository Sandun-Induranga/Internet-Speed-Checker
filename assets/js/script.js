/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

$(function () {
    let size = 127;
    let start = performance.now();
    let end = 0;
    let time = 0;
    let result = 0;
    let i = 0;
    let results = [];

    for (let i = 0; i < 5; i++) {
        $.ajax({
            url: "https://codepen.io/informiho/pen/CuGJI.html",
            method: "get",
            success: function () {
                end = performance.now();
                time = (end - start) / 1000;
                result = (size / time / 1000 * 8).toFixed(2);
                results.push(result);
                showResults();
            }
        });
    }

    function showResults() {
        if (results.length == 5) {
            setInterval(function () {
                if (i < 5) {
                    console.log(results[i])
                    showResults();
                    i++;
                }
            }, 1000);
        }
    }
})
