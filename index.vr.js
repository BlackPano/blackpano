import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class blackpano extends React.Component {
  render() {
    return (
      <View>
        <Pano
          style={{ transform: [{ rotateY: 110 }] }}
          source={asset("vrchive-featured.jpg")}
        />
        <Text
          style={{
            ...styles.textStyle,
            ...{
              backgroundColor: "#000",
              fontSize: 0.8,
              transform: [{ translate: [0, 1, -5] }]
            }
          }}
        >
          Black Pano
        </Text>
        <Text
          style={{
            ...styles.textStyle,
            ...{
              backgroundColor: "#000",
              fontSize: 0.3,
              transform: [{ translate: [0, 0, -5] }]
            }
          }}
        >
          The Virtual Reality Artisans
        </Text>
        <Text
          style={{
            ...styles.textStyle,
            ...{ fontSize: 0.3, transform: [{ translate: [0, -1, -5] }] }
          }}
        >
          Coming soon
        </Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    position: "absolute",
    fontWeight: "300",
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: "center",
    textAlignVertical: "center",
    opacity: 0.7,
    borderRadius: 0.02
  }
};

AppRegistry.registerComponent("blackpano", () => blackpano);
