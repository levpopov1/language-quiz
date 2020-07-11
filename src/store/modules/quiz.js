const namespaced = true;

const state = {
    questions: [],
    limit: 10,
    index: 0,
    numCorrect: 0,
    numWrong: 0,
    numTotal: 0,
}

const getters = { 
    allQuestions: (state) => state.questions,
}

const actions = {
    fetchQuestions({commit, state}){
        const url = 'http://localhost:5000/api/v1/hangul/random';
        const limit = state.limit;

        fetch(`${url}?limit=${limit}`)
        .then(response => response.json())
        .then(function(json){
            commit('setQuestions', json); 
        });

    },
    incrementCorrect({commit}){
        commit('incrementCorrect');
    },
    incrementWrong({commit}){
        commit('incrementWrong');
    },
    nextQuestion({commit}){
        commit('nextQuestion');
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
    setQuestions: (state, questions) => (state.questions = questions),
    incrementCorrect: (state) => (state.numCorrect++),
    incrementWrong: (state) => (state.numWrong++),
    nextQuestion: (state) => (state.index++),
    setLimit: (state, limit) => (state.limit = limit),
    resetIndex: (state) => (state.index = 0)
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
