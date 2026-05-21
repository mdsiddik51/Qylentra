export const getDoctorData = async () => {
    const response = await fetch('http://localhost:8080/doctor');
    const data = await response.json();
    return data;
};

export const detailsData = async (id , token) => {
    const response = await fetch(`http://localhost:8080/doctor/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data = await response.json();
    return data;
}