import logo from "./logo.svg";
import React from "react";
import "./App.css";

function IpInput() {
  const [blocks, setBlocks] = React.useState({
    "block-1": "",
    "block-2": "",
    "block-3": "",
    "block-4": "",
  });
  const [ipInput, setIpInput] = React.useState("");
  const [focusedInput, setFocusedInput] = React.useState(1);

  React.useEffect(() => {
    document.getElementById(`block-${focusedInput}`).focus();
  }, [focusedInput]);

  React.useEffect(() => {
    const blockArr = [];

    if (blocks[`block-${focusedInput}`]?.length === 3 && focusedInput < 4) {
      setFocusedInput(focusedInput + 1);
    }

    Object.keys(blocks).map((key) => {
      blockArr.push(blocks[key]);
    });
    if (blockArr.length > 0) {
      setIpInput(blockArr.join("."));
    }
  }, [blocks]);

  const handleChange = (event) => {
    if (
      parseInt(event.target.value.split("")[0]) === 0 &&
      event.target.value.length > 1
    ) {
      return;
    } else if (
      (event.target.value >= 0 && event.target.value < 256) ||
      event.target.value === ""
    ) {
      setBlocks({ ...blocks, [event.target.name]: event.target.value });
    }
  };

  const handleClick = (event) =>
    setFocusedInput(parseInt(event.target.name.split("-")[1]));

  const handleClear = () => {
    setBlocks({
      "block-1": "",
      "block-2": "",
      "block-3": "",
      "block-4": "",
    });
    setIpInput("");
    setFocusedInput(1);
  };

  const handleKeyEvents = (event) => {
    if (event.charCode === 13 || event.charCode === 32) {
      if (focusedInput < 4) {
        setFocusedInput(focusedInput + 1);
      } else {
        setFocusedInput(1);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="ip-wrapper"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            onKeyPress={handleKeyEvents}
            onKeyDown={handleKeyEvents}
            maxLength={3}
            type="number"
            className="ip-input"
            name="block-1"
            id="block-1"
            onChange={handleChange}
            onClick={handleClick}
            value={blocks["block-1"]}
          />
          <p style={{ fontSize: 24, color: "black", margin: 0 }}>.</p>
          <input
            onKeyPress={handleKeyEvents}
            onKeyDown={handleKeyEvents}
            maxLength={3}
            type="number"
            className="ip-input"
            name="block-2"
            id="block-2"
            onChange={handleChange}
            onClick={handleClick}
            value={blocks["block-2"]}
          />
          <p style={{ fontSize: 24, color: "black", margin: 0 }}>.</p>
          <input
            onKeyPress={handleKeyEvents}
            onKeyDown={handleKeyEvents}
            maxLength={3}
            type="number"
            className="ip-input"
            name="block-3"
            id="block-3"
            onChange={handleChange}
            onClick={handleClick}
            value={blocks["block-3"]}
          />
          <p style={{ fontSize: 24, color: "black", margin: 0 }}>.</p>
          <input
            onKeyPress={handleKeyEvents}
            onKeyDown={handleKeyEvents}
            maxLength={3}
            type="number"
            className="ip-input"
            name="block-4"
            id="block-4"
            onChange={handleChange}
            onClick={handleClick}
            value={blocks["block-4"]}
          />
        </div>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </header>
    </div>
  );
}

export default IpInput;
