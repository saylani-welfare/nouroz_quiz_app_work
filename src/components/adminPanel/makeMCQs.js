
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import cross from './cross.png';
import Paper from 'material-ui/Paper';


export default class MakeMCQS extends React.Component {

    render() {


        const style = {
            height: 'auto',
            width: "75%",
            margin: '20 auto',
            textAlign: 'center',
            display: 'inline-block'
        };

        return (
            <div>
                <Paper style={style} zDepth={5} >
                    <AppBar
                        iconStyleLeft={{ "display": "none" }} style={{ width: '100%', "textAlign": "center" }}
                        title="Make MCQS"
                    />

                    <TextField
                        hintText="Write Quiz"
                        type="text"
                        multiLine={true}
                        rows={1}
                        style={{ width: '90%', margin: '15px auto' }}
                        value={this.props.typedQuestion}
                        onChange={this.props.changeHandler}
                    />
                    <br />
                    <TextField
                        hintText="Add Option"
                        floatingLabelText="Add Option"
                        type="text"
                        onChange={this.props.changeHandler1}
                        value={this.props.typedOption}
                        style={{ width: '90%' }}
                    />
                    <RaisedButton
                        label="Add Option"
                        onClick={this.props.clickHandler}
                        primary={true}

                    />
                    <table className="table">
                        <tbody>
                            {this.props.listOfOptions.map((OptText, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="container">
                                                <div className="checkbox">
                                                    <label>
                                                        <input value={OptText} onClick={this.props.checkBoxHandler} type="checkbox" name="optionsCheckboxes" /><span textAlign='left' className="checkbox-material"><span className="check"></span></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/*<input value={OptText} onClick={this.props.checkBoxHandler} type="checkbox" name="optionsCheckboxes" />*/}
                                        </td>
                                        <td>{OptText}</td>
                                        <td className="td-actions text-right">
                                            <button onClick={this.props.clickHandler1.bind(this, OptText)} type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                <i className="material-icons"><img src={cross} alt='Cross' /></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <RaisedButton
                        label="Next"
                        onClick={this.props.clickHandler2}
                        primary={true}
                        style={{ margin: '20px 0 20px 0' }}
                    />
                    <RaisedButton
                        style={{ margin: '20px 0 25px 25px' }}
                        label="Finish"
                        onClick={this.props.clickHandler3}
                        primary={true}
                    />
                </Paper>
            </div>
        )
    }
}
