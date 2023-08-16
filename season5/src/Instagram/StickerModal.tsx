import React from "react";
import {
  Canvas,
  Fill,
  Group,
  Rect,
  Skia,
  fitbox,
  rect,
} from "@shopify/react-native-skia";
import { Dimensions } from "react-native";

import { stickers } from "./stickers";

const window = Dimensions.get("window");
const COLS = 3;
const tileWidth = window.width / COLS;
const tileHeight = 150;

export const StickerModal = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="rgba(34, 33, 33, 0.85)" />
      {stickers.map(({ Sticker, dimensions }, index) => {
        const { width, height } = dimensions;
        const src = rect(0, 0, width, height);
        const row = Math.floor(index / COLS);
        const col = index % COLS;
        const dst = rect(
          col * tileWidth,
          row * tileHeight,
          tileWidth,
          tileHeight
        );
        const transform = fitbox("contain", src, dst);
        return (
          <Group key={index} transform={transform}>
            <Sticker matrix={Skia.Matrix()} />
          </Group>
        );
      })}
    </Canvas>
  );
};