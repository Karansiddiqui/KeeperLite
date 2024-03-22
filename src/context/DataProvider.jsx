import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archivesNotes, setArchivesNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archivesNotes,
        setArchivesNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
