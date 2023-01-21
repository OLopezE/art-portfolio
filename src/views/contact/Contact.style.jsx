import styled from 'styled-components';

const ContactGrid = styled.div`
  padding: 10rem;
  display: grid;
  min-height: 100px;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  border: 1px solid #436f60;
  padding: 1rem;
`

export {
  ContactItem,
  ContactGrid
}
