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
            $("h4").text("")
            setInterval(function () {
                if (i < 5) {
                    $("#result").append(`<p>Test ${i+1}&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ${results[i]} mbps</p>`);
                    showResults();
                    i++;
                } else {
                    $("#maxSpeed").text(Math.max(results[0], results[1], results[2], results[3], results[4])+ " mbps");
                    $("#minSpeed").text(Math.min(results[0], results[1], results[2], results[3], results[4])+ " mbps");
                    $("#averageSpeed").text((parseFloat(results[0] + results[1] + results[2] + results[3] + results[4])/5).toFixed(2)+ " mbps");
                }
            }, 1000);
        }
    }
})
