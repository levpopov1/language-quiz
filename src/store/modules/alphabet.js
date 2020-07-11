// store methods for Deck component
const state = {
    letters: [],
    letterTypes: [],
    sorted: [],
};

const getters = {
    allLetters: (state) => state.letters,
    // consonants: (state) => state.letters.filter(letter => letter.type === "consonant"),
    // vowels: (state) => state.letters.filter(letter => letter.type === "vowel"),
    // doubleConsonants: (state) => state.letters.filter(letter => letter.type === "double-consonant"),
    // doubleVowels: (state) => state.letters.filter(letter => letter.type === "double-vowel"),
    letterTypes: (state) => state.letterTypes,
    sorted: (state) => state.sorted,
};

const actions = {
    fetchLetters({ commit }) {
        const url = 'http://localhost:5000/api/v1/hangul';
        fetch(url)
            .then(response => response.json())
            .then(function(json){
                commit('setLetters', json); 
                commit('setSorted', json); 
                commit('setLetterTypes', json);
            });
    }
};

const mutations = {
    setLetters: (state, letters) => (state.letters = letters),
    setSorted: function(state, letters){
        state.sorted = [
            {
                title: "Consonants",
                items: letters.filter(item => item.type === "consonant")
            },
            {
                title: "Vowels",
                items: letters.filter(item => item.type === "vowel")
            },
            {
                title: "Double Consonants",
                items: letters.filter(item => item.type === "double-consonant")
            },
            {
                title: "Double Vowels",
                items: letters.filter(item => item.type === "double-vowel")
            },
        ]
    },
    setLetterTypes: (state, letters) => (state.letterTypes = [...new Set(letters.map(letter => letter.type))])
};

export default {
    state,
    getters,
    actions,
    mutations
}
