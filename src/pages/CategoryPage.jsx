import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { MealList } from '../components/MealList'

export const CategoryPage = () => {
    const { name } = useParams()
    const [meals, setMeals] = useState([])
    const { goBack } = useHistory()

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    }, [name])

    return (
        <>
            <button className='btn pulse blue-grey' onClick={goBack}>
                Назад
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    )
}