import { useState, useEffect, useMemo } from 'react'
import * as marked from 'marked'
import DOMPurify from 'dompurify'
import { textPlaceholder } from '../constants/textPlaceholder'

function MarkdownToText() {
	const [markdown, setMarkdown] = useState(textPlaceholder)

	const renderedHtml = useMemo(() => {
		const rawMarkup = marked.parse(markdown)
		return DOMPurify.sanitize(rawMarkup)
	}, [markdown])

	return (
		<div className='converter-wrapper'>
			<textarea
				className='text-area'
				onChange={(e) => setMarkdown(e.target.value)}
				value={markdown}
			/>
			<div
				className='text-converted'
				dangerouslySetInnerHTML={{ __html: renderedHtml }}
			/>
		</div>
	)
}

export default MarkdownToText
