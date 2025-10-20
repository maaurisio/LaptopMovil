import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptopsRest } from "../rests/laptops";
import { Alert } from "react-native";

export const LaptopsForm = ({ navigation }) => {
  const [marca, setMarca] = useState("");
  const [procesador, setProcesador] = useState("");
  const [memoria, setMemoria] = useState("");
  const [disco, setDisco] = useState("");


  const showMesage = () => {
    Alert.alert("CONFIRMACIÓN", "SE HA CREADO LA LAPTOP");
  }


  const saveLaptops = () => {
    navigation.goBack();

    saveLaptopsRest(
      {
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco
      },
      showMesage
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Laptops</Text>

      <Input
        value={marca}
        placeholder="Marca"
        onChangeText={(value) => setMarca(value)}
      />
      <Input
        value={procesador}
        placeholder="Procesador"
        onChangeText={(value) => setProcesador(value)}
      />
      <Input
        value={memoria}
        placeholder="Memoria"
        onChangeText={(value) => setMemoria(value)}
      />
      <Input
        value={disco}
        placeholder="Disco"
        onChangeText={(value) => setDisco(value)}
      />
      <Button title="GUARDAR" onPress={saveLaptops} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
