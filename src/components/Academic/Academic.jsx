const Academic = () => {
  return (
    <div>
      <div className='ml-10 mb-5'>
        <h2 className='text-[#F78A83] text-4xl mt-4 text-center mb-4'>
          INFORMACIÓN ACADÉMICA
        </h2>
        <span>2017- Actualidad | Medellín - Antoquia</span>
        <p>
          <br />
          <span className='font-semibold'>INGENIERIÍA DE SISTEMAS</span>
          <br />
          Universidad de Antioquia
        </p>
        <br />
        <br />
        <span>2012- 2014 | Popayán - Cauca</span>
        <p>
          <br />
          <span className='font-semibold'>
            TECNOLOGÍA EN GESTIÓN DE REDES DE DATOS
          </span>
          <br />
          SENA Regional Cauca
        </p>
      </div>
      <hr className='border-2 border-[#83EFF7] ml-6 mr-6 md:hidden' />
      <div className='mb-10'>
        <h2 className='text-[#F78A83] text-4xl mt-4 text-center mb-4'>
          CURSOS
        </h2>
        <ul className='list-disc list-inside ml-10 grid grid-cols-2 mb-4'>
          <li className='m-2'>
            Curso de CSS Grid Layout 2017 <br />
            Platzi
          </li>
          <li className='m-2'>
            Curso de Frontend Developer 2019 <br />
            Platzi
          </li>
          <li className='m-2'>
            Bases de datos generalidades y sistemas de gestión <br />
            SENA
          </li>
          <li className='m-2'>
            Curso de HTML y CSS 2019 <br />
            Platzi
          </li>
          <li className='m-2'>
            Learn Android Application Development <br />
            Udemy
          </li>
          <li className='m-2'>
            React JS - Curso de introducción desde cero y primeros pasos
            <br />
            Udemy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academic;
