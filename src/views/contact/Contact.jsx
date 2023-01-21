import React from 'react'

import { ContactItem, ContactGrid } from './Contact.style';

const Contact = () => {
  return (
    <ContactGrid>
      <ContactItem>
        <p>Instagram</p>
        <p>@ceciliacollazob</p>
      </ContactItem>
      <ContactItem>
        <p>Email</p>
        <p>ceciciliacollazob@hotmail.com</p>
      </ContactItem>
    </ContactGrid>
  );
};

export default Contact;
