// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <div className="heading-container">
        <h1 className="title-heading">{courseTitle}</h1>
        <div className="icon-duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description"> {description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="item-list">
            {eachTag.name}
          </li>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
