import React from "react";
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className="container mt-5">
      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 p-5">
          <img src={imageURL} style={{width:"100%"}} />
        </div>
        <div className="col-6 p-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
            </a>
            <a href={learnMore}  style={{marginLeft:"50px", textDecoration: "none"}} >
              Learn More
            </a>
            </div>
            <div className="mt-3">
            <a href={googlePlay} >
              <img src="media/googleplayBadge.svg"  />
            </a>
            <a href={appStore} style={{marginLeft:"50px"}} >
              <img src="media/appstoreBadge.svg"  />
            </a>
          </div>
        </div>
      </div>
  
    </div>
  );
}
export default LeftSection;