zodiak.onclick = function () {
    let bulan = document.querySelector("#bulan").value;
    let tanggal = document.querySelector("#tanggal").value;
    let zodiak = "";
        if (bulan == 3 && tanggal >= 21 && tanggal <= 31){
            zodiak = "ARIES";
        }
    document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 4 && tanggal >= 20 && tanggal <= 30) {
            zodiak = "Taurus";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 5 && tanggal >= 21 && tanggal <= 31) {
            zodiak = "Gemini";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 6 && tanggal >= 21 && tanggal <= 30) {
            zodiak = "Cancer";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 7 && tanggal >= 23 && tanggal <= 31) {
            zodiak = "Leo";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 8 && tanggal >= 23 && tanggal <= 31) {
            zodiak = "Virgo";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 9 && tanggal >= 23 && tanggal <= 30) {
            zodiak = "Libra";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 10 && tanggal >= 23 && tanggal <= 31) {
            zodiak = "Scorpio";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 11 && tanggal >= 22 && tanggal <= 30) {
            zodiak = "Sagitarius";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 12 && tanggal >= 22 && tanggal <= 31) {
            zodiak = "Capricorn";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 1 && tanggal >= 20 && tanggal <= 31) {
            zodiak = "Aquarius";
        }
        document.querySelector("#hasil").innerHTML = zodiak;

        if (bulan == 2 && tanggal >= 19 && tanggal <= 28) {
            zodiak = "P";
        }
        document.querySelector("#hasil").innerHTML = zodiak;
};