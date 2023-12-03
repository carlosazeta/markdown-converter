import { useEffect, useState } from 'react'
import TurndownService from 'turndown'
import { textHtmlPlaceHolder } from '../constants/textHtlmPlaceholder'
import DOMPurify from 'dompurify'

function HtmlToMarkdown() {
	const turndownService = new TurndownService({
		headingStyle: 'atx',
		hr: '---',
		bulletListMarker: '-',
		codeBlockStyle: 'fenced',
		fence: '```',
		emDelimiter: '_',
		strongDelimiter: '**',
		linkStyle: 'inlined',
		linkReferenceStyle: 'full',
		// Otras configuraciones según sea necesario
	})

	// Añadir la regla personalizada
	turndownService.addRule('paragraph', {
		filter: 'p',
		replacement: function (content) {
			return '\n\n' + content + '\n\n'
		},
	})

	turndownService.addRule('lineBreak', {
		filter: 'br',
		replacement: function () {
			return '\n\n'
		},
	})

	const [htmlInput, setHtmlInput] = useState(textHtmlPlaceHolder)
	const [markdownOutput, setMarkdownOutput] = useState('')

	const convertHtmlToMarkdown = (html: string) => {
		return turndownService.turndown(html)
	}

	useEffect(() => {
		const markdown = convertHtmlToMarkdown(htmlInput)
		const sanitizedMarkdown = DOMPurify.sanitize(markdown)
		setMarkdownOutput(sanitizedMarkdown)
	}, [htmlInput])

	return (
		<div className='converter-wrapper'>
			<textarea
				className='text-area'
				value={htmlInput}
				onChange={(e) => setHtmlInput(e.target.value)}
			/>
			<div className='text-converted'>{markdownOutput}</div>
		</div>
	)
}

export default HtmlToMarkdown
