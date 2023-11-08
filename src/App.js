import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const uniqueCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(uniqueCategories)

  const filterMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
    } else {
      const newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems)
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
