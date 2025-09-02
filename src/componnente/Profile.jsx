import React from 'react'


const members = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
  },
  {
    id: 4,
    name: 'Diana Prince',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/71.jpg',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    id: 6,
    name: 'Mark Gallagher',
    role: 'QA Engineer',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    id: 7,
    name: 'George Lucas',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    id: 8,
    name: 'Hannah Baker',
    role: 'Content Strategist',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
];


const Profile = () => {
  return (

    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 p-4 gap-6'>

      {members.map((mamber) => (

        <div className='container mx-auto bg-slate-200 p-4 w-64 flex flex-col justify-center items-center space-y-4 rounded-lg shadow-sm'>

          <img className='w-32 h-32 rounded-full' src={mamber.image} alt="" />
          <p className='font-bold'>Id: {mamber.id}</p>
          <p className='font-bold'>Name: {mamber.name}</p>
          <p className='font-bold'>Role: {mamber.role}</p>

        </div>


      ))}


    </div>

  )
}

export default Profile