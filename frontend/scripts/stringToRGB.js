export function hashStringToColor(str) {
    var hash = djb2(str);
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return {
        r: ("0" + r.toString(16)).substr(-2),
        g: ("0" + g.toString(16)).substr(-2),
        b: ("0" + b.toString(16)).substr(-2),
    };
    // return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}

function djb2(str) {
    var hash = 5278; // getting random number
    for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}

export function rgbToString(rgb) {
    return "#" + rgb.r + rgb.g + rgb.b;
}

export function invertColor(color) {
    return {
        r: ("0" + (255-Number("0x"+color.r)).toString(16)).substr(-2),
        g: ("0" + (255-Number("0x"+color.g)).toString(16)).substr(-2),
        b: ("0" + (255-Number("0x"+color.b)).toString(16)).substr(-2),
    };
}
