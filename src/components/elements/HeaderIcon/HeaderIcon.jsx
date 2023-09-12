import IconMapPin from "../../icons/MapPin";
import IconClock from "../../icons/Clock";
import IconMicrophone from "../../icons/Microphone";
import IconCalendar from "../../icons/Calendar";
import IconStopwatch from "../../icons/Stopwatch";
import IconPublic from "../../icons/Public";
import IconFormation from "../../icons/Formation";

function renderIcon(icon) {
  const iconWidth = 16;
  const icons = {
    mapPin: <IconMapPin width={iconWidth} />,
    clock: <IconClock width={iconWidth} />,
    talk: <IconMicrophone width={iconWidth} />,
    calendar: <IconCalendar width={iconWidth} />,
    stopwatch: <IconStopwatch width={iconWidth} />,
    public: <IconPublic width={iconWidth} />,
    formation: <IconFormation width={iconWidth} />,
  };
  return icons[icon] || icons.mapPin;
}

function HeaderIcon(props) {
  return (
    <div className={`flex items-center ${props.className}`}>
      {renderIcon(props.icon)}
      <span className="ml-1 capitalize">{props.text}</span>
    </div>
  );
}

export default HeaderIcon;
