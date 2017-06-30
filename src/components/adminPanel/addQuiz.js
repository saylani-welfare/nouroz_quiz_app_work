import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

export default class AddQuiz extends React.Component {

    render() {
        const sty = {
            margin: 12
        };

        const style = {
            height: 'auto',
            width: '75%',
            margin: 0,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div>
                <Paper style={style} zDepth={5} >
                    <AppBar
                        iconStyleLeft={{ "display": "none" }} style={{ 'width': '100%', "textAlign": "center" }}
                        title="Add Quiz"
                    />
                    <TextField
                        hintText="Quiz Name"
                        floatingLabelText="Enter Quiz Name"
                        type="text"
                        style={{ width: '60%' }}
                        onChange={this.props.changeHandler}
                        value={this.props.quizName}

                    />

                    <br /><br />
                    {/*Programs*/}
                    <DropDownMenu
                        value={this.props.pickedProgram}
                        onChange={this.props.changeHandler3}
                        style={{ width: '200px', colors: 'red' }}>
                        <MenuItem value='' onClick={this.props.clearList} primaryText="Program" />
                        {
                            this.props.listOfPrograms.map((ProgramObj, index) => {
                                return (
                                    <MenuItem onClick={this.props.fetchMyBatches.bind(this, ProgramObj._id)} key={index} value={ProgramObj.program} primaryText={ProgramObj.program} />
                                )
                            })
                        }
                    </DropDownMenu>

                    <br /><br />
                    {/*Batches*/}
                    <DropDownMenu
                        value={this.props.pickedBatch}
                        onChange={this.props.changeHandler2}
                        style={{ width: '200px', colors: 'red' }}>
                        <MenuItem value=''onClick={this.props.clearList} primaryText="Batch" />
                        {
                            this.props.listOfBatches.map((BatchObj, index) => {
                                return (
                                    <MenuItem onClick={this.props.fetchMyCourses.bind(this, BatchObj._id)} key={index} value={BatchObj.batch} primaryText={BatchObj.batch} />
                                )
                            })
                        }
                    </DropDownMenu>

                    <br /><br />
                    {/*Courses*/}
                    <DropDownMenu
                        value={this.props.pickedCourse}
                        onChange={this.props.changeHandler1}
                        style={{ width: '200px', colors: 'red' }}>
                        <MenuItem value='' onClick={this.props.clearList} primaryText="Course" />
                        {
                            this.props.listOfCourse.map((Cname, index) => {
                                return (
                                    <MenuItem key={index} value={Cname.course} primaryText={Cname.course} />
                                )
                            })
                        }
                    </DropDownMenu>

                    <RaisedButton
                        label="Add Quiz"
                        style={{ sty }}
                        onClick={this.props.clickHandler}
                        primary={true}
                    />
                </Paper>
            </div>
        )
    }
}
