import React from 'react'

function pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [showPrev, setShowPrev] = React.useState(true)
  const [showNext, setShowNext] = React.useState(true)

  const pageNumbers = []
  for (let i = 1; i <= numberOfPages; i++) {
    if (Math.abs(currentPage - i) < 5) {
        pageNumbers.push(i)
    }
  }
  const nextPage = () => {
    if (currentPage !== numberOfPages)  setCurrentPage(currentPage + 1)
    setShowNext(currentPage+1 !== numberOfPages)
    setShowPrev(currentPage+1 !== 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
    setShowPrev(currentPage-1 !== 1)
    setShowNext(currentPage-1 !== numberOfPages)
  }


  return (
    <div>
      {showPrev && (<button onClick={prevPage}>prev </button>)}

      {
        pageNumbers.map(number => {
          return (<>
            <button onClick={() => {
                setCurrentPage(number)
                setShowPrev(number !== 1)
                setShowNext(number !== numberOfPages)
            } } className={(number==currentPage ? "selected" : "not")}>
              {number}
            </button>
          </>)
        })
      }

      {showNext && <button onClick={nextPage}>
        next
      </button>}
    </div>
  )
}

export default pagination