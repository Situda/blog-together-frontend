// 文章集页
import Contents from "../components/Contents"
import NavBar from "../components/NavBar"

function Articles() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Contents contentType="文章"/>
      </main>
      <footer></footer>
    </>
  )
}

export default Articles