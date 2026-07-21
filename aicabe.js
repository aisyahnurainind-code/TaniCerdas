// ============================================
// TANICERDAS AI - PENYULUH CABAI
// File : ai-cabai.js
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

// Tutup modal saat klik luar
window.onclick = function (e) {

    const modal = document.getElementById("aiModal");

    if (e.target === modal) {
        closeAI();
    }

};

// ===============================
// ENTER
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
// SEND
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

        const answer = getAIResponseCabai(question);

        addAIMessage(answer);

    }, 1200);

}

// ===============================
// USER MESSAGE
// ===============================

function addUserMessage(text) {

    const chat = document.getElementById("chatMessages");

    chat.insertAdjacentHTML("beforeend", `

    <div class="user-message">

        <div class="bubble">

            ${text}

        </div>

    </div>

    `);

    chat.scrollTop = chat.scrollHeight;

}

// ===============================
// AI MESSAGE
// ===============================

function addAIMessage(text) {

    const chat = document.getElementById("chatMessages");

    chat.insertAdjacentHTML("beforeend", `

    <div class="ai-message">

        <div class="avatar">

            🌶️

        </div>

        <div class="bubble">

            ${text}

        </div>

    </div>

    `);

    chat.scrollTop = chat.scrollHeight;

}

// ===============================
// TYPING
// ===============================

function showTyping() {

    document.getElementById("typingBox").style.display = "flex";

}

function hideTyping() {

    document.getElementById("typingBox").style.display = "none";

}

// ===============================
// AI KNOWLEDGE
// ===============================

function getAIResponseCabai(q) {

    q = q.toLowerCase();

    // =====================================

    if (q.includes("tanam") || q.includes("menanam")) {

        return `
        <h4>🌶️ Cara Menanam Cabai</h4>

        <ul>

        <li>Gunakan bibit umur 21–30 hari.</li>

        <li>Tanam pada sore hari.</li>

        <li>Jarak tanam sekitar 60 × 70 cm.</li>

        <li>Siram setelah tanam.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("benih") || q.includes("bibit")) {

        return `
        <h4>🌱 Pemilihan Benih Cabai</h4>

        <ul>

        <li>Pilih benih bersertifikat.</li>

        <li>Varietas tahan penyakit.</li>

        <li>Daya kecambah di atas 85%.</li>

        <li>Sesuaikan dengan musim tanam.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("persemaian") || q.includes("semai")) {

        return `
        <h4>🌿 Persemaian Cabai</h4>

        <ul>

        <li>Gunakan tray semai atau polybag kecil.</li>

        <li>Media campuran tanah, kompos, dan sekam.</li>

        <li>Siram pagi dan sore.</li>

        <li>Bibit siap pindah umur 21–30 hari.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("mulsa")) {

        return `
        <h4>🪴 Mulsa Plastik</h4>

        <ul>

        <li>Mengurangi gulma.</li>

        <li>Menjaga kelembaban tanah.</li>

        <li>Mengurangi penguapan air.</li>

        <li>Mengurangi penyakit dari tanah.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("siram") || q.includes("penyiraman") || q.includes("air")) {

        return `
        <h4>💧 Penyiraman Cabai</h4>

        <ul>

        <li>Siram setiap pagi.</li>

        <li>Musim kemarau bisa 2 kali sehari.</li>

        <li>Hindari genangan air.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("pupuk") || q.includes("pemupukan")) {

        return `
        <h4>🌱 Pemupukan Cabai</h4>

        <ul>

        <li>Pupuk kandang saat olah tanah.</li>

        <li>NPK diberikan bertahap.</li>

        <li>Tambahkan KNO3 saat pembungaan.</li>

        <li>Berikan pupuk organik cair bila diperlukan.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("thrips")) {

        return `
        <h4>🐛 Thrips</h4>

        <ul>

        <li>Gunakan perangkap kuning.</li>

        <li>Jaga kebersihan lahan.</li>

        <li>Gunakan insektisida bila serangan tinggi.</li>

        <li>Tanam refugia untuk musuh alami.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("kutu")) {

        return `
        <h4>🪲 Kutu Daun</h4>

        <ul>

        <li>Pangkas daun terserang.</li>

        <li>Gunakan predator alami.</li>

        <li>Semprot insektisida sesuai dosis.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("busuk")) {

        return `
        <h4>🍅 Busuk Buah</h4>

        <ul>

        <li>Hindari kelembaban berlebih.</li>

        <li>Gunakan mulsa.</li>

        <li>Semprot fungisida sesuai anjuran.</li>

        <li>Buang buah yang terinfeksi.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("layu")) {

        return `
        <h4>🥀 Penyakit Layu</h4>

        <ul>

        <li>Gunakan bibit sehat.</li>

        <li>Rotasi tanaman.</li>

        <li>Perbaiki drainase.</li>

        <li>Cabut tanaman yang terserang.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("antraknosa") || q.includes("patek")) {

        return `
        <h4>🍅 Antraknosa (Patek)</h4>

        <ul>

        <li>Gunakan benih sehat.</li>

        <li>Jangan terlalu rapat.</li>

        <li>Buang buah yang terserang.</li>

        <li>Semprot fungisida sesuai dosis.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("panen")) {

        return `
        <h4>🌶️ Panen Cabai</h4>

        <ul>

        <li>Panen umur 75–90 HST tergantung varietas.</li>

        <li>Petik bersama tangkainya.</li>

        <li>Lakukan pagi hari.</li>

        <li>Panen setiap 3–5 hari.</li>

        </ul>
        `;
    }

    // =====================================

    if (q.includes("halo") || q.includes("hai")) {

        return `
        Halo 👋<br><br>

        Saya <b>TaniCerdas AI</b>.

        Saya siap membantu mengenai budidaya cabai seperti:

        <ul>

        <li>🌱 Benih</li>

        <li>🌿 Persemaian</li>

        <li>🌶️ Penanaman</li>

        <li>💧 Penyiraman</li>

        <li>🌱 Pemupukan</li>

        <li>🐛 Thrips</li>

        <li>🪲 Kutu Daun</li>

        <li>🍅 Busuk Buah</li>

        <li>🌶️ Panen</li>

        </ul>
        `;
    }

    // =====================================

    return `
    Maaf, saya belum memahami pertanyaan tersebut.

    <br><br>

    Anda dapat bertanya mengenai:

    <ul>

    <li>🌶️ Cara Menanam Cabai</li>

    <li>🌱 Benih</li>

    <li>🌿 Persemaian</li>

    <li>🪴 Mulsa Plastik</li>

    <li>💧 Penyiraman</li>

    <li>🌱 Pemupukan</li>

    <li>🐛 Thrips</li>

    <li>🪲 Kutu Daun</li>

    <li>🍅 Busuk Buah</li>

    <li>🌶️ Panen</li>

    </ul>
    `;
}