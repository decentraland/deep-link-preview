import styled from '@emotion/styled'
import { type Theme } from '@mui/material'

export const ImageContainer = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0
})

export const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: 'transform 0.3s ease'
})

export const CardContainer = styled('div')(props => {
  const theme = props.theme as Theme
  return {
    position: 'relative',
    height: '400px',
    width: '600px',
    overflow: 'hidden',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    ['&:hover img']: {
      transform: 'scale(1.1)'
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100vw - 32px)',
      height: '250px',
      margin: '0 16px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 'calc(100vw - 32px)',
      height: '300px',
      margin: '0 16px'
    }
  }
})

export const Content = styled('div')(props => {
  const theme = props.theme as Theme
  return {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      padding: '16px'
    }
  }
})

export const Text = styled('div')({
  flexGrow: 1
})

export const Title = styled('h2')(props => {
  const theme = props.theme as Theme
  return {
    fontSize: '24px',
    fontWeight: 700,
    margin: '0 0 10px',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      margin: '0 0 6px'
    }
  }
})

export const Subtitle = styled('p')(props => {
  const theme = props.theme as Theme
  return {
    margin: '4px 0 0',
    fontSize: '0.9em',
    opacity: 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
      margin: '2px 0 0'
    }
  }
})

export const LoadingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.4)'
})
