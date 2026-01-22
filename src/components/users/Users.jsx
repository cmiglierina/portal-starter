import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import UserItem from './UserItem';

function Users() {

    const users = [{
        id: 1,
        name: 'Carlo',
        surname: 'Rossi',
        email: 'carlo.rossi@unaemail.com',
        cellulare: '3401111111'
    },
    {
        id: 2,
        name: 'Giovanni',
        surname: 'Bianchi',
        email: 'giovanni.bianchi@unaemail.com',
        cellulare: '3401111111'
    },
    {
        id: 3,
        name: 'Nadia',
        surname: 'Rossi',
        email: 'nadia.rossi@unaemail.com',
        cellulare: '3401111111'
    },];
    return (
        <>
            <h2>Dati utenti</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Utente</th>
                        <th>E-mail</th>
                        <th>Cellulare</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            u => <UserItem key={u.id} user={u}></UserItem>
                        )
                    }
                </tbody>
            </Table>

        </>
    );
}


export default Users;