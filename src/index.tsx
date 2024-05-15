/* @refresh reload */
import { render } from 'solid-js/web'
import "@pdfslick/solid/dist/pdf_viewer.css";
import './index.css'
import App from './App'

const root = document.getElementById('root')

render(() => <App />, root!)
