import React from 'react';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';


export default class AllQuizes extends React.Component {

    render() {
        return (
            <div>
                    <AppBar
                        iconStyleLeft={{ "display": "none" }} style={{ "textAlign": "center" }}
                        title="All Quizes"
                    />
                    <List>
                        {this.props.QuizList.map((Quizes) => {
                            return (
                                <div key={Quizes._id}>
                                    <ListItem
                                        primaryText={Quizes.quiz}
                                    />
                                </div>
                            )
                        })}
                    </List>
                </div>

        )
    }
}
