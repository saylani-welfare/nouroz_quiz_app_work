import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';


export default class AddCourse extends React.Component {

    showUndo() {
        if (this.props.createdCourse !== '') {
            return (
                <div style={{ backgroundColor: 'lightBlue', textAlign: 'center' }}>{this.props.createdCourse.course}
                    <span onClick={this.props.undo.bind(this, this.props.createdCourse._id)}>
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
                            title="Add Course"
                        />
                        <TextField
                            type="text"
                            onChange={this.props.changeHandler}
                            style={{ width: "60%" }}
                            value={this.props.courseName}
                            hintText="Course"
                            floatingLabelText="Enter Course Name"
                        /><br />
                        <DropDownMenu
                            value={this.props.ProgramDD}
                            onChange={this.props.DDchangeHandler2}
                            style={{ width: '150px' }}>
                            <MenuItem value='' onClick={this.props.clickHandler1} primaryText="Program" />
                            {
                                this.props.listOfPrograms.map((ProgramObj, index) => {
                                    return (
                                        <MenuItem
                                            onClick={this.props.clickHandler.bind(this, ProgramObj._id)}
                                            key={index}
                                            value={ProgramObj.program}
                                            primaryText={ProgramObj.program}
                                        />
                                    )
                                })
                            }
                        </DropDownMenu>
                        <br />
                        <DropDownMenu
                            value={this.props.batchDD}
                            onChange={this.props.DDchangeHandler1}
                            style={{ width: '150px' }}>
                            <MenuItem value='' primaryText=" Batch" />
                            {
                                this.props.listOfBatches.map((BatchObj, index) => {
                                    return (
                                        <MenuItem key={index} value={BatchObj.batch} primaryText={BatchObj.batch} />
                                    )
                                })
                            }
                        </DropDownMenu>
                        <br />
                        <RaisedButton
                            label="Add Course"
                            style={{ margin: '0 0 25px 25px' }}
                            onClick={this.props.addcourse}
                            primary={true}
                        />
                    </Paper>
                </div>
                {this.showUndo()}
            </div>
        )
    }
}


