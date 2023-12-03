import { useMemo, useState } from 'react'
import TurndownService from 'turndown'
import { textHtmlPlaceHolder } from '../constants/textHtlmPlaceholder'
import DOMPurify from 'dompurify'

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
})

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

function HtmlToMarkdown() {
	const [htmlInput, setHtmlInput] = useState(textHtmlPlaceHolder)

	const markdownOutput = useMemo(() => {
		const markdown = turndownService.turndown(htmlInput)
		return DOMPurify.sanitize(markdown)
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
