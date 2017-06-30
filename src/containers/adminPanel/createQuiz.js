
import React from 'react';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import AddQuiz from '../../components/adminPanel/addQuiz.js';
import MakeMCQS from '../../components/adminPanel/makeMCQs.js';
import { browserHistory } from 'react-router';
import MakeMCQsMiddlware from '../../store/middlewares/adminMiddlewares/makeMCQsMiddleware';
import AsyncMiddlware from '../../store/middlewares/adminMiddlewares/asyncMiddleware';


function mapStateToProps(state) {
    return {
        programlist: state.AsyncReducer.ProgramList,
        programWiseBatches: state.AsyncReducer.ProgramWiseBatches,
        batchWiseCourses: state.AsyncReducer.BatchWiseCourses,
        QUIZ: state.MakeMCQsReducer,
        courseList: state.AsyncReducer.CourseList,
        Flag: state.TokenReducer.flag,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveQuizTitle: (quizTitle, selectedCourse) => { Store.dispatch(MakeMCQsMiddlware.saveQuizName(quizTitle, selectedCourse)) },
        saveThisQuestion: (quesOBJ) => { Store.dispatch(MakeMCQsMiddlware.saveMCQ(quesOBJ)) },
        finish: (QUIZ) => { Store.dispatch(AsyncMiddlware.finish(QUIZ)) },
        getAllPrograms: () => { Store.dispatch(AsyncMiddlware.getAllPrograms()) },
        getParticlarBatches: (proID) => { Store.dispatch(AsyncMiddlware.getParticlarBatches(proID)) },
        getPerticularCourses: (batID) => { Store.dispatch(AsyncMiddlware.getPerticularCourses(batID)) }

    }
}

class CreateQuizComp extends React.Component {

    constructor(props) {
        super(props)

        this.checked = false

        this.state = {
            quizVal: '',
            availableCourses: [],
            value1: '',
            value3: '',
            value2: '',
            questionBoxValue: '',
            Optvalue: '',
            OptsArray: [],
            AnsArray: []
        }
    }

    // Functionalites of addQuize

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            quizVal: val
        })
    }

    componentWillMount() {
        Store.dispatch({ type: 'CLEAR_FLAG' })

        persistStore(Store, {}, (err, result) => {
            this.props.getAllPrograms();
            Store.dispatch({ type: 'CLEAR_BATCH_LIST' })
            Store.dispatch({ type: 'CLEAR_COURSE_LIST' })
        })
    }

    makeQuizTitle() {

        if (this.state.quizVal !== '' && this.state.value1 !== '' && this.state.value2 !== '' && this.state.value3 !== '') {
            this.props.saveQuizTitle(this.state.quizVal, this.state.value1)
            Store.dispatch({ type: 'CHANGE_FLAG' })
            this.setState({
                quizVal: '',
                value1: ''
            })
        }
        else {
            alert('you missed any field')
        }

    }

    fetchBatches(proID) {
        this.props.getParticlarBatches(proID)
    }

    fetchCourses(batID) {
        this.props.getPerticularCourses(batID)
    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange3 = (event, index, value3) => this.setState({ value3 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });

    makeListClear() {
        Store.dispatch({ type: 'CLEAR_BATCH_LIST' })
        Store.dispatch({ type: 'CLEAR_COURSE_LIST' })
    }

    // Functionalites of makeMCQ's

    // handleChange1 = (event, index, value1) => this.setState({ value1 });

    handleChange(eve) {
        var val = eve.target.value
        this.setState({
            Optvalue: val
        })
    }

    handleQuestionChange(eve) {
        var val = eve.target.value;
        this.setState({
            questionBoxValue: val
        })
    }

    handleCheckboxChange(eve) {

        // console.log(eve.target.checked);

        if (eve.target.checked === true) {
            this.state.AnsArray.push(eve.target.value)
            // console.log(this.state.AnsArray);
        }

        if (eve.target.checked === false) {
            var pos = this.state.AnsArray.indexOf(eve.target.value);
            this.state.AnsArray.splice(pos, 1)
            // console.log(this.state.AnsArray);
        }
    }

    addOpt() {

        this.state.OptsArray.push(this.state.Optvalue);
        this.setState({ Optvalue: ''});
        this.forceUpdate();
    }

    removeOpt(OptText) {

        if (this.state.AnsArray.length === 0) {
            console.log('success', OptText)
            this.state.OptsArray.splice(this.state.OptsArray.indexOf(OptText), 1)
            this.forceUpdate();
        }
        else {
            alert("need to remove answers")
        }
    }

    Next() {

        if (this.state.questionBoxValue === '' || this.state.OptsArray.length === 0) {
            alert("You need To make Questions")
        }
        else {
            this.props.saveThisQuestion({ question: this.state.questionBoxValue, options: this.state.OptsArray, answers: this.state.AnsArray });
            this.setState({
                questionBoxValue: '',
                OptsArray: [],
                AnsArray: []
            })
        }
        console.log(this.props.QUIZ);
    }

    Finish() {
        if (this.props.QUIZ.mcqs.length !== 0) {
            this.props.finish(this.props.QUIZ);

            alert('Quiz Created Successfully'); // alert without OK button

            setTimeout(() => {
                browserHistory.push('/admin/dashboard')
            }, 1000)
        }
        else {
            alert('There must be some Questions');
        }
    }

    callComponent() {

        if (this.props.Flag === false) {
            return (
                <AddQuiz

                    clickHandler={this.makeQuizTitle.bind(this)}
                    quizName={this.state.quizVal}
                    changeHandler={this.inputBoxValue.bind(this)}

                    listOfPrograms={this.props.programlist}
                    changeHandler3={this.handleChange3}
                    pickedProgram={this.state.value3}

                    listOfBatches={this.props.programWiseBatches}
                    changeHandler2={this.handleChange2}
                    pickedBatch={this.state.value2}

                    listOfCourse={this.props.batchWiseCourses}
                    changeHandler1={this.handleChange1}
                    pickedCourse={this.state.value1}

                    fetchMyBatches={this.fetchBatches.bind(this)}
                    fetchMyCourses={this.fetchCourses.bind(this)}

                    clearList={this.makeListClear.bind(this)}
                />
            )
        }

        if (this.props.Flag === true) {
            return (
                <MakeMCQS
                    clickHandler3={this.Finish.bind(this)}
                    clickHandler2={this.Next.bind(this)}
                    clickHandler1={this.removeOpt.bind(this)}
                    checkBoxHandler={this.handleCheckboxChange.bind(this)}
                    listOfOptions={this.state.OptsArray}
                    clickHandler={this.addOpt.bind(this)}
                    typedOption={this.state.Optvalue}
                    changeHandler1={this.handleChange.bind(this)}
                    typedQuestion={this.state.questionBoxValue}
                    changeHandler={this.handleQuestionChange.bind(this)}
                />
            )
        }
    }

    render() {

        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (

            <div>

                {this.callComponent()}

            </div>
        );
    }
}

export const CreateQuiz = connect(mapStateToProps, mapDispatchToProps)(CreateQuizComp)