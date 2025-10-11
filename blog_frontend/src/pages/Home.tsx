// 首页
import NavBar from "../components/NavBar"


function Home() {

    return (
        <div className="relative w-full">
            <header className="header fixed top-0 left-0 right-0 z-50">
                <NavBar />
            </header>
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
                    <section className="personalInfo flex gap-6 items-center">
                        <div className=" avatar bg-center bg-no-repeat aspect-square bg-cover rounded-full h-30 w-30 bg-[url(https://p4.music.126.net/-kiI3iZ0-iJO-6-oPgPc-g==/109951166073015392.jpg)]"></div>
                        <div className="info flex flex-col items-start ">
                            <p className="font-semibold text-3xl text-slate-900">Skye</p>
                            <p className="text-slate-500">SkyeJins@g.com</p>
                            <p className="text-slate-500">github</p>
                        </div>
                    </section>
                    <section className="recommendations">

                    </section>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home