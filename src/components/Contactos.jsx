import React, { useEffect, useReducer, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer.js';
import FormularioAdd from './FormularioAdd.jsx'
import TablaContactos from './TablaContactos'


    /* const contactos = [
        {
            id: "88e7d557",
            nombre: "Valentin",
            numero: "123456",
        },
        {
            id: "88e7d566",
            nombre: "pepe",
            numero: "3210456",
        },
        {
            id: "88e7d577",
            nombre: "roberta",
            numero: "45668745",
        }
    ]; */
    const init = () => {
        // buscar en el local storage
        const contactos = localStorage.getItem("contactos");
        return contactos ? JSON.parse(contactos) : [];
    }

       const Contactos = () => {
           const [state, dispatch] = useReducer(ContactosReducer, [], init);

           useEffect(() => {
                localStorage.setItem("contactos", JSON.stringify(state))
                }, [state])
       
           const [formView, setFormView] = useState(true);
           
    return (
        <div className="container mt-3">
            <button onClick={() => setFormView(!formView)}
            className="btn-expand btn-success">
                {formView ? "+ cerrar Formulario" : "- Agregar contacto" }
            </button>

            {formView && <FormularioAdd dispatch={ dispatch } />}

            <TablaContactos contactos={state} dispatch={dispatch} />
            
        </div>
    );
}

export default Contactos
