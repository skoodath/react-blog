import { useEffect, useState } from "react"

const Header = () => {
  const [theme, setTheme] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? true : false)
  }

  useEffect(() => {
    if(theme) document.documentElement.dataset.mode = 'light';
    else document.documentElement.dataset.mode = 'dark';
  },[theme])

  return (
    <header className='h-54 flex justify-between px-8 py-4 border-b'>
      <a href="/">LOGO</a>
      <nav className='flex justify-evenly gap-4'>
        <a href="/about">About</a><a href="/services">Services</a><a href="/products">Products</a>
      </nav>
    <div className="flex gap-2">
        <span className="inline-block uppercase">{theme ? 'dark' : 'light'}</span>
        <label htmlFor="theme" className="relative inline-block gap-2 h-7 w-12">  
          <input type="checkbox" name="theme" id="theme" className="hidden peer w-full h-full" onChange={handleChange} />
          <span className={`rounded-full absolute ${theme ? "bg-gray-500" : "bg-blue-400"} inset-0 cursor-pointer before:duration-500 before:h-5 before:w-5 before:absolute before:left-1 before:bottom-1 before:bg-white before:rounded-full before:peer-checked:translate-x-5 before:transition-all`}></span>
        </label>
</div>
    </header>
  )
}

export default Header