import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { Mycontext } from '../Context/context'
import { Button, Alert } from 'react-bootstrap'



const Calculator = () => {

    let thisState = useContext(Mycontext)

    const [state, setState] = useState(thisState)
    const data = useContext(Mycontext).data
    const input = useRef();

    const sizeHandler = (state, data) => //This function handles size validation
    {

        let sectionType = state.sectionState
        let sizeArray

        data.map((item) => {

            if (item.type == sectionType) {
                sizeArray = Object.keys(item.size)
            }

        })

        return sizeArray

    }
    let funcOutput = sizeHandler(state, data)


    const sizeValue = (data, state, input) => {
    let outputVal
        data.map((section) => {
            if (state.sectionState == section.type) {
              
                    let inputVal = input.current.value

                    let sizeVal = section.size[state.sizeToggle];
                    outputVal = (inputVal / 1000) * sizeVal;
        
            }})

            if (outputVal >= 0 && outputVal !== undefined)
            {
                return outputVal  
            }
    }


    return (
        <div className='calc'>
            <h4>Enter value, select section and click on calculate.
                Result will be displayed.</h4>


            <div className='Section'>
                <label htmlFor="section">Section-type :</label>
                <select onChange={(e) => (setState({ ...state, sectionState: e.target.value }))} name="section" >

                    {data.map((item) => {
                        return <option key={item.id} value={item.type}>{item.type}</option>
                    })
                    }
                </select>

            </div>


            <div className='SectionSize'>
                <label htmlFor="section">Section-size (d) :</label>
                <select name="section" onChange={(e) => { setState({ ...state, sizeToggle: e.target.value }) }} >

                    {
                        state.sectionState !== "" ? funcOutput.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        }) : <option value="Select Size">Select Size</option>
                    }
                </select>


            </div>

            <div className='lengthDiv'>
                <label htmlFor="length">Length :</label>
                <input type="text" name="length" ref={input}
                    placeholder='Please enter length' />
                <span> In MM</span>
            </div>
            <Button className='Button' variant="primary" onClick={(e) => {setState({ ...state, weight:(sizeValue(data, state, input))})}}>
            Click to Calculate</Button>

            <div className='wtdiv'>
                    {state.weight==undefined? <Alert variant="warning"> Please Provide valid Inputs</Alert> 
               : <h2>{state.weight.toPrecision(2)} KG PER METER</h2>}

            </div>
        </div>

    )
}

export default Calculator