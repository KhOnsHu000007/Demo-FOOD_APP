import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Backdrop = props => {
    return (<div className={classes.backdrop} onClick={props.onClick}></div>)
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const portalid = document.getElementById('overlay')
const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.closeModal}/>, portalid)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalid)}
        </>
    )
}

export default Modal