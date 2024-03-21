import ProjectLayout from './ProjectList'


function Projects({projectsData}) {
  return (
    <div className='w-full max-w-auto max-w-2xl xl:max-w-4xl px-4 py-10 pt-20 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>
        {
            projectsData.map((project, index)=> <ProjectLayout key={index} {...project}/>)
        }
    </div>
  )
}

export default Projects