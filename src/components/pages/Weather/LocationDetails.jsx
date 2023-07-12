import Location from "./Location";
import Current from "./Current";

function LocationDetails(props) {
  const { location, current } = props;

  return (
    <div className="current-location grid pri-padding">
      <Location
        location={location}
        current={current}
      />

      <Current current={current} />
    </div>
  );
}

export default LocationDetails;
s;
