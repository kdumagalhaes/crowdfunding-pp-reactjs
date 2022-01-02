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
                margin: "150px auto 50px auto",
                border: "1px solid #eee",
                padding: "50px",
            },
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                zIndex: "4",
            }
        }} isOpen={isModal}>
            <Content>
                <button className="close-modal-button" onClick={() => setModal(false)}>
                    <img src={closeModalIcon} alt="close modal" />
                </button>
                <h2 className="title-modal">Back this project</h2>
                <p className="paragraph-modal">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <BackOptionsCard
                    isReward={false}
                    title="Pledge with no reward"
                    paragraph="Choose to support us without a reward if you simply believe 
                    in our project. As a backer, you will be signed up to receive product 
                    updates via email."

                />
                <BackOptionsCard
                    isReward={true}
                    title="Bamboo Stand"
                    pledge={25}
                    quantityNumber={101}
                    paragraph="You get an ergonomic stand made of natural bamboo. 
                    You've helped us launch our promotional campaign, and you’ll 
                    be added to a special Backer member list."
                />
                <BackOptionsCard
                    isReward={true}
                    title="Black Edition Stand"
                    pledge={75}
                    quantityNumber={64}
                    paragraph="You get a Black Special Edition computer stand and a personal thank you. 
                    You’ll be added to our Backer member list. Shipping is included."
                />
            </Content>
        </Modal>
    )
}