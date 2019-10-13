import styled from 'styled-components'
import BannerImg from '../../assets/banner.png'

export const BaseHeader = styled.header`
  background-color: #05A89F;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Banner = styled.div`
  background-image: url(${BannerImg});
  background-position: center;
  width: 1366px;
  height: 100%;
`
