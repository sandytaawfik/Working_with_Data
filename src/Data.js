import { createNoise2D } from "simplex-noise";

const littleString = "owl";
const bigString = "That :bird: over there just winked at me!";

const today = Date.now();

const arr = new Array(101).fill(null);

const divByTwoArr = arr.map((d, i) => i).filter((d, i) => d % 2 === 0);

const dateArr = divByTwoArr
  .map((v, i) => today - i * 2 * 86400000)
  .map((d) => new Date(d));

const noise = createNoise2D();

function makeNoise(d, rad, amp) {
  return noise(rad * d, rad * d) * amp;
}

const randomValues = dateArr.map((d, i) => {
  return {
    date: d,
    val: makeNoise(i, 0.03, 50)
  };
});

export default function ShowData() {
  const width = 10;
  const buffer = 3;

  return randomValues.map((r, i) => (
    <div
      key={i}
      className="dot"
      style={{
        left: i * (width + buffer) + buffer,
        marginTop: -(r.val + buffer)
      }}
    ></div>
  ));
}
