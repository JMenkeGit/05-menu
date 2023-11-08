import React from 'react'

const Categories = ({ categories, filterMenuItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
