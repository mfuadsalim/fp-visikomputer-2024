import Card from "./Card"

function WhatWeDoSection() {
    return (
        <section id='whatwedo' className='w-full h-screen scroll-mt-16 flex justify-center items-center'>
            <div className='w-full px-36'>
            <h1 className='flex justify-center font-[Caprasimo] text-[40px] text-[#160041] mb-8'>What We Do?</h1>
            <p className='text-[#231149] text-center font-[Inter] text-base px-32'>Kami berkomitmen untuk memberikan pembelajaran matematika yang inovatif, menggunakan teknologi <span className='font-bold'>MediaPipe Hand Gesture Recognition</span>. Kami memungkinkan anak-anak belajar matematika sederhana melalui gerakan tangan dengan pendekatan yang menyenangkan dan mudah dipahami. Dengan fokus pada kesederhanaan, keterlibatan, dan hasil maksimal, kami bertujuan untuk memberdayakan setiap anak untuk meraih keberhasilan dalam matematika.</p>
            <br />
            {/* Card */}
            <div className='flex justify-center px-10'>
                <Card
                    image = {<img src="whatwedo-mathp.png" alt="Math" />}
                    title = "Konten Menarik"
                    content = "Pembelajaran matematika yang dirancang untuk memikat perhatian anak-anak."
                />
                <Card
                    image = {<img src="whatwedo-pencil.png" alt="Pencil" />}
                    title = "Interaksi Gerakan Tangan"
                    content = "Menggunakan MediaPipe Hand Gesture Recognition untuk pengalaman belajar yang lebih interaktif."
                />
                {/* <Card
                image = {<img src="whatwedo-difabel.png" alt="Difabel" />}
                title = "Dukungan Inklusif"
                content = "Fitur yang ramah bagi anak-anak dengan disabilitas."
                /> */}
            </div>
            </div>
        </section>
    )
}
export default WhatWeDoSection