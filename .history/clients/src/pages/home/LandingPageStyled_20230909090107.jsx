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
}
.page{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:calc(100vh - var(--nav-height));
}

.left__page{ 
    width: 70%;
    h1 {
      font-weight:700;
      span{ color: var(--primary-500);}
      margin-bottom: 1.5rem;
}

    p{
        line-height: 2rem;
        color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
    }
}

.right__page{
    width: 30%;
   

}
 
`



export default Wrapper;