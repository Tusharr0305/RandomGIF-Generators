import Random from "./components/Random";
import Tags from "./components/Tags";
export default function App() {
  return (
    <div className=" w-full h-100% flex flex-col background relative">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]
       px-10 py-3 text-4xl font-bold ml-[60px]">Random Gifs</h1>
      <div className="flex flex-col items-center">
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}
