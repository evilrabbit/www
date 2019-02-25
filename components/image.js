import React from 'react'
import PropTypes from 'prop-types'
import { SimpleImg } from 'react-simple-img'

const columnWidth = 980

function Image({ width, height, captionSpacing, caption, src }) {
  return (
    <figure>
      <SimpleImg {...{ src, height, width, applyAspectRatio: true }} />
      {caption && (
        <p style={captionSpacing ? { marginTop: captionSpacing } : {}}>
          {caption}
        </p>
      )}
      <style jsx>{`
        margin: 40px 0;
        @media (min-width: 1200px) {
          figure {
            width: ${width}px;
            height: ${height}px;
            ${width < columnWidth
              ? 'margin: 0 auto;'
              : `margin-left: -${(width - columnWidth) /
                  2}px;`} overflow: hidden;
          }
          p {
            color: #999;
            font-size: 12px;
            margin: 0;
            text-align: center;
          }
        }
      `}</style>
    </figure>
  )
}

Image.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  caption: PropTypes.string,
  captionSpacing: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default React.memo(Image)
