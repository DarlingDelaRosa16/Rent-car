import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { rent_car, return_car } from '../Redux/Actions/actionRent';
import { Cars } from './dataCar';
import {ContentProjects, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsLink} from './styledMainContent'


const MainContent = () => {

    const rentReducer = useSelector((state)=> state.rentReducer)
    const dispatch = useDispatch();
    return (
        <>
        <h1>Rent Car</h1>
        <ContentProjects>
        {
            Cars.map((item)=>(
                <ProjectsCard key={item.id}>
                                <ProjectsImg url={item.img}/>
                                <ProjectsInfo>
                                    <ProjectsDescription>
                                        <strong> {item.name} </strong> <br />
                                        {/* Stock: {rentReducer[item.id - 1].stock} <br/>
                                        Rent: <br />
                                        Free: {rentReducer[item.id - 1].free}<br /> */}
                                    </ProjectsDescription>

                                    <ProjectsLink column={"1/2"} onClick={() => {dispatch(rent_car(1, item.id))}}>Rent </ProjectsLink>
                                    <ProjectsLink column={"2/3"} onClick={() => {dispatch(return_car(1, item.id))}}>Return</ProjectsLink>
                                </ProjectsInfo>
                            </ProjectsCard>
            ))
        }   
        </ContentProjects>
        
        </>
    );
}
 
export default MainContent;
