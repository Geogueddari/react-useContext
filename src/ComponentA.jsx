import ComponentB from './ComponentB.jsx';
import { createContext } from 'react';

export const Context = createContext();

function ComponentA() {
    return (
        <Context.Provider value="abdeljabbar">
            <ComponentB/>
        </Context.Provider>
    );
}

export default ComponentA;