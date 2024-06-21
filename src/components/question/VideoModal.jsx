// VideoModal.js
import React from "react";
import ReactDOM from "react-dom";
import "../../styles/components/question/VideoModal.css";
const VideoModal = ({ isOpen, close, videoUrl }) => {
  let width = window.innerWidth * 0.75;
  let height = window.innerHeight * 0.5;
  if (!isOpen) return null;
  const getEmbedUrl = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return ReactDOM.createPortal(
    <>
      <div className="backdrop" onClick={close} />
      <div className="modal">
        <iframe
          width={width}
          height={height}
          src={getEmbedUrl(videoUrl)}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <button className="close-button" onClick={close}>
          Close
        </button>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default VideoModal;
