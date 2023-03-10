import type {CSSProperties} from 'react'

export const tagStyle: CSSProperties = {
  display: 'inline-block',
  padding: '0.2em 0.6em 0.3em',
  fontSize: '60%',
  fontWeight: '600',
  lineHeight: '1.2',
  verticalAlign: 'baseline',
  borderRadius: '0.25em',
  overflowWrap: 'break-word',
}

export const tagStyleTheme = {
  light: {
    color: 'white',
    backgroundColor: 'rgba(26,26,26.8)',
  },
  dark: {
    color: 'white',
    backgroundColor: 'rgba(26,26,26,.8)',
  },
}
