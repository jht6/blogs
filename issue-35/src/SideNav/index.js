import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class SideNav extends React.PureComponent {
  static propTypes = {
    navs: PropTypes.array.isRequired,
    textColor: PropTypes.string,
    activeColor: PropTypes.string,

    // 某元素上边缘距离视口顶部距离小于此值时，则认为该元素是active的
    topSpaceHeight: PropTypes.number
  };

  static defaultProps = {
    textColor: '#715ff9',
    activeColor: '#daad3d',
    topSpaceHeight: 230
  };

  constructor(props) {
    super(props);
    this.state = {
      activeId: ''
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateActiveState);
  }

  updateActiveState = () => {
    let {topSpaceHeight, navs} = this.props;
    let doms = navs
      .map(nav => document.getElementById(nav.id))
      .filter(item => !!item);
    let activeId = '';

    if (!doms.length) {
      return;
    }

    for (let i = 0, len = doms.length; i < len; i++) {
      let domRect = doms[i].getBoundingClientRect();
      let nextDom = doms[i + 1];

      if (domRect.top < topSpaceHeight) {
        if (
          (nextDom && nextDom.getBoundingClientRect().top > topSpaceHeight) ||
          (!nextDom && domRect.bottom > 0)
        ) {
          activeId = navs[i].id;
          break;
        }
      }
    }

    this.setState({activeId});
  };

  render() {
    let {textColor, activeColor, navs} = this.props;
    let {activeId} = this.state;

    return (
      <div>
        {navs.map((nav, index) => {
          let color = nav.id === activeId ? activeColor : textColor;
          return (
            <React.Fragment key={nav.name}>
              <a
                className="SideNav__name"
                style={{color}}
                href={`#${nav.id}`}
              >
                {nav.name}
              </a>
              {index !== navs.length - 1 && <div className="SideNav__arrow">|</div>}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
