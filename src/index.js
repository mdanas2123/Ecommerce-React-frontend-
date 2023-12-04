import Reactdom from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(
    document.getElementById('root')
    );
root.render(<App />);


// root.render(
//     <App/>,
//     document.getElementById('root')

// )
