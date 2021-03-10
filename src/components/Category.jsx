import React from 'react'
import { Link } from 'react-router-dom'


export const Category = (props) => {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props

    return (
        <div className='card blue lighten-3'>
            <div className='card-image'>
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn blue-grey'>
                    Выбрать категорию
                </Link>
            </div>
        </div>
    )
}