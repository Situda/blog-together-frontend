// 项目集页
import Contents from "../components/Contents";
import ScrollAwareHeader from "../components/ScrollAwareHeader";
import useTitle from "../hooks/useTitle";

function Projects() {

  useTitle('Project')

  return (
    <>
      <ScrollAwareHeader name='Skye' />
      <main>
        <Contents contentType="项目" />
      </main>
      <footer></footer>
    </>
  )
}

export default Projects;