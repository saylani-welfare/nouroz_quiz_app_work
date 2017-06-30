import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

export default class MenuExampleNested extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleProgram: false,
            toggleBatch: false,
            toggleCourse: false,
            toggleQuiz: false
        }
    }

    fetchBatches(Pname) {
        this.props.getParticlarBatches(Pname);
    }

    fetchCourses(Bname) {
        this.props.getParticularCourses(Bname)
    }

    fetchQuiz(Cname) {
        this.props.getParticlarQuizes(Cname)
    }

    handleProgramClick() {
        this.setState({ toggleProgram: !this.state.toggleProgram });
    }
    renderProgram(programList) {

        if (this.state.toggleProgram) {
            return (
                programList.map((ProgramObj) => {
                    return (
                        <div key={ProgramObj._id}>
                            <li
                                onClick={this.handleBatchClick.bind(this, ProgramObj._id)}> + {ProgramObj.program}</li>
                            <ul>{this.renderBatch(this.props.programWiseBatches)}</ul>
                        </div>
                    )
                })
            )
        }
    }

    handleBatchClick(Pname) {
        this.props.getParticlarBatches(Pname);
        this.setState({ toggleBatch: !this.state.toggleBatch })
    }

    renderBatch(programWiseBatches) {
        if (this.state.toggleBatch) {
            return (
                programWiseBatches.map((batchObj) => {
                    return (
                        <div key={batchObj._id}>
                            <li
                                onClick={this.handleCourseClick.bind(this, batchObj._id)}>
                                + {batchObj.batch}
                            </li>
                            <ul>{this.renderCourse(this.props.BatchWiseCourses)}</ul>
                        </div>
                    )
                })
            )
        }
    }

    handleCourseClick(Cname) {
        this.props.getParticularCourses(Cname);
        this.setState({ toggleCourse: !this.state.toggleCourse });
    }

    renderCourse(BatchWiseCourses) {
        if (this.state.toggleCourse) {
            return (
                BatchWiseCourses.map((courseObj) => {
                    return (
                        <div key={courseObj._id}>
                            <li onClick={this.handleQuizClick.bind(this, courseObj._id)} >
                                + {courseObj.course}
                            </li>
                            <ul>{this.renderQuiz(this.props.CourseWiseQuizes)}</ul>
                        </div>
                    )
                })
            )
        }
    }

    handleQuizClick(Qname) {
        this.props.getParticlarQuizes(Qname);
        this.setState({ toggleQuiz: !this.state.toggleQuiz });
    }

    renderQuiz(CourseWiseQuizes) {
        if (this.state.toggleQuiz) {
            return (
                CourseWiseQuizes.map((quizObj) => {
                    return (
                        <div key={quizObj._id}>
                            <li>
                                {quizObj.quiz}
                            </li>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div>
                <p onClick={this.handleProgramClick.bind(this)}> + programs</p>
                <ul>
                    {this.renderProgram(this.props.programList)}
                </ul>

            </div>
        );
    }
}
/*<ul>
                   <p>program wise batches</p>
                   {
                       this.props.programWiseBatches.map((Bname) => {
                           return (
                               <li
                                   key={Bname._id}
                                   onClick={this.fetchCourses.bind(this, Bname._id)}
                               >{Bname.batch}</li>
                           )
                       })}
               </ul>
               <ul>
                   <p>batches wise courses</p>
                   {this.props.BatchWiseCourses.map((Cname, index) => {
                       return (
                           <li
                               key={Cname._id}
                               onClick={this.fetchQuiz.bind(this, Cname._id)}
                           >{Cname.course}</li>
                       )
                   })}
               </ul>
               <ul>
                   <p>course wise quizes</p>
                   {this.props.CourseWiseQuizes.map((Qname, index) => {
                       return (
                           <li
                               key={Qname._id}
                           >{Qname.quiz}</li>
                       )
                   })}
               </ul>*/
{/*<p>programs</p>
                <ul >
                    {
                        this.props.programList.map((ProgramObj) => {
                            return (
                                <li
                                    key={ProgramObj._id}
                                    onClick={this.fetchBatches.bind(this, ProgramObj._id)}
                                >{ProgramObj.program}
                                    <ul>
                                        {this.props.programWiseBatches.map((Bname, index) => {
                                            return (
                                                <li
                                                    key={Bname._id}
                                                    onClick={this.fetchCourses.bind(this, Bname._id)}
                                                >{Bname.batch}
                                                    <ul>
                                                        {this.props.BatchWiseCourses.map((Cname, index) => {
                                                            return (
                                                                <li
                                                                    key={Cname._id}
                                                                    onClick={this.fetchQuiz.bind(this, Cname._id)}
                                                                >{Cname.course}
                                                                    <ul>
                                                                        {this.props.CourseWiseQuizes.map((Qname, index) => {
                                                                            return (
                                                                                <li
                                                                                    key={Qname._id}
                                                                                >{Qname.quiz}</li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </li>
                                                            )
                                                        })}

                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>*/}
