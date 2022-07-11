import { useState } from "react";
import { FiMessageSquare } from 'react-icons/fi'
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [message, setMessage] = useState("");
    const [err, setErr] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:44316/api/contacts", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    surname: surname,
                    message: message,
                }),

            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName("");
                setSurname("");
                setEmail("");
                setMessage("");
                setErr("U dergua me sukses");
            } else {
                setErr("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div >
          
            <div >
                <section className="vh-150" >
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100" >
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" >
                                    <div className="card-body p-md-5" >
                                        <div className="row justify-content-center" >
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 us "  >Contact us</p>
                                                <div className="message form-outline flex-fill mb-0 text-center" >{err ? <MessageBox>{err}</MessageBox> : null}</div> 
                                                <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw us" ></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                value={name}
                                                                placeholder="Name"
                                                                onChange={(e) => setName(e.target.value)}
                                                                
                                                            />

                                                         
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw us" ></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                value={surname}
                                                                placeholder="Surname"
                                                                onChange={(e) => setSurname(e.target.value)}
                                                            />

                                                        </div>
                                                    </div>


                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw us" ></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                
                                                                type="email"
                                                                value={email}
                                                                placeholder="Email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                            
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                       
                                                        <FiMessageSquare className="fa-lg me-3 fa-fw us" /> 
                                                        <input
                                                            type="textarea"
                                                            value={message}
                                                            placeholder="Message"
                                                            onChange={(e) => setMessage(e.target.value)}
                                                        />

                                                     
                                                    </div>
                                                    <br />
<br/>

                                            
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" className="btn btn-primary btn-lg">Send</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" className="d-block w-100" alt="Cliff Above a Stormy Sea" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              

                
                
            </div>
<br/>
        </div>

    );
}



export default ContactForm;