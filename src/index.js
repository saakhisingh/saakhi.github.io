import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';


function Header() {
  return (
    <header className='flex flex-col font-montserrat justify-center'>
      <div id = 'header-name' className='text-4xl text-center'> SAAKHI SINGH </div>
      <div id = 'header-nav' className='text-center'>
      <nav >
        <ul>
          <li className='w-fit inline-block p-2 text-[#5473b0]'> <a href='/index'> Home </a> </li>
          <li className='w-fit inline-block p-2 text-[#5473b0]'> <a href='/about'> About me </a></li>
          <li className='w-fit inline-block p-2 text-[#5473b0]'> <a href='#'> Blog </a> </li>
          <li className='w-fit inline-block p-2 text-[#5473b0]'> <a href='#'> Contact </a> </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

function About(){
  return(
    <div id = 'About'> 
      <p className='font-bold font-montserrat p-2'>
        About me
      </p>
      <p className='font-montserrat p-1 '>
      I help businesses create awesome products and projects. I manage tech teams and facilitate effective communication that ensures maximum visibility of the project to all stakeholders using Lean-Agile frameworks, such as Kanban and Scrum. Have the ability to figure out solutions in the midst of chaos. 
      </p>
    </div>
  );
}

function App() {
  return (
  <h1 className="w-full text-2xl font-bold justify-center"> in construction </h1>);
}


ReactDOM.createRoot(document.getElementById('header')).render(<Header />);
ReactDOM.createRoot(document.getElementById('root')).render(<About />);