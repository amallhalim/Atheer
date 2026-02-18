import React from 'react'

export default function page() {
    return (
        <div className='bg-white h-lvh text-black'>

            <form action="/header" method="get" >
                <div className='flex flex-col'>
                    <label htmlFor="search">search</label>

                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoCapitalize="characters"
                        className="border border-gray-300 rounded p-2 ml-2 w-36 "
                    />
                </div>

                <label htmlFor="ice-cream-choice">Choose a pattern``:</label>

                <input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters"
                    className="border border-gray-700 rounded p-2 ml-2 w-36 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="ice-cream-choice">Choose a flavor:</label>
                <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

                <datalist id="ice-cream-flavors">
                    <option value="Chocolate"></option>
                    <option value="Coconut"></option>
                    <option value="Mint"></option>
                    <option value="Strawberry"></option>
                    <option value="Vanilla"></option>
                </datalist>


                <button type="submit" className='border-2 bg-amber-100'> search</button>

            </form>

        </div >
    )
}
