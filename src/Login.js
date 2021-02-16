import {Button} from 'react-bootstrap';
import './Login.css';

function Login()
{
    return(
        <div>

            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 login_div">
                    <h1 className="text-center">Login Screen</h1>

                    <div className="form-group">
                        <label>Mobile Number : <span className="text-danger">*</span> </label>
                        <input type="number" className="form-control" placeholder="Enter Your Mobile Number" />
                    </div>

                    <div className="form-group">
                        <label>Email : <span className="text-danger">*</span> </label>
                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                    </div>

                    <div className="form-group">
                        <Button className="mx-auto d-block" variant="danger">Login</Button>
                    </div>


                </div>
                <div className="col-lg-4"></div>

            </div>

        </div>
    );
}

export default Login;