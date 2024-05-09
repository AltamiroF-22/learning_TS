export function age(planet: string, seconds: number): number {
  const earthSeconds = 31557600;

  const planetPicked: { [key: string]: number } = {
    mercury: 0.2408467 * earthSeconds,
    venus: 0.61519726 * earthSeconds,
    earth: earthSeconds,
    mars: 1.8808158 * earthSeconds,
    jupiter: 11.862615 * earthSeconds,
    saturn: 29.447498 * earthSeconds,
    uranus: 84.016846 * earthSeconds,
    neptune: 164.79132 * earthSeconds,
  };
  if (!planetPicked.hasOwnProperty(planet)) {
    throw new Error("Invalid planet");
  }
  const calculate = seconds / planetPicked[planet];

  return Number(calculate.toFixed(2));
}

// export function age(planet: string, seconds: number): number {
//   const earthSeconds = 31557600;
//   let orbitalPeriod: number;

//   switch (planet.toLowerCase()) {
//     case "mercury":
//       orbitalPeriod = 0.2408467 * earthSeconds;
//       break;
//     case "venus":
//       orbitalPeriod = 0.61519726 * earthSeconds;
//       break;
//     case "earth":
//       orbitalPeriod = earthSeconds;
//       break;
//     case "mars":
//       orbitalPeriod = 1.8808158 * earthSeconds;
//       break;
//     case "jupiter":
//       orbitalPeriod = 11.862615 * earthSeconds;
//       break;
//     case "saturn":
//       orbitalPeriod = 29.447498 * earthSeconds;
//       break;
//     case "uranus":
//       orbitalPeriod = 84.016846 * earthSeconds;
//       break;
//     case "neptune":
//       orbitalPeriod = 164.79132 * earthSeconds;
//       break;
//     default:
//       throw new Error("Planet not found");
//   }

//   const calculate = seconds / orbitalPeriod;

//   return Number(calculate.toFixed(2));
// }
