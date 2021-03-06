import styled from "styled-components";

export const ContentProjects = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(470px, 1fr) );
    grid-template-rows: auto;
    
    @media (max-width: 426px){
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr) );
    }
`;

export const ProjectsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width:95%;
    height: 200px;
    margin: 10px;
    

    @media (max-width: 426px){
        grid-template-rows: 1fr 1fr;
        height: 320px;
    }
`;

export const ProjectsImg = styled.div`
    width: 100%;
    margin:2px 0px 7px 2px;
    border-radius: 5px 0px 0px 5px;
    grid-column:1/5 ;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
    @media (max-width: 426px){
        margin:0;
        border-radius: 5px 5px 0 0;
        grid-column:1/8 ;
        grid-row:1/2;
    }
`;

export const ProjectsInfo = styled.div`
    grid-column:5/8 ;
    display: grid;
    grid-template-rows: auto auto 40px;
    grid-template-columns: 1fr 1fr;
    border-radius: 0px 5px 5px 0px;
    margin: 2px 2px 7px 5px;
    
    @media (max-width: 426px){
        margin:0;
        border-radius: 0 0 5px 5px ;
        grid-column:1/8 ;
        grid-row:2/3;
    }
`;



export const ProjectsDescription = styled.p`
    grid-row: 1/3;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    margin-top: 5px;
    grid-column: 1/3;
    font-size: 20px;
    
`;

export const ProjectsLink = styled.button`
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-align:center;
    font-size: 14px;
    padding-top: 5px;
    grid-column: ${(props)=> props.column};
    margin: 5px;
    border: none;
    background: none;
    text-decoration: none;
    color: black;
    grid-row: 3/4;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset;

    &:hover{
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; 
   }
`;
