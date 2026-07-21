// ============================================
// TANICERDAS AI - PENYULUH PADI
// File : ai.js
// ============================================

// ===============================
// OPEN & CLOSE MODAL
// ===============================

function openAI() {
    document.getElementById("aiModal").style.display = "flex";
    document.getElementById("userQuestion").focus();
}

function closeAI() {
    document.getElementById("aiModal").style.display = "none";
}

// Tutup modal saat klik area luar
window.onclick = function (e) {
    const modal = document.getElementById("aiModal");

    if (e.target === modal) {
        closeAI();
    }
};

// ===============================
// ENTER KEY
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("userQuestion");

    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            sendQuestion();

        }

    });

});

// ===============================
// QUICK QUESTION
// ===============================

function quickQuestion(text) {

    document.getElementById("userQuestion").value = text;

    sendQuestion();

}

// ===============================
// KIRIM PERTANYAAN
// ===============================

function sendQuestion() {

    const input = document.getElementById("userQuestion");

    const question = input.value.trim();

    if (question === "") return;

    addUserMessage(question);

    input.value = "";

    showTyping();

    setTimeout(() => {

        hideTyping();

        const answer = getAIResponse(question);

        addAIMessage(answer);

    }, 1200);

}

// ===============================
// USER MESSAGE
// ===============================

function addUserMessage(text) {

    const chat = document.getElementById("chatMessages");

    const html = `

    <div class="user-message">

        <div class="bubble">

            ${text}

        </div>

    </div>

    `;

    chat.insertAdjacentHTML("beforeend", html);

    chat.scrollTop = chat.scrollHeight;

}

// ===============================
// AI MESSAGE
// ===============================

function addAIMessage(text) {

    const chat = document.getElementById("chatMessages");

    const html = `

    <div class="ai-message">

        <div class="avatar">

            🌾

        </div>

        <div class="bubble">

            ${text}

        </div>

    </div>

    `;

    chat.insertAdjacentHTML("beforeend", html);

    chat.scrollTop = chat.scrollHeight;

}

// ===============================
// TYPING
// ===============================

function showTyping() {

    document.getElementById("typingBox").style.display = "flex";

    const chat = document.getElementById("chatMessages");

    chat.scrollTop = chat.scrollHeight;

}

function hideTyping() {

    document.getElementById("typingBox").style.display = "none";

}

// ===============================
// AI KNOWLEDGE
// ===============================

function getAIResponse(q) {

    q = q.toLowerCase();

    // =====================================
    // CARA MENANAM
    // =====================================

    if (
        q.includes("tanam") ||
        q.includes("menanam")
    ) {

        return `
        <h4>🌾 Cara Menanam Padi</h4>

        <ul>

        <li>Gunakan bibit berumur 18–21 hari.</li>

        <li>Tanam 1–2 bibit per lubang.</li>

        <li>Gunakan sistem Jajar Legowo.</li>

        <li>Jaga kelembaban tanah setelah tanam.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("benih") ||
        q.includes("bibit")
    ) {

        return `
        <h4>🌱 Pemilihan Benih</h4>

        <ul>

        <li>Pilih benih bersertifikat.</li>

        <li>Daya tumbuh minimal 85%.</li>

        <li>Rendam benih selama 24 jam.</li>

        <li>Peram selama 24 jam sebelum disemai.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("persemaian") ||
        q.includes("semai")
    ) {

        return `
        <h4>🌿 Persemaian</h4>

        <ul>

        <li>Gunakan tanah yang gembur.</li>

        <li>Beri pupuk kandang.</li>

        <li>Jaga kelembaban media.</li>

        <li>Bibit siap pindah umur 18–21 hari.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("pupuk") ||
        q.includes("pemupukan")
    ) {

        return `
        <h4>🌱 Pemupukan Padi</h4>

        <ul>

        <li>Pupuk dasar menggunakan pupuk organik.</li>

        <li>Gunakan NPK sesuai rekomendasi.</li>

        <li>Pemupukan susulan umur 21 HST.</li>

        <li>Pemupukan berikutnya umur 35–40 HST.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("irigasi") ||
        q.includes("air") ||
        q.includes("pengairan")
    ) {

        return `
        <h4>💧 Pengairan</h4>

        <ul>

        <li>Gunakan sistem irigasi berselang.</li>

        <li>Hindari genangan terus-menerus.</li>

        <li>Keringkan lahan menjelang panen.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("wereng")
    ) {

        return `
        <h4>🐛 Wereng Batang Coklat</h4>

        <ul>

        <li>Gunakan varietas tahan.</li>

        <li>Jangan memberi nitrogen berlebihan.</li>

        <li>Musnahkan tanaman terserang.</li>

        <li>Gunakan insektisida bila populasi tinggi.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("blas")
    ) {

        return `
        <h4>🍂 Penyakit Blas</h4>

        <ul>

        <li>Gunakan benih sehat.</li>

        <li>Jangan berlebihan memberi Urea.</li>

        <li>Atur jarak tanam.</li>

        <li>Gunakan fungisida sesuai dosis.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("legowo")
    ) {

        return `
        <h4>🚜 Sistem Jajar Legowo</h4>

        <p>

        Sistem tanam yang memberikan ruang kosong
        setiap beberapa baris tanaman sehingga
        cahaya matahari lebih merata.

        </p>

        <ul>

        <li>Meningkatkan hasil panen.</li>

        <li>Memudahkan pemupukan.</li>

        <li>Mengurangi serangan hama.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("panen")
    ) {

        return `
        <h4>🌾 Panen Padi</h4>

        <ul>

        <li>Panen saat 90–95% bulir menguning.</li>

        <li>Gunakan sabit bergerigi atau combine harvester.</li>

        <li>Segera lakukan perontokan.</li>

        <li>Keringkan gabah hingga kadar air ±14%.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("organik")
    ) {

        return `
        <h4>🌿 Pupuk Organik</h4>

        <ul>

        <li>Pupuk kandang matang.</li>

        <li>Kompos.</li>

        <li>Pupuk hayati.</li>

        <li>POC (Pupuk Organik Cair).</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("hama")
    ) {

        return `
        <h4>🐛 Pengendalian Hama</h4>

        <ul>

        <li>Lakukan monitoring rutin.</li>

        <li>Gunakan musuh alami.</li>

        <li>Terapkan Pengendalian Hama Terpadu (PHT).</li>

        <li>Gunakan pestisida sesuai kebutuhan.</li>

        </ul>
        `;
    }

    // =====================================

    if (
        q.includes("penyakit")
    ) {

        return `
        <h4>🍂 Penyakit Padi</h4>

        <ul>

        <li>Blas</li>

        <li>Hawar Daun Bakteri</li>

        <li>Tungro</li>

        <li>Busuk Pelepah</li>

        </ul>

        Gunakan benih sehat, sanitasi lahan,
        dan fungisida bila diperlukan.
        `;
    }

    // =====================================

    if (
        q.includes("halo") ||
        q.includes("hai") ||
        q.includes("selamat")
    ) {

        return `
        Halo 👋<br><br>

        Saya <b>TaniCerdas AI</b>.

        Silakan tanyakan apa saja mengenai:

        <ul>

        <li>Budidaya padi</li>

        <li>Pemupukan</li>

        <li>Hama</li>

        <li>Penyakit</li>

        <li>Panen</li>

        <li>Jajar Legowo</li>

        </ul>
        `;
    }

    // =====================================
    // DEFAULT
    // =====================================

    return `
    Maaf, saya belum memahami pertanyaan tersebut.

    <br><br>

    Anda dapat menanyakan tentang:

    <ul>

    <li>🌾 Cara Menanam Padi</li>

    <li>🌱 Benih</li>

    <li>🌿 Pemupukan</li>

    <li>💧 Pengairan</li>

    <li>🐛 Wereng</li>

    <li>🍂 Penyakit Blas</li>

    <li>🚜 Jajar Legowo</li>

    <li>🌾 Panen</li>

    </ul>
    `;
}