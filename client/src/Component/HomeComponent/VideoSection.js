import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff, faVolumeUp, faExpand } from "@fortawesome/free-solid-svg-icons";

const VideoSection = () => {
  const [player, setPlayer] = useState(null);
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (player) {
              player.playVideo();
            }
          } else {
            if (player) {
              player.pauseVideo();
            }
          }
        });
      },
      { threshold: 0.5 } // Change the threshold as needed
    );

    observer.observe(videoContainerRef.current);

    // Clean up
    return () => {
      observer.unobserve(videoContainerRef.current);
    };
  }, [player]);

  useEffect(() => {
    // Load YouTube iframe API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define onYouTubeIframeAPIReady callback function
    window.onYouTubeIframeAPIReady = () => {
      // Initialize YouTube player
      const ytPlayer = new window.YT.Player(playerRef.current, {
        height: "460",
        width: "1240",
        playerVars: {
          listType: "playlist",
          list: "PL5Wn1OG9CtWNW3wr_y3j0ileqyjFLlgIX", // Replace PLAYLIST_ID with the ID of your YouTube playlist
          loop: 1, // Enable loop
          mute: 1, // Mute by default
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            // If the video has ended, play the next video
            if (event.data === window.YT.PlayerState.ENDED) {
              player.nextVideo();
            }
          },
        },
      });
    };

    // Clean up
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const handleMuteToggle = () => {
    if (player) {
      const isMuted = player.isMuted();
      player.mute(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (player) {
      const iframe = player.getIframe();
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        /* Firefox */
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        /* IE/Edge */
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container-fluidvid" ref={videoContainerRef}>
      <div ref={playerRef}></div>
      <div className="overlay_video">
      </div>
    </div>
  );
};

export default VideoSection;


// import React, { useState, useEffect, useRef } from "react";

// const VideoSection = () => {
//   const [livestreamId, setLivestreamId] = useState(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make a request to YouTube Data API to get the details of the livestream
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&type=video&eventType=live&part=snippet&q=YOUR_SEARCH_QUERY`
//         );
//         const data = await response.json();

//         // Extract the ID of the livestream
//         const livestreamId = data.items[0]?.id.videoId;
//         if (livestreamId) {
//           setLivestreamId(livestreamId);
//         }
//       } catch (error) {
//         console.error("Error fetching livestream data:", error);
//       }
//     };

//     // Fetch livestream data periodically
//     const interval = setInterval(fetchData, 60000); // Poll every 1 minute

//     // Clean up
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (livestreamId) {
//       // If livestream ID is available, create YouTube player
//       const player = new window.YT.Player(playerRef.current, {
//         height: "460",
//         width: "1240",
//         videoId: livestreamId,
//         events: {
//           onReady: (event) => {
//             event.target.playVideo(); // Auto-play the livestream
//           },
//         },
//       });
//     }
//   }, [livestreamId]);

//   return (
//     <div className="container-fluidvid">
//       <div ref={playerRef}></div>
//       <div className="overlay_video"></div>
//     </div>
//   );
// };

// export default VideoSection;
