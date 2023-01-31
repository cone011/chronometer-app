import { useEffect, useState } from "react";
import classes from "./ChronometerForm.module.css";

const ChronometerForm = (props) => {
  const { chronometerObject, onSaveChronometer, isNew } = props;
  const [titleInput, setTitleInput] = useState("");
  const [projectInput, setProjectInput] = useState("");

  const assigmentValues = () => {
    setTitleInput(chronometerObject.title);
    setProjectInput(chronometerObject.project);
  };

  useEffect(() => {
    assigmentValues();
  }, [assigmentValues]);

  const onSubmitChronometerForm = (event) => {
    event.preventDefault();
    if (!titleInput) {
      //throw error title inpout
    }

    if (!projectInput) {
      //throw error project input
    }

    onSaveChronometer({ data: chronometerObject, isNew: isNew });
  };

  return <form onSubmit={onSubmitChronometerForm}></form>;
};

export default ChronometerForm;
