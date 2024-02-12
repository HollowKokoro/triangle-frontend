import React from "react";
import { useState } from "react";
import Axios from "axios";

function PostForm(params) {
    const url = 'http://localhost:8080/input'
    const [data, setData] = useState({
        aSide: '',
        bSide: '',
        cSide: '',
        abAngle: '',
        acAngle: '',
        bcAngle: ''
    })

    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            aSide: data.aSide,
            bSide: data.bSide,
            cSide: data.cSide,
            abAngle: data.abAngle,
            acAngle: data.acAngle,
            bcAngle: data.bcAngle
        }).then(res => {
            console.log(res.data);
        })
    }

    function handleInput(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handleInput(e)} id="aSide" value={data.aSide} placeholder="Сторона A" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="bSide" value={data.bSide} placeholder="Сторона B" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="cSide" value={data.cSide} placeholder="Сторона C" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="abAngle" value={data.abAngle} placeholder="Угол AB" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="acAngle" value={data.acAngle} placeholder="Угол BC" type="number"></input>
                <input onChange={(e) => handleInput(e)} id="bcAngle" value={data.bcAngle} placeholder="Угол AC" type="number"></input>
                <button>Расчитать</button>
            </form>
        </div>
    )
}

export default PostForm;