function hesap() {
    var a = document.getElementById("var1-num");
    var b = document.getElementById("var2-num");
    var c = document.getElementById("var3-num");
    var d = document.getElementById("var4-num");

    var e = document.getElementById("tText");
    var f = document.getElementById("t2Text")
    var g = document.getElementById("t3Text");

    var canli, ex_1, ex_2, ortam_sicaklik, a, b, c, k, m, t, dakika, saat, top_dakika, simdi_dk, simdi_sa,
        simdi_top, cikarilacak_top, fark;

    canli = a.value;
    ex_1 = b.value;
    ex_2 = c.value;
    ortam_sicaklik = d.value;

    a = ex_1 - ortam_sicaklik;
    b = ex_2 - ortam_sicaklik;
    c = b / a;
    k = -Math.log(c) / Math.log(Math.E) / 120;
    m = Math.log((canli - ortam_sicaklik) / a) / Math.log(Math.E);
    t = m / k;

    g.innerHTML = t;
    // T DEĞERİ BULUNDU

    top_dakika = Math.ceil(t);
    dakika = top_dakika % 60;
    saat = (top_dakika - dakika) / 60;


    var d = new Date();
    simdi_dk = d.getMinutes();
    simdi_sa = d.getHours();

    simdi_top = simdi_sa * 60 + simdi_dk;
    cikarilacak_top = saat * 60 + dakika;
    fark = simdi_top - cikarilacak_top;

    if (fark < 0) {
        var gunler = 0;
        gunler = -fark / 1440;
        gunler = Math.ceiling(gunler);

        var olum_top = fark + gunler * 1440;

        var olum_sa = olum_top / 60;
        olum_sa = Math.floor(olum_sa);
        var olum_dk = olum_top % 60;

        if (gunler == 0) {
            //   gun_label.Text = "0";
            f.innerHTML = "Bugün saat " + FormatTwoDigits(olum_sa) + ":" + FormatTwoDigits(olum_dk);
        }
        else {
            //  gun_label.Text = gunler;
            f.innerHTML = gunler + " gün önce saat " + FormatTwoDigits(olum_sa) + ":" + FormatTwoDigits(olum_dk);
        }

        //  olumsaati_label.Text = olum_sa + ":" + olum_dk;
    }

    else {
        var gunler = 0;
        gunler = cikarilacak_top / 1440;
        gunler = Math.floor(gunler);

        var olum_sa = fark / 60;
        olum_sa = Math.floor(olum_sa);
        var olum_dk = fark % 60;

        if (gunler == 0) {
            //   gun_label.Text = "0";
            f.innerHTML = "Bugün saat " + FormatTwoDigits(olum_sa) + ":" + FormatTwoDigits(olum_dk);
        }
        else {
            //   gun_label.Text = gunler;
            f.innerHTML = gunler + " gün önce saat " + FormatTwoDigits(olum_sa) + ":" + FormatTwoDigits(olum_dk);
        }


        //  olumsaati_label.Text = olum_sa + ":" + olum_dk;
    }

    e.innerHTML = FormatTwoDigits(saat) + " saat, " + FormatTwoDigits(dakika) + " dakika önce.";
}
function FormatTwoDigits(i) {
    var functionReturnValue = null;
    if (10 > i) {
        functionReturnValue = "0" + i;
    }
    else {
        functionReturnValue = i;
    }
    return functionReturnValue;
}
