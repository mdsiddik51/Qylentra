import { revalidatePath } from "next/cache";


export const DeletUser = async (id) => {
    'use server'

    const res = await fetch(`https://qylentra-server.vercel.app/appointment/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath('/dashboard');
    }
    return data;
};


export const updateAppointment = async (formData, id) => {
    'use server'
    const response = await fetch(`https://qylentra-server.vercel.app/appointment/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (data.modifiedCount > 0) {
        revalidatePath('/dashboard')
    }
    return data;
}