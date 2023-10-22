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
    grid-template-columns: repeat(2, 1fr);
    /* margin-top: -3rem; */
    align-items: center;
    gap: 20px;
    height:calc(100vh - var(--nav-height));
    background-color: black;
}

.left__page{ 
    background-color:green;
    padding: 2rem 0;
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
}

.right__page{
   
   

}
 
`



export default Wrapper;