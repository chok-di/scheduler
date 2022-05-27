import React, { useState } from "react";
import InterviewerList from "../InterviewerList.js";
import Button from "../Button.js";

export default function Form(props) {
/*
**initialize the states of the form
*/
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
/*
** reset student and interviewer to empty each time the delete button is pressed
*/
  const reset = (e) => {
    setStudent('');
    setInterviewer(null);
    e();
  }
/*
** error handling when student or interviewer is not chosen
*/
  function validate() {
    if (!student) {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Please select an interviewer");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  };
/*
** rendering the book interview form
*/
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">
          {error}
        </section> 
        
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={()=>{reset(props.onCancel)}}>Cancel</Button>
          <Button confirm onClick={(event) => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
};