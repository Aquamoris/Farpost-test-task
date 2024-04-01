export const getAllBulletins = async () => {
    const response = await fetch('http://localhost:3300/api/bulletin');

    return response.json();
}

export const postBulletins = async (data: any, url: string) => {
    await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(error => console.error(error));
}