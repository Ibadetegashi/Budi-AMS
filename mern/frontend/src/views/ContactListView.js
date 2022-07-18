import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

class ContactListView extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://localhost:44316/api/contacts")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>NAME</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Message</th>
              {/* <th>ACTION</th> */}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {/* <td>{item._id}</td> */}
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  {/* <Button
                                        type="button"
                                        variant="light"
                                        onClick={() => navigate(`/admin/item/${item._id}`)}
                                    >
                                        Edit
                                    </Button>
                                    &nbsp; */}
                  {/* <Button
                    type="button"
                    variant="danger"
                    // onClick={() => deleteHandler(item)}
                  >
                    Delete
                  </Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <h1> Fetch data from an api in react </h1> {
                    items.map((item) => (
                        <ol key={item.id} >
                            User_Name: {item.username},
                            Full_Name: {item.name},
                            User_Email: {item.email}
                        </ol>
                    ))
                } */}
      </div>
    );
  }
}

export default ContactListView;
