import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const CourseItemDetails = () => {
  const {id} = useParams()
  const [courseDetails, setCourseDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(`https://apis.ccbp.in/te/courses/${id}`)
      .then(response => {
        setCourseDetails(response.data.course_details)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
      })
  }, [id])

  if (isLoading) {
    return <div className="loader" data-testid="loader" />
  }

  if (error) {
    return (
      <div className="failure-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <button type="button" onClick={useEffect}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="course-details">
      <img src={courseDetails.image_url} alt={courseDetails.name} />
      <p>{courseDetails.description}</p>
    </div>
  )
}

export default CourseItemDetails
