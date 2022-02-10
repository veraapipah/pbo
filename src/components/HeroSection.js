import Navbar from "./Navbar";
import Button from "./Button";

function HeroSection() {
    return(
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[550px]">
            <div className="mx-auto">
                <Navbar/>
                <div className="text-center mt-20">
                    <h1 className="text-white text-3xl w-8/12 leading-relaxed font-semibold font-mono mx-auto">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
                    <p className="text-white text-lg text-opacity-60 w-4/12 mx-auto leading-relaxed mt-5">Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.</p>
                    <Button variant="fill-yellow">Pelajari</Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;