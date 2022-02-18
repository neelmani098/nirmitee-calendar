import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../store/actions/EventAction";
import { Button } from "@chakra-ui/react";

import styles from "./NewAppointment.module.css";
import { useState } from "react";
import AppointmentInput from "./AppointmentInput";

const NewAppointment = () => {
  const [showModal, setShowModal] = useState(false);

  const buttonClickHandler = (event) => {
    event.preventDefault();
    setShowModal((prevState) => !prevState);
  };
  return (
    <>
      <Button
        className={styles.button}
        colorScheme="blue"
        onClick={buttonClickHandler}
      >
        {showModal ? "Close" : "Create New Appointment"}
      </Button>
      {showModal && <AppointmentInput onAdd={buttonClickHandler} />}
    </>
  );
};

export default NewAppointment;
