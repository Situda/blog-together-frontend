// 关于我页
import ScrollAwareHeader from "../components/ScrollAwareHeader";
import useTitle from "../hooks/useTitle";

function About() {

  useTitle('About me')

  return (
    <>
      <ScrollAwareHeader name='Skye' />
      <main>
        关于我
      </main>
      <footer></footer>
    </>
  )
}

export default About;