import React from "react";
import images from "./../../assets/images";

const Information = () => {
  return (
    <div>
      <div>
        <hr className="border-2 border-[#83EFF7] ml-6 mr-6" />
        <div>
          <h2 className="text-[#F78A83] text-4xl mt-4 text-center mb-4">
            INFORMACIÓN
          </h2>
          <ul className="ml-10 ">
            <li>
              Tel:
              <br />
              +57 312 843 8059
            </li>
            <li>
              Dirección:
              <br />
              Popayán- Cauca
            </li>
            <li>
              Correo:
              <br />
              yine_net@hotmail.com
            </li>
            <li>
              <div className="flex flex-row justify-center">
                <a href="https://github.com/karengrisales">
                  <img
                    src={images.git}
                    alt="logo-github"
                    className="w-8 h-8 m-2"
                  />
                </a>
                <a href="https://www.linkedin.com/in/karen-grisales/">
                  <img
                    src={images.linkedin}
                    alt="logo-linkedin"
                    className="w-8 h-8 m-2"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <hr className="border-2 border-[#83EFF7] ml-6 mr-6" />
      </div>
      <div>
        <h2 className="text-[#F78A83] text-4xl mt-4 col-span-2 text-center mb-4">
          HABILIDADES
        </h2>
        <ul className="list-disc list-inside ml-10">
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Metodologías ágiles</li>
          <li>Hubspot</li>
        </ul>
        <hr className="border-2 border-[#83EFF7] ml-6 mr-6" />
      </div>
      <div>
        <h2 className="text-[#F78A83] text-4xl mt-4 col-span-2 text-center mb-4">
          IDIOMAS
        </h2>
        <ul className="list-disc list-inside ml-10">
          <li>
            Español <br />
            Nativo
          </li>
          <li>
            Inglés <br />
            B1
          </li>
        </ul>
        <hr className="border-2 border-[#83EFF7] ml-6 mr-6" />
      </div>
      <div>
        <h2 className="text-[#F78A83] text-4xl mt-4 col-span-2 text-center mb-4">
          HOBBIES
        </h2>
        <ul className="list-disc list-inside ml-10">
          <li>Viajar</li>
          <li>Ver series</li>
          <li>Escuchar música</li>
          <li>Cocinar</li>
        </ul>
        <hr className="border-2 border-[#83EFF7] ml-6 mr-6" />
      </div>
    </div>
  );
};

export default Information;
