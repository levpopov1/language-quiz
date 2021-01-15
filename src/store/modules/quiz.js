const namespaced = true;

const state = {
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
        const url = 'http://localhost:5000/api/v1/hangul';
        fetch(url)
            .then(response => response.json())
            .then(function(json){
                commit('setAlphabet', json); 
            });
    },
    fetchQuestions({commit, state}){
        const url = 'http://localhost:5000/api/v1/hangul/random';
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
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
