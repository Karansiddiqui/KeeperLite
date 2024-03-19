import { createContext } from "react";

export const DataContext = createContext(null);

const DataProvider = () => {
    return (
        <DataContext.Provider value={{

        }}>

        </DataContext.Provider>
    )
}

export default DataProvider;