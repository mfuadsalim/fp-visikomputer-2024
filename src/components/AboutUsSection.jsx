function AboutUsSection() {
    return (
        <section id='aboutus' className='w-full h-screen scroll-mt-16 flex justify-center items-center'>
            <div className='w-full px-36'>
                <h1 className='font-[Caprasimo] text-[40px] text-[#160041] mb-8'>About Us</h1>
                <div className='flex flex-col gap-8'>
                <div className='flex justify-center gap-4 items-center px-10'>
                    <img src="about-arief.png" alt="Foto Arief" className='w-80 h-fit'/>
                    <img src="about-fuad.png" alt="Foto Fuad" className='w-80 h-fit' />
                </div>
                <p className='text-[#231149] font-[Inter] text-base text-justify'>
                    Kami adalah <span className='font-bold'>Arief</span> Badrus Sholeh dan Muhammad <span className='font-bold'>Fuad</span> Salim, mahasiswa dari Departemen <span className='font-bold'>Teknik Informatika ITS</span>. Kami berasal dari <span className='font-bold'>Pulau Madura</span>, tempat yang mempertemukan kami dengan semangat dan visi yang sama. Dengan latar belakang dan kecintaan pada teknologi, kami menciptakan platform pembelajaran matematika sederhana berbasis gerakan tangan menggunakan <span className='font-bold'>MediaPipe Hand Gesture Recognition</span>. Kami berkomitmen untuk membuat pembelajaran matematika menjadi mudah, menyenangkan, dan inklusif untuk semua anak.
                </p>
                </div>
            </div>
        </section>
    )
}
export default AboutUsSection