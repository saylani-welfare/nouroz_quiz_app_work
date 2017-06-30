import ActionBundle from '../../actions/actionbundle.js';
import Store from '../../store.js';
import axios from 'axios';

export default class AsyncMiddlware {

    static addProgram(programName) {
        return (dispatch) => {

            var createdProgram;

            axios.post('http://localhost:3050/api/addProgram', { program: programName })
                .then(function (response) {
                    createdProgram = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.newlyCreatedProgram(createdProgram))
                })
        }
    }

    static getAllPrograms() {
        return (dispatch) => {

            var allPrograms = [];
            axios.get('http://localhost:3050/api/getAllPrograms')
                .then(function (response) {
                    allPrograms = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.allProgramList(allPrograms))
                })
        }
    }

    static deleteProgram(Pid) {
        return (dispatch) => {

            axios.delete('http://localhost:3050/api/deleteProgram/' + Pid)
                .then(function (response) {
                    console.log('deleted')
                })
                .then(() => {
                    Store.dispatch({ type: 'UNDO_PROGRAM' })
                })
                .catch(() => {
                    alert('Failed To Delete');
                })
        }
    }

    static addBatch(obj) {
        return (dispatch) => {
            axios.post('http://localhost:3050/api/addBatch', {
                batch: obj.batchNumber,
                program_name: obj.programName
            })
                .then(function (response) {
                    Store.dispatch(ActionBundle.newlyCreatedBatch(response.data))
                })
        }
    }

    static deleteBatch(Bid) {
        return (dispatch) => {

            axios.delete('http://localhost:3050/api/deleteBatch/' + Bid)
                .then(function (response) {
                    console.log('deleted')
                })
                .then(() => {
                    Store.dispatch({ type: 'UNDO_BATCH' })
                })
                .catch(() => {
                    alert('Failed To Delete');
                })
        }
    }


    static getAllBatches() {
        return (dispatch) => {
            var allBatches = [];
            axios.get('http://localhost:3050/api/getAllBatches')
                .then(function (response) {
                    allBatches = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.allBatchesList(allBatches))
                })
        }
    }

    static getParticlarBatches(pid) {
        return (dispatch) => {

            var Batches = [];
            var config = {
                headers: { program_id: pid}
            }

            axios.get('http://localhost:3050/api/getSpecificBatches', config)
                .then(function (response) {
                    response.data.map((BatchObj) => {
                        Batches.push(BatchObj)
                    })
                })
                .then(() => {
                    Store.dispatch(ActionBundle.particlarBatches(Batches))
                })
        }
    }

    static addCourse(course, batch, program) {
        return (dispatch) => {

            axios.post('http://localhost:3050/api/addCourse', { course: course, batch_name: batch, program_name: program })
                .then(function (response) {
                    Store.dispatch(ActionBundle.newlyCreatedCourse(response.data))
                })
        }
    }

    static getAllCourses() {
        return (dispatch) => {

            var allCourses = [];
            axios.get('http://localhost:3050/api/getAllCourses')
                .then(function (response) {
                    allCourses = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.allCoursesList(allCourses))
                })
        }
    }

    static deleteCourse(Cid) {
        return () => {

            axios.delete('http://localhost:3050/api/deleteCourse/' + Cid)
                .then(function (response) {
                    console.log('deleted')
                })
                .then(() => {
                    Store.dispatch({ type: 'UNDO_COURSE' })
                })
                .catch(() => {
                    alert('Failed To Delete');
                })
        }
    }


    static getPerticularCourses(batID) {
        return (dispatch) => {

            var Courses = [];
            var config = {
                headers: { batch_id: batID }
            }

            axios.get('http://localhost:3050/api/getSpecificCoureses', config)
                .then(function (response) {
                    response.data.map((CourseObj) => {
                        Courses.push(CourseObj)
                    })
                })
                .then(() => {
                    Store.dispatch(ActionBundle.particlarCourses(Courses))
                })

        }
    }

    static getAllQuizes() {
        return (dispatch) => {
            var allQuizes = [];
            axios.get('http://localhost:3050/api/getAllQuizes')
                .then(function (response) {
                    allQuizes = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.getAllQuizes(allQuizes))
                })
        }
    }

    static getParticlarQuizes(courseID) {
        return (dispatch) => {

            var quizes = [];
            var config = {
                headers: { course_id: courseID }
            }

            axios.get('http://localhost:3050/api/getSpecificQuizes', config)
                .then(function (response) {
                    response.data.map((QuizObj) => {
                        quizes.push(QuizObj)
                    })
                })
                .then(() => {
                    Store.dispatch(ActionBundle.particlarQuizes(quizes))
                })

        }
    }

    static finish(QUIZ) {
        return (dispatch) => {

            axios.post('http://localhost:3050/api/makeQuiz', QUIZ)
                .then(function (response) {
                    console.log(response.data)
                })
                .then(() => {
                    Store.dispatch({ type: 'CLEARMCQS' })
                })

        }
    }

}








