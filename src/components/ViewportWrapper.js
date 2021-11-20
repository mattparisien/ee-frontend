import Section from "./Section";

export default function ViewportWrapper(props) {
  return (
    <>
      {props.sections ? console.log(props.sections) : ""}
    </>
  )
}