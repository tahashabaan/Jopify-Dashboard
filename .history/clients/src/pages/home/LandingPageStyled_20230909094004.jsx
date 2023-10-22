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

    .btn{
        padding: 0.75rem 1rem;
    }

    .btn-login{
        margin-right: 1rem;
    }

}

.right__page{
   .main-img {
    display: none;
  }
   

}
 
 @media (max-width:920px) {
    .page{
  
    grid-template-columns: 1fr;
}
.main-img {
      display: block;
    }
 }

 @media (max-width:320px) {

    h1{
        font-size:var
    }
   
}
 
`


export default Wrapper;