import React from "react";

const Pill = ({name}) => {

    const values = {
        Todos : ['bg-teal-100','text-teal-600'],
        Pendiente : ['bg-amber-100','text-amber-600'],
        Preparando : ['bg-violet-100', 'text-violet-600'],
        Enviado: ['bg-sky-100', 'text-sky-600'],
        Entregado: ['bg-green-100', 'text-green-600'],
        Cancelado: ['bg-red-100', 'text-red-600']
    };

    const [bgClass, textClass] = values[name]

    return (

        <button className={`px-2 rounded-full ${bgClass} ${textClass}`}>
            {name}
        </button>

    );
}

export default Pill