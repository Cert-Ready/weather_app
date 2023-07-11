import { useState } from "react";
import "../css/index.css";
import "../css/App.css";
import "../css/normalize.css";
import "../css/Animation.css";
import NewLocation from "./pages/NewLocation";
import Weather from "./pages/Weather";

function App() {
  const [locationQuery, SetLocationData] = useState({ location: "", newLocation: true });

  const ToggleLocationSearch = () => {
    SetLocationData((prev) => {
      return {
        ...prev,
        newLocation: !prev.newLocation,
      };
    });
  };

  return (
    <div>
      {!locationQuery.newLocation && (
        <NewLocation
          ToggleLocationSearch={ToggleLocationSearch}
          locationData={locationQuery}
          SetLocationData={SetLocationData}
        />
      )}

      {locationQuery.newLocation && <Weather locationQuery={locationQuery.location} />}
    </div>
  );
}

export default App;
