import IconClock from '../../icons/Clock';

function Duration({duration}) {
  return (<div className="flex flex-col items-center">
    <IconClock width={30} title={'Durée'} />
    {duration}
  </div>);
}

export default Duration;
