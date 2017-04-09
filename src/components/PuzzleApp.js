import React from 'react'

const PuzzleApp = ({ operation, onChangeOperation }) => {
    const isCorrect = operation === 'divide'

    return (
        <div className="container">
            <div className="inner">
                <div className="box">
                    <h1 className="heading">Make and Magic in Wonderland!</h1>

                    <div className="ta-center">
                        <span>10</span>
                        <div className="select">
                            <select value={operation} onChange={e => onChangeOperation(e.target.value)}>
                                <option value="">?</option>
                                <option value="add">+</option>
                                <option value="subtract">-</option>
                                <option value="multiply">*</option>
                                <option value="divide">÷</option>
                            </select>
                        </div>
                        <span>2 = 5</span>
                    </div>

                    {isCorrect && <span className="response" style={{color: '#13CE66' }}>{'\u2714'}</span>}
                    {operation && !isCorrect && <span className="response" style={{color: '#FF4949' }}>{'\u2718'}</span>}
                </div>
            </div>
        </div>
    )
}

export default PuzzleApp
