import React, {useContext} from 'react'
import useLanguage from '../../hook/useLanguage'
import './index.css'
import { DataContext } from '../../context/DataContext'




const CalorieForm = () => {
   
    const text = useLanguage()
    const { 
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
    } = useContext(DataContext)
    console.log(calorieGender)
    return (
        <div className='calorie-form'>
            <h1>{text.calorie.title}</h1>
            <h2>{text.calorie.gender}</h2>
            
            <input
                type='radio'
                value='male'
                checked={calorieGender === 'male'}
                onChange={() => setCalorieGender('male')}
            />

            <input
                type='radio'
                value='female'
                checked={calorieGender ==='female'}
                onChange={() => setCalorieGender('female')}
            />




            <h2>{text.calorie.height}</h2>
            <input
                type='number'
                value={calorieHeight}
            />
            <h2>{text.calorie.weight}</h2>
            <input
                type='number'
                value={calorieWeight}
            />
        </div>
    )
    
}

export default CalorieForm