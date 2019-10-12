import React from 'react'
import styled from 'styled-components'
import BannerImg from '../assets/banner.png'

const BaseHeader = styled.div`
  background-color: #05A89F;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Banner = styled.div`
  background-image: url(${ BannerImg });
  background-position: center;
  width: 1366px;
  height: 100%;
`

const Header = () => {
  return (
    <BaseHeader>
      <Banner></Banner>
    </BaseHeader>
  )
}

export default Header
