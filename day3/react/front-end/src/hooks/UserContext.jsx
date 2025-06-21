//import {createContext} from 'react';

//export const UserContext=createContext();

//export const UserProvider = ({children}) => {
//    const name="Subash"
//    return(
 //       <div>
 //           <UserContext.Provider value={name}>
 //             {children}
   //         </UserContext.Provider>
     //   </div>
 //   )
//}

import {createContext} from 'react';

export const UserContext=createContext();

export const UserProvider = ({children}) => {
    const products = [
        {id: 1, name: 'Laptop', price: 1000},
        {id: 2, name: 'Smartphone', price: 500},
        {id: 3, name: 'Tablet', price: 300}
    ];
    return(
        <div>
            <UserContext.Provider value={products}>
              {children}
            </UserContext.Provider>
        </div>
    )
}