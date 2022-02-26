export async function fetchChits() {
    console.log("[B] Fetching all chits");

    const response = await fetch('http://localhost:3000/chits');
    const data = await response.json();
    console.log("[B] Got data", data);
    return data;
}

export async function incLikes(id, newCount) {
    console.log("[B] Incrementing likes", id, newCount);
    const data = { likes: newCount };
    const settings = {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    try {
        const url = `http://localhost:3000/chits/${id}`;
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}