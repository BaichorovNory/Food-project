import React from 'react'
import { Category } from './Category'

export const CategoryList = ({ catalog = [] }) => {
    return (
        <div className='list'>
            {catalog.map((el) => (
                <Category key={el.idCategory} {...el} />
            ))}
        </div>
    )
}