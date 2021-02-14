import {Table,Image} from 'react-bootstrap';
import logo from './Laptop.jpg.jpg';
import './Style.css';
const my_logo = './Laptop.jpg.jpg';

function Table_Component()
{
    return(
        <div className="main_div">

            <Image className="my_logo" src={logo} rounded />
            <Image className="my_logo" src={logo} roundedCircle />
            <Image className="my_logo" src={logo} thumbnail />
            <Table responsive variant="success" striped bordered hover size="sm">
                
                <tr>
                    <td>Sr No</td>
                    <td>User Name</td>
                    <td>User Mobile</td>
                    <td>User Age</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Randhir</td>
                    <td>8686261098</td>
                    <td>22</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Wisdom</td>
                    <td>123456789</td>
                    <td>25</td>
                </tr>
                
            </Table>
        </div>
    );
}

export default Table_Component;