/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

let size = 127;
let start = performance.now();
let end = 0;
let time = 0;
let result = 0;

$.ajax({
    url: "https://codepen.io/informiho/pen/CuGJI.html",
    method: "get",
    success: function () {
        end = performance.now();
        time = (end - start)/1000;
        result = (size/time/1000*8).toFixed(2);
        console.log(result + "MBPS");
    }
})
