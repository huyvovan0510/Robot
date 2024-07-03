import { Canvas } from "@react-three/fiber/native";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Suspense, useEffect, useState } from "react";
import Robot from "./components/Robot";
import useControls from "r3f-native-orbitcontrols";
import { Grid, Environment, Stage } from "@react-three/drei/native";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { StatusBar } from "expo-status-bar";
import Loading from "./components/Loading";
export default function App() {
  const [OrbitControls, events] = useControls();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        translucent
        backgound={"black"}
        networkActivityIndicatorVisible
      />
      <View style={styles.content} {...events}>
        <View style={styles.header}>
          <Text style={styles.title}>{"Futuristic Robot"}</Text>
          <Text style={styles.desc}>
            {
              "Explore the intricate design and advanced features of this futuristic robot. With cutting-edge technology and innovative mechanics, this robot represents the pinnacle of modern engineering"
            }
          </Text>
        </View>

        {isLoading && <Loading />}
        <Canvas flat shadows>
          <OrbitControls
            enableZoom={false}
            makeDefault
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
          <fog attach="fog" args={["black", 15, 22.5]} />
          <Suspense fallback={<Fallback setIsLoading={setIsLoading} />}>
            <Robot />
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={2} mipmapBlur />
              <ToneMapping />
            </EffectComposer>
            <Environment backgound preset="sunset" blur={0.8} />
            <Grid
              renderOrder={-1}
              position={[0, -0.5, 0]}
              infiniteGrid
              cellSize={1}
              cellThickness={0.6}
              sectionSize={3.3}
              sectionThickness={1.5}
              sectionColor={[0.5, 0.5, 10]}
              fadeDistance={30}
            />
          </Suspense>
        </Canvas>
        <Pressable style={styles.btn}>
          <Text style={styles.txtTitle}>{"Explore"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const Fallback = ({ setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, []);
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  btn: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  txtTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
    fontWeight: "600",
  },
  header: {
    paddingHorizontal: 16,
  },
});
