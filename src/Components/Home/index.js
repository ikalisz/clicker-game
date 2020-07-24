import React, {
  useState,
} from 'react'
import styled from 'styled-components'

function Home() {
  const [
    waifus,
    setWaifus,
  ] = useState(0)
  const [
    isLoading,
    setLoading,
  ] = useState(false)
  const [
    clickPower,
    setClickPower,
  ] = useState(1)

  if(isLoading) {
    return
  }

  const handleClick = (modifier) => {
    console.log('here')
    const increaseAmount = 1 * modifier
    const newWaifus = waifus + increaseAmount
    setWaifus(newWaifus)
    return
  }

  return (
    <SContainer>
      <SClicker
        onClick={() => handleClick(clickPower)}
      />
      <SWaifus>
        {waifus}
      </SWaifus>
    </SContainer>
  )
}

export default Home

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`

const SClicker = styled.button`
  height: 100px;
  width: 100px;
  border-widht: 1px;
  border-color: grey;
`

const SWaifus = styled.p`
  color: black;
`
