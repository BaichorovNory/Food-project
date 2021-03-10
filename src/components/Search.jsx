import React from 'react'
import { useState } from 'react'

export const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div className='row'>
            <div>
                <input
                    type='search'
                    id='search-field'
                    placeholder='Поиск'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button onClick={handleSubmit} className='btn pulse blue-grey'>
                    Искать
                </button>
            </div>
        </div>
    )
}