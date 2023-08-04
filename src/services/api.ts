async function getUserData(user: string) {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return await data;
};

async function getUserRepos(user: string) {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    return await data;
};

async function getPosts() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/posts`);
    const data = await response.json();
    return await data;
};

async function getPostById(id: number) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/posts/${id}`);
    const data = await response.json();
    return await data;
};

async function createPost(data: { title: string, resume: string, text: string }) {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            title: data.title,
            resume: data.resume,
            text: data.text
        })
    });
    return await response.json();
};

export const api = {
    getUserData,
    getUserRepos,
    getPosts,
    getPostById,
    createPost
};
