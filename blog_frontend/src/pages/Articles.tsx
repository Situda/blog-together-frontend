// 文章集页
import Contents from "../components/Contents"
import ScrollAwareHeader from "../components/ScrollAwareHeader";
import useTitle from "../hooks/useTitle";

function Articles() {

  useTitle('Articles')

  return (
    <>
      <ScrollAwareHeader name='Skye' />
      <main>
        <Contents contentType="文章" />
      </main>
      <footer></footer>
    </>
  )
}

export default Articles