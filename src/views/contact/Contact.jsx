import React from 'react'

import { ContactItem, ContactGrid } from './Contact.style';

const Contact = () => {
  return (
    <ContactGrid>
      <ContactItem>
        <p>Instagram</p>
      </ContactItem>
      <ContactItem>
        <p>Email</p>
      </ContactItem>
    </ContactGrid>
  );
};

export default Contact;
