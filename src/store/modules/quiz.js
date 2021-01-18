const namespaced = true;

// const API_URL = "http://192.168.1.73:5000/api/v1";
const API_URL = "http://localhost:5000/api/v1";

const state = {
    language: "",
    languageDisplayString: "default",
    alphabet:[],
    questions: [],
    currentQ: {},
    limit: 10,
    index: 0,
    numCorrect: 0,
    numWrong: 0,
    numTotal: 0,
}

const getters = { 
    allQuestions: (state) => state.questions,
    getAlphabet: (state) => state.alphabet,
    currentQ: (state) => state.currentQ,
}

const actions = {
    fetchAlphabet({ commit }) {
        const url = API_URL + '/hangul';
        fetch(url)
            .then(response => response.json())
            .then(function(json){
                commit('setAlphabet', json); 
            });
    },
    fetchQuestions({commit, state}){
        const url = API_URL + '/hangul/random';
        const limit = state.limit;

        fetch(`${url}?limit=${limit}`)
        .then(response => response.json())
        .then(function(json){
            commit('setQuestions', json); 
            commit('setCurrentQ', json[state.index]);
        });

    },
    incrementCorrect({commit}){
        commit('incrementCorrect');
    },
    incrementWrong({commit}){
        commit('incrementWrong');
    },
    nextQuestion({commit}){
        commit('incrementIndex');
        commit('setCurrentQ', state.questions[state.index]);
    },
    setLimit({commit, dispatch, state}, limit){
        if(limit != state.limit){
            commit('setLimit', limit)
            commit('resetIndex')
            dispatch('fetchQuestions');
        }   
    },
    resetQuiz({commit, dispatch}){
        commit('resetIndex');
        commit('resetCorrect');
        commit('resetWrong');
        dispatch('fetchQuestions');
    }
}

const mutations = {
    setAlphabet: (state, alphabet) => (state.alphabet = alphabet),
    setQuestions: (state, questions) => (state.questions = questions),
    setCurrentQ: (state, currentQ) => (state.currentQ = currentQ),
    incrementCorrect: (state) => (state.numCorrect++),
    incrementWrong: (state) => (state.numWrong++),
    incrementIndex: (state) => (state.index++),
    setLimit: (state, limit) => (state.limit = limit),
    resetIndex: (state) => (state.index = 0),
    resetCorrect: (state) => (state.numCorrect = 0),
    resetWrong: (state) => (state.numWrong = 0),
    setLanguage: (state, language) => {
        state.language = language;
        switch (language) {
            case 'hiragana':
                state.languageDisplayString = "Japanese - Hiragana"
                break;
            case 'katakana':
                state.languageDisplayString = "Japanese - Katakana"
                break;
            case 'hangul':
                state.languageDisplayString = "Korean - Hangul"
                break;
            default:
                state.languageDisplayString = "not set"
                break;
        }
    },

}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
