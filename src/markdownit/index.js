import MarkdownIt from 'markdown-it'
import taskLists from 'markdown-it-task-lists'
import underline from './underline'

const markdownit = MarkdownIt('commonmark', { html: false, breaks: false })
	.enable('strikethrough')
	.use(taskLists, { enable: true, labelAfter: true })
	.use(underline)

export default markdownit
