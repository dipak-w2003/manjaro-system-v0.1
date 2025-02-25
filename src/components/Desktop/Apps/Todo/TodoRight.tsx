import React from 'react'
import { IStyleClassProps } from '../../kde/KdeApp'

const TodoRight: React.FC<IStyleClassProps> = ({ styles }) => {
    return (
        <div className={`${styles}`}>TodoRight</div>
    )
}

export default TodoRight