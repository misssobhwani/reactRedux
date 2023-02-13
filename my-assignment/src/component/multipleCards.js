import React from "react";
import ReactDOM from "react-dom";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";
import "./styles.css";

export default function MultipleCards() {
  const [items, setItems] = React.useState({
    left: [
      { position: 0, name: "Total-Trips" },
      { position: 1, name: "On-Time" },
      { position: 2, name: "Delayed" },
      { position: 3, name: "Missed" },
      { position: 4, name: "UnTracked" }
    ],
    // right: [
    //   { position: 5, name: "george" },
    //   { position: 6, name: "rupert" },
    //   { position: 7, name: "alice" },
    //   { position: 8, name: "katherine" },
    //   { position: 8, name: "pam" },
    //   { position: 10, name: "katie" }
    // ]
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    console.log(targetId, sourceId);
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1]
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="container">
        <GridDropZone
          className="dropzone left"
          id="left"
          boxesPerRow={3}
          rowHeight={150}
        >
          {items.left.map((item) => (
            <GridItem key={item.position}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name.toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MultipleCards />, rootElement);
