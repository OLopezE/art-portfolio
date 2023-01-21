import styled from 'styled-components';

import { Link } from 'react-router-dom';

const ContactGrid = styled.div`
  padding: 10rem;
  display: grid;
  min-height: 100px;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const ContactItem = styled(Link)`
  border: 1px solid #436f60;
  border-radius: 4px;
  padding: 1rem;
  text-decoration: none;
  color: #436f60;

  > p {
    margin: 0;
    font-size: 3rem;
    text-align: center;
  }

  :hover {
    background-color: #436f60;
    color: #d0cbb5;
  }
`

export {
  ContactItem,
  ContactGrid
}
