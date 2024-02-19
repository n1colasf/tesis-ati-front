import React, { useState } from "react";

import logo from "../../assets/images/dbp_blanco.png";

const Footer = () => {
  const [sobreNosModal, setSobreNosModal] = useState(false);
  const [sobrePilotoModal, setSobrePilotoModal] = useState(false);

  const GoToRepo = () => {
    window.open("https://github.com/pi-ati-ort", "_blank");
  };

  const handleSobreNosModal = () => {
    setSobreNosModal(true);
  };

  const handleSobrePilotoModal = () => {
    setSobrePilotoModal(true);
  };

  const handleDocumentoLink = () => {
    window.open(
      "https://nicolasfuy.s3.amazonaws.com/documentos/ANTEPROYECTO.pdf",
      "_blank"
    );
  };

  return (
    <footer className="bg-verde-idem text-white py-4 px-4 md:px-4">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
        <div className=" flex flex-row">
          <div className="ml-6 mr-4">
            <img src={logo} alt="Logo IdeM" className="h-14" />
          </div>
          <div className="text-center md:text-left">
            <h3 className=" font-light text-2xl">2023</h3>
            <h4 className="font-extrabold text-xl mb-1">
              P.C.D. Proyecto Integrador
            </h4>
            <p className=" font-semibold text-sm">Universidad ORT Uruguay </p>
            <p className="text-xs">Analista en Tecnologías de la Información</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-extrabold mb-1">Información</h3>
          <ul className="">
            <li>
              <button onClick={handleSobreNosModal} className="text-xs">
                Sobre este proyecto
              </button>
            </li>
            <li>
              <button onClick={handleSobrePilotoModal} className="text-xs">
                Sobre el proyecto piloto
              </button>
            </li>
            <li>
              <button onClick={handleDocumentoLink} className="text-xs">
                Ver Documento
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center md:items-start space-y-2">
          <button
            onClick={GoToRepo}
            className="border-white border py-2 px-3 rounded-md text-white font-semibold mt-3 text-sm"
          >
            Ver Repositorios
          </button>
          <div className="flex flex-col text-white ml-6 text-sm">
            <b>Autores</b>
            <a
              href="https://www.linkedin.com/in/nicolas-fernandez-uy"
              target="_blank"
              rel="noreferrer"
            >
              Nicolas Fernandez
            </a>
            <a
              href="https://uy.linkedin.com/in/sebasti%C3%A1n-paulos-colotta-36a42564"
              target="_blank"
              rel="noreferrer"
            >
              Sebastian Paulos
            </a>
          </div>
        </div>
      </div>
      {sobreNosModal && (
        <div>
          <div className="fixed z-10 inset-0">
            <div className="items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 m-20">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle px-8 pt-6">
                <div className="overflow-y-auto max-h-[80vh]">
                  <div className="mt-4 mb-10 w-full">
                    <div className="">
                      <p className="text-3xl text-left text-black font-semibold mb-4">
                        Sobre este proyecto
                      </p>
                      <p className="text-justify text-black mb-3">
                        Este proyecto fue realizado por Nicolas Fernandez y
                        Sebastian Paulos, estudiantes de la{" "}
                        <a
                          href="https://www.ort.edu.uy/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Universidad ORT Uruguay
                        </a>{" "}
                        como parte del Proyecto Integrador final de la carrera
                        de Analista en Tecnologías de la Información. El
                        proyecto final de carrera se enfoca en la expansión de
                        un proyecto existente, a traves de un nuevo proyecto que
                        utiliza los mismos lenguajes, el cual tiene como
                        objetivo principal la implementación de un sistema de
                        gestión de permisos de construcción digitales en la
                        Intendencia de Montevideo (IdeM). Este proyecto busca
                        abordar una serie de desafíos en la gestión de permisos
                        de construcción, relativos a los procesos de solicitud,
                        evaluación y aprobación de estos.
                      </p>
                      <p className="text-justify text-black mb-3">
                        El proyecto surge de las charlas técnicas que realiza la
                        empresa{" "}
                        <a
                          href="https://www.pyxis.tech/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Pyxis
                        </a>{" "}
                        (Pyxis Open Tech), en la cual se presentó el proyecto
                        piloto que se realizó para la Intendencia de Montevideo.
                        A partir de esto, se entablaron las conversaciones con{" "}
                        <a
                          href="https://www.pyxis.tech/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Pyxis Dev
                        </a>{" "}
                        y el{" "}
                        <a
                          href="https://www.fing.edu.uy/es/inco"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instituto de Computación
                        </a>{" "}
                        de la Facultad de Ingeniería de la Universidad de la
                        República, los dos equipos responsables del proyecto
                        piloto, para poder realizar este proyecto final de
                        carrera.
                      </p>
                      <p className="text-justify text-black mb-3">
                        El alcance del proyecto incluye la incorporación de
                        nuevos subsistemas, como un servidor BIM para el
                        almacenamiento de modelos IFC y un subsistema frontend
                        que permite la visualización e interacción con modelos
                        3D. La inclusión de un Motor DMN (Decision Model and
                        Notation) para abordar requerimientos normativos como
                        reglas de negocio. También implica el establecimiento de
                        una nueva base de datos para almacenar información
                        procesada, y un subsistema backend para gestionar la
                        comunicación interna y externa de los nuevos módulos del
                        sistema.
                      </p>
                      <p className="text-justify text-black mb-3"></p>
                      <p className="text-justify text-black mb-3">
                        Para ello, se utilizaron las siguientes tecnologías:
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <span className="mx-auto origin-bottom-right right-0 mr-0">
                        <button
                          onClick={() => {
                            setSobreNosModal(false);
                          }}
                          className="bg-verde-idem text-white border-idem border-2 py-2 px-3 rounded-md text-sm font-medium"
                        >
                          Cerrar
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sobrePilotoModal && (
        <div>
          <div className="fixed z-10 inset-0">
            <div className="items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 m-20">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle px-8 pt-6">
                <div className="overflow-y-auto max-h-[80vh]">
                  <div className="mt-4 mb-10 w-full">
                    <div className="">
                      <p className="text-3xl text-left text-black font-semibold">
                        Sobre el proyecto piloto
                      </p>
                      <p className="text-justify text-black">
                        Este proyecto fue realizado por Nicolas Fernandez y
                        Sebastian Paulos, estudiantes de la{" "}
                        <a
                          href="https://www.ort.edu.uy/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Universidad ORT Uruguay
                        </a>{" "}
                        como parte del Proyecto Integrador final de la carrera
                        de Analista en Tecnologías de la Información.
                      </p>
                      <p className="text-justify text-black">
                        El objetivo del mismo es desarrollar una aplicación web
                        que permita a los usuarios realizar un seguimiento de
                        los trámites que realizan ante la Intendencia de
                        Montevideo. El objetivo del mismo es desarrollar una
                        aplicación web que permita a los usuarios realizar un
                        seguimiento de los trámites que realizan ante la
                        Intendencia de Montevideo. El objetivo del mismo es
                        desarrollar una aplicación web que permita a los
                        usuarios realizar un seguimiento de los trámites que
                        realizan ante la Intendencia de Montevideo. El objetivo
                        del mismo es desarrollar una aplicación web que permita
                        a los usuarios realizar un seguimiento de los trámites
                        que realizan ante la Intendencia de Montevideo. El
                        objetivo del mismo es desarrollar una aplicación web que
                        permita a los usuarios realizar un seguimiento de los
                        trámites que realizan ante la Intendencia de Montevideo.
                        El objetivo del mismo es desarrollar una aplicación web
                        que permita a los usuarios realizar un seguimiento de
                        los trámites que realizan ante la Intendencia de
                        Montevideo.
                      </p>
                      <p className="text-justify text-black">
                        Para ello, se utilizaron las siguientes tecnologías:
                      </p>
                      <ul className="list-disc list-inside text-black">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                      </ul>
                      <p className="text-justify text-black">
                        El código fuente de este proyecto se encuentra
                        disponible en github.
                      </p>
                    </div>

                    <div className="flex flex-row">
                      <span className="mx-auto origin-bottom-right right-0 mr-0">
                        <button
                          onClick={() => {
                            setSobrePilotoModal(false);
                          }}
                          className="bg-verde-idem text-white border-idem border-2 py-2 px-3 rounded-md text-sm font-medium"
                        >
                          Cerrar
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
