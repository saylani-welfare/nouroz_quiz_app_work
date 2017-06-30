import React from 'react';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import TokenMiddlware from '../../store/middlewares/adminMiddlewares/tokenMiddleware';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';




function mapDispatchToProps(dispatch) {
    return {
        rmTOKEN: () => { Store.dispatch(TokenMiddlware.RemoveToken()) }
    }
}

class Logout extends React.Component {

    logout() {
        this.props.rmTOKEN();
        browserHistory.push('/admin');
    }

    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
            headerButton: {
                // border: '2px solid red',
            },
            button: {
                marginTop: '5px',
                color: '#fafbfc',
                fontFamily: 'Verdana'
            },
        };
        return (
            <div>
                <FlatButton onClick={this.logout.bind(this)} style={styles.button} label="Logout" />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);

