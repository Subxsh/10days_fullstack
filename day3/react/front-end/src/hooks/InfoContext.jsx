import {createContext} from 'react';

export const InfoContext=createContext();

export const InfoProvider = ({children}) => {
    const name="Subash"
    return(
        <div>
            <InfoContext.Provider value={name}>
              {children}
            </InfoContext.Provider>
          </div>
   )
}