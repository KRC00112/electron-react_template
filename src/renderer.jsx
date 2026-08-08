import { createRoot } from 'react-dom/client';
import Start from './components/Start.jsx';
const App=()=>{
    return (
        <>
            <Start />
        </>
    );
}

const container=document.getElementById('root');
const root=createRoot(container);
root.render(<App />);