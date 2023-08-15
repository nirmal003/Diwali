import React from "react";

function Preview({ url }) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
      <object data={url} />
    </div>
  );
}

export default Preview;
