import React from 'react';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';

export default class AllPrograms extends React.Component {

    render() {
        return (
            <div>
            <AppBar
              iconStyleLeft={{ "display": "none" }} style={{ "textAlign": "center" }}
              title="All Programs"
            />
            <List>
              {this.props.programList.map((Proname) => {
                return (
                  <div key={Proname._id}>
                    <ListItem
                      primaryText={Proname.program}
                    />
                  </div>
                )
              })}
            </List>
          </div>

        )
    }
}
