import React from 'react'
import Btn from '../component/btn.jsx'
// import Color from '../component/ColorComp.jsx'

// import Smart from '../component/SmartComp.jsx'

const App = () => {
    const NumArr = [1,2,3,4,5,6,7,8,9,'Bs',0,'Ok'];
    return <div className="app">
                
                <Btn NumArr = {NumArr}/>
                {/* <Color color = "green"/>
                <Smart /> */}
            </div>;
}

export default App
