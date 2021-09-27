import React from 'react'
import { Cars } from './dataCar';
import {ContentProjects, ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects} from './styledMainContent'


const MainContent = () => {
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
                                        Rent: <br />
                                        Free: <br />
                                    </ProjectsDescription>
                                    <ProjectsLink href={item.urlLive} target="_blank" column={"1/2"}>Rent </ProjectsLink>
                                    <ProjectsLink href={item.urlGithub} target="_blank" column={"2/3"}>Return</ProjectsLink>
                                </ProjectsInfo>
                            </ProjectsCard>
            ))
        }   
        </ContentProjects>
        
        </>
    );
}
 
export default MainContent;
