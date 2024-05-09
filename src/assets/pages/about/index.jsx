import React from 'react'
// import image 
import image1 from '../../imgs/home/carrouselHero/image2.png'
import image2 from '../../imgs/home/carrouselHero/image3.png'


const About = () => {
  return (
    <div className="bg-gray-100">
    {/* Encabezado */}
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-8">
        <h1 className="text-3xl font-bold text-gray-800">Acerca de nosotros</h1>
      </div>
    </header>

    {/* Sección 1 */}
    <section className="py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <img className="rounded-lg shadow" src={image1} alt="Misión" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nibh eu magna facilisis venenatis.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sección 2 */}
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
          <div className="w-full lg:w-1/2 lg:pl-8 mb-6 lg:mb-0">
            <img className="rounded-lg shadow" src={image2} alt="Historia" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nibh eu magna facilisis venenatis.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sección 3 */}
    <section className="py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <img className="rounded-lg shadow" src={image2} alt="Equipo" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nibh eu magna facilisis venenatis.</p>
          </div>
        </div>
      </div>
    </section>

 
  </div>
  )
}

export default About