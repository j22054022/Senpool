import './StepSection.scss'
import React from 'react'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/bs'
import { GrLinkNext } from 'react-icons/gr'

export const StepSection = () => {
    const steps = ["諮詢", "訂單簽約", "付款訂貨", "貨到組裝/測試", "正式啟用"]
    const [select, setSelect] = useState(false)
    const selectStyle = {
        width: "100vw",
        height: "100vh",
        zIndex: "2",
    }
    return (
        <div className="stepSection">
            {steps.map(step => {
                return (
                    <>
                        <div className="step">{step}</div>
                        <GrLinkNext />
                    </>
                )
            })}
        </div>
    )
}
