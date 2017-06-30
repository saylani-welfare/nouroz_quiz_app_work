import React from 'react';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import AddBatch from '../../components/adminPanel/addBatch';
import AsyncMiddlware from '../../store/middlewares/adminMiddlewares/asyncMiddleware';


function mapStateToProps(state) {
    return {
        programlist: state.AsyncReducer.ProgramList,
        new_batch: state.AsyncReducer.NEW_BATCH
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPrograms: () => { Store.dispatch(AsyncMiddlware.getAllPrograms()) },
        addBatch: (obj) => { Store.dispatch(AsyncMiddlware.addBatch(obj)) },
        deleteBatch: (Bid) => { Store.dispatch(AsyncMiddlware.deleteBatch(Bid)) }
    }
}

class CreateBatchComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            inputFieldValue: ''
        }
    }

    componentWillMount() {

        persistStore(Store, {}, () => {
            this.props.getAllPrograms();
            Store.dispatch({ type: 'UNDO_BATCH' })
        })
    }

    handleClick() {
        var obj = {
            batchNumber: this.state.inputFieldValue,
            programName: this.state.value
        }
        this.props.addBatch(obj);

        this.setState({
            value: '',
            inputFieldValue: ''
        })
    }

    handleChange = (event, index, value) => this.setState({ value });

    handleChange1(eve) {
        var val = eve.target.value;

        this.setState({
            inputFieldValue: val
        })
    }

    UNDO(Bid) {
        this.props.deleteBatch(Bid);
    }

    render() {
      
        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (

            <div>
                <AddBatch undo={this.UNDO.bind(this)} createdBatch={this.props.new_batch} inputBoxValue={this.state.inputFieldValue} changeHandler1={this.handleChange1.bind(this)} clickHandler={this.handleClick.bind(this)} listOfPrograms={this.props.programlist} changeHandler={this.handleChange} pickedBatch={this.state.value} />
            </div>
        );
    }
}

export const CreateBatch = connect(mapStateToProps, mapDispatchToProps)(CreateBatchComp);
