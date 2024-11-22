import React from "react";
import MyVideo from "../../assets/sampleVid.mp4";
import MyVtt from "../../assets/MIB2-subtitles-pt-BR.vtt";
// import MyVtt from "../../components/Tools/eng.vtt";
import { WebVTTParser } from "webvtt-parser";

import axios from "axios";
import Spinner from "../Common/Spinner";
export default function VideoSubtitle() {
  const [video, setVideo] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [vtt, setVtt] = React.useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
      setVideo(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", video);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:5000/add-subtitles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setVtt(formatVtt(response.data.vtt));
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert(error);
      setLoading(false);
    }
  };
  const formatVtt = (vttText) => {
    // Step 1: Trim any unwanted spaces or extra newlines
    vttText = vttText.trim();

    // Step 2: Ensure the "WEBVTT" header is present at the beginning
    if (!vttText.startsWith("WEBVTT")) {
      vttText = "WEBVTT\n\n" + vttText;
    }

    // Step 3: Replace commas with periods in timestamps and fix timestamp format
    vttText = vttText.replace(
      /(\d{2}):(\d{2}):(\d{2}),(\d{3})/g,
      "$1:$2:$3.$4"
    ); // Comma to period for milliseconds

    // Step 4: Normalize timestamps and remove extra empty lines
    vttText = vttText
      .replace(/\r?\n/g, "\n") // Normalize line breaks
      .replace(/\n\s*\n/g, "\n"); // Remove extra newlines

    // Step 5: Split text by timestamp to add sequential numbering to each subtitle
    const lines = vttText.split("\n");
    let formattedVtt = "WEBVTT\n\n";
    let subtitleIndex = 1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/)) {
        // If it's a timestamp, add the index number before it
        formattedVtt += `${subtitleIndex}\n${line}\n`;
        subtitleIndex++;
      } else if (line.length > 0) {
        // If it's subtitle text, append it to the formattedVtt
        formattedVtt += `${line}\n\n`;
      }
    }
    console.log(formattedVtt.trim());
    return formattedVtt.trim();
  };
  // Create a Blob URL for the VTT file
  const createVttBlobUrl = (vttText) => {
    const blob = new Blob([vttText], { type: "text/vtt" });
    return URL.createObjectURL(blob);
  };
  return (
    <div className="min-h-screen flex justify-center  items-center">
      {video ? (
        <div className="flex flex-col justify-center items-center gap-4">
          {vtt ? (
            <video controls width="50%" height="auto">
              <source src={videoUrl} type="video/mp4" />
              <track
                src={createVttBlobUrl(vtt)} // Dynamically generate VTT URL
                kind="subtitles"
                label="English"
                default
              />
            </video>
          ) : (
            <video controls width="50%" height="auto">
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          <button
            onClick={onSubmit}
            className="rounded-full bg-[#f56565] hover:bg-[#ec3b3b] transition-colors text-white p-4 font-semibold text-xl w-40 shadow-2xl flex justify-center items-center"
          >
            {loading ? <Spinner /> : "Add Subtitle"}
          </button>
        </div>
      ) : (
        <div>
          <label
            htmlFor="video"
            className="flex flex-col justify-center items-center border-2 border-dashed border-gray-300 w-64 h-48 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            Upload Video
          </label>
          <input
            id="video"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
}
