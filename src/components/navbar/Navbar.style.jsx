import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    height: 8rem;

    @media (max-width: 768px) {
    display: none;
  }
`;

const NavOptions = styled.div`
    background-color: #436f60;
    border-bottom: 0.5rem solid #436f60;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 0.5rem;
`;
const NavOption = styled.button`
    flex: 1;
    background-color: #436f60;
    border-radius: 0.75rem;
    display: flex;
    align-items: end;
    padding: 1rem;
    color: #d0cbb5;
    font-size: 3rem;
    transition: 0.2s;
    border: none;

    :hover {

        background-color: #84a28a;
        font-size: 5rem;
        flex: 2;
    }

    :active {
        background-color: #d0cbb5;
        color: #436f60;
    }
`;

export {
    NavContainer,
    NavOptions,
    NavOption
}