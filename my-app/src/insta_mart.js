import { useState } from "react"

const Section = ({ title, discription, isVisible,setisVisible }) => {

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold  text-xl text-amber-700">{title}</h3>

      {isVisible ? (
        <button onClick={()=>{
          
          setisVisible(false)}} className="cursor-pointer underline">Hide</button>
      ) : (

        <button  onClick={()=>{setisVisible(true)}} className="cursor-pointer underline">show</button>
      )

      }


      {isVisible && <p>{discription}</p>}


    </div>)
};

const Instamart = () => {
const [sectionconfig,setsectionconfig]=useState("key")
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">
        InstaMart
      </h1>
      <Section title={"About InstaMart"}
        discription={"In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt.In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt.exercitation anim sunt.In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt."}
        isVisible={sectionconfig==="about"} 
        setisVisible={()=>setsectionconfig(
          "about")
        }
        
        
        />
        
        


      <Section
        title={"About team"}
        discription={"In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt.In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt.exercitation anim sunt.In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt."}
        isVisible={sectionconfig==="team"}
        setisVisible={()=>setsectionconfig(
          "team"
        )} />

      <Section
        title={"Careers"}
        discription={"In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt.In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt.exercitation anim sunt.In nisi velit deserunt occaecat sint magna ullamco culpa Lorem commodo tempor exercitation anim sunt."}
        isVisible={sectionconfig==="careers"} 
        setisVisible={()=>setsectionconfig(
          "careers"
          
        )}/>
    </div>);
};
export default Instamart;