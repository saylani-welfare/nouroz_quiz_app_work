
const INITAIL_STATE = {
    ProgramList: [],
    ProgramWiseBatches: [],
    CourseList: [],
    BatchWiseCourses: [],
    BatchList: [],
    CourseWiseQuizes: [],
    NEW_PROGRAM: '',
    NEW_BATCH: '',
    NEW_COURSE: '',
    QuizList: []
}

export default function AsyncReducer(state = INITAIL_STATE, action) {

    switch (action.type) {

        case 'ALLPROGRAMLIST':
            return Object.assign({}, state, { ProgramList: action.Plist })

        case 'PARTICLARBATCHES':
            return Object.assign({}, state, { ProgramWiseBatches: action.PBlist })

        case 'ALLCOURSESLIST':
            return Object.assign({}, state, { CourseList: action.Clist })

        case 'AllBATCHESLIST':
            return Object.assign({}, state, { BatchList: action.Blist })

        case 'CLEAR_BATCH_LIST':
            return Object.assign({}, state, { ProgramWiseBatches: [] })

        case 'PARTICLARCOURSES':
            return Object.assign({}, state, { BatchWiseCourses: action.PClist })

        case 'CLEAR_COURSE_LIST':
            return Object.assign({}, state, { BatchWiseCourses: [] })

        case 'NEWLY_CREATED_PROGRAM':
            return Object.assign({}, state, { NEW_PROGRAM: action.N_C_P })

        case 'UNDO_PROGRAM':
            return Object.assign({}, state, { NEW_PROGRAM: '' })

        case 'NEWLY_CREATED_BATCH':
            return Object.assign({}, state, { NEW_BATCH: action.N_C_B })

        case 'UNDO_BATCH':
            return Object.assign({}, state, { NEW_BATCH: '' })

        case 'NEWLY_CREATED_COURSE':
            return Object.assign({}, state, { NEW_COURSE: action.N_C_C })

        case 'UNDO_COURSE':
            return Object.assign({}, state, { NEW_COURSE: '' })

        case 'ALLQUIZESLIST':
            return Object.assign({}, state, { QuizList: action.Qlist })

        case 'PARTICLARQUIZES':
            return Object.assign({}, state, { CourseWiseQuizes: action.PQlist })

        default: return state
    }
}