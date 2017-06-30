
import React from 'react';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import AddCourse from '../../components/adminPanel/addCourse.js';
import AsyncMiddlware from '../../store/middlewares/adminMiddlewares/asyncMiddleware';


function mapStateToProps(state) {
    return {
        programlist: state.AsyncReducer.ProgramList,
        programWiseBatches: state.AsyncReducer.ProgramWiseBatches,
        new_course: state.AsyncReducer.NEW_COURSE
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPrograms: () => { Store.dispatch(AsyncMiddlware.getAllPrograms()) },
        getParticlarBatches: (proID) => { Store.dispatch(AsyncMiddlware.getParticlarBatches(proID)) },
        addCourse: (course, batch, program) => { Store.dispatch(AsyncMiddlware.addCourse(course, batch, program)) },
        deleteCourse: (Cid) => { Store.dispatch(AsyncMiddlware.deleteCourse(Cid)) }
    }
}

class CreateCourseComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            courseVal: '',
            allBatches: [],
            allPrograms: [],
            value1: '',
            value2: ''
        }
    }

    //Functionalites of addCourse

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            courseVal: val
        })
    }

    componentWillMount() {

        persistStore(Store, {}, (err, result) => {
            this.props.getAllPrograms();
            Store.dispatch({ type: 'CLEAR_BATCH_LIST' })
            Store.dispatch({ type: 'UNDO_COURSE' })
        })
    }

    fetchBatches(proID) {

        this.props.getParticlarBatches(proID)
    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });

    addACourse() {

        this.props.addCourse(this.state.courseVal, this.state.value1, this.state.value2)
        this.setState({
            courseVal: '',
            value1: '',
            value2: ''
        })
    }

    makeListClear() {
        Store.dispatch({ type: 'CLEAR_BATCH_LIST' })
    }

    UNDO(Cid) {
        this.props.deleteCourse(Cid);
        console.log(Cid);
    }


    render() {
       
        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (

            <div>

                <AddCourse
                    addcourse={this.addACourse.bind(this)}
                    listOfBatches={this.props.programWiseBatches}
                    DDchangeHandler1={this.handleChange1}
                    batchDD={this.state.value1}
                    clickHandler={this.fetchBatches.bind(this)}
                    listOfPrograms={this.props.programlist}
                    DDchangeHandler2={this.handleChange2}
                    ProgramDD={this.state.value2}
                    courseName={this.state.courseVal}
                    changeHandler={this.inputBoxValue.bind(this)}
                    clickHandler1={this.makeListClear.bind(this)}
                    createdCourse={this.props.new_course}
                    undo={this.UNDO.bind(this)}
                />
            </div>
        );
    }
}

export const CreateCourse = connect(mapStateToProps, mapDispatchToProps)(CreateCourseComp)