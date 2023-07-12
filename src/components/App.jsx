import { useState } from "react";
import "../css/index.css";
import "../css/App.css";
import "../css/normalize.css";
import "../css/Animation.css";
import NewLocation from "./pages/NewLocation";
import Home from "./pages/Home";

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

  return (
    <>
      {!locationQuery.newLocation && (
        <NewLocation
          ToggleLocationSearch={ToggleLocationSearch}
          locationData={locationQuery}
          SetLocationData={SetLocationData}
        />
      )}

      {locationQuery.newLocation && <Home locationQuery={locationQuery.location} />}
    </>
  );
}

export default App;
