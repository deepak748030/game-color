import React from 'react'
import Balance from './Balance'
import { Button } from 'react-bootstrap'

const Balancetwo = () => {
    return (
        <Balance  >
            <div className='d-flex gap-1'>
                <Button className='w-50 '>Recharge</Button>
                <Button className='w-50 bg-success' >Withdraw</Button>
            </div>
        </Balance>
    )
}

export default Balancetwo