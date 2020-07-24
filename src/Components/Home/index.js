import React, {
  useState,
  useEffect,
} from 'react'
import styled from 'styled-components'

function Home() {
  const [
    waifus,
    setWaifus,
  ] = useState(0)
  const [
    clickPower,
    setClickPower,
  ] = useState(1)
  const [
    cpUpgrade,
    setCPUpgrade,
  ] = useState(30)
  const [
    passiveIncome,
    setPassiveIncome,
  ] = useState(0)
  const [
    sideCharacter,
    setSideCharacter,
  ] = useState(1)
  const [
    scUpgrade,
    setSCUpgrade,
  ] = useState(40)

  useEffect(() => {
    const handlePassiveIncome = (waifus, passiveIncome) => {
      console.log('here')
      let newWaifus = waifus + passiveIncome
      setWaifus(newWaifus)
    }
    const interval = window.setInterval(handlePassiveIncome, 500, waifus, passiveIncome)
    return window.clearInterval(interval) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const handleUpgrade = (upgrade, upgradeTime, setUpgrade, setUpgradeTime) => {
    let newWaifus = waifus - upgrade
    let newUpgrade = upgrade * (1 / upgradeTime * upgradeTime + 1)
    let newPassive = (passiveIncome - upgrade) + newUpgrade
    let newUpgradeTime = upgradeTime + 1
    setWaifus(newWaifus)
    setUpgradeTime(newUpgradeTime)
    setUpgrade(newUpgrade)
    setPassiveIncome(newPassive)
  }

  const handleClick = (modifier) => {
    let increaseAmount = 1 * modifier
    let newWaifus = waifus + increaseAmount
    setWaifus(newWaifus)
    return
  }

  const handleNoAffordUpgrade = () => {
    return window.alert("You can't afford this upgrade!")
  }

  const handleCPUpgrade = () => {
    let newWaifus = waifus - cpUpgrade
    let newCPUpgrade = cpUpgrade * (1/clickPower * clickPower + 1)
    let newCP = clickPower + 1
    setWaifus(newWaifus)
    setCPUpgrade(newCPUpgrade)
    setClickPower(newCP)
  }

  
  const cpUpgradeAvailable = waifus >= cpUpgrade
  const scUpgradeAvailable = waifus >= scUpgrade

  const clickerComponent = waifus <= 100 ?
    'https://cdn.discordapp.com/attachments/565367162542358538/612932010654171156/Re1.png': waifus <= 200 ?
    'https://cdn.discordapp.com/attachments/565367162542358538/612931972179689472/No1.png': waifus <= 300 ?
    'https://cdn.discordapp.com/attachments/565367162542358538/612931930895417346/An1.png': 'https://cdn.discordapp.com/attachments/565367162542358538/612931820794806272/LikeyLurk_112.png'

  return (
    <SContainer>
      <SClickerContainer>
        <SClicker
          src={clickerComponent}
          alt="iiLikey's OC"
          onClick={() => handleClick(clickPower)}
        />
        <SWaifus>
          {waifus} Waifus
        </SWaifus>
      </SClickerContainer>
      <SUpgradeContainer>
          <SUpgradeWrapper
            upgradeAvailable={cpUpgradeAvailable}
            onClick={cpUpgradeAvailable ? handleCPUpgrade : handleNoAffordUpgrade}
          >
            <SUpgrade>
              Click Power Upgrade: {cpUpgrade} waifus
            </SUpgrade>
          </SUpgradeWrapper>
          <SUpgradeWrapper
            upgradeAvailable={scUpgradeAvailable}
            onClick={scUpgradeAvailable ? () => handleUpgrade(scUpgrade, sideCharacter, setSCUpgrade, setSideCharacter) : handleNoAffordUpgrade}
          >
            <SUpgrade>
              Upgrade Side Character
            </SUpgrade>
          </SUpgradeWrapper>
      </SUpgradeContainer>
    </SContainer>
  )
}

export default Home

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-inbetween;
  width: 100vw;
`

const SClicker = styled.img`
  margin-bottom: 30px;
`

const SWaifus = styled.p`
  color: black;
`

const SClickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`

const SUpgradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`

const SUpgradeWrapper = styled.div`
  height: 100px;
  width: 200px;
  border: 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.upgradeAvailable ? 1 : .3};
  border: 1px black solid;
  padding: 0 20px;
`

const SUpgrade = styled.p`

`
