

export default class ActionBundle {

    static adminToken(tok) {
        return {
            type: 'ADMINTOKEN',
            authenticationTOKEN: tok
        }
    }

    static clearToken() {
        return {
            type: 'CLEARTOKEN',
            delTOKEN: ''
        }
    }

    static question(questOBJ) {
        return {
            type: 'QUESTION',
            Question: questOBJ
        }
    }

    static svQuizName(quizTitle, selectedCourse) {
        return {
            type: 'SVQUIZNAME',
            title: quizTitle,
            course: selectedCourse
        }
    }

    static allProgramList(ls) {
        return {
            type: 'ALLPROGRAMLIST',
            Plist: ls
        }
    }

    static getAllQuizes(ls){
        return {
            type: 'ALLQUIZESLIST',
            Qlist: ls
        }
    }

    static allBatchesList(ls) {
        return {
            type: 'AllBATCHESLIST',
            Blist: ls
        }
    }

    static particlarBatches(ls) {
        return {
            type: 'PARTICLARBATCHES',
            PBlist: ls
        }
    }

    static allCoursesList(ls) {
        return {
            type: 'ALLCOURSESLIST',
            Clist: ls
        }
    }

    static particlarCourses(ls) {
        return {
            type: 'PARTICLARCOURSES',
            PClist: ls
        }
    }

    static particlarQuizes(ls) {
        return {
            type: 'PARTICLARQUIZES',
            PQlist: ls
        }
    }

    static newlyCreatedProgram(createdProgram) {
        return {
            type: "NEWLY_CREATED_PROGRAM",
            N_C_P: createdProgram
        }
    }

    static newlyCreatedBatch(createdBatch) {
        return {
            type: 'NEWLY_CREATED_BATCH',
            N_C_B: createdBatch
        }
    }

    static newlyCreatedCourse(createdCourse) {
        return {
            type: 'NEWLY_CREATED_COURSE',
            N_C_C: createdCourse
        }
    }
}







