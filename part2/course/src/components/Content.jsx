import Part from "./Part"

const Content = (props) => {
  return (
    <div>
      <Part part={props.name} exercises={props.exercises}></Part>
    </div>
  )
}
  
export default Content