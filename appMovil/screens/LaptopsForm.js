import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptopsRest, updateLaptopsRest } from "../rests/laptops";
import { Alert } from "react-native";

export const LaptopsForm = ({ navigation, route }) => {

  let laptopRetrivied = route.params?.laptopParam ?? null;
  let isNew = laptopRetrivied == null;
  //si es nuevo?? asigna null, caso contrario (:) asigna el valor recuperado
  //poner como valores los campos del api
  const [marca, setMarca] = useState(isNew ? null : laptopRetrivied.marca);
  const [procesador, setProcesador] = useState(isNew ? null : laptopRetrivied.procesador);
  const [memoria, setMemoria] = useState(isNew ? null : laptopRetrivied.memoria);
  const [disco, setDisco] = useState(isNew ? null : laptopRetrivied.disco);

  console.log("¿Es nuevo?", isNew);
  console.log("Laptop recuperado:", laptopRetrivied);

  const showMesage = () => {
    Alert.alert("CONFIRMACIÓN", isNew ? "SE HA CREADO LA LAPTOP" : "LAPTOP ACTUALIZADO");
    navigation.goBack();
  }


  const createLaptops = () => {
    console.log("creando laptop: ")

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

  const updateLaptops = () => {
    console.log("actualizando laptop: ");
    updateLaptopsRest(
      {
        id: laptopRetrivied.id,
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
      <Button title="GUARDAR" onPress={isNew ? createLaptops : updateLaptops} />
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
