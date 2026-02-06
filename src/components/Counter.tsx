import "../styles/counter.css";
import { useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Counter = () => {
  const { theme, toggleTheme } = useTheme();
  const [count, setCount] = useState<number>(0);

  const handleincremet = (_event: MouseEvent<HTMLButtonElement>): void =>
    setCount(count + 1);
  const handleincremet10 = (_event: MouseEvent<HTMLButtonElement>): void =>
    setCount(count + 10);
  const handleReset = (_event: MouseEvent<HTMLButtonElement>): void =>
    setCount(0);
  const handleRandom = (_event: MouseEvent<HTMLButtonElement>): void => {
    const randomValue: number = Math.floor(Math.random() * 101);
    setCount(randomValue);
  };
  const handleDecremet = (_event: MouseEvent<HTMLButtonElement>): void =>
    setCount(count - 1);
  const handleDecrement10 = (_event: MouseEvent<HTMLButtonElement>): void =>
    setCount(count - 10);

  return (
    <section>
      <div className="counter">
        <div className="counter-container">
          <div className="counter-header">
            <div className="header-top">
              <h2 className="counter-title">Counter</h2>
              <div className="header-actions">
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
                <Link to="/" className="back-button">← Back</Link>
              </div>
            </div>
            
            <p className="counter-description">
              Componente interactivo que permite modificar un valor numérico
              mediante botones de incremento, decremento, incremento rápido
              (++), decremento rápido (--), generación de valor aleatorio y
              reinicio.
            </p>
          </div>
          <div className="counter-demo">
            <div className="counter-interface">
              <div className="counter-display">
                <p className="counter-number">Valor Actual: </p>
                <h1 className="counter-value">{count}</h1>
              </div>
              <div className="counter-controls">
                <button className="counter-button1" onClick={handleincremet}>
                  +
                </button>
                <button className="counter-button2" onClick={handleincremet10}>
                  ++
                </button>
                <button className="counter-button3" onClick={handleReset}>
                  Reset
                </button>
                <button className="counter-button4" onClick={handleRandom}>
                  Random
                </button>
                <button className="counter-button1" onClick={handleDecremet}>
                  -
                </button>
                <button className="counter-button2" onClick={handleDecrement10}>
                  --
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
