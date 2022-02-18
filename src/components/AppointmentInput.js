import { useState } from "react";

import DateTimePicker from "react-datetime-picker";
import { Button } from "@chakra-ui/react";
import { eventActions } from "../store/actions/EventAction";
import { useDispatch } from "react-redux";

import styles from "./AppointmentInput.module.css";

const AppointmentInput = (props) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());

  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setEventTitle(event.target.value);
  };

  const eventAddHandler = (event) => {
    event.preventDefault();
    const newEvent = {
      id: Math.floor(Math.random() * 99),
      title: eventTitle,
      start: eventStartDate,
      end: eventEndDate,
    };

    dispatch(eventActions.addEvent({ newEvent }));

    setEventTitle("");

    props.onAdd(event);
  };

  return (
    <>
      <div className={styles.appointment}>
        <div className={styles.appointment_title}>
          Title:{" "}
          <input
            placeholder="Enter Appointment Title"
            onChange={titleChangeHandler}
            value={eventTitle}
          />
        </div>

        <div className={styles.appointment_dateTime}>
          <span>Start Date:</span>
          <DateTimePicker onChange={setEventStartDate} value={eventStartDate} />
        </div>

        <div className={styles.appointment_dateTime}>
          <span>End Date:</span>
          <DateTimePicker onChange={setEventEndDate} value={eventEndDate} />
        </div>
        <div className={styles.appointment_button}>
          <Button onClick={eventAddHandler} colorScheme="green">
            ADD APPOINTMENT
          </Button>
        </div>
      </div>
    </>
  );
};

export default AppointmentInput;
