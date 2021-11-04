import React, { useState } from 'react'

const KgToPound = () => {
    const [kg, setKg] = useState(0)
    const [pound, setPound] = useState(0)
    const kgChange = (e) => {
        setKg(e.target.value)
        setPound((e.target.value / 0.45359237).toFixed(2))
    }
    const poundChange = (e) => {
        setPound(e.target.value)
        setKg((e.target.value * 0.45359237).toFixed(2))
    }
    return (
        <div>
            <h2>KG {'<->'} Pound Converter</h2>
            <table>
                <tbody>
            <tr>
                <td>
                <label htmlFor="kg">
                    Kg
                </label>
                </td>
                <td>
                <input id="kg" onChange={kgChange} value={kg} />
                </td>
            </tr> <tr>
                <td>
                <label htmlFor="pounds">
                    Pounds
                </label>
                </td>
                <td>
                <input id="pounds" onChange={poundChange} value={pound} />
                </td>
            </tr>
            </tbody>
            </table>
            <h3>{kg} Kgs = {pound} Pounds</h3>
        </div>
    )
}

export default KgToPound
