import React, { useState } from 'react'
import useInput from '../hook/useInput'


const DataContext = React.createContext()

function ContextProvider(props) {

    const [height, setHeight] = useInput('')
    const [weight, setWeight] = useInput('')
    const [calorieHeight, setCalorieHeight] = useInput('')
    const [calorieWeight, setCalorieWeight] = useInput('')
    const [calorieAge, setCalorieAge] = useInput('')
    const [calorieGender, setCalorieGender] = useState('male')
    const [calorieActivity, setCalorieActivity] = useInput('')
    


    return (
        <DataContext.Provider value={{
            height,
            setHeight,
            weight,
            setWeight,
            calorieHeight,
            setCalorieHeight,
            calorieWeight,
            setCalorieWeight,
            calorieAge,
            setCalorieAge,
            calorieGender,
            setCalorieGender,
            calorieActivity,
            setCalorieActivity
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export { ContextProvider, DataContext } 