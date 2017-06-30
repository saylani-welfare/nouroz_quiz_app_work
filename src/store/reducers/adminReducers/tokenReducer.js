
const INITIAL_STATE = {
    auth_token: '',
    flag: false
}

export default function TokenReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'ADMINTOKEN':
            return Object.assign({}, state, { auth_token: action.authenticationTOKEN });

        case 'CLEARTOKEN':
            return Object.assign({}, state, { auth_token: action.delTOKEN })

        case 'CHANGE_FLAG':
            return Object.assign({}, state, { flag: true })

        case 'CLEAR_FLAG':
            return Object.assign({}, state, { flag: false })

        default: return state
    }
}