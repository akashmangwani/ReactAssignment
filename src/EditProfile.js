import React from 'react';
import Modal from 'react-modal';
import './index.css';
import Card from "./Cards"


class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
    //this.props.clicked();
  }

  handleChange(event) {
    console.log("textChanged")
    this.setState({value: event.target.value})
    console.log(this.state);
  }
  handleSubmit(event) {
    alert('Changed Text:' + this.state.value);
    // this.props.clicked();

    event.preventDefault();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <div className="wrapper">
          <button className="button">Like</button>
          <button className="button" onClick={this.toggleModal}>
            Edit
          </button>
          <button className="button">Delete</button>
        </div>
        <Modal
          className="modal"
          // overlayClassName="overlay_modal"
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          // contentLabel="Modal with image"
        >  
          <div className="modal_card">
            <form className="modal_form" 
              onSubmit={this.handleSubmit}
              >
              <h1 className="heading_style">Basic Modal</h1>
              <p>Username: <input
                type="text"
                defaultValue={this.props.username}
                onChange={this.handleChange}
                
              />
              
              </p>
              <p>Email ID: <input
                type="text"
                defaultValue={this.props.email}
                onChange={this.handleChange}
              />
              </p>
              <p>Phone Number: <input
                type="text"
                defaultValue={this.props.phone}
                onChange={this.handleChange}
              />
              </p>
              <p>Website: <input
                type="text"
                defaultValue={this.props.website}
                onChange={this.handleChange}
              />
              </p>
              <input type="submit" value="Submit" />
            </form>
          </div>
          
        </Modal>
      </div>
    );
  }
}

export default EditProfile;