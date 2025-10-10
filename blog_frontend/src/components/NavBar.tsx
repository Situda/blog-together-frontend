import SearchBox from "./SearchBox";

const NavBar = () => {

    return (
        <div className="container px-4 mx-auto flex justify-between  py-4">
            <div className="header_left flex  items-center justify-between gap-8" >
                <div className="left_icons flex  justify-between items-center gap-2 ">
                    <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <path
                            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                            fill="#87CEEB"
                            stroke="#F0F0F"
                            strokeWidth="1.5"
                        />

                        <path
                            d="M8 3V21"
                            stroke="#F0F0F0"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                        />

                        <path d="M10 7H18" stroke="#F0F0F0" strokeWidth="1" />
                        <path d="M10 10H16" stroke="#F0F0F0" strokeWidth="1" />
                        <path d="M10 13H14" stroke="#F0F0F0" strokeWidth="1" />
                        <path d="M10 16H18" stroke="#F0F0F0" strokeWidth="1" />
                    </svg>
                    <span className="text-xl  font-roboto font-semibold">Skye's Blog</span>
                </div>
                <div className="right_links flex  gap-6 items-center  tracking-wide">
                    <a href="#" className="text-sm font-roboto font-medium hover:text-primary transition-colors duration-300">首页</a>
                    <a href="#" className="text-sm font-roboto font-medium hover:text-primary transition-colors duration-300">文章</a>
                    <a href="#" className="text-sm font-roboto font-medium hover:text-primary transition-colors duration-300">项目</a>
                    <a href="#" className="text-sm font-roboto font-medium hover:text-primary transition-colors duration-300">关于我</a>
                    <a href="#" className="text-sm font-roboto font-medium hover:text-primary transition-colors duration-300">友情链接</a>
                </div>
            </div>
            <div className="header_right flex  justify-between items-center gap-2">
                <SearchBox />
                <button className="p-2 rounded-full hover:bg-slate-200 transition-colors duration-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                    </svg>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 bg-[url(https://p4.music.126.net/-kiI3iZ0-iJO-6-oPgPc-g==/109951166073015392.jpg)]"></div>
            </div>

        </div>
    )
}

export default NavBar;