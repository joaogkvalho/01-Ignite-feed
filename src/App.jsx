import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export default function App() {
  return (
    <>
      <Header />

      <Post 
        author="João Gabriel" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus ea ut neque! Architecto consequatur quo ipsum excepturi, inventore eum soluta ipsam quasi et obcaecati ullam, repudiandae odit qui? Asperiores!" 
      />

      <Post 
        author="João Carvalho"
        content="Um post muito legal!"
      />
    </>
  )
}



