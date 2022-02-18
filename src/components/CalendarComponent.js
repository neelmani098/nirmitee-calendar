import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../store/actions/EventAction";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const CalendarComponent = (props) => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  // const eventComponent = ({ event }) => (
  //   <div>
  //     {event.title}
  //     {event.start.toLocaleString()}
  //   </div>
  // );

  const onEventDropHandler = ({ event, start, end }) => {
    dispatch(eventActions.eventDrop({ event, start, end }));
  };

  const pastEventStyle = (event, start, end, isSelected) => {
    //this styling can be written in more optimised way -->work on this
    let style;
    const currentDate = new Date();

    if (end.getMonth() < currentDate.getMonth()) {
      style = {
        backgroundColor: "gray",
      };
    }

    if (end.getDate() < currentDate.getDate()) {
      style = {
        backgroundColor: "gray",
      };
    } else if (end.getDate() === currentDate.getDate()) {
      if (
        start.getHours() <= currentDate.getHours() &&
        currentDate.getHours() <= end.getHours()
      ) {
        style = {
          backgroundColor: "green",
        };
      } else if (
        end.getHours() < currentDate.getHours() ||
        start.getHours() < currentDate.getHours()
      ) {
        style = {
          backgroundColor: "skyblue",
        };
      }
    }

    return {
      style: style,
    };
  };

  return (
    <>
      <DragAndDropCalendar
        defaultDate={new Date()}
        defaultView="week"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDropHandler}
        scrollToTime={new Date().getHours()}
        style={{ height: "100vh" }}
        // components={{
        //   event: eventComponent,
        // }}
        eventPropGetter={pastEventStyle}
      />
    </>
  );
};

export default CalendarComponent;
