const INITIAL_STATE = {

    quiz: '',
    course_name: '',
    mcqs: []
}

export default function MakeMCQsReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'QUESTION':
            state.mcqs.push(action.Question)
            return state

        case 'SVQUIZNAME':
            return Object.assign({}, state, { quiz: action.title, course_name: action.course })

        case 'CLEARMCQS':
            return Object.assign({}, state, { quiz: '', course_name: '', mcqs: [] })

        default: return state
    }
}



// {
//      "quiz": "quiz#1",
//      "course_name": "DCCN",
//      "mcqs": [
//      	{
//          "question": "what is topology?", 
//          "options": ["LAN", "the way in which constituent parts are interrelated or arranged", "the topology of a computer network", "WAN"], 
//          "answers": ["the way in which constituent parts are interrelated or arranged", "the topology of a computer network"]
//          },

//         {
//          "question": "what is topology?", 
//          "options": ["LAN", "the way in which constituent parts are interrelated or arranged", "the topology of a computer network", "WAN"], 
//          "answers": ["the way in which constituent parts are interrelated or arranged", "the topology of a computer network"]	
//         },
//          {
//          "question": "what is topology?", 
//          "options": ["LAN", "the way in which constituent parts are interrelated or arranged", "the topology of a computer network", "WAN"], 
//          "answers": ["the way in which constituent parts are interrelated or arranged", "the topology of a computer network"]	
//         }
//          ]
// }