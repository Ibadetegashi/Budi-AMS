import { useState } from "react";

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
                    message:message,
                }),
                
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setSurname("");
                setEmail("");
                setMessage("");
                setErr("Sukses");
            } else {
                setErr("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={surname}
                    placeholder="Mobile Number"
                    onChange={(e) => setSurname(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="textarea"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />


                <button type="submit">Create</button>

                {/* <div className="message">{err ? <p>{err}</p> : null}</div> */}
            </form>
        </div>
    );
}

export default ContactForm;