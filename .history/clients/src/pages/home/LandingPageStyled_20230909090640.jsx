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
    display:grid;
    height:calc(100vh - var(--nav-height));
    align-items: center;
    margin-top: -3rem;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    gap: 10px;
}

.left__page{ 
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
   
   

}
 
`



export default Wrapper;