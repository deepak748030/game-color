import React, { useEffect } from 'react'
import createSocketConnection from '../hooks/Socket'

const Game = () => {
    useEffect(() => {
        createSocketConnection((socket) => {
            socket.emit('message', 'hello world')
        })

    }, [])

    return (
        <div> kahan nhai bhai</div>
    )
}

export default Game