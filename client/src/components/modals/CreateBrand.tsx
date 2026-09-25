import {Button, Form, Modal} from "react-bootstrap";
import type {ModalProps} from "@/components/modals/CreateType.tsx";
import {useState} from "react";
import {createBrand } from "@/entities/api/diveceApi.ts";


const CreateBrand = ({show , onHide} : ModalProps) => {
    const [value , setValue] = useState<string>('')
    const addBrand = () => {
        createBrand(value).then( () => {
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
                    Добавить Бранд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введите название бренда"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addBrand}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;