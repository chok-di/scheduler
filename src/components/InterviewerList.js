import React from "react";
import InterviewerListItem from "./InterviewerListItem.js";
import "components/InterviewerList.scss";
export default function InterviewerList(props) {
  console.log(props);
  let { interviewers, value, onChange } = props;
  const interviewerList = [];
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map((interviewer) => {
          return (
            <InterviewerListItem
              key={interviewer.id}
              name={interviewer.name}
              avatar={interviewer.avatar}
              selected={interviewer.id === value}
              setinterviewer={() => onChange(interviewer.id)}
            />
          );
        })}
      </ul>
    </section>
  );
};