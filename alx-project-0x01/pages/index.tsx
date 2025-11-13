import Header from "@/components/layout/Header";
const Home: React.FC=()=>{
  return(

    <div className="flex justify-center items-center h-screen">
    <Header />
    <main className="flex-grow flex items-center justify-center bg-linear-to-r from-blue-500 to bg-purple-600 ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-white capitalize"> Welcome To our application</h1>
        <p className="mt-4 text-xl text-white capitalize"> 
            We are glad you are here. Explore and enjoy your experience. </p>
            <button className="m-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer active:scale-98">Get Started</button>
      </div>
    </main>
    </div>
  )
}
export default Home;