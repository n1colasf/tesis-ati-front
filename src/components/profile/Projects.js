import React, { useEffect, useState, useRef } from "react";

import { getProjects } from "../../api/apiProject";
import { getAllModels } from "../../api/apiModel";

import Lottie from "lottie-react";
import animationData from "../general/loading.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [models, setModels] = useState([]);
  const [existsProjects, setExistsProjects] = useState(false);

  const [loading, setLoading] = useState(true);

  const [showMore, setShowMore] = useState(false);
  const showMoreRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const username = sessionStorage.getItem("username");

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    const fetchData = async () => {
      try {
        const response = await getProjects(username);
        if (response) {
          setProjects(response);
          setExistsProjects(response.length > 0);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
      const models = await getAllModels();
      setModels(models);
    };
    fetchData();
  }, [username]);

  function showMoreProject(id) {
    setShowMore(true);
    showMoreRef.current.scrollIntoView({ behavior: "smooth" });
    setSelectedProject(projects.find((project) => project.id === id));
    setSelectedModel(models.find((model) => model.projectId === id));
    console.log(selectedModel);
  }

  return (
    <div className="container mx-auto min-h-screen mb-10">
      <h2 className="text-5xl font-semibold mt-12">Mis Proyectos</h2>
      {projects.length === 0 && !loading && (
        <>
          <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
            <p className="text-center text-2xl mt-4 mb-4">
              No hay proyectos creados.
            </p>
            <p className="text-center text-lg mb-4">
              Crea uno nuevo{" "}
              <a className="text-idem" href="/nuevo">
                aquí.
              </a>
            </p>
          </div>
        </>
      )}

      {loading && (
        <div style={{ display: loading ? "block" : "none" }}>
          <Lottie
            animationData={animationData}
            style={{ height: "400px", width: "400px", margin: "auto" }}
          />{" "}
        </div>
      )}

      {existsProjects && (
        <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
          <table className="table-auto">
            <thead>
              <tr className="uppercase font-bold text-sm">
                {/*<th className="px-4 py-2 text-left">Id</th> */}
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Esquema</th>
                <th className="px-4 py-2 text-left">BIM Id</th>
                <th className="px-4 py-2 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {projects
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map((project, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    {/* <td className="px-4 py-2">{project.id}</td> */}
                    <td className=" px-4 py-2">{project.name}</td>
                    <td className=" px-4 py-2">
                      {project.created_at.slice(0, 10)}
                    </td>
                    <td className=" px-4 py-2">{project.schema}</td>
                    <td className=" px-4 py-2">{project.poid}</td>
                    <td className="py-2 text-right w-min">
                      <div className="flex flex-row text-end justify-end">
                        <button
                          onClick={() => {
                            showMoreProject(project.id);
                          }}
                          className="bg-white text-idem border-idem border-2 py-1 px-3 mx-2 rounded-md text-base font-semibold w-auto"
                        >
                          Más
                        </button>
                        <button className="bg-verde-idem text-white border-idem border-2 py-1 px-3 rounded-md text-base font-semibold mx-2">
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      <div ref={showMoreRef} />
      {showMore && (
        <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-10 mb-16">
          <div className="flex flex-row justify-between">
            <div className="mb-10 w-5/6">
              <span className="font-semibold font-lg">Proyecto: </span>
              <br />
              <span className="text-3xl font-semibold">
                {selectedProject.name}
              </span>
            </div>
            <div className="">
              <button className="bg-white text-idem border-idem border-2 py-2 px-20 rounded-md text-xl font-medium mr-6 mt-3">
                Visualizar
              </button>
            </div>
          </div>
          <div className="mb-10">
            <span className="font-semibold text-lg">
              Descripción:{" "}
              <span className="font-light">{selectedProject.description}</span>
            </span>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-2 mr-4 mb-4">
            <div className="col-span-4">
              <p className="text-lg font-semibold">Fecha de creación:</p>
              <p className="text-lg">
                {selectedProject.created_at.replace('T', ' a las ').split('.')[0]}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-lg font-semibold">Esquema:</p>
              <p className="text-lg">{selectedProject.schema}</p>
            </div>
            <div className="col-span-2">
              <p className="text-lg font-semibold">BIM ID:</p>
              <p className="text-lg">{selectedProject.poid}</p>
            </div>
            <div className="col-span-4">
              <p className="text-lg font-semibold">UUID:</p>
              <p className="text-lg">{selectedProject.uuid}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-6 mr-4 mb-6">
            <div className="col-span-4">
              <p className="text-lg font-semibold">Modelo:</p>
              <p className="text-lg">
                {selectedProject.id === selectedModel.projectId
                  ? selectedModel.filename
                  : ""}
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-lg font-semibold">Tamaño:</p>
              <p className="text-lg">
                {selectedProject.id === selectedModel.projectId
                  ? `${(selectedModel.size / 1024 / 1024).toFixed(3)} MB`
                  : ""}
              </p>
            </div>
            <div className="col-span-2 mt-3">
              <button className="bg-white border-idem text-idem border-2 py-1 px-3 rounded-md text-base font-semibold">
                Descargar modelo
              </button>
            </div>
            <div className="col-span-2 mt-3">
              <button className="bg-verde-idem border-idem text-white border-2 py-1 px-3 rounded-md text-base font-semibold">
                Reemplazar modelo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
