import {Button, Col, Form, Row} from "react-bootstrap";

const CheckOutForm = (props) => {
    return (
        <div>
            <Form onSubmit={props.generateOrder}>
                <Row>
                    <Col>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className="mb-3" placeholder="Nombre" name="name" value={props.inputs.name || ""} onChange={props.onChange} required/>
                    </Col>
                    <Col>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control className="mb-3" placeholder="Apellido" name="lastname" value={props.inputs.lastname || ""} onChange={props.onChange} required/>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-6">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control className="mb-3" placeholder="Telefono" name="phone" value={props.inputs.phone || ""} onChange={props.onChange} required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="mb-3" placeholder="Email" name="email" value={props.inputs.email || ""} onChange={props.onChange} required/>
                    </Col>
                    <Col>
                        <Form.Label>Repetir email</Form.Label>
                        <Form.Control className="mb-3" placeholder="Repetir email" name="emailConfirmation"
                                      value={props.inputs.emailConfirmation || ""} onChange={props.onChange} required/>
                        {
                            props.error &&
                            <label className="text-danger">{props.error}</label>
                        }
                    </Col>
                </Row>
                <Button className="mb-3"  type="submit" variant="primary" disabled={props.hasSubmit}>Generar orden</Button>
            </Form>
        </div>
    )
}

export default CheckOutForm;