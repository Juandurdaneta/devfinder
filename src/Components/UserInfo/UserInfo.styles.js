import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2%;
  border-radius: 15px;
  display: flex;
  background: var(--lightBlue);
  padding: 35px 15px 35px 15px;
  width: 100%;
  box-shadow: 1px 3px 2px 1px #101625;
`;
export const Content = styled.div`
    width: 100%;

`;
export const Header = styled.div`

    position: relative;

    img {
        width: 120px;
        border-radius: 60px;
        float: left;
        margin: auto 40px auto 30px;
    }


  h2,
  p {
    display: inline;
  }

  p {
    position: absolute;
    right: 30px;
    font-size: 0.9rem;
  }
`;

export const Grid = styled.div`
    display: grid;
    background: var(--darkBlue);
    position: relative; 
    left: 190px;
    margin-top: 2rem;
    width: 490px;
    border-radius: 15px;
    grid-template-columns: auto auto auto;
`;

export const Item = styled.div`
      padding: 5px;
      margin-left: 30px;

      p{
        color: var(--lightGray);
      }

      h4{
        margin-top: 0;
        font-size: 1.3rem;
        margin-bottom: 10px;
      }

`
