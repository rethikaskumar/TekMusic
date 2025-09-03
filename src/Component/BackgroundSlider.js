import PropTypes from 'prop-types'
import generateStyleSheet from './generateStyleSheet'
import React from 'react'
import injectCss from './injectCss'

const NAME = 'ReactBackgroundSlider'

class BackgroundSlider extends React.Component {
  componentDidMount() {
    injectCss(
      generateStyleSheet({
        imagesCount: this.props.images.length,
        duration: this.props.duration,
        transition: this.props.transition,
        blur: this.props.blur
      }),
      NAME
    );
  }

  render() {
    let content = (
      <div id={NAME}>
        {this.props.images.map((img, key) => {
          return (
            <figure
              key={key}
              style={{
                filter: `blur(${this.props.blur}px)`,
                backgroundImage: `url(${img})`,
                animationDelay: `${(this.props.duration + this.props.transition) * key}s`,
              }}
            />
          );
        })}
      </div>
    );

    return <div>{content}</div>;
  }
}

BackgroundSlider.defaultProps = {
  duration: 10,
  transition: 2,
  blur: 0
};

BackgroundSlider.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number,
  blur: PropTypes.number
};

export default BackgroundSlider;

