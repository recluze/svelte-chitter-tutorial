import { writable } from "svelte/store";

function createChiteStore() {
    const { subscribe, set, update } = writable([
        { id: 1, author: 'Nauman', handle: '@recluze', content: 'Some chit content here', likes: 5 }
    ]);

    return {
        // set, // can get rid of this if you don't want to allow basic setting 
        subscribe,
        addNewChit: (newChit) => {
            update(pastChits => [...pastChits, newChit]);
        },
        likeChit: (id) => {
            update(pastChits => {
                pastChits.map((chit) => {
                    if (chit.id == id) chit.likes += 1;
                });
                return pastChits;
            });
        },
        clearChits: () => set([])
    };
}

export const ChitStore = createChiteStore();