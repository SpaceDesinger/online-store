import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {createType} from "@/entities/api/diveceApi.ts";

export type ModalProps = {
    show: boolean
    onHide: () => void
}

const CreateType = ({show , onHide} : ModalProps) => {
    const [value , setValue] = useState<string>('')
    const addType = () => {
        createType(value).then( () => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                        placeholder="Введите название типа"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addType}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;