export default function SliderImage(props) {

  const imageStyle = {
    backgroundImage: `url(${props.imageUrl})`
  }


  return (
    <div class="slider-img" style={imageStyle}></div>
  )
}