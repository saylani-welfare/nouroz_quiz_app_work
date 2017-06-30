import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import './style.css'

export default class AddBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: ''
        }
    }

    showUndo() {
        if (this.props.createdBatch !== '') {
            return (
                <div style={{ backgroundColor: 'lightBlue', textAlign: 'center' }}>{this.props.createdBatch.batch}
                    <span onClick={this.props.undo.bind(this, this.props.createdBatch._id)}>
                        <strong>Undo</strong>
                    </span>
                </div>
            )
        }
    }

    render() {
      
        const style = {
            height: 'auto',
            width: 600,
            margin: '20 auto',
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div>
                <div>
                    <Paper style={style} zDepth={5} >

                        <AppBar
                            iconStyleLeft={{ "display": "none" }} style={{ "textAlign": "center" }}
                            title="Add Batch"
                        />
                        <TextField
                            type="text"
                            hintText="Batch"
                            style={{ width: '60%' }}
                            floatingLabelText="Enter Batch Number"
                            value={this.props.inputBoxValue}
                            onChange={this.props.changeHandler1.bind(this)}
                        /><br />
                        <DropDownMenu
                            value={this.props.pickedBatch}
                            onChange={this.props.changeHandler}
                            style={{ width: '150px' }}>
                            <MenuItem value='' primaryText="Program" />
                            {
                                this.props.listOfPrograms.map((ProgramObj, index) => {
                                    return (
                                        <MenuItem
                                            key={index}
                                            value={ProgramObj.program}
                                            primaryText={ProgramObj.program}
                                        />
                                    )
                                })
                            }
                        </DropDownMenu>
                        <br />
                        <RaisedButton
                            label="Add Batch"
                            style={{ margin: "0 0 20px 0" }}

                            onClick={this.props.clickHandler}
                            primary={true}
                        />
                    </Paper>
                </div>
                {this.showUndo()}
            </div>
        )
    }
}



