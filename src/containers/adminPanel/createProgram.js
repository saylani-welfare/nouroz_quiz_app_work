
import React from 'react';
import { persistStore } from 'redux-persist';
import AddProgram from '../../components/adminPanel/addProgram.js';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import AsyncMiddlware from '../../store/middlewares/adminMiddlewares/asyncMiddleware'


function mapStateToProps(state) {
    return {
        new_program: state.AsyncReducer.NEW_PROGRAM
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProgram: (programName) => { Store.dispatch(AsyncMiddlware.addProgram(programName)) },
        deleteProgram: (Pid) => { Store.dispatch(AsyncMiddlware.deleteProgram(Pid)) }
    }
}


class CreateProgramComp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            program: ''
        }
    }

    componentWillMount() {
        persistStore(Store, {}, () => {
            Store.dispatch({ type: 'UNDO_PROGRAM' })
        })
    }

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            program: val
        })
    }

    addAProgram() {
        this.props.addProgram(this.state.program);
        this.setState({
            program: ''
        })
    }

    UNDO(Pid) {
        this.props.deleteProgram(Pid);
    }

    render() {
        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();
        return (
            <div>
                <AddProgram
                    changeHandler={this.inputBoxValue.bind(this)}
                    inputBoxState={this.state.program}
                    clickHandler={this.addAProgram.bind(this)}
                    createdProgram={this.props.new_program}
                    undo={this.UNDO.bind(this)}
                />
            </div>
        )
    }
}

export const CreateProgram = connect(mapStateToProps, mapDispatchToProps)(CreateProgramComp);
