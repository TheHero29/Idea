export const loadIdeas = () => {
    return (dispatch) => {
        fetch('https://run.mocky.io/v3/05b5c6a4-6116-42cc-a212-7b17c9eb34b3')
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            dispatch({
            type: 'LOAD_IDEAS',
            payload: res,
            });
        });
    };
}

const IdeaReducer = (state = {
    ideas:[],
}, action) => {
    switch (action.type) {
        case 'LOAD_IDEAS':
            return {
                ...state,
                ideas: action.payload,
            };
        default:
            return state;
    }
}
export default IdeaReducer;

