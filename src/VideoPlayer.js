import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.videoPlayer}>
        {/* Video Player Component */}
        <iframe
          title="YouTube Video Player"
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/VIDEO_ID"
          allowFullScreen
        ></iframe>
      </div>
      <div style={styles.sidebar}>
        {/* Recommended Videos Component */}
        <div style={styles.recommendedVideos}>
          <h2>Recommended Videos</h2>
          {/* Map through recommended videos and display */}
          {/* Example:
          recommendedVideos.map(video => (
            <div key={video.id}>
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </div>
          )) */}
        </div>
        {/* Channel Info Component */}
        <div style={styles.channelInfo}>
          <h2>Channel Info</h2>
          {/* Display channel information */}
        </div>
        {/* Comments Section Component */}
        <div style={styles.commentsSection}>
          <h2>Comments</h2>
          {/* Display comments */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
  },
  videoPlayer: {
    width: '70%',
    marginRight: '20px',
  },
  sidebar: {
    width: '30%',
  },
  recommendedVideos: {
    marginBottom: '20px',
  },
  channelInfo: {
    marginBottom: '20px',
  },
  commentsSection: {
    marginBottom: '20px',
  },
};

export default VideoPlayer;
