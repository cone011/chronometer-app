import classes from "./ChronometerList.module.css";

const ChronometerList = () => {
  const onSavedChronometer = (dataReturn) => {
    if (dataReturn.isNew) {
      //push in the array
    } else {
      //search in the array and  update the value
    }
  };

  const onDeleteChronometer = (eventValue) => {
    //delete the chronometer from the array
  };
};

export default ChronometerList;
