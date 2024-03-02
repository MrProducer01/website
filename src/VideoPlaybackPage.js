import React from 'react';

const VideoPlaybackPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        {/* YouTube video embed */}
        <iframe
          title="YouTube Video Player"
          width="800"
          height="450"
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // Aspect ratio: 16:9
    width: '80%',
  },
};

export default VideoPlaybackPage;
