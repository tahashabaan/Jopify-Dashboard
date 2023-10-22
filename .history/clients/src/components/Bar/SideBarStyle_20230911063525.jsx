import styled from "styled-components";

const Wrapper = styled.div`
  height:98vh;
  background-color: var(--white) ;
  nav{
   display: flex;
   flex-direction:column;
   align-items:center;
   gap:6rem;

   h1{
    padding: 1.3rem 0.76rem;
    font-weight:400;
   }

   li {
     font-size:2rem;
     margin-bottom: 3rem;
     color: var( --text-color);
     transition:padding-left 0.4s ease-in-out;

    .icon{
       margin-right:1rem;
    }
    a  {
      color: var( --text-color);
   }
  }
  li:hover, li:focus{
    padding-left:16px;
    color: var(--primary-300);
    a{
      color: var(--primary-300);
    }
  }
  }
`

export default Wrapper