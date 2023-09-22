import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../public/styles/Modal.module.css'

const CommonModal = ({
    title,
    isOpen,
    modalData,
    toggleModal
}) => {

  return (
    <div className="w-100">
        <Modal
            isOpen={isOpen}
            toggle={() => toggleModal('')}
            className="w-100"
            centered
        >
          <ModalBody className={styles.wrapper}>
            { modalData }
            <div className={styles.close} onClick={() => toggleModal('')}>
              <div className={styles.cross} />
            </div>
          </ModalBody>
      
        </Modal>
    </div>
  );
}

export default CommonModal;