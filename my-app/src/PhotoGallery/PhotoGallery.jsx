import React from 'react';
import './PhotoGallery.css';


class Photo extends React.Component {
  toggleLiked  = () => {
    this.setState({
      liked: !this.state.liked
    });
  }

  getInitialState = () => {
    return {
      liked: false
    };
  }

  render () {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }
};


class PhotoGallery extends React.Component {
  render() {

    var photos = this.props.photos.map(function(photo) {
      return <Photo src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    );
  }
};

export var data1 = [
  {
    url: 'https://i.ytimg.com/vi/QkJBa2n4v_w/maxresdefault.jpg',
    caption: 'Hong Kong!'
  },
  {
    url: 'http://www.salanga.ru/up/1/9357a093fa-glavnaya-1-1080.jpg',
    caption: 'Cows'
  },
  {
    url: 'https://vdalo.info/wp-content/uploads/2016/11/fishing.jpg',
    caption: 'Scooters'
  }
];


export default PhotoGallery;
