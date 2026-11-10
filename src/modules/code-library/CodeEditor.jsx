
import CodeMirror from '@uiw/react-codemirror'
import { oneDark } from '@codemirror/theme-one-dark'

import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { json } from '@codemirror/lang-json'
import { python } from '@codemirror/lang-python'
import { sql } from '@codemirror/lang-sql'
import { markdown } from '@codemirror/lang-markdown'

const languageExtensions = {
  javascript: javascript({ jsx: true }),
  javascriptreact: javascript({ jsx: true }),
  typescript: javascript({ jsx: true, typescript: true }),
  typescriptreact: javascript({ jsx: true, typescript: true }),
  html: html(),
  css: css(),
  json: json(),
  python: python(),
  sql: sql(),
  markdown: markdown(),
}

export default function CodeEditor({
  value,
  language,
  onChange,
  readOnly = false,
}) {
  const extension = languageExtensions[language] || javascript()

  return (
    <div className="code-editor">
      <CodeMirror
        value={value || ''}
        height="100%"
        theme={oneDark}
        extensions={[extension]}
        onChange={onChange}
        readOnly={readOnly}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          highlightActiveLineGutter: true,
          autocompletion: true,
          bracketMatching: true,
          closeBrackets: true,
          indentOnInput: true,
        }}
      />
    </div>
  )
}
