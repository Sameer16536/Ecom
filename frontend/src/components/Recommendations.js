import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([])

    useEffect(() => {
        //fetch recommendations::
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get('http://localhost:3000/recommendations', { withCredentials: true })
                setRecommendations(response.data)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchRecommendations()
    }, [])

    return (
        <div>Recommendations</div>
    )
}

export default Recommendations