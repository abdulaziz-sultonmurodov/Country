import React from 'react'

const Currency = ({countries, lastSegment}) => {
    return (
        <aside className="bg-blue-500 flex flex-col text-white font-bold py-6 my-2 rounded-lg">
            <section className="text-center text-xl tracking-widest flex flex-row px-4 justify-evenly">
                <div className="mx-1">Us = {countries[lastSegment - 1].currencyUs}</div>
                <div className="mx-1">Eu = {countries[lastSegment - 1].currencyEu}</div>
                <div className="mx-1">Ru = {countries[lastSegment - 1].currencyRu}</div>
            </section>
            <section className="text-4xl text-center mt-4">{countries[lastSegment - 1].currencyName} = 1</section>
            
        </aside>
    )
}

export default Currency
