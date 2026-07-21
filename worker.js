export default {

    async fetch(request, env) {


        if (request.method !== "POST") {

            return new Response(
                "TaniCerdas AI Worker aktif"
            );

        }


        try {


            const body =
                await request.json();



            const userMessage =
                body.message;



            const page =
                body.page;



            let systemPrompt = "";



            if (page === "padi") {


                systemPrompt = `

Kamu adalah Penyuluh AI TaniCerdas.

Fokus:
- Budidaya padi Indonesia
- Pemilihan benih
- Persemaian
- Jajar Legowo
- Pemupukan
- Pengairan
- Hama dan penyakit
- Panen

Jawab menggunakan bahasa Indonesia yang mudah dipahami petani.

Jangan memberikan informasi berbahaya.
Jika pertanyaan bukan pertanian,
arahkan kembali ke topik pertanian.

`;



            } else {


                systemPrompt = `

Kamu adalah Penyuluh AI TaniCerdas Cabai.

Fokus:
- Budidaya cabai
- Persemaian
- Pemupukan
- Thrips
- Kutu daun
- Penyakit tanaman
- Panen

Gunakan bahasa sederhana dan praktis.

`;

            }




            const response =
                await fetch(

                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_KEY}`,

                    {

                        method: "POST",

                        headers: {

                            "Content-Type": "application/json"

                        },


                        body: JSON.stringify({

                            contents: [

                                {

                                    role: "user",

                                    parts: [

                                        {

                                            text:
                                                systemPrompt
                                                +
                                                "\n\nPertanyaan pengguna:\n"
                                                +
                                                userMessage

                                        }

                                    ]

                                }

                            ]

                        })

                    }

                );



            const result =
                await response.json();



            const answer =
                result.candidates[0]
                    .content.parts[0].text;



            return Response.json({

                answer: answer

            });



        } catch (error) {


            return Response.json({

                answer:
                    "Maaf, AI sedang mengalami gangguan."

            });


        }



    }

};