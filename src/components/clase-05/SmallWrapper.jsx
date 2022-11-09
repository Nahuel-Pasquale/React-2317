import React from 'react'
import styled from 'styled-components'

const WrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 80%;
  border: 1px dashed #ff005c;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const SmallWrapper = ( props ) => {
  return (
    <>
      <WrapperSmall>
        { props.children }
      </WrapperSmall>
    </>
  )
}
