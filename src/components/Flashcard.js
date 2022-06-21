import React from 'react'

const Flashcard = ({data}) => {
  console.log(data);
  const {country} = data;
  console.log(country);
  return (
    <main className="min-h-screen bg-white font-sans text-gray-600 font-normal leading-normal flex flex-col justify-center items-center">
      <div className="flex flex-col  p-6">
        <div className="max-w-screen-lg flex flex-col items-start mb-5">
          <span className="text-2xl text-gray-800">Quest capital</span>
          <span className="text-xl text-gray-400">Question 1/4</span>
        </div>
        <div className="px-4 md:px-16  py-24 md:py-40 border rounded-lg bg-white border-gray-300 text-4xl text-gray-800 font-semibold  cursor-pointer mb-10">
          <p className="content-box-text  text-center">{country}</p>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="flex flex-row mb-6 md:mb-0">
            <button className="flex flex-col items-center justify-center text-gray-400 mr-16">
              <i className="mb-2 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </i>

              <span className="text-lg" >Previous</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-800 ">
              <i className="mb-2 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </i>
              <span className="text-lg" >Next</span>
            </button>
          </div>
          <div className="flex flex-row mb-6 md:mb-0">
            <button className="flex flex-col items-center justify-center text-gray-400 ml-9">
              <i className="mb-2 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </i>

              <span className="text-lg" >Edit</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400 ml-9">
              <i className="mb-2 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </i>
              <span className="text-lg" >Twitter</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400 ml-9">
              <i className="mb-2 text-3xl" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </i>
              <span className="text-lg" >More</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Flashcard;