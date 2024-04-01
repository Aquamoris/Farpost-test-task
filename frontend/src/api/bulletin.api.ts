export const getAllBulletins = async () => {
    const response = await fetch('http://localhost:3300/api/bulletin');

    return response.json();
}
