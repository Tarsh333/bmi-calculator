import React, { useEffect, useState } from 'react'
import KgToPound from './KgToPound'
import InchesToCm from './InchesToCm'
const App = () => {
  const [type, setType] = useState("Metric")
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)
  const [bmi, setBmi] = useState(0)
  let bg;
  if (bmi < 18.5) {
    bg = "#FEB132"
  }
  else if (bmi >= 18.5 && bmi < 25) {
    bg = "#30A232"
  }
  else if (bmi >= 25 && bmi < 30) {
    bg = "#E96024"
  }
  else {
    bg = "#C0101B"
  }
  useEffect(() => {
    if (type === "Metric") {
      setBmi((input1 / (input2 * input2 / 10000)).toFixed(2))
    }
    else {
      const heightInch = (input2 * 12) + parseInt(input3)
      setBmi((703 * input1 / (heightInch * heightInch)).toFixed(2))
    }
  }, [input1, input2, input3])
  useEffect(() => {
    setInput1(0)
    setInput2(0)
    setInput3(0)
    setBmi(0)
  }, [type])
  useEffect(() => {
    setBmi(0)
  }, [type])
  return (
    <>
      <h1 className="heading">BMI Calculator</h1>
      <div className="bmi">
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="select">
                Units
              </label></td>
              <td><select id="select" value={type} onChange={(e) => { setType(e.target.value) }}>
                <option value="Metric">Metric</option>
                <option value="Standard">Standard</option>
              </select></td>
              <td></td>
            </tr>

            {
              type === "Metric" ?
                <>
                  <tr>
                    <td>
                      <label htmlFor="weight">
                        Weight
                      </label>
                    </td>
                    <td>
                      <input id="weight" value={input1} onChange={(e) => { setInput1(e.target.value) }} />
                    </td>
                    <td>kgs</td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="height">
                        Height
                      </label>
                    </td>
                    <td>
                      <input id="height" value={input2} onChange={(e) => { setInput2(e.target.value) }} />
                    </td>
                    <td>cm</td>
                  </tr>
                </>
                :
                <>
                  <tr>
                    <td>
                      <label htmlFor="weight">
                        Weight
                      </label>
                    </td>
                    <td>
                      <input id="weight" value={input1} onChange={(e) => { setInput1(e.target.value) }} />
                    </td>
                    <td>
                      Pounds
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="height">
                        Height
                      </label>
                    </td>
                    <td>
                      <input id="height" value={input2} onChange={(e) => { setInput2(e.target.value) }} />
                    </td>
                    <td>
                      Feet
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <input id="height" value={input3} onChange={(e) => { setInput3(e.target.value) }} /></td>
                    <td> Inches</td>
                  </tr>
                </>
            }
          </tbody>
        </table>
      </div>
      <div className="bmi-answer">
        <div className="your-bmi">Your BMI:</div>
        <div className="actual-bmi" style={{ backgroundColor: bg }}>{bmi}</div>
      </div>
      <div className="bmi-table">
        <div className="yellow">Underweight<br /> {'< '}18.5 </div>
        <div className="green">Normal Weight<br /> 18.5 - 25</div>
        <div className="orange">Overweight<br /> 25 - 30</div>
        <div className="red">Obese<br />{'> '}30</div>
      </div>
      <div className="converters">
        <KgToPound />
        <InchesToCm />
      </div>
    </>
  )
}

export default App
