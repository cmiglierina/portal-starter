import './Account.css'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imgUrl from '../../assets/photo-user.avif'
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Account() {

    const account = useSelector(state => state.account.userData);

    const [name,setName] = useState(account.name);
    const [surname,setSurname] = useState(account.surname);
    const [email,setEmail] = useState(account.email);
    const [cellulare,setCellulare] = useState(account.cellulare);

    const handlesubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <h2>Dati Utenza</h2>
            <Container>
                <Row>
                    <Col xs={2}>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <img alt='user' id='user_image' className='user-image' width="120" src={imgUrl}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='img-label'>
                                    <span className='img-label-title'>Utente:</span> <span>{account.name} {account.surname}</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={10}>
                        <Form onSubmit={handlesubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" value={name} onChange={e=>setName(e.target.value)} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicSurname">
                                <Form.Label>Cognome</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" value={surname} onChange={e=>setSurname(e.target.value)}/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}  onChange={e=>setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Numero di telefono</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" value={cellulare} onChange={e=>setCellulare(e.target.value)}/>

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


export default Account;