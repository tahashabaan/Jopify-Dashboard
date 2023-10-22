import styled from "styled-components";


const Wrapper = styled.div`
    main{
        display: grid;
        grid-template-columns:300px 1fr;
    }
    .side_bar{}
    .left__sec{
        height:100vh;
        background-color:red;
    }
    .dashboard{
        background-color:var( --background-color);
        height:calc(100vh - 120px)
    }

`

export default Wrapper