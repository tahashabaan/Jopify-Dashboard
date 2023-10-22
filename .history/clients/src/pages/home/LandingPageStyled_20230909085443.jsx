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
    align-items:center;
    background-color:red
}
.left__page h1 {
    font-weight:700;
 span{
    color: var(--primary-500);
 }
 margin: 1.5rem 0;
}

.left__page{ 
    width: 70%;
    h1,p{
        width: 90%;
    }
    p{
        margin: 1rem 0;
        line-height: 2;
        width: 70%;
        font-weight:var(--small-text)
    }
}

.right__page{
    width: 30%;
    /* img{
        width: 80%;
    } */
}
 
`



export default Wrapper;