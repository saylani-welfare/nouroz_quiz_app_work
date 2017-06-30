import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DashboardDropdowns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: '',
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        }
    }

    fetchBatches(Pname) {
        this.props.getParticlarBatches(Pname)
    }

    fetchCourses(Bname) {
        this.props.getParticularCourses(Bname)
    }

    fetchQuiz(Cname) {
        this.props.getParticlarQuizes(Cname)
    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });
    handleChange3 = (event, index, value3) => this.setState({ value3 });
    handleChange4 = (event, index, value4) => this.setState({ value4 });

    render() {
        return (
            <center>
                <DropDownMenu
                    value={this.state.value2}
                    onChange={this.handleChange2}
                    style={{ width: '350px' }}>
                    <MenuItem value={this.state.selectValue} primaryText="Program" />
                    {
                        this.props.programList.map((ProgramObj, index) => {
                            return (
                                <MenuItem
                                    onClick={this.fetchBatches.bind(this, ProgramObj._id)}
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
                    value={this.state.value1}
                    onChange={this.handleChange1}
                    style={{ width: '350px' }}>
                    <MenuItem value={this.state.selectValue} primaryText=" Batch" />
                    {
                        this.props.programWiseBatches.map((Bname, index) => {
                            return (
                                <MenuItem
                                    onClick={this.fetchCourses.bind(this, Bname._id)}
                                    key={index} value={Bname.batch} primaryText={Bname.batch} />
                            )
                        })
                    }
                </DropDownMenu>
                <br />
                <DropDownMenu
                    value={this.state.value3}
                    onChange={this.handleChange3}
                    style={{ width: '350px' }}>
                    <MenuItem value={this.state.selectValue} primaryText=" Courses" />
                    {
                        this.props.BatchWiseCourses.map((Cname, index) => {
                            return (
                                <MenuItem
                                    onClick={this.fetchQuiz.bind(this, Cname._id)}
                                    key={index} value={Cname.course} primaryText={Cname.course} />
                            )
                        })
                    }
                </DropDownMenu>
                <br />
                <DropDownMenu
                    value={this.state.value4}
                    onChange={this.handleChange4}
                    style={{ width: '350px' }}>
                    <MenuItem value={this.state.selectValue} primaryText=" Quizes" />
                    {
                        this.props.CourseWiseQuizes.map((Qname, index) => {
                            return (
                                <MenuItem
                                    key={index} value={Qname.quiz} primaryText={Qname.quiz} />
                            )
                        })
                    }
                </DropDownMenu>
            </center>

        )
    }
}
