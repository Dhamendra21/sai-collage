import React from 'react'
import Heading from './Heading'
import Images from './Images'

function Campus() {
  return (
    <section className='w-full'>
        <Heading/>
        <div className='px-20 max-sm:px-5'>
        <h1 className="text-7xl max-sm:text-3xl font-['inter'] font-semibold w-4/5 tracking-tight   z-50">Explore our labs, classrooms & campus </h1>
        <Images/>
        <button className='px-10 py-3 bg-zinc-900 text-lg text-white rounded-md'>View More </button>
        </div>
    </section>
  )
}

export default Campus