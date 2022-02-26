import { writable } from "svelte/store";

import { incLikes, fetchChits } from "../backend/Api.js"

function createChiteStore() {
    const { subscribe, set, update } = writable(fetchChits());

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

                incLikes(id);
                return pastChits;
            });
        },
        clearChits: () => set([])
    };
}

export const ChitStore = createChiteStore();