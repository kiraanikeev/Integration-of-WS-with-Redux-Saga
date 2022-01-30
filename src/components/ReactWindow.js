import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import throttle from "lodash/throttle";
import "../index.css";

function ReactWindow (props){
const itemsCount = props.logs.length;
let items = props.logs;
let requestCache = {};

const Row = ({ index, isScrolling, style }) => {
  const item = items[index];
  if (index + 1 >= itemsCount) return null;
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {isScrolling ? "Scrolling" : item.time}
    </div>
  );
};

const isItemLoaded = ({ index }) => !!items[index];

const loadMoreItems = (visibleStartIndex, visibleStopIndex) => {
  const key = [visibleStartIndex, visibleStopIndex].join(":"); 
  if (requestCache[key]) {
    return;
  }

  const length = visibleStopIndex - visibleStartIndex;

  const visibleRange = [...Array(length).keys()].map(
    x => x + visibleStartIndex
  );
  const itemsRetrieved = visibleRange.every(index => !!items[index]);
  if (itemsRetrieved) {
    requestCache[key] = key;
    return;
  }
};

const loadMoreItemsThrottled = throttle(loadMoreItems, 100);
return (
    <AutoSizer>
      {({width }) => (
        <InfiniteLoader 
          isItemLoaded={isItemLoaded}
          loadMoreItems={loadMoreItemsThrottled}
          itemCount={itemsCount}
        >
          {({ onItemsRendered, ref }) => (
            <List useIsScrolling
              className="List"
              height={500}
              itemCount={itemsCount}
              itemSize={35}
              width={width}
              ref={ref}
              onItemsRendered={onItemsRendered}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
          }

export default ReactWindow;



