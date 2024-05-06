export const getAllBulletins = async (page: number = 1) => {
    try {
        const response = await fetch(`http://localhost:3300/api/bulletin?page=${page}`);

        return response.json();
    }
    catch (e) {
        throw new Error(`Произошла ошбика: ${e}`);
    }
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