export default function SliderItem() {

  const sliderItemStyle = {
    backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  return (
    <div className="slider-item" style={sliderItemStyle}></div>
  )
}