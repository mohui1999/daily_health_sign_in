function r(r, n) {
    return r << n | r >>> 32 - n;
}

function n(r, n) {
    var t, o, u, e, f;
    return u = 2147483648 & r, e = 2147483648 & n, t = 1073741824 & r, o = 1073741824 & n, 
    f = (1073741823 & r) + (1073741823 & n), t & o ? 2147483648 ^ f ^ u ^ e : t | o ? 1073741824 & f ? 3221225472 ^ f ^ u ^ e : 1073741824 ^ f ^ u ^ e : f ^ u ^ e;
}

function t(r, n, t) {
    return r & n | ~r & t;
}

function o(r, n, t) {
    return r & t | n & ~t;
}

function u(r, n, t) {
    return r ^ n ^ t;
}

function e(r, n, t) {
    return n ^ (r | ~t);
}

function f(o, u, e, f, i, c, a) {
    return o = n(o, n(n(t(u, e, f), i), a)), n(r(o, c), u);
}

function i(t, u, e, f, i, c, a) {
    return t = n(t, n(n(o(u, e, f), i), a)), n(r(t, c), u);
}

function c(t, o, e, f, i, c, a) {
    return t = n(t, n(n(u(o, e, f), i), a)), n(r(t, c), o);
}

function a(t, o, u, f, i, c, a) {
    return t = n(t, n(n(e(o, u, f), i), a)), n(r(t, c), o);
}

function C(r) {
    for (var n, t = r.length, o = t + 8, u = 16 * ((o - o % 64) / 64 + 1), e = Array(u - 1), f = 0, i = 0; i < t; ) f = i % 4 * 8, 
    e[n = (i - i % 4) / 4] = e[n] | r.charCodeAt(i) << f, i++;
    return n = (i - i % 4) / 4, f = i % 4 * 8, e[n] = e[n] | 128 << f, e[u - 2] = t << 3, 
    e[u - 1] = t >>> 29, e;
}

function h(r) {
    var n, t = "", o = "";
    for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
    return t;
}

function g(r) {
    for (var n = "", t = 0; t < r.length; t++) {
        var o = r.charCodeAt(t);
        o < 128 ? n += String.fromCharCode(o) : o > 127 && o < 2048 ? (n += String.fromCharCode(o >> 6 | 192), 
        n += String.fromCharCode(63 & o | 128)) : (n += String.fromCharCode(o >> 12 | 224), 
        n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(63 & o | 128));
    }
    return n;
}

function md5(r) {
        var t, o, u, e, d, m, S, v, l, s = Array();
        for (s = C(r = g(r)), m = 1732584193, S = 4023233417, v = 2562383102, l = 271733878,
        t = 0; t < s.length; t += 16) o = m, u = S, e = v, d = l, S = a(S = a(S = a(S = a(S = c(S = c(S = c(S = c(S = i(S = i(S = i(S = i(S = f(S = f(S = f(S = f(S, v = f(v, l = f(l, m = f(m, S, v, l, s[t + 0], 7, 3614090360), S, v, s[t + 1], 12, 3905402710), m, S, s[t + 2], 17, 606105819), l, m, s[t + 3], 22, 3250441966), v = f(v, l = f(l, m = f(m, S, v, l, s[t + 4], 7, 4118548399), S, v, s[t + 5], 12, 1200080426), m, S, s[t + 6], 17, 2821735955), l, m, s[t + 7], 22, 4249261313), v = f(v, l = f(l, m = f(m, S, v, l, s[t + 8], 7, 1770035416), S, v, s[t + 9], 12, 2336552879), m, S, s[t + 10], 17, 4294925233), l, m, s[t + 11], 22, 2304563134), v = f(v, l = f(l, m = f(m, S, v, l, s[t + 12], 7, 1804603682), S, v, s[t + 13], 12, 4254626195), m, S, s[t + 14], 17, 2792965006), l, m, s[t + 15], 22, 1236535329), v = i(v, l = i(l, m = i(m, S, v, l, s[t + 1], 5, 4129170786), S, v, s[t + 6], 9, 3225465664), m, S, s[t + 11], 14, 643717713), l, m, s[t + 0], 20, 3921069994), v = i(v, l = i(l, m = i(m, S, v, l, s[t + 5], 5, 3593408605), S, v, s[t + 10], 9, 38016083), m, S, s[t + 15], 14, 3634488961), l, m, s[t + 4], 20, 3889429448), v = i(v, l = i(l, m = i(m, S, v, l, s[t + 9], 5, 568446438), S, v, s[t + 14], 9, 3275163606), m, S, s[t + 3], 14, 4107603335), l, m, s[t + 8], 20, 1163531501), v = i(v, l = i(l, m = i(m, S, v, l, s[t + 13], 5, 2850285829), S, v, s[t + 2], 9, 4243563512), m, S, s[t + 7], 14, 1735328473), l, m, s[t + 12], 20, 2368359562), v = c(v, l = c(l, m = c(m, S, v, l, s[t + 5], 4, 4294588738), S, v, s[t + 8], 11, 2272392833), m, S, s[t + 11], 16, 1839030562), l, m, s[t + 14], 23, 4259657740), v = c(v, l = c(l, m = c(m, S, v, l, s[t + 1], 4, 2763975236), S, v, s[t + 4], 11, 1272893353), m, S, s[t + 7], 16, 4139469664), l, m, s[t + 10], 23, 3200236656), v = c(v, l = c(l, m = c(m, S, v, l, s[t + 13], 4, 681279174), S, v, s[t + 0], 11, 3936430074), m, S, s[t + 3], 16, 3572445317), l, m, s[t + 6], 23, 76029189), v = c(v, l = c(l, m = c(m, S, v, l, s[t + 9], 4, 3654602809), S, v, s[t + 12], 11, 3873151461), m, S, s[t + 15], 16, 530742520), l, m, s[t + 2], 23, 3299628645), v = a(v, l = a(l, m = a(m, S, v, l, s[t + 0], 6, 4096336452), S, v, s[t + 7], 10, 1126891415), m, S, s[t + 14], 15, 2878612391), l, m, s[t + 5], 21, 4237533241), v = a(v, l = a(l, m = a(m, S, v, l, s[t + 12], 6, 1700485571), S, v, s[t + 3], 10, 2399980690), m, S, s[t + 10], 15, 4293915773), l, m, s[t + 1], 21, 2240044497), v = a(v, l = a(l, m = a(m, S, v, l, s[t + 8], 6, 1873313359), S, v, s[t + 15], 10, 4264355552), m, S, s[t + 6], 15, 2734768916), l, m, s[t + 13], 21, 1309151649), v = a(v, l = a(l, m = a(m, S, v, l, s[t + 4], 6, 4149444226), S, v, s[t + 11], 10, 3174756917), m, S, s[t + 2], 15, 718787259), l, m, s[t + 9], 21, 3951481745),
        m = n(m, o), S = n(S, u), v = n(v, e), l = n(l, d);
        return h(m) + h(S) + h(v) + h(l);
}