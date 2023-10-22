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
    grid-template-columns: 1fr 420px;
    margin-top: -2rem;
    align-items: center;
    gap:20px ;
    height:calc(100vh - var(--nav-height));
}

.left__page{ 
    h1 {
      font-weight:700;
      width:100%;
      span{ color: var(--primary-500);}
      margin-bottom: 1.5rem;
}

    p{
        line-height: 2rem;
        color: var(--text-secondary-color);
        margin-bottom: 1.5rem;
        max-width: 35em;
    }

    .registre-line{
        display: ;
    }
}

.right__page{
   
   

}
 
 @media (screen) {
    
 }
`


export default Wrapper;