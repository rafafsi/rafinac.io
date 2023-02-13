import { createContext, useContext } from "react";
import data from "../data/projects";

const ProjectContext = createContext(undefined);

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{ data }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
