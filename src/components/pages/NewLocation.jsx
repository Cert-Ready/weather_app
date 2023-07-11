import { SetTitle } from "../modules/SetTitle";
import SearchSVG from "../../assets/icon/search.svg";
import { useState } from "react";

function NewLocation(props) {
  const { ToggleLocationSearch, locationData, SetLocationData } = props;
  const [errorMsg, SetErrorMsg] = useState("");

  SetTitle("Weather - Search");

  const ValidateInput = (e) => {
    const { name, value } = e.target;

    if (value.match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g)) {
      SetErrorMsg("Please search by city or zip code");
      return;
    } else {
      SetErrorMsg("");
    }

    SetLocationData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="jello">
      <a
        href="https://www.weatherapi.com/"
        title="Free Weather API"
        className="api-icon"
      >
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          className="api-img"
        />
      </a>
      <label
        htmlFor="txt-search"
        className="city-search grid"
      >
        <input
          type="text"
          name="location"
          id="txt-search"
          placeholder="Search location..."
          onChange={ValidateInput}
          value={locationData.location}
        />
        <img
          src={SearchSVG}
          alt="search-icon"
          className="btn-search buttonV01 iconV01 iconV02"
        />
        <p className={errorMsg ? "alert error-msg" : ""}>{errorMsg}</p>
      </label>
    </div>
  );
}

export default NewLocation;
