

const Loader = () => {
     return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">

       
          <div className="">
            <div className="card-body items-center justify-center h-48">
              
              <div className="relative w-16 h-16 animate-spin">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-50"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-75"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-25"></div>
              </div>
            </div>
          </div>


        
        </div>
      </div>
  
  );
};

export default Loader;

