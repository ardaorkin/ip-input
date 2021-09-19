import React from "react";
import IpInput from "./IpInput";

const App = () => {
  const [ipInput, setIpInput] = React.useState("");

  return <IpInput setIpInput={setIpInput} />;
};

export default App;
