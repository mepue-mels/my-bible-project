import './Register.css';
import Navigation from './components/Navigation';
import bridge from './assets/bridge-1.png';

function Register() {
    return (
        <>
            <Navigation />

            <div className="image-div">
                <img src={bridge} className="bridge-image"/>
            </div>
            <div className="container">
                <h1 className="main-header-text">Ask and it will be given to you</h1>
                <h1 className="sub-header-text">Seek and you will find</h1>
                <h1 className="caption-header-text">Knock and the door will be opened to you</h1>
                <h1 className="small-text">Matthew 7:7 NIV</h1>

                <div className="forms-div">
                    <div className="form-group">
                        <h1 className="side-text">Email</h1>
                        <input type="email" className="email-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <h1 className="side-text">Name</h1>
                        <input type="text" className="email-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full name" />
                    </div>

                    <div className="form-group">
                        <h1 className="side-text">University</h1>
                        <input type="text" className="email-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="University name" />
                    </div>
                </div>

                    <button className="submit-button" id="submitButton">Button</button>
            </div>
        </>
    );
}

export default Register;
