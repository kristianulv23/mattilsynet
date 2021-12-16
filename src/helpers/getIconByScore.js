import smileyOkLogo from "../resources/smileyok.svg";
import smileyNeutralLogo from "../resources/smileyneutral.svg";
import smileyNotOkLogo from "../resources/smileynotok.svg";
import Image from "../components/Image/Image";

const SCORE = Object.freeze({
  ZERO: "0",
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
})

const getIconByScore = (score) => {
  if (score === SCORE.ZERO) {
    return <Image src={smileyOkLogo} alt="Ingen brudd på regelverket funnet. Stort smil." />
  }
  if (score === SCORE.ONE) {
    return <Image src={smileyOkLogo} alt="Mindre brudd på regelverket som ikke krever oppfølging. Stort smil." />
  }
  if (score === SCORE.TWO) {
    return <Image src={smileyNeutralLogo} alt="Brudd på regelverket som krever oppfølging. Strekmunn." />
  }
  if (score === SCORE.THREE) {
    return <Image src={smileyNotOkLogo} alt="Alvorlig brudd på regelverket. Sur munn." />
  }
  if (score === SCORE.FOUR) {
    return "Ikke aktuelt"
  }

  return "Ikke vurdert"
}

export default getIconByScore;
