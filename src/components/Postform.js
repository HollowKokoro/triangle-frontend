import React from "react";
import { useState } from "react";

function PostForm(params) {
    const inputUrl = 'http://localhost:8080/input'
    const outputUrl = 'http://localhost:8080/output'

    const [inputData, setInputData] = useState({
        aSide: '',
        bSide: '',
        cSide: '',
        abAngle: '',
        acAngle: '',
        bcAngle: ''
    })

    const [outputData, setOutputData] = useState({
        area: '',
        perimeter: '',
        type: '',
        bisector: '',
        heights: '',
        areaOfInscribedCircle: '',
        areaOfCircumscribedCircle: '',
        sine: '',
        cosine: '',
        tangent: '',
        leg: '',
        hypotenuse: '',
        medians: ''
    })

    function submit(e) {
        e.preventDefault()
        fetch(inputUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    aSide: inputData.aSide,
                    bSide: inputData.bSide,
                    cSide: inputData.cSide,
                    abAngle: inputData.abAngle,
                    acAngle: inputData.acAngle,
                    bcAngle: inputData.bcAngle
                }
            )
        })
        fetch(outputUrl).then(res => {
            console.log(res);
        }).then(data => {
            setOutputData(data);
        })
    }

    function handleInput(e) {
        const newData = { ...inputData }
        newData[e.target.id] = e.target.value
        setInputData(newData)
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handleInput(e)} id="aSide" value={inputData.aSide} placeholder="Сторона A" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="bSide" value={inputData.bSide} placeholder="Сторона B" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="cSide" value={inputData.cSide} placeholder="Сторона C" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="abAngle" value={inputData.abAngle} placeholder="Угол AB" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="acAngle" value={inputData.acAngle} placeholder="Угол BC" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="bcAngle" value={inputData.bcAngle} placeholder="Угол AC" type="number"></input>
                <button>Расчитать</button>
            </form>

        </div>
    )
}

export default PostForm;