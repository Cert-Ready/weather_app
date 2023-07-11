import { useState } from "react";
import "../css/index.css";
import "../css/App.css";
import "../css/normalize.css";
import NewLocation from "./pages/NewLocation";

function App() {
  const [locationData, SetLocationData] = useState({ location: "", newLocation: false });

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
      {!locationData.newLocation && (
        <NewLocation
          ToggleLocationSearch={ToggleLocationSearch}
          locationData={locationData}
          SetLocationData={SetLocationData}
        />
      )}

      {locationData.newLocation && <h2>Weather Data</h2>}
    </div>
  );
}

export default App;
