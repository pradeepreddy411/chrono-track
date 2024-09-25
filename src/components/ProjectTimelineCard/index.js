// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <>
      <img src={imageUrl} alt="project" className="image" />
      <div className="heading-container">
        <h1 className="title-heading">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar color=" #171f46" className="icon" />
          <p className="icon-heading">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>
      <a href={projectUrl} className="project-line">
        Visit
      </a>
    </>
  )
}
export default ProjectTimelineCard
