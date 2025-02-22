import React from 'react'
import { IStyleClassProps } from '../../kde/KdeApp'

const RightSection: React.FC<IStyleClassProps> = ({ styles }) => {
    return (
        <div className={`${styles}`}>RightSection</div>
    )
}

export default RightSection