import { createContext, useContext, useEffect, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
  students: [],
};

const init = () => {
  const estudiantes = localStorage.getItem("estudiantes");
  return estudiantes ? JSON.parse(estudiantes) : initialState;
};

export const AppProvider = ({ children }) => {
  // Reducer (1)
  /*   const [state, dispatch] = useReducer(reducer, initialState); */

  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(state));
  });

  const createStudent = (student) =>
    dispatch({ type: CREATE, payload: student });

  const updateStudent = (student) =>
    dispatch({ type: UPDATE, payload: student });

  const deleteStudent = (id) => dispatch({ type: DELETE, payload: id });

  return (
    <AppContext.Provider
      value={{
        students: state.students,
        createStudent,
        updateStudent,
        deleteStudent,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
