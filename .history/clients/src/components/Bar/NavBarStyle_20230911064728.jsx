import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
-webkit-box-align:center;
background-color:var(--white);
height:6rem;

.icon{
     font-weight:400;
     border:none;
     font
}

.btn-container{
    display: flex;
    justify-content:space-between;
    align-items:center;
    gap:14px;
}
`

export default Wrapper;
