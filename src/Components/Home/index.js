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
  ] = useState(5)

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

  const clickerComponent = waifus <= 100 ?
    'https://cdn.discordapp.com/attachments/565367162542358538/612932010654171156/Re1.png': waifus <= 200 ?
    'https://cdn.discordapp.com/attachments/565367162542358538/612931972179689472/No1.png': waifus <= 300 ?
    'https://cdn.discordapp.com/attachments/565367162542358538/612931930895417346/An1.png': 'https://cdn.discordapp.com/attachments/565367162542358538/612931820794806272/LikeyLurk_112.png'

  return (
    <SContainer>
      <SClicker
        src={clickerComponent}
        alt="iiLikey's OC"
        onClick={() => handleClick(clickPower)}
      />
      <SWaifus>
        {waifus}
      </SWaifus>
      <div>
        <button
          style={{
            display: 'none',
          }}
          onClick={setLoading}
        >
          Ignore me
        </button>
        <button
          style={{
            display: 'none',
          }}
          onClick={setClickPower}
        >
          Ignore me
        </button>
      </div>
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

const SClicker = styled.img`
`

const SWaifus = styled.p`
  color: black;
`
