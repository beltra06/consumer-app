import React, {useContext} from 'react'
import { DataContext } from '../../context/DataContext'

const Break = () => {

    const {height, weight} = useContext(DataContext)

    return (

        <div>
            <h1>Break</h1>
            <h2>{height}</h2>
            <h2>{weight}</h2>
        </div>
    )
}

export default Break