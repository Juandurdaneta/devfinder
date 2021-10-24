import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkBlue)
    padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 1280px;
  background: var(--lightBlue);
  width: 100%;
  height: 65px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 1px 3px 2px 1px #101625;


  img {
    position: absolute;
    left: 15px;
    top: 19px;
    width: 25px;
  }

  button{
      position: absolute;
      right: 10px;
      top: 5px;
      width: 100px;
      height: 80%;
      color: white;
      background-color: var(--blue);
      border: none;
      border-radius: 8px;
  }

  input {
    font-size: 1rem;
    position: absolute;
    padding: 0 0 0 50px;
    border: 0;
    width: 100%;
    background: transparent;
    height: 40px;
    color: #ffff;
    left: 0;
    margin: 12px 0;

    :focus{
        outline: none;
    }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }

  }
`;