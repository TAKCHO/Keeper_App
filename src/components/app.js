import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"

function App(){
    return (<div className="Note" >
        <Header />
        <Note />
        <Footer />
    </div>
    );
}

export default App;