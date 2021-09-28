import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { rent_car, return_car } from '../Redux/Actions/actionRent';
import { Cars } from './dataCar';
import {ContentProjects, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsLink} from './styledMainContent'


const MainContent = () => {

    const [availability, setavailability] = useState(["Cars available", 'green'])
    const rentReducer = useSelector((state)=> state.rentReducer)
    const dispatch = useDispatch();

    const rentOff = ()=>{
        if(rentReducer.rent !== rentReducer.stock) {
            dispatch(rent_car(1))
        }
        if(rentReducer.rent === rentReducer.stock)setavailability(["No car available", 'red'])
    }
    const returnOff = ()=>{
        if(rentReducer.free !== rentReducer.stock) {
            dispatch(return_car(1))
            setavailability(["Cars available", 'green'])
        }
    }
    
    
    return (
        <>
        <h1>Rent Car</h1>
        <h3 style={{color: availability[1]}}>({availability[0]})</h3>
        <ContentProjects>
            <ProjectsCard key={Cars.id}>
                <ProjectsImg url={Cars.img}/>
                <ProjectsInfo>
                    <ProjectsDescription>
                        <strong> {Cars.name} </strong> <br />
                        Stock: {rentReducer.stock} <br/>
                        Rent: {rentReducer.rent}<br />
                        Free: {rentReducer.free}<br />
                    </ProjectsDescription>

                    <ProjectsLink column={"1/2"} onClick={rentOff}>Rent </ProjectsLink>
                    <ProjectsLink column={"2/3"} onClick={returnOff}>Return</ProjectsLink>
                </ProjectsInfo>
            </ProjectsCard>

        </ContentProjects>
        
        </>
    );
}
 
export default MainContent;
