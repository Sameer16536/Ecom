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
        <div>
            <h2>Recommended Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {recommendations.map((product) => (
                    <div className='border p-4 rounded-lg' key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Rs.{product.price}</p>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Recommendations