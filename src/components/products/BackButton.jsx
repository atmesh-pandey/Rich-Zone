import React from 'react'

const BackButton = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-2 -mt-4">
                <button
                    onClick={() => window.history.back()}
                    className="bg-[color:#9BC936] hover:bg-[color:#85b02f] hover:scale-105 text-white font-semibold py-2 px-6 rounded text-center transition duration-300 flex items-center justify-center gap-1 text-sm"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>
        </div>
    )
}

export default BackButton