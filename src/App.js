import React, { useState } from "react";
import List from "./components/List";
import SearchBox from "./components/SearchBox";

function App() {
  const [keyword, setKeyword] = useState("");
  const onSearch = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className=" flex items-center justify-center">
      <div className="p-4">
        <div className="flow-root ...">
          <div className="my-4 ...">
            <SearchBox keyword={keyword} onSearch={onSearch} />
          </div>
        </div>
        <div className="flow-root ...">
          <div className="my-4 ...">
            <List keyword={keyword} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
