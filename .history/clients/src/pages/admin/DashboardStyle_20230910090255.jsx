import styled from "styled-components";


const Wrapper = styled.div`
    main{
        display: grid;
        grid-template-columns:300px 1fr;
    }
    .left__sec{
        height:100vh;
        background-color:red;
    }
    .dashboard{
        background-color:transparent;
        height:calc(100vh - 120px)
    }

`

export default Wrapper