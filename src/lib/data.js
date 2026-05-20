
export const getDoctorData = async () => {
    const response = await fetch('http://localhost:8080/doctor');
    const data = await response.json();
    return data;
};
