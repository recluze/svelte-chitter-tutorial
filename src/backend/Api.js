export async function fetchChits() {
    console.log("[B] Fetching all chits");

    const response = await fetch('http://localhost:3000/chits');
    const data = await response.json();
    console.log("[B] Got data", data);
    return data;
}

export function incLikes(id) {
    console.log("[B] Incrementing likes", id);
}