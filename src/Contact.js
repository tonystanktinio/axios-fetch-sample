import React from "react";

const Contact = ({ contact }) => {
  return (
    <>
      <div>
        <img src={contact.picture.large} />
      </div>
      <div>
        <h3>{`${contact.name.first + " " + contact.name.last}`}</h3>
        <ul>
          <li>{contact.location.street.number}</li>
          <li>{contact.location.street.name}</li>
          <li>{contact.location.city}</li>
          <li>{contact.location.state}</li>
        </ul>
      </div>

      <div>
        <h3>{`${contact.phone + " " + contact.email}`}</h3>
      </div>
    </>
  );
};

export default Contact;
