import React from 'react';

const YT_REQUEST = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDLWkvdzTe9hARN3phcISmg&maxResults=1&order=date&key=${process.env.YT_API_KEY}`;

const Preview = () => {
  return (
    <div className='preview'>
        VIDEO
    </div>
  )
}

export default Preview;