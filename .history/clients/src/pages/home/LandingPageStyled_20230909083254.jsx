import styled from "styled-components";

const Wrapper = styled.section`
  nav{
   width:var(--fluid-width) ;
   max-width: var(--max-width);
   margin: 0px auto;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   height: var(--nav-height);
   background-color:var(--prima)
}
.page{
    display:flex;
    justify-content:space-between;
    align-items:center
}
 
`



export default Wrapper;