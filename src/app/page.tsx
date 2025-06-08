    import { Metadata } from "next";

 export const metadata: Metadata ={
  title:"Home"
}
import Banner from './components/banner/Banner'
import Nav2 from './components/nav2/Nav2'
import Offersection from './components/offersection/Offersection'
export default function Home() {
  return (
    <>
     <Nav2/>
     <Banner/>
     <Offersection/>

     </>
  )
}
