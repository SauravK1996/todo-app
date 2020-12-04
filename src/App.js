import React, {useContext, useReducer} from 'react';
import TodosContext from './context';
import TodosReducer from './reducer';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
// import axios from 'axios';


const App = () => {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(TodosReducer, initialState);
   
    return(
        <div>
            <TodosContext.Provider value={{state, dispatch}}>
                <TodoForm />
                <TodoList />
            </TodosContext.Provider>
        </div>
    );
}

export default App;