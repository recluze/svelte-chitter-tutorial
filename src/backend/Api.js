export function fetchChits() {
    console.log("[B] Fetching all chits");
    return [
        { id: 1, author: 'Nauman', handle: '@recluze', content: 'Some chit content here', likes: 5 },
        { id: 2, author: 'Not Rich Harris', handle: '@notrich', content: 'Awesome new backend chit!', likes: 0 }
    ]
}

export function incLikes(id) {
    console.log("[B] Incrementing likes", id);
}