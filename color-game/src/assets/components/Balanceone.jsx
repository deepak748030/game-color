import React from 'react'
import Balance from './Balance'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Balanceone = () => {

    const navigate = useNavigate()
    return (
        <Balance>

            <Button style={{
                letterSpacing: '1px'
            }} onClick={() => navigate('/withdraw')} >Withdraw</Button>



        </Balance>
    )
}

export default Balanceone