import { Content } from "./styles"

import Modal from 'react-modal'

import closeModalIcon from '../../assets/img/icon-close-modal.svg'
import { useState } from "react"
import { BackOptionsCard } from "../BackOptionsCard"

interface BackOptionsModalProps {
    isOpen: boolean
}

export const BackOptionsModal = ({ isOpen }: BackOptionsModalProps) => {

    const [isModal, setModal] = useState(true)

    return (
        <Modal style={{
            content: {
            borderRadius: "7px",
            maxWidth: "730px",
            margin: "150px auto 0 auto",
            border: "1px solid #eee",
            padding: "30px",
            position: "absolute",
        }, 
            overlay: {
                backgroundColor: 'rgba(43, 43, 43, 0.75)'
            }
        }} isOpen={isModal}>
            <Content>
                <button className="close-modal-button" onClick={() => setModal(false)}>
                    <img src={closeModalIcon} alt="close modal" />
                </button>
                <h2 className="title-modal">Back this project</h2>
                <p className="paragraph-modal">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <BackOptionsCard />
            </Content>
        </Modal>
    )
}