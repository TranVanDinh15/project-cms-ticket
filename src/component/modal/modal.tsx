import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './Modal.scss';
interface props {
    width: number;
    isModalOpen: boolean;
    showModal: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    children: React.ReactNode;
}

const ModalCustom = ({ showModal, handleOk, handleCancel, isModalOpen, children, width }: props) => {
    return (
        <>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={false} width={width}>
                {children}
            </Modal>
        </>
    );
};

export default ModalCustom;
