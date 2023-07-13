import { useState } from "react";
import "../css/index.css";
import "../css/App.css";
import "../css/normalize.css";
import "../css/Animation.css";
import Load from "./Search/Load";
import NewLocation from "./Search/NewLocation";

function App() {
  const [locationQuery, SetLocationData] = useState({ location: "", newLocation: false });

  const ToggleLocationSearch = () => {
    SetLocationData((prev) => {
      return {
        ...prev,
        newLocation: !prev.newLocation,
      };
    });
  };

  const NewSearch = () => {
    SetLocationData({
      location: "",
      newLocation: false,
    });
  };

  return (
    <div className="jello">
      {!locationQuery.newLocation && (
        <NewLocation
          ToggleLocationSearch={ToggleLocationSearch}
          locationData={locationQuery}
          SetLocationData={SetLocationData}
        />
      )}

      {locationQuery.newLocation && (
        <Load
          locationQuery={locationQuery.location}
          NewSearch={NewSearch}
        />
      )}
    </div>
  );
}

export default App;
