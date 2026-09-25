import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import type {ModalProps} from "@/components/modals/CreateType.tsx";
import {useStores} from "@/hooks/useStores.ts";
import {useEffect, useState} from "react";
import * as React from "react";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "@/entities/api/diveceApi.ts";
import {observer} from "mobx-react-lite";


type InfoDevice = {
    title: string
    description: string
    number: number
}

const CreateDevice = observer(({show, onHide}: ModalProps) => {
    const {device} = useStores()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState<File | null>(null)
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [info, setInfo] = useState<InfoDevice[]>([])

    useEffect( () => {
        fetchTypes().then( data => device.setTypes(data))
        fetchBrands().then( data => device.setBrands(data))
    } , [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo= (number : number) => {
        setInfo( info.filter( i => i.number !== number))
    }

    const changeInfo =
        (key:string , value : string , number : number) => {

        setInfo(info.map(i => i.number === number ? {...i, [key] : value} : i))

    }
    const selectFile = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] ?? null)
    }

    const  addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', `${device.selectedBrand?.id}`)
        formData.append('typeId', `${device.selectedType?.id}`)
        formData.append('info' , JSON.stringify(info))
        createDevice(formData).then( () => onHide())
        setName('')
        setPrice(0)
        setFile(null)
        setInfo([])
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
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="d-flex align-items-center">
                        <Dropdown>
                            <Dropdown.Toggle>{device.selectedType?.name || "Выберите тип"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item
                                        onClick={() => device.setSelectedType(type)}
                                        key={type.id}>
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mx-1">
                            <Dropdown.Toggle>{device.selectedBrand?.name || "Выберите бранд"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => device.setSelectedBrand(brand)}
                                        key={brand.id}>
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        className="mt-3"
                        value={price}
                        onChange={ e => setPrice(Number(e.target.value))}
                        placeholder="Введите цену устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Загрузите изображение"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        onClick={addInfo}
                        variant={"outline-dark"}
                    >Добавить новое свойство</Button>
                    {info.map((info) =>
                        <Row key={info.number} className="g-2 mt-1">
                            <Col md={5}>
                                <Form.Control
                                    value={info.title}
                                    onChange={(e) =>
                                        changeInfo('title', e.target.value,  info.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control
                                    value={info.description}
                                    onChange={(e) => changeInfo('description', e.target.value,  info.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={2}>
                                <Button onClick={() => removeInfo(info.number)} variant={"outline-danger"}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;