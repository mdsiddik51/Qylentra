

export const DeletUser = async (id) => {
    'use server'

    const res = await fetch(`http://localhost:8080/appointment/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    return data;
}