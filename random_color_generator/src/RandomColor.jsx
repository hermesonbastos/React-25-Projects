import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000");

  const getRgb = () => Math.floor(Math.random() * 256); // gera um número inteiro aleatório entre 0 e 255
  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
      // recebe r, g e b como parâmetros inteiros
      // concatena o "#" com um array com os três parâmetros
      // converte cada item do array em uma string de base 16 (hexadecimal)
      // adiciona um "0" na frente do número caso ele tenha apenas 1 dígito

  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    setColor(rgbToHex(color.r, color.g, color.b));
  };

  return (
    <div className="random" style={{ backgroundColor: `${color}` }}>
      <button style={{ color: `${color}` }} onClick={handleGenerate}>
        {color}
      </button>
    </div>
  );
};

export default RandomColor;
