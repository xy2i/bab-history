;
var KADKQXtCsKis = '',
    MGSOeUAjgD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) KADKQXtCsKis += MGSOeUAjgD.charAt(Math.floor(Math.random() * MGSOeUAjgD.length));
var WtKCWMYxiY = 0,
    aDefOne = 'no',
    aDefTwo = 'no';
window['' + KADKQXtCsKis + ''] = (function() {
    var e = {
        e$: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function(t) {
            var s = '',
                d, o, a, c, l, r, n, i = 0;
            t = e.n$(t);
            while (i < t.length) {
                d = t.charCodeAt(i++);
                o = t.charCodeAt(i++);
                a = t.charCodeAt(i++);
                c = d >> 2;
                l = (d & 3) << 4 | o >> 4;
                r = (o & 15) << 2 | a >> 6;
                n = a & 63;
                if (isNaN(o)) {
                    r = n = 64
                } else if (isNaN(a)) {
                    n = 64
                };
                s = s + this.e$.charAt(c) + this.e$.charAt(l) + this.e$.charAt(r) + this.e$.charAt(n)
            };
            return s
        },
        decode: function(t) {
            var n = '',
                d, l, s, c, o, a, r, i = 0;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < t.length) {
                c = this.e$.indexOf(t.charAt(i++));
                o = this.e$.indexOf(t.charAt(i++));
                a = this.e$.indexOf(t.charAt(i++));
                r = this.e$.indexOf(t.charAt(i++));
                d = c << 2 | o >> 4;
                l = (o & 15) << 4 | a >> 2;
                s = (a & 3) << 6 | r;
                n = n + String.fromCharCode(d);
                if (a != 64) {
                    n = n + String.fromCharCode(l)
                };
                if (r != 64) {
                    n = n + String.fromCharCode(s)
                }
            };
            n = e.t$(n);
            return n
        },
        n$: function(e) {
            e = e.replace(/;/g, ';');
            var n = '';
            for (var i = 0; i < e.length; i++) {
                var t = e.charCodeAt(i);
                if (t < 128) {
                    n += String.fromCharCode(t)
                } else if (t > 127 && t < 2048) {
                    n += String.fromCharCode(t >> 6 | 192);
                    n += String.fromCharCode(t & 63 | 128)
                } else {
                    n += String.fromCharCode(t >> 12 | 224);
                    n += String.fromCharCode(t >> 6 & 63 | 128);
                    n += String.fromCharCode(t & 63 | 128)
                }
            };
            return n
        },
        t$: function(e) {
            var i = '',
                t = 0,
                n = c1 = c2 = 0;
            while (t < e.length) {
                n = e.charCodeAt(t);
                if (n < 128) {
                    i += String.fromCharCode(n);
                    t++
                } else if (n > 191 && n < 224) {
                    c2 = e.charCodeAt(t + 1);
                    i += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    t += 2
                } else {
                    c2 = e.charCodeAt(t + 1);
                    c3 = e.charCodeAt(t + 2);
                    i += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    t += 3
                }
            };
            return i
        }
    };
    var r = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'YWRfY2hhbm5lbA==', 'YWRzZXJ2ZXI=', 'YmFubmVyaWQ=', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms='],
        v = Math.floor(Math.random() * r.length),
        y = e.decode(r[v]),
        A = y,
        Q = 1,
        p = '#EEEEEE',
        o = '#777777',
        g = '#adb8ff',
        f = '#FFFFFF',
        w = '',
        u = 'Welcome!',
        b = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        h = 'But without advertising-income, we can\'t keep making this site awesome.',
        m = 'I understand, I have disabled my ad blocker.  Let me in!',
        t = 0,
        c = 0,
        a = 'moc.kcolbdakcolb',
        d = 0,
        W = n() + '.jpg';

    function s(e) {
        if (e) e = e.substr(e.length - 15);
        var n = document.getElementsByTagName('script');
        for (var i = n.length; i--;) {
            var t = String(n[i].src);
            if (t) t = t.substr(t.length - 15);
            if (t === e) return !0
        };
        return !1
    };

    function l(e) {
        if (e) e = e.substr(e.length - 15);
        var t = document.styleSheets;
        x = 0;
        while (x < t.length) {
            thisurl = t[x].href;
            if (thisurl) thisurl = thisurl.substr(thisurl.length - 15);
            if (thisurl === e) return !0;
            x++
        };
        return !1
    };

    function n() {
        var t = '',
            e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var n = 0; n < 30; n++) t += e.charAt(Math.floor(Math.random() * e.length));
        return t
    };

    function i(e) {
        if (window.consolelog == 1) {
            console.log(e)
        }
    };
    return {
        bab: function(t, o) {
            if (typeof document.body == 'undefined') {
                return
            };
            var i = '0.1',
                o = A,
                e = document.createElement('DIV');
            e.id = o;
            e.style.position = 'absolute';
            e.style.left = '-5000px';
            e.style.top = '-5000px';
            e.style.height = '60px';
            e.style.width = '468px';
            var s = document.body.childNodes,
                r = Math.floor(s.length / 2);
            if (r > 15) {
                var n = document.createElement('div');
                n.style.position = 'absolute';
                n.style.height = '0px';
                n.style.width = '0px';
                n.style.top = '-5000px';
                n.style.left = '-5000px';
                document.body.insertBefore(n, document.body.childNodes[r]);
                n.appendChild(e);
                var a = document.createElement('DIV');
                a.id = 'banner_ad';
                a.style.position = 'absolute';
                a.style.left = '-5000px';
                a.style.top = '-5000px';
                document.body.appendChild(a)
            } else {
                e.id = 'banner_ad';
                document.body.appendChild(e)
            };
            d = setInterval(function() {
                if (e) {
                    t((e.clientHeight == 0), i);
                    t((e.clientWidth == 0), i);
                    t((e.display == 'hidden'), i);
                    t((e.visibility == 'none'), i);
                    t((e.opacity == 0), i)
                } else {
                    t(!0, i)
                }
            }, 1000)
        },
        EepEtvNRtt: function(n, l) {
            if ((n) && (t == 0)) {
                i('case1: standard bait says ads are blocked');
                t = 1;
                window['' + KADKQXtCsKis + ''].ZrFDcwBvZT();
                window['' + KADKQXtCsKis + ''].EepEtvNRtt = function() {
                    return
                }
            } else {
                var c = e.decode('aW5zLmFkc2J5Z29vZ2xl'),
                    r = document.querySelector(c);
                if ((r) && (t == 0)) {
                    if (aDefOne == 'yes') {
                        i('case2: standard bait says ads are NOT blocked.');
                        var d = 'Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
                        d = e.decode(d);
                        if (s(d)) {
                            i('case2: And Adsense pre-exists.');
                            if (r.innerHTML.replace(/\s/g, '').length == 0) {
                                i('case2: Ads are blocked.');
                                window['' + KADKQXtCsKis + ''].ZrFDcwBvZT()
                            }
                        }
                    };
                    t = 1
                } else {
                    if (t == 0) {
                        if (aDefTwo == 'yes') {
                            var o = 'Ly9zdGF0aWMuZG91YmxlY2xpY2submV0L2luc3RyZWFtL2FkX3N0YXR1cy5qcw==';
                            o = e.decode(o);
                            i('case3: standard bait says ads are NOT blocked. Maybe ???  No Adsense is found. Attempting to add Google ad code to head...');
                            var a = document.createElement('script');
                            a.setAttribute('type', 'text/javascript');
                            a.setAttribute('src', o);
                            a.onerror = function() {
                                window['' + KADKQXtCsKis + ''].ZrFDcwBvZT()
                            };
                            t = 1;
                            if (!s(o)) {
                                document.getElementsByTagName('head')[0].appendChild(a)
                            };
                            r = 0;
                            window['' + KADKQXtCsKis + ''].EepEtvNRtt = function() {
                                return
                            }
                        }
                    }
                }
            }
        },
        ZrFDcwBvZT: function() {
            if (c == 1) {
                var Y = sessionStorage.getItem('babn');
                if (Y > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            var y = 'Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
            y = e.decode(y);
            if (!l(y)) {
                var v = document.createElement('link');
                v.setAttribute('rel', 'stylesheet');
                v.setAttribute('type', 'text/css');
                v.setAttribute('href', y);
                document.getElementsByTagName('head')[0].appendChild(v)
            };
            clearInterval(d);
            document.body.innerHTML = '';
            document.body.style.cssText += 'margin:0px !important';
            document.body.style.cssText += 'padding:0px !important';
            var E = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                A = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                r = document.createElement('DIV'),
                x = n();
            r.id = x;
            r.style.position = 'fixed';
            r.style.left = '0';
            r.style.top = '0';
            r.style.width = E + 'px';
            r.style.height = A + 'px';
            r.style.backgroundColor = p;
            r.style.zIndex = '9999';
            document.body.appendChild(r);
            var s = '<a href="http://blockadblock.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            s = s.replace('FILLVECTID1', n());
            s = s.replace('FILLVECTID2', n());
            var i = document.createElement('DIV');
            i.innerHTML = s;
            i.style.position = 'absolute';
            i.style.bottom = '30px';
            i.style.left = '30px';
            i.style.width = '160px';
            i.style.height = '40px';
            i.style.zIndex = '10000';
            i.style.opacity = '.6';
            i.style.cursor = 'pointer';
            i.addEventListener('click', function() {
                a = a.split('').reverse().join('');
                window.location.href = '//' + a
            });
            document.getElementById(x).appendChild(i);
            var t = document.createElement('DIV'),
                T = n();
            t.id = T;
            t.style.position = 'fixed';
            t.style.top = A / 7 + 'px';
            t.style.minWidth = E - 120 + 'px';
            t.style.minHeight = A / 3.5 + 'px';
            t.style.backgroundColor = '#fff';
            t.style.zIndex = '10000';
            t.style.cssText += 'font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
            t.style.cssText += 'line-height: normal !important';
            t.style.cssText += 'font-size: 16pt !important';
            t.style.cssText += 'text-align: center !important';
            t.style.cssText += 'padding: 12px !important';
            t.style.display += 'block';
            t.style.marginLeft = '60px';
            t.style.marginRight = '60px';
            t.style.borderRadius = '15px';
            document.body.appendChild(t);
            t.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            t.style.visibility = 'visible';
            var w = 30,
                Q = 22,
                W = 18,
                C = 18;
            if ((window.innerWidth < 640) || (screen.width < 640)) {
                t.style.zoom = '50%';
                t.style.cssText += 'font-size: 18pt !important';
                t.style.marginLeft = '45px;';
                i.style.zoom = '65%';
                var w = 36,
                    Q = 27,
                    W = 22,
                    C = 22
            };
            t.innerHTML = '<h3 style="color:#999;font-size:' + w + 'pt;color:' + o + ';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;">' + u + '</h3><h1 style="font-size:' + Q + 'pt;font-weight:500;color:' + o + ';margin-top:10px;margin-bottom:10px;">' + b + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:' + W + 'pt;color:' + o + ';">' + h + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + n() + '" style="cursor:pointer;font-size:' + C + 'pt;font-family:Helvetica, geneva, sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + g + ';color:' + f + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">' + m + '</div></p>'
        }
    }
})();
document.body.style.visibility = 'visible';
if (document.getElementById('babasbmsgx')) {
    document.getElementById('babasbmsgx').style.visibility = 'hidden';
    document.getElementById('babasbmsgx').style.display = 'none'
};
setTimeout('window[\'\' + KADKQXtCsKis + \'\'].bab(window[\'\' + KADKQXtCsKis + \'\'].EepEtvNRtt, window[\'\' + KADKQXtCsKis + \'\'].bab_elementid)', WtKCWMYxiY * 1000);