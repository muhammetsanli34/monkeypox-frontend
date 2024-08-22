export default function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-around items-center py-4 text-sm">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="logo" width={50} />
          <h1 className="text-lg font-bold">
            TRACK
            {/* <br /> */}
            MONKEY
            <span className="text-bold" style={{ color: "#ca3b3b" }}>
              POX
            </span>
          </h1>
        </div>

        <div className="flex space-x-4">
          <a
            // on hover there shoudl be animation
            className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2 
              animation duration-300 ease-in-out text-lg
            
          "
          >
            HOME
          </a>
          <a
            className="no-underline text-black 
                      hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
                      animation duration-300 ease-in-out text-lg

          "
          >
            MONKEYPOX
          </a>
          <a
            className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out text-lg
            "
          >
            SYMPTOMS
          </a>
          <a
            className="no-underline text-black 
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out text-lg
          
          "
          >
            PREVENTION
          </a>
        </div>
      </div>
    </div>
  );
}
