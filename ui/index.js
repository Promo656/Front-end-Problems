import React from 'react'
import {createRoot} from 'react-dom/client';
import {Accordion} from './src/Accordion'
import AccordionData from "./src/Accordion/data.json"


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Accordion sections={AccordionData}/>);
