import styled from "styled-components";

const Wrapper = styled.div`
  height:100vh;
  background-color:red;
  /* margin: 0 auto; */
  nav{
   display: flex;
   flex-direction:column;
   align-items:center;
   gap:6rem;

   li {
    .icon
    a  {
       color:blue;
   }
  }
  }
`

export default Wrapper