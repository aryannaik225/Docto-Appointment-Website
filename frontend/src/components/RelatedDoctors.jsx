import { useContext , useState} from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = () => {
  
  const {doctors} = useContext(AppContext)
  
  const [relDoc, setRelDoc] = useState([])

  return (
    <div>RelatedDoctors</div>
  )
}

export default RelatedDoctors