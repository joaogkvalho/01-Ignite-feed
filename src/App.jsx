import { Header } from "./components/Header/"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="João Gabriel" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus ea ut neque! Architecto consequatur quo ipsum excepturi, inventore eum soluta ipsam quasi et obcaecati ullam, repudiandae odit qui? Asperiores!" 
          />

          <Post 
            author="João Carvalho"
            content="Um post muito legal!"
          />
        </main>
      </div>
    </>
  )
}