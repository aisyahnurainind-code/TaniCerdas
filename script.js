// =======================
// KALKULATOR
// =======================
/* ===========================================
   KALKULATOR PADI
=========================================== */

function hitungKebutuhanPadi() {

    let luas = parseFloat(document.getElementById("luasLahanPadi").value);

    if (isNaN(luas) || luas <= 0) {
        document.getElementById("hasilKalkulatorPadi").innerHTML =
            "<p style='color:red;'>Masukkan luas lahan yang benar!</p>";
        return;
    }

    let benih = luas * 25;          // kg/ha
    let urea = luas * 250;          // kg/ha
    let npk = luas * 300;           // kg/ha
    let organik = luas * 2000;      // kg/ha

    document.getElementById("hasilKalkulatorPadi").innerHTML = `
<div class="alert alert-success shadow-sm rounded-3">

    <h4 class="mb-3">
        🌾 Hasil Perhitungan
    </h4>

    <div class="row text-center g-3">

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Benih</h6>
                <h4 class="text-success">${benih.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Urea</h6>
                <h4 class="text-success">${urea.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk NPK</h6>
                <h4 class="text-success">${npk.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Organik</h6>
                <h4 class="text-success">${organik.toFixed(1)} kg</h4>
            </div>
        </div>

    </div>

</div>
`;
<<<<<<< HEAD
=======
}


/* ===========================================
   KALKULATOR CABAI
=========================================== */

function hitungKebutuhanCabai() {

    let luas = parseFloat(document.getElementById("luasLahanCabai").value);

    if (isNaN(luas) || luas <= 0) {
        document.getElementById("hasilKalkulatorCabai").innerHTML =
            "<p style='color:red;'>Masukkan luas lahan yang benar!</p>";
        return;
    }

    let bibit = luas * 18000;          // tanaman/ha
    let kandang = luas * 10000;        // kg/ha
    let npk = luas * 500;              // kg/ha
    let dolomit = luas * 1000;         // kg/ha

    document.getElementById("hasilKalkulatorCabai").innerHTML = `
<div class="alert alert-danger shadow-sm rounded-3">

    <h4 class="mb-3">
        🌶️ Hasil Perhitungan
    </h4>

    <div class="row text-center g-3">

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Bibit Cabai</h6>
                <h4 class="text-danger">${bibit.toLocaleString()} Tanaman</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Kandang</h6>
                <h4 class="text-danger">${kandang.toLocaleString()} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk NPK</h6>
                <h4 class="text-danger">${npk.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Dolomit</h6>
                <h4 class="text-danger">${dolomit.toFixed(1)} kg</h4>
            </div>
        </div>

    </div>

</div>
`;
>>>>>>> 16993edf82500ebd5834e27bf7e46fe8ff2ccb27
}


/* ===========================================
   KALKULATOR CABAI
=========================================== */

function hitungKebutuhanCabai() {

    let luas = parseFloat(document.getElementById("luasLahanCabai").value);

    if (isNaN(luas) || luas <= 0) {
        document.getElementById("hasilKalkulatorCabai").innerHTML =
            "<p style='color:red;'>Masukkan luas lahan yang benar!</p>";
        return;
    }

    let bibit = luas * 18000;          // tanaman/ha
    let kandang = luas * 10000;        // kg/ha
    let npk = luas * 500;              // kg/ha
    let dolomit = luas * 1000;         // kg/ha

    document.getElementById("hasilKalkulatorCabai").innerHTML = `
<div class="alert alert-danger shadow-sm rounded-3">

    <h4 class="mb-3">
        🌶️ Hasil Perhitungan
    </h4>

    <div class="row text-center g-3">

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Bibit Cabai</h6>
                <h4 class="text-danger">${bibit.toLocaleString()} Tanaman</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Kandang</h6>
                <h4 class="text-danger">${kandang.toLocaleString()} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk NPK</h6>
                <h4 class="text-danger">${npk.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Dolomit</h6>
                <h4 class="text-danger">${dolomit.toFixed(1)} kg</h4>
            </div>
        </div>

    </div>

</div>
`;
}

<<<<<<< HEAD
=======
}

// =================================
// GRAFIK HARGA PASAR PADI & CABE
// =================================

window.addEventListener("load", function () {


    // ===============================
    // GRAFIK HARGA PADI
    // ===============================

    const canvasPadi = document.getElementById("priceChart");


    if (canvasPadi) {


        const ctxPadi = canvasPadi.getContext("2d");


        new Chart(ctxPadi, {


            type: "line",


            data: {


                labels: [
                    "Senin",
                    "Selasa",
                    "Rabu",
                    "Kamis",
                    "Jumat",
                    "Sabtu",
                    "Minggu"
                ],



                datasets: [


                    {

                        label: "Gabah Kering Panen (Rp/kg)",


                        data: [
                            6000,
                            6100,
                            6150,
                            6200,
                            6180,
                            6240,
                            6250
                        ],


                        borderColor: "#2e7d32",

                        backgroundColor:
                            "rgba(46,125,50,0.15)",


                        borderWidth: 3,

                        fill: true,

                        tension: 0.4,

                        pointRadius: 5


                    },



                    {

                        label: "Beras Premium (Rp/kg)",


                        data: [
                            15000,
                            15100,
                            15150,
                            15200,
                            15180,
                            15250,
                            15200
                        ],


                        borderColor: "#f59e0b",

                        backgroundColor:
                            "rgba(245,158,11,0.15)",


                        borderWidth: 3,

                        fill: true,

                        tension: 0.4,

                        pointRadius: 5


                    }


                ]

            },


            options: {


                responsive: true,


                maintainAspectRatio: false,


                plugins: {


                    legend: {

                        position: "bottom"

                    }


                },


                scales: {


                    y: {


                        beginAtZero: false,


                        ticks: {


                            callback: function (value) {

                                return "Rp " + value.toLocaleString();

                            }

                        }

                    }


                }


            }


        });


    }





    // ===============================
    // GRAFIK HARGA CABE
    // ===============================


    const canvasCabe = document.getElementById("cabaiChart");


    if (canvasCabe) {


        const ctxCabe = canvasCabe.getContext("2d");


        new Chart(ctxCabe, {


            type: "line",



            data: {


                labels: [

                    "Senin",
                    "Selasa",
                    "Rabu",
                    "Kamis",
                    "Jumat",
                    "Sabtu",
                    "Minggu"

                ],



                datasets: [


                    {


                        label: "Cabai Merah Besar (Rp/kg)",


                        data: [

                            42000,
                            43000,
                            43500,
                            44000,
                            45000,
                            45500,
                            45000

                        ],



                        borderColor: "#dc2626",


                        backgroundColor:
                            "rgba(220,38,38,0.15)",


                        borderWidth: 3,


                        fill: true,


                        tension: 0.4,


                        pointRadius: 5


                    },





                    {


                        label: "Cabai Rawit Merah (Rp/kg)",


                        data: [

                            52000,
                            53000,
                            54000,
                            53500,
                            55000,
                            56000,
                            55000

                        ],



                        borderColor: "#16a34a",


                        backgroundColor:
                            "rgba(22,163,74,0.15)",


                        borderWidth: 3,


                        fill: true,


                        tension: 0.4,


                        pointRadius: 5


                    }



                ]



            },



            options: {


                responsive: true,


                maintainAspectRatio: false,


                plugins: {


                    legend: {


                        position: "bottom"


                    }


                },



                scales: {


                    y: {


                        beginAtZero: false,


                        ticks: {


                            callback: function (value) {


                                return "Rp " + value.toLocaleString();

                            }

                        }


                    }


                }



            }



        });



    }



});
>>>>>>> 16993edf82500ebd5834e27bf7e46fe8ff2ccb27
