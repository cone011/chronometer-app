import classes from "./message.module.css";
import { Modal } from "react-bootstrap";

const MessageModal = (props) => {
  const { showModal, modalHandler, messageToShow, typeMessage, onEliminar } =
    props;

  if (typeMessage === "CONFIRM") {
    return (
      <Modal
        show={showModal}
        onHide={modalHandler}
        size="lg"
        className={classes.message}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <h1>{messageToShow}</h1>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={modalHandler}>
            Salir
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (typeMessage === "DELETE") {
    return (
      <Modal
        show={showModal}
        onHide={modalHandler}
        size="lg"
        className={classes.message}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <h1>{messageToShow}</h1>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={onEliminar}>
            Si
          </button>
          <button className="btn" onClick={modalHandler}>
            No
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default MessageModal;
