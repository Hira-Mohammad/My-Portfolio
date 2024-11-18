import React from 'react'
import Heading from'./Heading';
import Card from './Card';
const data =[
    {
        id:0,
        title: "Static Interactive Resume ",
        desc: "A Static Interactive Resume project created using TypeScript,HTML and CSS, offering a responsive, editable showcase of professional details with interactive elements. ",
        img:"/Resume Projectt.PNG",
        tags:["React", "CSS","HTML", "Typescript"],
    },
    {
        id:1,
        title: "ATM ",
        desc: "A TypeScript-based project simulating an ATM system that handles balance inquiries, cash withdrawals, and Fast Cash functionalities efficiently.",
        img:"/ATM Projectt.PNG",
        tags:["React", "CSS","HTML", "Typescript"],
    },
    {
        id:2,
        title: " Todo App",
        desc: "A responsive and feature-rich To-Do App built with TypeScript,To Organnize and Manage Daily Tasks allowing users to efficiently manage tasks with add, edit, and delete functionalities. ",
        img:"/Todo Projectt.PNG",
        tags:["Node","HTML", "CSS", "Typescript"],
    },
    {
        id:3,
        title: "Word Counter",
        desc: "A TypeScript-based fun project that counts the number of words, characters, and spaces in a given text input in form of a sentence or a paragraph within seconds.",
        img:"/Word Counter Projectt.PNG",
        tags:["HTML","Node","CSS","Typescript"],
    },
    {
        id:4,
        title: "Calculator",
        desc: "A CLI Calculator built with TypeScript that supports basic arithmetic operations through a user-friendly command-line interface.",
        img:"/calculator.png",
        tags:["HTML","Node","CSS","Typescript"],
    },
    {
        
        id:6,
        title: "Ticket Checker ",
        desc: "A Ticket Checker project built in TypeScriptfor validating and managing tickets according to the Age Group efficiently.",
        img:"/ticket checker.png",
        tags:["HTML","Node","CSS","Typescript"],
    },
]
const Projects =() => {
return(
    <div id='projects' className='container pt-32'>
         <Heading title='My Projects' />
         <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}

         </div>
    </div>
)
}

export default Projects