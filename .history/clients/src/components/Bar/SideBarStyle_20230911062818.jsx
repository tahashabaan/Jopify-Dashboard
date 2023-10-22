import styled from "styled-components";

const Wrapper = styled.div`
  height:98vh;  /* margin: 0 auto; */
  nav{
   display: flex;
   flex-direction:column;
   align-items:center;
   gap:6rem;

   h1{
    padding: 1.3rem 0.76rem;
    font-weight: 1.6rem;
   }

   li {
     font-size:2rem;
     margin-bottom: 3rem;
     color: var( --text-color);

    .icon{
       margin-right:1rem;
    }
    a  {
      color: var( --text-color);
   }
  }
  }
`

export default Wrapper