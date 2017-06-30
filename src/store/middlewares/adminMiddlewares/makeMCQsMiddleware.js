import ActionBundle from '../../actions/actionbundle.js';
import Store from '../../store.js';

export default class MakeMCQsMiddlware {

    static saveQuizName(quizTitle, selectedCourse) {
        return (dispatch) => {
            Store.dispatch(ActionBundle.svQuizName(quizTitle, selectedCourse))
        }
    }

    static saveMCQ(quesOBJ) {
        return (dispatch) => {
            // console.log(quesOBJ);
            Store.dispatch(ActionBundle.question(quesOBJ))
        }
    }
}