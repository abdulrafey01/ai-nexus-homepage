import axios from "axios";
import React, { useEffect } from "react";

export default function Test() {
  const [blob, setBlob] = React.useState(null);

  useEffect(() => {
    const myFunc = async () => {
      const response = await axios.get("http://127.0.0.1:5000/add-subtitles", {
        headers: {
          Accept: "video/mp4;charset=UTF-8",
        },
        responseType: "blob",
      });

      setBlob(URL.createObjectURL(response.data));
      console.log(response);
    };
    myFunc();
  }, []);

  return (
    <div>
      {blob && (
        <video controls width="50%" height="auto">
          <source src={blob} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
