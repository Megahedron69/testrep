import React from "react";

export default function History() {
  const [items, setItems] = React.useState([]);
  const handledata = () => {
    localStorage.getItem(key);
  };
  return (
    <div>
      <div className="homehead">
        <h1>HISTORY</h1>
      </div>
      <div>
        {items.map((item) => {
          return (
            <div>
              <p>item</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
