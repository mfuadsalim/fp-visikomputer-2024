import PlayButton from './PlayButton'

function HomeSection() {
    return (
      <section id='home' className='w-full h-screen scroll-mt-16 flex justify-center items-center'>
        <div className='w-full'>
          <p className='font-[Caprasimo] text-5xl text-[#160041] text-center'>MATHGIC HANDS</p>
          <p className='font-[Caprasimo] text-xl text-[#160041] text-center'>Matematika mudah dengan cara sederhana</p>
          <div className='flex justify-between gap-16 my-10 px-32'>
            <img src="home-girl.png" alt="Foto Anak Perempuan" className='w-64 h-fit' />
            <div className='flex flex-col gap-12'>
              <div className='bg-white py-2 px-4 rounded-lg w-fit mx-auto shadow-md'>
                <div className='text-center'>
                  <p className='font-[Inter] font-bold text-sm'>Mari melihat mereka bersenang-senang dengan cara yang berbeda.</p>
                </div>
              </div>
              <PlayButton />
              <div>
                <div className='flex items-center gap-4'>
                    <img src="home-mediapipe.png" alt="mediapipe-logo"/>
                    <p className='text-[231149] font-[Inter] font-medium italic'>Platform kami membantu anak-anak belajar matematika sederhana dengan gerakan tangan melalui MediaPipe. Pembelajaran yang menyenangkan, inklusif, dan mudah dipahami.</p>
                </div>
                <br />
                <div className='flex items-center gap-4'>
                    <img src="home-math.png" alt="math-logo"/>
                    <p className='text-[231149] font-[Inter] font-medium italic'>Framework dari Google untuk aplikasi visi komputer real-time, seperti pengenalan gerakan tangan dan wajah, yang efisien dan dapat digunakan di berbagai platform.</p>
                </div>
              </div>
            </div>
            <img src="home-boy.png" alt="Foto Anak Laki-Laki"  className='w-64 h-fit'/>
          </div>  
        </div>      
      </section>
    )
}
export default HomeSection