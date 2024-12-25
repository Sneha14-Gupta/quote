import React from 'react'
import SingleQuotes from './SingleQuotes'

function ListQuotes({ quotes, handleDelete, onLike, onDislike }) {
    return (
        <div className='flex flex-col gap-4 '>
            {
                quotes.map((quote, index) => {
                    return <SingleQuotes key={quote.id} quote={quote} handleDelete={handleDelete} onLike={onLike} onDislike={onDislike} />
                })
            }
        </div>
    )
}

export default ListQuotes