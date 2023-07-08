import React from 'react';

// TODO: set conditional: if the video is not available / fails to load display sth else

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDLWkvdzTe9hARN3phcISmg&maxResults=1&order=date&key=${process.env.REACT_APP_YT_API_KEY}`)
.then((result) => {
  return result.json();
}).then((data) => {
  const video = data.items[0].snippet;
  console.log(video);
});

const Preview = () => {


  
  return (
    <>
    {/* <div>
        VIDEO
    </div> */}
    <div className='preview'>
      <img
        src={video.thumbnails.default}
      />
    </div>
    </>
  )
}

export default Preview;