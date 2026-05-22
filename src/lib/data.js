export const getDoctorData = async () => {
    const response = await fetch("https://qylentra-server.vercel.app/doctor");

    const data = await response.json();
    return data;
};

export const detailsData = async (id, token) => {
    const response = await fetch(`https://qylentra-server.vercel.app/doctor/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data = await response.json();
    return data;
};
