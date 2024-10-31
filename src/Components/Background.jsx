

const Background = () => {
    return (
      <div className="background-container">
      <video autoPlay loop muted className="background-video">
          <source src="assets/video/Aibgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className="content">
          {/* Add other content here */}
      </div>    
  </div>
    )
  }
  
  export default Background
  