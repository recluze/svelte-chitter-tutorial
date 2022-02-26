import { writable } from "svelte/store";

// export const ChitStore = writable([
//     { id: 1, author: 'Nauman', handle: '@recluze', content: 'Some chit content here' }
// ]);


function createChiteStore() {
    const { subscribe, set, update } = writable([
        { id: 1, author: 'Nauman', handle: '@recluze', content: 'Some chit content here' }
    ]);

    return {
        // set, // can get rid of this if you don't want to allow basic setting 
        subscribe,
        addNewChit: (newChit) => {
            update(pastChits => [...pastChits, newChit]);
        },
        clearChits: () => set([])
    };
}

export const ChitStore = createChiteStore();