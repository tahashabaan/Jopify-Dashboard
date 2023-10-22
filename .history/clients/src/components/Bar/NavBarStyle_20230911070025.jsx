import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
-webkit-box-align:center;
background-color:var(--white);
height:6rem;
padding: 1.4rem 0rem;

.icon{
     font-weight:400;
     font-size:3.4rem;
     cursor:pointer;
     color:var(--primary-300);
}

.btn-container{
    display: flex;
    justify-content:space-between;
    align-items:center;
    gap:14px;

    .icon{
         font-size:2.2rem; 
         color: ;
    }
}
`

export default Wrapper;
