import React from 'react'
import Balance from './Balance'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Balancetwo = () => {
    const navigate = useNavigate();
    return (
        <Balance  >
            <div className='d-flex gap-1'>
                <Button className='w-50 ' onClick={() => { navigate('/recharge') }}>Recharge</Button>
                <Button className='w-50 bg-success' onClick={() => { navigate('/withdraw') }} >Withdraw</Button>
            </div>
        </Balance>
    )
}

export default Balancetwo