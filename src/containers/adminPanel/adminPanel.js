
import React from 'react';
import { Link } from 'react-router';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import { browserHistory } from 'react-router';
import Logout from './logout.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

function mapStateToProps(state) {
    return {
        AUTH_TOKEN: state.TokenReducer.auth_token
    }
}

class AdminPanelComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    handleClose = () => this.setState({ open: false });

    componentWillMount() {
        persistStore(Store, {}, (err, result) => {
            if (this.props.AUTH_TOKEN === '') {
                browserHistory.push('/admin');
                console.log(this.props.AUTH_TOKEN);
            }
        });
    }

    render() {
        // // //cannot come on this page using browser back button
        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (
            <div>
                <div>
                    <AppBar
                        title="Admin Panel"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                        iconElementRight={<Logout />}
                    />

                    <Drawer open={this.state.open}
                        docked={false}
                        onRequestChange={(open) => this.setState({ open })}>
                        <AppBar
                            title="Admin Panel"
                            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                        />
                        <Link to="/admin/dashboard"><MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem></Link>
                        <Link to="/admin/createProgram"><MenuItem onTouchTap={this.handleClose}>Create Program</MenuItem></Link>
                        <Link to="/admin/createBatch"><MenuItem onTouchTap={this.handleClose}>Create Batch</MenuItem></Link>
                        <Link to="/admin/createCourse"><MenuItem onTouchTap={this.handleClose}>Create Course</MenuItem></Link>
                        <Link to="/admin/createquiz"><MenuItem onTouchTap={this.handleClose}>Create Quiz</MenuItem></Link>
                    </Drawer>
                </div>
                {this.props.children}

            </div>
        );
    }
}

export const AdminPanel = connect(mapStateToProps, null)(AdminPanelComp)