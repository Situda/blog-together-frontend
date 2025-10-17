// 友情链接页

import ScrollAwareHeader from "../components/ScrollAwareHeader";
import useTitle from "../hooks/useTitle";

function Friends() {

  useTitle(' Friendly Links ')

  return (
    <>
      <ScrollAwareHeader name='Skye' />
      <main>
        友情链接
      </main>
      <footer></footer>
    </>
  )
}

export default Friends;