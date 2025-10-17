// 首页
import ScrollAwareHeader from "../components/ScrollAwareHeader";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'
import useTitle from "../hooks/useTitle";

function Home() {

    useTitle('Home')

    return (
        <div className="relative w-full">
            <ScrollAwareHeader name='Skye' />
            <main className=" sm:pt-20 md:pt-20 lg:pt-20 ">
                <div className="container mx-auto px-4 ">
                    <section className="newThings mb-12">
                        <div className="relative rounded-xl overflow-hidden h-[460px]  bg-cover bg-no-repeat flex items-end justify-start" style={{
                            backgroundImage: `url("https://p4.music.126.net/PA01TRYxcT28W_3B_SoPKw==/109951169026162735.jpg")`,
                        }}>
                            <div className="text-xl text-white p-7">

                                <h1 className="text-5xl font-bold mb-6">最新文章、项目</h1>
                                <p className="text-sm font-black leading-tight mb-4">随时更新</p>
                                <button className="rounded-xl bg-primary inline-flex items-center justify-center w-30 h-10 p-6 font-semibold
                                hover:opacity-90 cursor-pointer
                                ">联系我</button>
                            </div>
                        </div>
                    </section>
                    <section className="personalInfo flex gap-6 items-center mb-16">
                        <div className=" avatar bg-center bg-no-repeat aspect-square bg-cover rounded-full h-30 w-30 bg-[url(https://p4.music.126.net/-kiI3iZ0-iJO-6-oPgPc-g==/109951166073015392.jpg)]"></div>
                        <div className="info flex flex-col items-start ">
                            <p className="font-semibold text-3xl text-slate-900">Skye</p>
                            <p className="text-slate-500">SkyeJins@gmail.com</p>
                            <p className="text-slate-500">github</p>
                        </div>
                    </section>
                    <section className="recommendations flex gap-6 flex-col mb-12">
                        <h2 className="font-semibold text-2xl">推荐文章和项目</h2>
                        <div className="info flex gap-6">
                            <Link to='/hottest' className="py-3 px-1 border-b-2 border-primary text-primary">最热门</Link>
                            <Link to='/recently' className="py-3 px-1">最新更新</Link>
                        </div>
                        <div className="content flex flex-col gap-6">
                            <article className="flex gap-6 hover:shadow-xl cursor-pointer p-4 transition-all duration-300 rounded-lg">
                                <div className="img bg-[url('https://p4.music.126.net/PA01TRYxcT28W_3B_SoPKw==/109951169026162735.jpg')] 
                                    bg-center bg-no-repeat bg-cover h-40 w-50 
                                ">
                                </div>
                                <div className="infos flex flex-col flex-1 ">
                                    <p className="text-primary text-sm font-bold mb-1">文章</p>
                                    <p className="text-lg font-bold mb-2 text-slate-900">还不懂跨域问题？我来帮你！</p>
                                    <p className="text-sm text-slate-500">我们将在这一篇文章中详解跨域问题</p>
                                </div>
                            </article>
                            <article className="flex gap-6 hover:shadow-xl cursor-pointer p-4 transition-all duration-300 rounded-lg">
                                <div className="img bg-[url('https://p4.music.126.net/PA01TRYxcT28W_3B_SoPKw==/109951169026162735.jpg')] 
                                    bg-center bg-no-repeat bg-cover h-40 w-50
                                ">
                                </div>
                                <div className="infos flex flex-col flex-1">
                                    <p className="text-primary text-sm font-bold mb-1">文章</p>
                                    <p className="text-lg font-bold mb-2 text-slate-900">JWT是什么？它有啥用处？</p>
                                    <p className="text-sm text-slate-500">我们将在这一篇文章中详解Json Web Token</p>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-16 py-8 bg-slate-100">
                <Footer />
            </footer>
        </div>
    )
}
// 热更新待实现，content对应内容应该是一个组件，利用link实现热更新
export default Home