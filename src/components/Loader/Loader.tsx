import {FC} from 'react'
import {Spinner} from 'react-spinners-css'

import './Loader.css'

const Loader:FC = () => {
    return (
        <div className="loader-container">
            <Spinner
                color={'royalblue'}
            />
        </div>
    )
}

export default Loader