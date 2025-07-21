export const getColorStatus = (status) => {
    const values = {
        Todos : ['bg-teal-100','text-teal-600', 'bg-teal-600'],
        Pendiente : ['bg-amber-100','text-amber-600', 'bg-amber-600'],
        Preparando : ['bg-violet-100', 'text-violet-600', 'bg-violet-600'],
        Enviado: ['bg-sky-100', 'text-sky-600', 'bg-sky-600'],
        Entregado: ['bg-green-100', 'text-green-600', 'bg-green-600'],
        Cancelado: ['bg-red-100', 'text-red-600', 'bg-red-600']
    };

    return values[status] || ['bg-gray-100', 'text-gray-600'];
};