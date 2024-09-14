import { ChangeEvent, FC, memo, useCallback, useEffect, useRef } from "react";
import cn from "classnames";
import { RangeSliderProps } from "./RangeSliderProps";

import styles from "./RangeSlider.module.scss";

export const RangeSlider: FC<RangeSliderProps> = memo(
  ({
    className,
    max,
    min,
    minVal,
    maxVal,
    onChangePriceFrom,
    onChangePriceTo,
  }) => {
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
      (value: number) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    );

    useEffect(() => {
      if (maxValRef.current) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value);

        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
    }, [minVal, getPercent]);

    useEffect(() => {
      if (minValRef.current) {
        const minPercent = getPercent(+minValRef.current.value);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
    }, [maxVal, getPercent]);

    const handlerChangeMinVal = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+event.target.value, maxVal - 1);
        onChangePriceFrom(value);
        event.target.value = value.toString();
      },
      [maxVal, onChangePriceFrom]
    );

    const handlerChangeMaxVal = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+event.target.value, minVal + 1);
        onChangePriceTo(value);
        event.target.value = value.toString();
      },
      [minVal, onChangePriceTo]
    );

    return (
      <div className={cn(styles["range-slider"], className)}>
        <div className={styles["range-slider__value"]}>
          <div className={styles["range-slider__value-info"]}>{minVal} ₽</div>
          <div className={styles["range-slider__value-info"]}>{maxVal} ₽</div>
        </div>
        <div className={styles["range-slider__price-slider"]}>
          <input
            className={cn(styles["thumb"], styles["thumb--z-index-3"], {
              [styles["thumb--z-index-5"]]: minVal > max - 100,
            })}
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={handlerChangeMinVal}
          />
          <input
            className={cn(styles["thumb"], styles["thumb--z-index-4"])}
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={handlerChangeMaxVal}
          />
          <div className={styles["slider"]}>
            <div className={styles["slider__track"]} />
            <div ref={range} className={styles["slider__range"]} />
          </div>
        </div>
      </div>
    );
  }
);
