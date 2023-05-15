import React, { useEffect, useState } from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import { usePopupContext } from "../../context/PopupContext";

export default function EventBox() {
  const { msgTxt } = useLanguageContext(); //다국어 컨텍스트 호출
  const { openPopup } = usePopupContext(); //팝업 컨텍스트 호출

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3001/evtData`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Mock API를 통해 success 응답을 받는 로직
  const handleButtonClick = (item) => {
    fetch(`http://localhost:3001/evtData/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify({ complete: true }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Success response:", result);

        // 응답을 받은 후에 데이터를 업데이트 하여 리스트를 다시 렌더링
        setData((prev) => {
          return prev.map((prevItem) => (prevItem.id === result.id ? { ...prevItem, complete: true } : prevItem));
        });

        openPopup("popAlert", msgTxt[1], result.reward); //팝업 오픈
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="evt-wrap">
      <div className="evt-bg">
        <ul>
          {data.map((item) => (
            <li key={item.id} className={item.complete === true ? "complete" : ""}>
              <p>{item.title}</p>
              <button onClick={() => handleButtonClick(item)}>받기</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
