
import React from 'react';
import { connect } from 'react-redux';
import Store from '../../store/store.js';
import TokenMiddlware from '../../store/middlewares/adminMiddlewares/tokenMiddleware';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import './style.css';

function mapDispatchToProps(dispatch) {
    return {
        isUserAuthentic: (userCredentail) => { Store.dispatch(TokenMiddlware.isUserAuthentic(userCredentail)) }
    }
}

class AdminLoginComp extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            adminName: '',
            password: ''
        }
    }

    nameInputBox(eve) {
        var val = eve.target.value;
        this.setState({
            adminName: val
        })
    }

    passInputBox(eve) {
        var val = eve.target.value;
        this.setState({
            password: val
        })
    }

    Signin() {
        this.props.isUserAuthentic(this.state)
    }

    render() {
        const sty = {
            margin: 12
        };
        const style = {
            height: 300,
            width: '75%',
            // margin: 100,
            // margin: 30,
            // textAlign: 'center',
            display: 'inline-block',
            // alignContent: "center",

        };
        return (
            <div >
                <AppBar
                    iconStyleLeft={{ "display": "none" }}
                    // onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    style={{ width: '100%', "textAlign": "center" }}
                    title="Admin Login"
                />
                <div className='divStyle'>
                    <Paper style={style} zDepth={5}>
                        <TextField
                            type="text"
                            hintText="Name"
                            floatingLabelText="Enter your Name"
                            onChange={this.nameInputBox.bind(this)}
                            required
                            style={{ width: '90%' }}
                        /><br />
                        <TextField
                            style={{ width: '90%' }}
                            type="password"
                            hintText="Password"
                            floatingLabelText="Enter your password"
                            onChange={this.passInputBox.bind(this)}
                            required
                        /><br />
                        <br />
                        <RaisedButton
                            label="Sign In"
                            style={{ sty }}
                            onClick={this.Signin.bind(this)}
                            type="submit"
                            primary={true}
                        />
                    </Paper>
                </div>
            </div>
        );
    }
}

export const AdminLogin = connect(null, mapDispatchToProps)(AdminLoginComp);