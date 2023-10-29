import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex 
    justify-center items-center flex-col">
      <nav className="flex justify-between
       items-center w-full mb-10 pt-3">
        <img src={logo} alt="resumIA_logo"
         className="w-28 object-contain" />

         <button
          type="button" 
          onClick={()=> window.open('')} 
          className='black_btn'      
         >

          GitHub
         </button>
       </nav>

       <h1 className='head_text'>
          Resume cualquier texto con <br
          className='max-md:hidden' />
          <span className='orange_gradient'>resumIA</span>
          </h1 >
          <h2 className="desc">
          Simplifica tus lecturas con resumIA,
           un abreviador de artículos que transforma
           textos largos en resumenes concisos.
          </h2>
    </header>
    
  )
}

export default Hero