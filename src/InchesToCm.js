import React, { useState } from 'react'

const InchesToCm = () => {
    const [inches, setInches] = useState(0)
    const [feet, setFeet] = useState(0)
    const [cm, setCm] = useState(0)
    const feetChange = (e) => {
        setFeet(e.target.value)
        setCm(((e.target.value * 30.48) + inches * 2.54).toFixed(2))
    }
    const inchesChange = (e) => {
        setInches((e.target.value))
        setCm(((e.target.value * 2.54) + feet * 30.48).toFixed(2))
    }
    const cmChange = (e) => {
        const length = e.target.value / 2.54
        const feetTemp = (Math.floor(length / 12))
        setCm(e.target.value)
        setFeet(feetTemp)
        setInches((length - feetTemp * 12).toFixed(2))
    }
    return (
        <div>
            <h2>CM {'<->'} Feet - Inches Converter</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="feet">
                                Feet
                            </label>
                        </td>
                        <td>
                            <input id="feet" onChange={feetChange} value={feet} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="inches">
                            inches
                        </label></td>
                        <td>
                        <input id="inches" onChange={inchesChange} value={inches} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="Cms">
                            cm
                        </label>
                        </td>
                        <td>
                        <input id="Cms" onChange={cmChange} value={cm} />
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <h3>{feet} Feet {inches} inches = {cm} cm</h3>
                </div>
                )
}

                export default InchesToCm
