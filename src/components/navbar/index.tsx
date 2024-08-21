export default function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-around items-center py-4 text-sm">
        <img
          src="
        "
          className="h-12"
        />
        <div className="flex space-x-4">
          <a
            // on hover there shoudl be animation
            className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2 
              animation duration-300 ease-in-out
            
          "
          >
            HOME
          </a>
          <a
            className="no-underline text-black 
                      hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
                      animation duration-300 ease-in-out

          "
          >
            MONKEYPOX
          </a>
          <a
            className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out
            "
          >
            SYMPTOMS
          </a>
          <a
            className="no-underline text-black 
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out
          
          "
          >
            PREVENTION
          </a>
        </div>
      </div>
    </div>
  );
}
