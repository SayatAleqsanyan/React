//  const stylesFlex = "flex justify-center items-center text-center p-[20px] min-h-[60px] h-[10vh] text-4xl text-white font-bold"; // flex
//  const statikBlox = "sticky top-0 bg-white shadow-md"
//  const sahunTexapoxum = "transition-transform duration-300 transform translate-y-4"

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Block from "./components/Block.jsx";

function App() {
    return (
        <div className="min-h-[100vh] bg-slate-800 text-white">
            <Header />
            <h1
                className={`stify-center items-center p-[20px] font-bold text-5xl bg-slate-600 text-stone-400 text-center min-h-[80vh]`}>

                Hello world! 
                <br className="m-10"/>
                <div className="m-10 text-stone-200">
                    <Block a={[1, "Text", "https://picsum.photos/200"]} />
                    
                </div>
            </h1>
            <Footer />
        </div>
    );
}

export default App;
