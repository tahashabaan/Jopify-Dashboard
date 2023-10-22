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
   background-color:var(--primary-100);
}
.page{
    display:flex;
    justify-content:space-between;
    align-items:center
}
.left__page h1 {
    font-weight:700;
 span{
    color: var(--primary-500);
 }
 margin-bottom: 1.5rem;
}

.left__page{ 
    width: 60%;
    p{
    margin: 1rem 0;
    line-height: 2;
    width: 90%;
}
}
 
`



export default Wrapper;