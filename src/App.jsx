import { useState } from "react";
import "./App.css";

import Details from "./component/Details";
import PinInput from "./component/PinInput";

function App() {
  const [searchParam, setSearchParam] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [response, setResponse] = useState(null);
  const [loader, setLoader] = useState(false);

  return (
    <div className="App">
      {!isFetch ? (
        <PinInput
          setIsFetch={setIsFetch}
          setSearchParam={setSearchParam}
          setResponse={setResponse}
          setLoader={setLoader}
        />
      ) : (
        <Details searchParam={searchParam} response={response} />
      )}

      {loader && (
        <center>
          <div className="loader"></div>
        </center>
      )}
    </div>
  );
}

export default App;
