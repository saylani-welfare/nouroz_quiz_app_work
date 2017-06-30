import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';


export default class AddProgram extends React.Component {

    showUndo() {
        if (this.props.createdProgram !== '') {
            return (
                <div style={{ backgroundColor: 'lightBlue', textAlign: 'center' }}>{this.props.createdProgram.program}
                    <span onClick={this.props.undo.bind(this, this.props.createdProgram._id)}>
                        <strong>Undo</strong>
                    </span>
                </div>
            )
        }
    }

    render() {

        const style = {
            height: 'auto',
            width: '75%',
            textAlign: 'center',
            display: 'inline-block',
        };

        return (
            <div>
                <div>
                    <Paper style={style} zDepth={5} >
                        <AppBar
                            iconStyleLeft={{ "display": "none" }} style={{ "textAlign": "center" }}
                            title="Add Program"
                        />
                        <TextField
                            hintText="Program"
                            style={{ width: '90%' }}
                            floatingLabelText="Enter Program Name"
                            type="text"
                            onChange={this.props.changeHandler}
                            value={this.props.inputBoxState}
                        /><br /><br />
                        <RaisedButton
                            label="Add Program"
                            style={{ margin: '0 0 25px 25px' }}
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


