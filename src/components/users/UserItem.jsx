
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function UserItem({ user }) {

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name} {user.surname}</td>
            <td>{user.email}</td>
            <td>{user.cellulare}</td>
        </tr>

    );
}

export default UserItem;