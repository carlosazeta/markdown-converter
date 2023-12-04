import './App.css'
import MarkdownToText from './components/MarkdownToText'
import HtmlToMarkdown from './components/HtmlToMarkdown'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<MarkdownToText />} />
					<Route path='/htmltomd' element={<HtmlToMarkdown />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
