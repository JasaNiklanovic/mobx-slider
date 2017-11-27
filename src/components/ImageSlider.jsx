import React, { Component } from 'react'
import { createComponent as cc } from 'react-fela'
import { observer, inject } from 'mobx-react'

const ImageWrapper = cc(_ => ({
  position: 'absolute',
  overflowX: 'hidden',
  width: '100%',
  height: '500px',
}))

const Image = cc(({ index, url }) => ({
  width: '500px',
  height: '500px',
  backgroundImage: `url(${url})`,
  position: 'absolute',
  backgroundSize: 'cover',
  left: `${index * 2000}px`,
  transition: 'left ease-in .5s',
}))

const UserInfoWrapper = cc(_ => ({
  position: 'absolute',
  top: '510px',
}))

const NavBtn = cc(_ => ({
  padding: '20px 30px',
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: '#ccc',
  margin: '550px 20px 20px 20px',
  cursor: 'pointer',
  ':hover': {
    border: '1px solid #ccc',
    color: '#ccc',
    backgroundColor: 'white',
    transition: 'background-color 0.5s ease',
  }
}), 'button', ['onClick'])

class ImageSlider extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store } = this.props;
    store.fetchImages(1)
  }

  render() { 
    const { store } = this.props
    return (  
      <div>
        <ImageWrapper>
        {
          store.images.map((image, index) => 
            <Image 
              key={index}
              index={index - store.currentImageOffset} 
              url={image.urls.regular}  
            />
        )
        }
        </ImageWrapper>
        {
          !store.loading &&
          <UserInfoWrapper>
            {store.currentImage.user.first_name} {store.currentImage.user.last_name}
          </UserInfoWrapper>
        }
        {
          store.currentImageOffset > 0 && 
          <NavBtn onClick={store.prev.bind(this)}>Prev</NavBtn>          
        }
        <NavBtn onClick={store.next.bind(this)}>Next</NavBtn>
      </div>
    )
  }
}
 
export default inject('store')(observer(ImageSlider));