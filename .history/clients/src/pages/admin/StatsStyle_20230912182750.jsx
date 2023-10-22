import styled from 'styled-components';


const Wrapper = styled.div`
   display:grid;
   grid-template-columns: repeat(3, minmax(300px, 1fr));
   gap:20px;
   align-items:center;
   padding: 1rem 1.3rem;
`

export default Wrapper;