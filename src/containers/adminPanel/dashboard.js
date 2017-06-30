import React from 'react';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import AsyncMiddlware from '../../store/middlewares/adminMiddlewares/asyncMiddleware';
import AllBatches from '../../components/adminPanel/allBatch';
import AllPrograms from '../../components/adminPanel/allPrograms';
import AllCourses from '../../components/adminPanel/allCourses';
import AllQuizes from '../../components/adminPanel/allQuiz';
import DashboardDropdowns from '../../components/adminPanel/dashboardDropdown';
import MenuExampleNested from '../../components/adminPanel/nestedMenu';

function mapStateToProps(state) {
  return {
    programList: state.AsyncReducer.ProgramList,
    batchList: state.AsyncReducer.BatchList,
    programWiseBatches: state.AsyncReducer.ProgramWiseBatches,
    courseList: state.AsyncReducer.CourseList,
    BatchWiseCourses: state.AsyncReducer.BatchWiseCourses,
    QuizList: state.AsyncReducer.QuizList,
    CourseWiseQuizes: state.AsyncReducer.CourseWiseQuizes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPrograms: () => { Store.dispatch(AsyncMiddlware.getAllPrograms()) },
    getAllCourses: () => { Store.dispatch(AsyncMiddlware.getAllCourses()) },
    getAllQuizes: () => { Store.dispatch(AsyncMiddlware.getAllQuizes()) },
    getAllBatches: () => { Store.dispatch(AsyncMiddlware.getAllBatches()) },
    getParticlarBatches: (Pname) => { Store.dispatch(AsyncMiddlware.getParticlarBatches(Pname)) },
    getParticlarQuizes: (Cname) => { Store.dispatch(AsyncMiddlware.getParticlarQuizes(Cname)) },
    getParticularCourses: (Bname) => { Store.dispatch(AsyncMiddlware.getPerticularCourses(Bname)) }
  }
}

export class DashboardComp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalProgram: 0,
      totalBatch: 0,
      totalCourse: 0,
      totalQuiz: 0,
      course: false,
      programs: false,
      batches: false,
      quiz: false,
    }
  }

  componentWillMount() {
    this.props.getAllPrograms();
    this.props.getAllCourses();
    this.props.getAllBatches();
    this.props.getAllQuizes();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      totalProgram: nextProps.programList.length,
      totalBatch: nextProps.batchList.length,
      totalCourse: nextProps.courseList.length,
      totalQuiz: nextProps.QuizList.length
    })
  }

  handleCourse() {
    this.setState(prevState => ({
      course: !prevState.course,
      programs: false,
      quiz: false,
      batches: false
    }));
  }

  handleProgram() {
    this.setState(prevState => ({
      programs: !prevState.programs,
      batches: false,
      course: false,
      quiz: false
    }));
  }

  handleBatch() {
    this.setState(prevState => ({
      batches: !prevState.batches,
      course: false,
      programs: false,
      quiz: false
    }));
  }

  handleQuiz() {
    this.setState(prevState => ({
      quiz: !prevState.quiz,
      course: false,
      programs: false,
      batches: false
    }));
  }

  render() {
    (function () {
      function disableBack() { window.history.forward() }
      window.onload = disableBack();
      window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
    })();
    return (

      <div>
        <center>
          <span className="pdiv" onClick={this.handleProgram.bind(this)}>
            <span className="numSize">{this.state.totalProgram}</span>
            <p >PROGRAMS</p>
          </span>
          <span className="pdiv" onClick={this.handleBatch.bind(this)}>
            <span className="numSize">{this.state.totalBatch}</span>
            <p>BATCHES</p>
          </span>
          <span className="pdiv" onClick={this.handleCourse.bind(this)}>
            <span className="numSize">{this.state.totalCourse}</span>
            <p>COURSES</p>
          </span>
          <span className="pdiv" onClick={this.handleQuiz.bind(this)}>
            <span className="numSize">{this.state.totalQuiz}</span>
            <p>QUIZES</p>
          </span>
        </center>

        <MenuExampleNested
          programList={this.props.programList}
          programWiseBatches={this.props.programWiseBatches}
          BatchWiseCourses={this.props.BatchWiseCourses}
          CourseWiseQuizes={this.props.CourseWiseQuizes}
          getParticlarBatches={this.props.getParticlarBatches}
          getParticlarQuizes={this.props.getParticlarQuizes}
          getParticularCourses={this.props.getParticularCourses} />

        <DashboardDropdowns
          programList={this.props.programList}
          programWiseBatches={this.props.programWiseBatches}
          BatchWiseCourses={this.props.BatchWiseCourses}
          CourseWiseQuizes={this.props.CourseWiseQuizes}
          getParticlarBatches={this.props.getParticlarBatches}
          getParticlarQuizes={this.props.getParticlarQuizes}
          getParticularCourses={this.props.getParticularCourses}
        />

        {this.state.course ? <AllCourses courseList={this.props.courseList} /> : <div></div>}
        {this.state.programs ? <AllPrograms programList={this.props.programList} /> : <div></div>}
        {this.state.quiz ? <AllQuizes QuizList={this.props.QuizList} /> : <div></div>}
        {this.state.batches ? <AllBatches batchList={this.props.batchList} /> : <div></div>}

      </div>
    );
  }
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComp);

