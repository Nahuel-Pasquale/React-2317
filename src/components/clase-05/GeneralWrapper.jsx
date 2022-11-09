import React from 'react'
import styled from 'styled-components'

export const WrapperGeneral = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const GeneralWrapper = ( { children } ) => {
  return (
    <>
      <WrapperGeneral>
        { children }
      </WrapperGeneral>
    </>
  )
}
