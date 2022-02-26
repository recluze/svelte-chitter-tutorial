import { writable } from "svelte/store";

import { incLikes, fetchChits } from "../backend/Api.js"

function createChiteStore() {
    const { subscribe, set, update } = writable([]);

    return {
        // set, // can get rid of this if you don't want to allow basic setting 
        subscribe,
        addNewChit: (newChit) => {
            update(pastChits => [...pastChits, newChit]);
        },
        likeChit: (id) => {
            update(pastChits => {
                let newCount = 1;
                pastChits.map((chit) => {
                    if (chit.id == id) {
                        chit.likes += 1;
                        newCount = chit.likes;
                    }
                });

                incLikes(id, newCount);
                return pastChits;
            });
        },
        clearChits: () => set([]),
        loadChits: async() => {
            let data = await fetchChits();
            set(data);
        }
    };
}

export const ChitStore = createChiteStore();