import React from 'react';

const VideoSection = () => {
    return (
        <div className="video-section">
            <video width="800" controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoSection;
