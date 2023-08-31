import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://apis.ccbp.in/te/courses')
      .then(response => {
        setCourses(response.data.courses)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
      })
  }, [])

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
    <div className="courses">
      {courses.map(course => (
        <Link key={course.id} to={`/courses/${course.id}`}>
          <img src={course.logo_url} alt={course.name} />
        </Link>
      ))}
    </div>
  )
}

export default Home
