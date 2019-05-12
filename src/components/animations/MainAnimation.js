import React from "react"
import illustration from "../../images/disegno.svg"
import caption from "../../images/meme_caption.svg"

const MainAnimation = () => (
  <div className="meme-div">
    <img className="slide-in-top inline" src={illustration} alt="maria" />
    <img className="slide-in-top-2 inline" src={caption} alt="meme" />
  </div>
)

export default MainAnimation
