import React from 'react';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';


export default class AllBatches extends React.Component {

    render() {
        return (
            <div>
                    <AppBar
                        iconStyleLeft={{ "display": "none" }} style={{ "textAlign": "center" }}
                        title="All Batches"
                    />
                    <List>
                        {this.props.batchList.map((Batch) => {
                            return (
                                <div key={Batch._id}>
                                    <ListItem
                                        primaryText={Batch.batch}
                                    />
                                </div>
                            )
                        })}
                    </List>
                </div>

        )
    }
}
