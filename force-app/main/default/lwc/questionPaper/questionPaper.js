import { LightningElement, track } from 'lwc';

export default class OnlineExam extends LightningElement {
    selected={} //for storing answers
    correctAnswers=0;
    isSubmitted = false;
    @track
    myQuestions = [
        {
            id:"Q1",
            question: "Which of the following is cloud technology?",
            answers:{
                a: "Salesforce",
                b: "C++",
                c: ".Net",
                d: "PL/SQL"
            },
            correctAnswer:"a"
        },
        {
            id:"Q2",
            question: "Which of the following asynchronous program allows to work with more than 50K records?",
            answers:{
                a: "Queueable apex",
                b: "Schedule apex",
                c: "Batch apex",
                d: "Future Method"
            },
            correctAnswer:"c"
        },
        {
            id:"Q3",
            question: "Which of the following is UI technology?",
            answers:{
                a: "Visualforce",
                b: "Aura",
                c: "LWC",
                d: "All of the above"
            },
            correctAnswer:"d"
        }
    ];
    //radio button
    changeHandler(event){
        //this.status = event.target.checked
        let{name,value} = event.target
        this.selected = {...this.selected,[name]:value}
    }
    //used to disable submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    //submit onclick
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
    //Reset onclick
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }
}