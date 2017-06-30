import React from 'react';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';


export default class AllCourses extends React.Component {

    render() {
        return (
           <div>
            <AppBar
              iconStyleLeft={{ "display": "none" }} style={{ "textAlign": "center" }}
              title="All Courses"
            />
            <List>
              {this.props.courseList.map((Corname) => {
                return (
                  <div key={Corname._id}>
                    <ListItem
                      primaryText={Corname.course}
                    />
                  </div>)
              })}
            </List>
          </div>

        )
    }
}
