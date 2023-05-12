import React, { useEffect, useState } from "react";
import EventBoxApi from "../../api/evtApi";
import PostSample from "../../api/postSample";

import Item from "./Item";

export default function EventBox() {
  const [data, setData] = useState([]);
  const [reward, setReward] = useState({});

  useEffect(() => {
    EventBoxApi()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });

    PostSample()
      .then((result) => {
        setReward(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="evt-wrap">
      <div className="evt-bg">
        <ul>
          {data.map((item) => (
            <Item key={item.id} cont={item} reward={reward} />
          ))}
        </ul>
      </div>
    </div>
  );
}
