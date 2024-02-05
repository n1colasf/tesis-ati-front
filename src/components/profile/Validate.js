import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Checkbox } from "@material-tailwind/react";

import { getProjects } from "../../api/apiProject";

import Lottie from "lottie-react";
import animationData from "../general/loading.json";

import { normativas } from "../../utils/utilities";

const Validate = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [loading, setLoading] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const username = sessionStorage.getItem("username");

  //NORMATIVAS A VALIDAR

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    setLoading(null);
    setShowResults(false);

    const fetchData = async () => {
      try {
        const response = await getProjects(username);
        if (response) {
          setProjects(response);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
    };
    fetchData();
  }, [username]);

  const HandleProject = (e) => {
    setSelectedProject(e);
    setProjectName(e.name);
  };

  const ValidateProject = () => {
    setLoading(true);
    console.log(selectedProject);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleNormativas = (id) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-5xl font-semibold mt-12">Validar Normativa</h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <div className="bg-white h-auto p-4 rounded-2xl shadow-lg border border-idem mt-12">
            <h3 className="text-2xl font-semibold mb-8">Normativas</h3>
            <ul className="">
              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="FOS" />
                  <label
                    htmlFor="FOS"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Factor Ocupación Suelo
                  </label>
                  <span className="ml-auto justify-end">
                    <button onClick={() => {
                        handleNormativas("FOS");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2">
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="AlturaMax" />
                  <label
                    htmlFor="AlturaMax"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Altura Máxima{" "}
                  </label>
                  <span className="ml-auto justify-end">
                    <button onClick={() => {
                        handleNormativas("AlturaMax");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2">
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="ConstViv" />
                  <label
                    htmlFor="ConstViv"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Constitución Vivienda
                  </label>
                  <span className="ml-auto justify-end">
                    <button onClick={() => {
                        handleNormativas("ConstViv");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2">
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="otro1" />
                  <label
                    htmlFor="otro1"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Construcción Basamento
                  </label>
                  <span className="ml-auto justify-end">
                    <button onClick={() => {
                        handleNormativas("otro1");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2">
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="otro2" />
                  <label
                    htmlFor="otro2"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Construcción Gálibo
                  </label>
                  <span className="ml-auto justify-end">
                    <button onClick={() => {
                        handleNormativas("otro2");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2">
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="otro3" />
                  <label
                    htmlFor="otro3"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Medianeras Vistas
                  </label>
                  <span className="ml-auto justify-end">
                    <button onClick={() => {
                        handleNormativas("otro3");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2">
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox color="green" id="otro4" />
                  <label
                    htmlFor="otro4"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Superficie Mínima
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativas("otro4");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-7">
          <div className="bg-white h-32 p-4 rounded-2xl shadow-lg border border-idem mt-12">
            <h3 className="text-2xl font-semibold">Seleccionar proyecto</h3>
            <div className="grid grid-cols-12 gap-4 mt-4 mr-4">
              <div className="col-span-10">
                <Listbox value={selectedProject} onChange={HandleProject}>
                  <div className="relative mt-2">
                    <Listbox.Button
                      className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2
                      px-3 pl-3 pr-10 text-left focus:outline-none focus:border-black focus-visible:border-black sm:text-sm"
                    >
                      <div className="grid grid-cols-12">
                        <div className="col-span-11">
                          {selectedProject || "Seleccione un proyecto"}
                        </div>
                        <span className="col-span-1 mx-auto ml-[90%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            />
                          </svg>
                        </span>
                      </div>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {projects.map((item, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-verde-idem text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={item.name}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {item.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="col-span-2">
                <button
                  className="bg-verde-idem text-white rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto mt-2 w-full"
                  onClick={ValidateProject}
                >
                  Validar
                </button>
              </div>
            </div>
          </div>
          {loading && (
            <div style={{ display: loading ? "block" : "none" }}>
              <Lottie
                animationData={animationData}
                style={{ height: "400px", width: "400px", margin: "auto" }}
              />{" "}
            </div>
          )}
          {showResults && (
            <div className="col-span-10">
              <div className="bg-white p-4 h-screen rounded-2xl shadow-lg border border-idem mt-10 mb-44">
                <h3 className="text-2xl font-semibold">Resultados</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Validate;
